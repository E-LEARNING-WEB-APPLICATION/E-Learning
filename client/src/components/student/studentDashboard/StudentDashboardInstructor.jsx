import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import { useEffect, useState } from "react";

/**
 * Fallback image used when:
 * - image is null
 * - image is undefined
 * - image URL is broken
 */
const FALLBACK_IMAGE =
  "/images/307ce493-b254-4b2d-8ba4-d12c080d6651.jpg";

const StudentDashboardInstructor = ({ instructors = [] }) => {
  // Hook 1: state (ALWAYS runs)
  const [index, setIndex] = useState(0);

  const total = instructors.length;

  // Hook 2: effect (ALWAYS runs)
  useEffect(() => {
    if (!total) return;

    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % total);
    }, 2000);

    return () => clearInterval(interval);
  }, [total]);

  /**
   * ✅ SAFE GUARD
   * Happens AFTER hooks (Rules of Hooks satisfied)
   */
  if (!total) {
    return null; // or <div>Loading...</div>
  }

  // Carousel references (SAFE now)
  const current = instructors[index];
  const prev = instructors[(index - 1 + total) % total];
  const next = instructors[(index + 1) % total];

  return (
    <section className="py-5 bg-white">
      <div className="container">
        {/* Heading */}
        <div className="text-center mb-5">
          <h2 className="fw-bold">Meet Our Instructors</h2>
          <p className="text-muted">
            Learn from expert mentors who guide you every step of your journey
          </p>
        </div>

        <div className="row align-items-center g-5">
          {/* LEFT — Carousel */}
          <div className="col-lg-6">
            <div className="p-4 rounded-4 text-center">
              <div className="d-flex justify-content-center align-items-center gap-4 mb-4">
                {/* Previous */}
                <img
                  src={prev?.image ?? FALLBACK_IMAGE}
                  alt={prev?.name || "Instructor"}
                  className="rounded-circle border border-secondary opacity-50"
                  style={{
                    width: "90px",
                    height: "90px",
                    objectFit: "cover",
                    cursor: "pointer",
                  }}
                  onError={(e) => (e.target.src = FALLBACK_IMAGE)}
                  onClick={() =>
                    setIndex((i) => (i - 1 + total) % total)
                  }
                />

                {/* Current */}
                <img
                  src={current?.image ?? FALLBACK_IMAGE}
                  alt={current?.name || "Instructor"}
                  className="rounded-circle border border-primary shadow"
                  style={{
                    width: "150px",
                    height: "150px",
                    objectFit: "cover",
                  }}
                  onError={(e) => (e.target.src = FALLBACK_IMAGE)}
                />

                {/* Next */}
                <img
                  src={next?.image ?? FALLBACK_IMAGE}
                  alt={next?.name || "Instructor"}
                  className="rounded-circle border border-secondary opacity-50"
                  style={{
                    width: "90px",
                    height: "90px",
                    objectFit: "cover",
                    cursor: "pointer",
                  }}
                  onError={(e) => (e.target.src = FALLBACK_IMAGE)}
                  onClick={() =>
                    setIndex((i) => (i + 1) % total)
                  }
                />
              </div>

              {/* Pagination */}
              <div className="d-flex justify-content-center gap-2">
                {instructors.map((_, i) => (
                  <div
                    key={i}
                    className={`rounded-pill ${
                      i === index ? "bg-primary" : "bg-secondary"
                    }`}
                    style={{
                      width: i === index ? "25px" : "10px",
                      height: "10px",
                      cursor: "pointer",
                    }}
                    onClick={() => setIndex(i)}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT — Instructor Info */}
          <div className="col-lg-6">
            <div className="p-4 rounded-4">
              <h3 className="mb-4">Instructor Information</h3>

              <div className="mb-3">
                <small>Name</small>
                <p className="fw-bold">{current.name}</p>
              </div>

              <div className="mb-3">
                <small>Title</small>
                <p>{current.title}</p>
              </div>

              <div className="mb-3">
                <small>Specialty</small>
                <p>{current.speciality?.join(", ")}</p>
              </div>

              <div className="mb-3">
                <small>Courses</small>
                <p>{current.courses}</p>
              </div>

              <div className="mb-3">
                <small>Students</small>
                <p>{current.student?.toLocaleString() ?? 0}</p>
              </div>

              {/* Social Media */}
              <div className="d-flex gap-3 mt-3">
                {current.linkedIn && (
                  <a href={current.linkedIn} target="_blank" rel="noreferrer">
                    <FaLinkedin size={28} />
                  </a>
                )}

                {current.twitter && (
                  <a href={current.twitter} target="_blank" rel="noreferrer">
                    <FaTwitter size={28} />
                  </a>
                )}

                {current.gitHub && (
                  <a href={current.gitHub} target="_blank" rel="noreferrer">
                    <FaGithub size={28} />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentDashboardInstructor;
