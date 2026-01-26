import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./ShowSections.css";

import { fetchSectionData } from "@/services/Instructor/sectionService";
import { addTopicToSection } from "@/services/Instructor/topicService";
import Loader from "@/components/shared/Loader";

function ShowSection() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { courseData } = state;

  const [sections, setSections] = useState([]);
  const [loading, setLoading] = useState(false);
  const [creatingTopic, setCreatingTopic] = useState(false);

  // Modal
  const [selectedSection, setSelectedSection] = useState(null);

  // Topic form (aligned with backend)
  const [topicForm, setTopicForm] = useState({
    topicName: "",
    topicDesc: "",
    notes: "",
    video: null,
    hour: "",
    min: "",
  });

  const loadSections = async () => {
    setLoading(true);
    const res = await fetchSectionData(courseData.courseId);

    if (res.success) {
      setSections(res.data);
    } else {
      toast.error(res.message || "Failed to load sections");
    }
    setLoading(false);
  };

  /* =========================
     FETCH SECTIONS
     ========================= */
  useEffect(() => {
    loadSections();
  }, [courseData.courseId]);

  /* =========================
     FORM HANDLERS
     ========================= */
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTopicForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setTopicForm((prev) => ({
      ...prev,
      video: e.target.files[0],
    }));
  };

  const resetTopicForm = () => {
    setTopicForm({
      topicName: "",
      topicDesc: "",
      notes: "",
      video: null,
      hour: "",
      min: "",
    });
  };

  /* =========================
     ADD TOPIC
     ========================= */
  const handleAddTopic = async () => {
    if (!selectedSection) return;

    if (!topicForm.topicName || !topicForm.video) {
      toast.error("Topic name and video are required");
      return;
    }

    const formData = new FormData();
    formData.append("title", topicForm.topicName);
    formData.append("description", topicForm.topicDesc);
    formData.append("notes", topicForm.notes);
    formData.append("hour", topicForm.hour);
    formData.append("min", topicForm.min);
    formData.append("video", topicForm.video);

    /*
      POST /sections/{sectionId}/topics
    */
    setCreatingTopic(true);
    const res = await addTopicToSection(selectedSection.sectionId, formData);

    if (res.success) {
      toast.success("Topic added successfully");
      resetTopicForm();
    } else {
      toast.error(res.message || "Failed to add topic");
    }
    setCreatingTopic(false);
    loadSections();
  };

  /* =========================
     NAVIGATION
     ========================= */
  const handleShowTopics = (section) => {
    navigate("show-topics", {
      state: {
        sectionId: section.sectionId,
      },
    });
  };

  return (
    <div>
      <h1 className="page-title">
        Sections for the Course: {courseData.title}
      </h1>

      {loading && <p>Loading sections...</p>}
      {creatingTopic && <Loader text="creating topic..." />}

      {!loading && sections.length === 0 && (
        <p>No sections found for this course.</p>
      )}

      {sections.map((section) => (
        <div className="most-outer-div" key={section.sectionId}>
          <div className="card">
            <div className="card-header section-header">
              <h4>Section No - {section.sectionNumber}</h4>
            </div>

            <div className="card-body">
              <h3 className="card-title">{section.title}</h3>
              <p className="card-text">{section.description}</p>
              <p>Total Topics: {section.totalTopics}</p>
              <p>Total Time: {section.totalTime}</p>

              <button
                className="btn btn-primary sections-buttons"
                onClick={() => handleShowTopics(section)}
              >
                Show Topics
              </button>

              <button
                className="btn btn-primary sections-buttons"
                data-bs-toggle="modal"
                data-bs-target="#addTopicModal"
                onClick={() => setSelectedSection(section)}
              >
                Add Topic
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

      {/* =========================
          ADD TOPIC MODAL
         ========================= */}
      {selectedSection && (
        <div
          className="modal fade"
          id="addTopicModal"
          tabIndex="-1"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h2 className="modal-title">Add Topic</h2>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                />
              </div>

              <div className="modal-body">
                <h5 className="mb-3">
                  Section {selectedSection.sectionNumber} –{" "}
                  {selectedSection.title}
                </h5>

                <input
                  name="topicName"
                  type="text"
                  className="form-control mb-3"
                  placeholder="Topic Title"
                  value={topicForm.topicName}
                  onChange={handleInputChange}
                />

                <textarea
                  name="topicDesc"
                  className="form-control mb-3"
                  placeholder="Topic Description"
                  rows={3}
                  value={topicForm.topicDesc}
                  onChange={handleInputChange}
                />

                <textarea
                  name="notes"
                  className="form-control mb-3"
                  placeholder="Additional Notes (optional)"
                  rows={3}
                  value={topicForm.notes}
                  onChange={handleInputChange}
                />

                <input
                  type="file"
                  className="form-control mb-3"
                  accept="video/*"
                  onChange={handleFileChange}
                />

                <div className="input-group mb-4">
                  <input
                    name="hour"
                    type="number"
                    className="form-control"
                    placeholder="Hours"
                    min="0"
                    value={topicForm.hour}
                    onChange={handleInputChange}
                  />
                  <span className="input-group-text">:</span>
                  <input
                    name="min"
                    type="number"
                    className="form-control"
                    placeholder="Minutes"
                    min="0"
                    max="59"
                    value={topicForm.min}
                    onChange={handleInputChange}
                  />
                </div>

                <button
                  className="btn btn-primary"
                  data-bs-dismiss="modal"
                  onClick={handleAddTopic}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ShowSection;
