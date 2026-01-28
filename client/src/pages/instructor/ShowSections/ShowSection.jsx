import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./ShowSections.css";
import { toast } from "react-toastify";
import { getAllSections } from "@/services/Instructor/section";
import { addTopic } from "../../../services/Instructor/topic";
import * as bootstrap from "bootstrap";
import Loader from "@/components/shared/Loader";

function ShowSection() {
  const [sectionData, setSectionData] = useState([]);
  const [selectedSection, setSelectedSection] = useState(null);
  const submitBtnRef = useRef(null);

  const  courseId  = useParams("courseId");
  const navigate = useNavigate();

  const inputRefTopicNumber = useRef(null);
  const inputRefTopicName = useRef(null);
  const inputRefTopicDesc = useRef(null);
  const inputRefTopicVideo = useRef(null);
  const inputRefTopicHour = useRef(null);
  const inputRefTopicMin = useRef(null);

  const [topicNumber, setTopicNumber] = useState(0);
  const [topicName, setTopicName] = useState("");
  const [topicDesc, setTopicDesc] = useState("");
  const [video, setVideo] = useState(null);
  const [hour, setHour] = useState(0);
  const [min, setMin] = useState(0);

  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    loadSections();
  }, []);

  async function loadSections() {
    try {
      const response = await getAllSections(courseId);
      setSectionData(response.data);
    } catch (error) {
      console.error(error);
      toast.error("Error while fetching sections");
    }
  }

 
  function openAddTopicModal(section) {
    setSelectedSection(section);

    setTimeout(() => {
      const modalElement = document.getElementById("addTopicModal");
      if (modalElement) {
        const modal = new bootstrap.Modal(modalElement, {
          backdrop: "static",
          keyboard: false,
        });
        modal.show();
      }
    }, 0);
  }

 
  function closeModal() {
    const modalElement = document.getElementById("addTopicModal");
    if (modalElement) {
      const modalInstance = bootstrap.Modal.getInstance(modalElement);
      modalInstance?.hide();
    }
    setSelectedSection(null);
  }

  async function handleAddTopic(e, sectionId) {
    e.preventDefault();

    submitBtnRef.current.disabled = true;
    setIsSubmitting(true);

    const formData = new FormData();
    formData.append("sectionId", sectionId);
    formData.append("topicNumber", topicNumber);
    formData.append("topicName", topicName);
    formData.append("topicDesc", topicDesc);
    formData.append("hour", hour);
    formData.append("min", min);
    formData.append("video", video);

    try {
      const response = await addTopic(formData);

      if (response.status === 201) {
        toast.success("Topic Added Successfully");
        closeModal();

        inputRefTopicNumber.current.value = "";
        inputRefTopicName.current.value = "";
        inputRefTopicDesc.current.value = "";
        inputRefTopicVideo.current.value = "";
        inputRefTopicHour.current.value = "";
        inputRefTopicMin.current.value = "";

        setTopicNumber(0);
        setTopicName("");
        setTopicDesc("");
        setVideo(null);
        setHour(0);
        setMin(0);

        navigate(
          `/instructor/addedCourses/show-sections/show-topics/${sectionId}`
        );
      }
    } catch (error) {
      console.error(error);
      toast.error("Error while adding topic");
    }
    submitBtnRef.current.disabled = false;
    setIsSubmitting(false);
  }

  return (
    <div>
      <h1 className="page-title">Sections for the Course</h1>

      {sectionData.map((data, index) => (
        <div className="most-outer-div" key={index}>
          <div className="card">
            <div className="card-header section-header">
              <h4>Section No - {data.sectionNumber}</h4>
            </div>

            <div className="card-body">
              <h3>{data.sectionTitle}</h3>
              <p>{data.sectionDesc}</p>

              <button
                className="btn btn-primary sections-buttons"
                onClick={() =>
                  navigate(
                    `/instructor/addedCourses/show-sections/show-topics/${data.sectionId}`
                  )
                }
              >
                Show Topics
              </button>

              <button
                className="btn btn-primary sections-buttons"
                onClick={() => openAddTopicModal(data)}
              >
                Add Topics
              </button>

              <button className="btn btn-secondary sections-buttons">
                Edit Section
              </button>

              <button className="btn btn-danger sections-buttons">
                Delete Section
              </button>
            </div>
          </div>
        </div>
      ))}

      
      {selectedSection && (
        <div className="modal fade" id="addTopicModal" tabIndex="-1">
          <div className="modal-dialog modal-lg">
              <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add Topic</h5>
                <button className="btn-close" onClick={closeModal}></button>
              </div>

              <form
                onSubmit={(e) =>
                  handleAddTopic(e, selectedSection.sectionId)
                }
              >
                <div className="modal-body">
                  <h5>
                    Section {selectedSection.sectionNumber} -{" "}
                    {selectedSection.sectionTitle}
                  </h5>

                  <input
                    ref={inputRefTopicNumber}
                    type="number"
                    className="form-control mb-2"
                    placeholder="Topic Number"
                    onChange={(e) => setTopicNumber(e.target.value)}
                  />

                  <input
                    ref={inputRefTopicName}
                    type="text"
                    className="form-control mb-2"
                    placeholder="Topic Name"
                    onChange={(e) => setTopicName(e.target.value)}
                  />

                  <textarea
                    ref={inputRefTopicDesc}
                    className="form-control mb-2"
                    placeholder="Topic Description"
                    onChange={(e) => setTopicDesc(e.target.value)}
                  />

                  <input
                    ref={inputRefTopicVideo}
                    type="file"
                    className="form-control mb-2"
                    accept="video/*"
                    onChange={(e) => setVideo(e.target.files[0])}
                  />

                  <div className="input-group mb-3">
                    <input
                      ref={inputRefTopicHour}
                      type="number"
                      className="form-control"
                      placeholder="Hours"
                      onChange={(e) => setHour(e.target.value)}
                    />
                    <span className="input-group-text">:</span>
                    <input
                      ref={inputRefTopicMin}
                      type="number"
                      className="form-control"
                      placeholder="Minutes"
                      onChange={(e) => setMin(e.target.value)}
                    />
                  </div>
                 

                 {isSubmitting && <Loader text="Adding topic..." />}

                  <div className="d-flex justify-content-center gap-3 mt-3">
                    <button ref={submitBtnRef} type="submit" className="btn btn-primary">
                      {isSubmitting ? "Adding..." : "Add Topic"}
                    </button>

                  </div>

                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ShowSection;
