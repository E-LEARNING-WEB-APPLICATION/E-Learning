import React, { useEffect, useState } from "react";
import "./InstructorSection.css";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import { getInstructorById } from "@/api/api";
import Loader from "@/components/shared/Loader";

const InstructorSection = ({ course }) => {
  const id = course[0]?.iId;
  const [instructor, setInstructor] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInstructor = async () => {
      try {
        const data = await getInstructorById(id);
        setInstructor(data[0]);
      } catch (error) {
        console.error("Error fetching instructor:", error);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchInstructor();
  }, [id]);

  if (loading) {
    return (
      <section className="instructor-section my-5 p-4 rounded-4 shadow-sm text-center">
        <Loader text="Loading instructor details..." />
      </section>
    );
  }

  if (!instructor) {
    return (
      <section className="instructor-section my-5 p-4 rounded-4 shadow-sm text-center">
        <p className="text-danger mb-0">Instructor details not found.</p>
      </section>
    );
  }
  return (
    <section className="instructor-section my-5 p-4 rounded-4 shadow-sm">
      <h4 className="fw-bold mb-4 gradient-heading">Instructor</h4>

      <div className="row align-items-center g-4">
        {/* ===== Instructor Image ===== */}
        <div className="col-md-3 text-center">
          <div className="profile-frame mx-auto">
            <img
              src={instructor.profile_pic}
              alt={`${instructor.fname} ${instructor.lname}`}
              className="instructor-img img-fluid rounded-circle"
            />
          </div>
        </div>

        {/* ===== Instructor Details ===== */}
        <div className="col-md-9">
          <h3 className="instructor-name mb-1">
            {instructor.fname} {instructor.lname}
          </h3>
          <p className="instructor-title mb-3">{instructor.title}</p>

          <p className="instructor-bio text-secondary mb-4">{instructor.bio}</p>

          {/* ===== Social Links ===== */}
          {instructor.socials && (
            <div className="d-flex gap-3">
              {instructor.socials.linkedin && (
                <a
                  href={instructor.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="social-link"
                >
                  <FaLinkedin />
                </a>
              )}
              {instructor.socials.twitter && (
                <a
                  href={instructor.socials.twitter}
                  target="_blank"
                  rel="noreferrer"
                  className="social-link"
                >
                  <FaTwitter />
                </a>
              )}
              {instructor.socials.github && (
                <a
                  href={instructor.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="social-link"
                >
                  <FaGithub />
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default InstructorSection;
