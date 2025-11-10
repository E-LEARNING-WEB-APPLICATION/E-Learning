import React, { useState } from "react";
import "./CourseContent.css";
import { FaChevronDown, FaChevronUp, FaBookOpen } from "react-icons/fa";

const sampleCourse = {
  id: 1,
  title: "React Bootcamp for Beginners",
  sections: [
    {
      id: 1,
      title: "Introduction to React",
      topics: [
        { id: 1, title: "What is React?" },
        { id: 2, title: "Setting up the environment" },
        { id: 3, title: "Your first component" },
      ],
    },
    {
      id: 2,
      title: "React Fundamentals",
      topics: [
        { id: 1, title: "JSX & Rendering" },
        { id: 2, title: "Props & State" },
        { id: 3, title: "Handling Events" },
      ],
    },
    {
      id: 3,
      title: "Hooks & State Management",
      topics: [
        { id: 1, title: "useState & useEffect" },
        { id: 2, title: "Custom Hooks" },
        { id: 3, title: "useContext" },
        { id: 4, title: "useReducer" },
      ],
    },
  ],
};

const CourseContent = ({ course = sampleCourse }) => {
  const [openSectionId, setOpenSectionId] = useState(null);

  const toggleSection = (id) => {
    setOpenSectionId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="course-content my-5 p-4 rounded-4 shadow-sm">
      <div className="d-flex justify-content-between align-items-center mb-4 header-border pb-2">
        <div className="d-flex align-items-center gap-2">
          <FaBookOpen className="text-primary fs-4" />
          <h4 className="fw-bold mb-0 gradient-text">Course Content</h4>
        </div>
        <small className="text-muted fw-semibold">
          {course.sections.length} Sections •{" "}
          {course.sections.reduce((acc, s) => acc + s.topics.length, 0)} Topics
        </small>
      </div>

      {/* ===== Accordion ===== */}
      <div className="accordion" id="courseContentAccordion">
        {course.sections.map((section) => {
          const isOpen = openSectionId === section.id;

          return (
            <div
              className={`card section-card mb-3 ${
                isOpen ? "active-section" : ""
              }`}
              key={section.id}
            >
              {/* Section Header */}
              <div
                className="card-header d-flex justify-content-between align-items-center"
                onClick={() => toggleSection(section.id)}
                style={{ cursor: "pointer" }}
              >
                <div>
                  <h6 className="mb-1 fw-bold text-dark">
                    {section.id}. {section.title}
                  </h6>
                  <small className="text-muted">
                    {section.topics.length} Topics
                  </small>
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
                  {section.topics.map((topic) => (
                    <li
                      className="list-group-item d-flex align-items-center"
                      key={topic.id}
                    >
                      <span className="topic-id text-primary fw-semibold me-2">
                        {topic.id}.
                      </span>
                      <span className="topic-title">{topic.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CourseContent;
