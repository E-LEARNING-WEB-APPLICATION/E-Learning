import React, { useState } from "react";
import { FaPlay, FaCheck } from "react-icons/fa";
import "./CourseContentSidebar.css";

const CourseContentSidebar = ({ course, activeTopic, onTopicPlay }) => {
  const [activeSection, setActiveSection] = useState(null);
  console.log(course);
  return (
    <div
      style={{ borderLeft: "0.2px solid grey", backgroundColor: "#e5e7eb" }}
      className="border rounded-start rounded-top-start rounded-bottom-start"
    >
      <h6 className="sidebar-title">Course Content</h6>

      <div className="accordion" id="courseAccordion">
        {course.sections.map((sec, index) => (
          <div className="accordion-item custom-accordion-item" key={sec.sid}>
            <h2
              className={`accordion-header ${
                activeSection === sec.sid ? "section-active" : ""
              }`}
            >
              <button
                className={`accordion-button custom-accordion-btn collapsed`}
                data-bs-toggle="collapse"
                data-bs-target={`#sec${sec.sid}`}
                onClick={() => setActiveSection(sec.sid)}
              >
                <div>
                  <p className="section-title">{sec.sectionName}</p>
                  <small className="section-sub">
                    {index + 1}/{sec.topics.length} • {sec.topics.length * 10}
                    min Total
                  </small>
                </div>
              </button>
            </h2>

            <div
              id={`sec${sec.sid}`}
              className={`accordion-collapse collapse ${
                index === 0 ? "show" : ""
              }`}
              data-bs-parent="#courseAccordion"
            >
              <div className="accordion-body topics-wrapper">
                {sec.topics.map((topic, i) => {
                  const isActive = activeTopic === topic.tid;

                  return (
                    <div
                      key={topic.tid}
                      className={`topic-item ${isActive ? "active" : ""}`}
                      onClick={() => onTopicPlay(topic)}
                    >
                      <div
                        className={`left-indicator ${isActive ? "active" : ""}`}
                      />

                      <div className="topic-text">
                        <div className="d-flex justify-content-between align-items-center w-100">
                          <p className="topic-title mb-0">
                            {i + 1}. {topic.topicName}
                          </p>
                        </div>

                        <small className="topic-duration">
                          {topic.topicDesc ? topic.topicDesc : "Completed"}
                        </small>
                      </div>

                      <div className="topic-icon">
                        {isActive ? (
                          <div className="tick-circle">
                            <FaCheck />
                          </div>
                        ) : (
                          <div className="play-circle">
                            <FaPlay />
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseContentSidebar;
