// import React from "react";
// import ProfileHeader from "./../../../components/student/studentProfile/profileHeader/ProfileHeader";
// import ProfileInfo from "./../../../components/student/studentProfile/profileInfo/ProfileInfo";
// import EducationBlock from "./../../../components/student/studentProfile/educationblock/EducationBlock";
// import AddressBlock from "./../../../components/student/studentProfile/addressBlock/AddressBlock";
// import Heading from "./../../../components/student/studentProfile/heading/Heading";
// import "./StudentProfile.css"
// const StudentProfile = () => {
//     return (
//           <div className="container">
//                 <Heading/>
//               <div className="row">
//                   <div className="col-md-4">
//                       <ProfileHeader />
//                       <ProfileInfo />
//                   </div>
//                   <div className="col-md-8">
//                       <AddressBlock />
//                       <EducationBlock />
//                   </div>
//               </div>
//         </div>
//     );
// };

// export default StudentProfile;

import React from "react";
import {
    FaEnvelope,
    FaPhone,
    FaMapMarkerAlt,
    FaGraduationCap,
    FaPlus,
} from "react-icons/fa";
import "./StudentProfile.css";

const StudentProfile = () => {
    const education = [
        {
            degree: "B.Tech in Computer Engineering",
            college: "PCCOE, Pune",
            year: "2025",
        },
        { degree: "HSC", college: "Modern College", year: "2021" },
    ];

    const skills = [
        "React.js",
        "Node.js",
        "MongoDB",
        "JavaScript",
        "UI/UX Design",
        "C++",
    ];

    return (
        <div className="student-profile">
            {/* ===== HEADER SECTION ===== */}
            <div className="profile-header position-relative">
                <img
                    src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1500&q=80"
                    alt="cover"
                    className="cover-photo"
                />
                <div className="profile-info text-center">
                    <div className="profile-pic-wrapper">
                        <img
                            src="https://i.pravatar.cc/160"
                            alt="Profile"
                            className="profile-pic shadow-lg"
                        />
                    </div>
                    <h3 className="fw-bold mt-3 mb-1 text-dark">Sanket Raut</h3>
                    <p className="text-muted mb-0">
                        Full-Stack Developer | Computer Engineering Student
                    </p>
                    <p className="small text-secondary mb-0">
                        <FaMapMarkerAlt className="me-1 text-primary" /> Pune,
                        Maharashtra
                    </p>
                </div>
            </div>

            {/* ===== MAIN CONTENT ===== */}
            <div className="container py-5">
                <div className="row g-4">
                    {/* About + Skills */}
                    <div className="col-lg-8">
                        <div className="card p-4 shadow-sm border-0 rounded-4 mb-4">
                            <h5 className="fw-bold text-primary mb-3">
                                About Me
                            </h5>
                            <p className="text-muted mb-0">
                                Passionate full-stack developer with a strong
                                interest in front-end design and interactive
                                user experiences. I love learning new
                                frameworks, building dynamic apps, and
                                contributing to open-source projects.
                            </p>
                        </div>

                        <div className="card p-4 shadow-sm border-0 rounded-4">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <h5 className="fw-bold text-primary">
                                    <FaGraduationCap className="me-2" />{" "}
                                    Education
                                </h5>
                                <button className="btn btn-sm btn-outline-primary rounded-pill">
                                    <FaPlus className="me-1" /> Add Education
                                </button>
                            </div>
                            {education.map((edu, i) => (
                                <div
                                    key={i}
                                    className="edu-item p-3 mb-3 rounded-3">
                                    <h6 className="fw-semibold mb-0">
                                        {edu.degree}
                                    </h6>
                                    <p className="text-muted mb-0">
                                        {edu.college}
                                    </p>
                                    <small className="text-secondary">
                                        {edu.year}
                                    </small>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Skills + Contact */}
                    <div className="col-lg-4">
                        <div className="card p-4 shadow-sm border-0 rounded-4 mb-4">
                            <h5 className="fw-bold text-primary mb-3">
                                Skills
                            </h5>
                            <div className="d-flex flex-wrap gap-2">
                                {skills.map((skill, i) => (
                                    <span
                                        key={i}
                                        className="badge skill-badge px-3 py-2">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="card p-4 shadow-sm border-0 rounded-4">
                            <h5 className="fw-bold text-primary mb-3">
                                Address & Contact
                            </h5>
                            <p className="text-muted mb-2">
                                <FaMapMarkerAlt className="me-2 text-danger" />{" "}
                                Pune, Maharashtra, India
                            </p>
                            <p className="text-muted mb-2">
                                <FaEnvelope className="me-2 text-primary" />{" "}
                                sanket@example.com
                            </p>
                            <p className="text-muted">
                                <FaPhone className="me-2 text-success" /> +91
                                98765 43210
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentProfile;

