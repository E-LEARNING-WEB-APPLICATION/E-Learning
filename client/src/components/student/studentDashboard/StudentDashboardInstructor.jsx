import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import { useState } from "react";

const StudentDashboardInstructor = ({ instructors = [] }) => {

    const [index, setIndex] = useState(0);

    const total = instructors.length;

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
                        Learn from expert mentors who guide you every step of
                        your journey
                    </p>
                </div>

                <div className="row align-items-center g-5">
                    {/* LEFT — Carousel */}
                    <div className="col-lg-6">
                        <div className="p-4 rounded-4 text-center ">
                            <div className="d-flex justify-content-center align-items-center gap-4 mb-4">
                                {/* Previous */}
                                <img
                                    src={prev.image}
                                    className="rounded-circle border border-secondary opacity-50"
                                    style={{
                                        width: "90px",
                                        height: "90px",
                                        objectFit: "cover",
                                        cursor: "pointer",
                                    }}
                                    onClick={() =>
                                        setIndex((i) => (i - 1 + total) % total)
                                    }
                                />

                                {/* Current */}
                                <img
                                    src={current.image}
                                    className="rounded-circle border border-primary shadow"
                                    style={{
                                        width: "150px",
                                        height: "150px",
                                        objectFit: "cover",
                                    }}
                                />

                                {/* Next */}
                                <img
                                    src={next.image}
                                    className="rounded-circle border border-secondary opacity-50"
                                    style={{
                                        width: "90px",
                                        height: "90px",
                                        objectFit: "cover",
                                        cursor: "pointer",
                                    }}
                                    onClick={() =>
                                        setIndex((i) => (i + 1) % total)
                                    }
                                />
                            </div>

                            {/* Pagination Dots */}
                            <div className="d-flex justify-content-center gap-2">
                                {instructors.map((_, i) => (
                                    <div
                                        key={i}
                                        className={`rounded-pill ${
                                            i === index
                                                ? "bg-primary"
                                                : "bg-secondary"
                                        }`}
                                        style={{
                                            width:
                                                i === index ? "25px" : "10px",
                                            height: "10px",
                                            cursor: "pointer",
                                        }}
                                        onClick={() => setIndex(i)}></div>
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
                                <p>{current.specialty}</p>
                            </div>

                            <div className="mb-3">
                                <small>Courses</small>
                                <p>{current.courses}</p>
                            </div>

                            <div className="mb-3">
                                <small>Students</small>
                                <p>{current.students.toLocaleString()}</p>
                            </div>

                            {/* Social Links */}
                            <div className="SocialMedia d-flex gap-3 mt-3">
                                {current.socials?.linkedin && (
                                    <a
                                        href={current.socials.linkedin}
                                        target="_blank"
                                        rel="noreferrer">
                                        <FaLinkedin
                                            size={28}
                                            className=""
                                        />
                                    </a>
                                )}

                                {current.socials?.twitter && (
                                    <a
                                        href={current.socials.twitter}
                                        target="_blank"
                                        rel="noreferrer">
                                        <FaTwitter
                                            size={28}
                                            className=""
                                        />
                                    </a>
                                )}

                                {current.socials?.github && (
                                    <a
                                        href={current.socials.github}
                                        target="_blank"
                                        rel="noreferrer">
                                        <FaGithub
                                            size={28}
                                            className=""
                                        />
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
