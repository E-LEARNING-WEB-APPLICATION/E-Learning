import React, { useState } from "react";
import "./CourseContent.css";
import { FaChevronDown, FaChevronUp, FaBookOpen } from "react-icons/fa";

const CourseContent = ({ course }) => {
  const [openSectionId, setOpenSectionId] = useState(null);

  const sections = Array.isArray(course[0].sections) ? course[0].sections : [];

  const toggleSection = (sId) => {
    setOpenSectionId((prev) => (prev === sId ? null : sId));
  };

  const totalTopics = sections.reduce(
    (acc, s) => acc + (Array.isArray(s.topics) ? s.topics.length : 0),
    0
  );

  return (
    <section className="course-content my-5 p-4 rounded-4 shadow-sm">
      <div className="d-flex justify-content-between align-items-center mb-4 header-border pb-2">
        <div className="d-flex align-items-center gap-2">
          <FaBookOpen className="text-primary fs-4" />
          <h4 className="fw-bold mb-0 gradient-text">Course Content</h4>
        </div>
        <small className="text-muted fw-semibold">
          {sections.length} Sections • {totalTopics} Topics
        </small>
      </div>

      {/* ===== Accordion ===== */}
      <div className="accordion" id="courseContentAccordion">
        {sections.map((section) => {
          const isOpen = openSectionId === section.sId;
          const topics = Array.isArray(section.topics) ? section.topics : [];

          return (
            <div
              className={`card section-card mb-3 ${
                isOpen ? "active-section" : ""
              }`}
              key={section.sId}
            >
              {/* Section Header */}
              <div
                className="card-header d-flex justify-content-between align-items-center"
                onClick={() => toggleSection(section.sId)}
                style={{ cursor: "pointer" }}
              >
                <div>
                  <h6 className="mb-1 fw-bold text-dark">
                    {section.sId}. {section.section_name}
                  </h6>
                  <small className="text-muted">{topics.length} Topics</small>
                </div>

                <span
                  className={`toggle-icon ${
                    isOpen ? "rotate" : ""
                  } text-primary fs-6`}
                >
                  {isOpen ? <FaChevronUp /> : <FaChevronDown />}
                </span>
              </div>

              {/* Topics */}
              <div
                className={`collapse-content ${isOpen ? "open" : ""}`}
                aria-hidden={!isOpen}
              >
                <ul className="list-group list-group-flush">
                  {topics.map((topic) => (
                    <li
                      className="list-group-item d-flex align-items-center"
                      key={topic.t_id}
                    >
                      <span className="topic-id text-primary fw-semibold me-2">
                        {topic.t_id}.
                      </span>
                      <span className="topic-title">{topic.topic_name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
        {sections.length === 0 && (
          <div className="text-center text-muted py-3">
            No sections available for this course.
          </div>
        )}
      </div>
    </section>
  );
};

export default CourseContent;
