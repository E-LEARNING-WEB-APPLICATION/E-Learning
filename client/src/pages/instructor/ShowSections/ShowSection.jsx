import { useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./ShowSections.css";
import { useDispatch, useSelector } from "react-redux";
import { addTopic } from "../../../services/Instructor/topic";
import { add } from "../../../slices/topics/topicSlice";

function ShowSection() {
  const inputRefTopicNumber = useRef(null);
  const inputRefTopicName = useRef(null);
  const inputRefTopicDesc = useRef(null);
  const inputRefTopicVideo = useRef(null);
  const inputRefTopicHour = useRef(null);
  const inputRefTopicMin = useRef(null);

  const topics = useSelector((state) => state.topics.value);
  const sectionData = useSelector((store) => store.sections.value);

  const dispatch = useDispatch();
  const location = useLocation();
  const Navigate = useNavigate();

  const data = location.state;
  const courseName = data.courseName;

  // This holds the section user clicked "Add Topic"
  const [selectedSection, setSelectedSection] = useState(null);

  const [topicNumber, setTopicNumber] = useState(0);
  const [topicName, setTopicName] = useState("");
  const [topicDesc, setTopicDesc] = useState("");
  const [video, setVideo] = useState(null);
  const [hour, setHour] = useState(0);
  const [min, setMin] = useState(0);

  function handleAddTopic(sectionNumber, sectionTitle) {
    const formData = new FormData();
    formData.append("courseName", data.courseName);
    formData.append("sectionNumber", sectionNumber);
    formData.append("sectionName", sectionTitle);
    formData.append("topicNumber", topicNumber);
    formData.append("topicName", topicName);
    formData.append("topicDesc", topicDesc);
    formData.append("hour", hour);
    formData.append("min", min);
    formData.append("video", video);

    const response = addTopic(formData);

    const topicData = {
      courseName: response.get("courseName"),
      sectionNumber: response.get("sectionNumber"),
      sectionName: response.get("sectionName"),
      topicNumber: response.get("topicNumber"),
      topicName: response.get("topicName"),
      topicDesc: response.get("topicDesc"),
      hour: response.get("hour"),
      min: response.get("min"),
      video: URL.createObjectURL(response.get("video")),
    };

    dispatch(add([...topics, topicData]));

    inputRefTopicNumber.current.value = null;
    inputRefTopicName.current.value = "";
    inputRefTopicDesc.current.value = "";
    inputRefTopicVideo.current.value = null;
    inputRefTopicHour.current.value = null;
    inputRefTopicMin.current.value = null;
  }

  function handleShowTopics(sectionNumber, sectionTitle) {
    Navigate("show-topics", {
      state: { sectionNumber, sectionTitle, courseName },
    });
  }

  return (
    <div>
      <h1 className="page-title">
        Sections for the Course {sectionData.courseName}
      </h1>


  
      {sectionData &&
        sectionData.map((data, index) => (
          data.courseName === courseName && (
            <div className= 'most-outer-div' key={index}>
              <div className="card">
                <div className="card-header section-header">
                  <h4>Section No - {data.sectionNumber}</h4>
                </div>

                <div className="card-body">
                  <h3 className="card-title">{data.sectionTitle}</h3>
                  <p className="card-text">{data.sectionDesc}</p>

                  <button
                    type="button"
                    className="btn btn-primary sections-buttons"
                    onClick={() =>
                      handleShowTopics(data.sectionNumber, data.sectionTitle)
                    }
                  >
                    Show Topics
                  </button>

                  
                  <button
                    type="button"
                    className="btn btn-primary sections-buttons"
                    data-bs-toggle="modal"
                    data-bs-target="#addTopicModal"
                    onClick={() => setSelectedSection(data)}
                  >
                    Add Topics
                  </button>

                  <button type="button" className="btn btn-secondary sections-buttons">
                    Edit Section
                  </button>

                  <button type="button" className="btn btn-danger sections-buttons">
                    Delete Section
                  </button>
                </div>
              </div>
            </div>
          )
        ))}

      {selectedSection && (
        <div
          className="modal fade"
          id="addTopicModal"
          tabIndex="-1"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">

              <div className="modal-header">
                <h2 className="modal-title">Add Topic</h2>
                <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
              </div>

              <div className="modal-body topic-modal-body">
                <center>
                  <h1>{selectedSection.courseName}</h1>
                  <h3>
                    Section {selectedSection.sectionNumber} -{" "}
                    {selectedSection.sectionTitle}
                  </h3>
                </center>

                <div className="form-group mb-3">
                  <label>Topic Number</label>
                  <input
                    ref={inputRefTopicNumber}
                    type="number"
                    className="form-control"
                    onChange={(e) => setTopicNumber(e.target.value)}
                  />
                </div>

                <div className="form-group mb-3">
                  <label>Topic Name</label>
                  <input
                    ref={inputRefTopicName}
                    type="text"
                    className="form-control"
                    onChange={(e) => setTopicName(e.target.value)}
                  />
                </div>

                <div className="form-group mb-3">
                  <label>Topic Description</label>
                  <textarea
                    ref={inputRefTopicDesc}
                    className="form-control"
                    rows="3"
                    onChange={(e) => setTopicDesc(e.target.value)}
                  ></textarea>
                </div>

                <div className="form-group mb-3">
                  <label>Choose Topic Video</label>
                  <input
                    ref={inputRefTopicVideo}
                    type="file"
                    className="form-control"
                    accept="video/*"
                    onChange={(e) => setVideo(e.target.files[0])}
                  />
                </div>

                <div className="mb-3">
                  <label>Video Duration (Hours & Minutes)</label>
                  <div className="input-group">
                    <input
                      ref={inputRefTopicHour}
                      type="number"
                      className="form-control"
                      placeholder="Hours"
                      min="0"
                      max="23"
                      onChange={(e) => setHour(e.target.value)}
                    />
                    <span className="input-group-text">:</span>
                    <input
                      ref={inputRefTopicMin}
                      type="number"
                      className="form-control"
                      placeholder="Minutes"
                      min="0"
                      max="59"
                      onChange={(e) => setMin(e.target.value)}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary m-3"
                  data-bs-dismiss="modal"
                  onClick={() =>
                    handleAddTopic(
                      selectedSection.sectionNumber,
                      selectedSection.sectionTitle
                    )
                  }
                >
                  Submit
                </button>

                <button
                  type="button"
                  className="btn btn-danger"
                  data-bs-dismiss="modal"
                >
                  Close
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
