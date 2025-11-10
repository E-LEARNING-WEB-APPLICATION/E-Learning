import React from "react";
import "./InstructorSection.css";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

const InstructorSection = () => {
  const instructor = {
    name: "Evelyn Parker",
    title: "Senior React Instructor & Frontend Architect",
    bio: `Evelyn Parker is a highly experienced frontend engineer with a deep 
          passion for teaching modern web technologies. With over a decade of 
          experience in React, JavaScript, and UI/UX, she has mentored thousands 
          of developers to build elegant, scalable, and user-centric applications.`,
    image:
      "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&w=600&q=80",
    socials: {
      linkedin: "https://linkedin.com/in/evelynparker",
      twitter: "https://twitter.com/evelynparker",
      github: "https://github.com/evelynparker",
    },
  };

  return (
    <section className="instructor-section my-5 p-4 rounded-4 shadow-sm">
      <h4 className="fw-bold mb-4 gradient-heading">Instructor</h4>

      <div className="row align-items-center g-4">
        {/* ===== Instructor Image ===== */}
        <div className="col-md-3 text-center">
          <div className="profile-frame mx-auto">
            <img
              src={instructor.image}
              alt={instructor.name}
              className="instructor-img img-fluid rounded-circle"
            />
          </div>
        </div>

        {/* ===== Instructor Details ===== */}
        <div className="col-md-9">
          <h3 className="instructor-name mb-1">{instructor.name}</h3>
          <p className="instructor-title mb-3">{instructor.title}</p>

          <p className="instructor-bio text-secondary mb-4">{instructor.bio}</p>

          {/* ===== Social Links ===== */}
          <div className="d-flex gap-3">
            <a
              href={instructor.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="social-link"
            >
              <FaLinkedin />
            </a>
            <a
              href={instructor.socials.twitter}
              target="_blank"
              rel="noreferrer"
              className="social-link"
            >
              <FaTwitter />
            </a>
            <a
              href={instructor.socials.github}
              target="_blank"
              rel="noreferrer"
              className="social-link"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstructorSection;
