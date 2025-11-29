import React, { useState } from "react";
import "./StudentProfile.css";

import ProfileHeader from "../../../components/student/studentProfile/profileHeader/ProfileHeader";
import AboutCard from "../../../components/student/studentProfile/aboutCard/aboutCard";
import SkillsCard from "../../../components/student/studentProfile/skillsCard/SkillsCard";
import ContactCard from "../../../components/student/studentProfile/contactCard/ContactCard";
import EducationCard from "../../../components/student/studentProfile/educationCard/EducationCard";

import EditProfileModal from "../../../components/student/studentProfile/modal/EditProfileModal";
import EditEducationModal from "../../../components/student/studentProfile/modal/EditEducationModal";

const StudentProfile = () => {

    const allSkills = [
        "React.js",
        "Node.js",
        "MongoDB",
        "JavaScript",
        "UI/UX Design",
        "C++",
        "Express.js",
        "Python",
        "HTML",
        "CSS",
    ];


    const [profile, setProfile] = useState({
        name: "Sanket Raut",
        bio: "Full-Stack Developer",
        location: "Pune, Maharashtra",
        email: "sanket@example.com",
        phone: "+91 98765 43210",
        skills: ["React.js", "Node.js", "MongoDB", "JavaScript"],
        photo: "https://i.pravatar.cc/160",
    });


    const handleProfilePhotoUpload = (file) => {
        const previewURL = URL.createObjectURL(file);
        setProfile((prev) => ({ ...prev, photo: previewURL }));
    };



    const [education, setEducation] = useState([
        { degree: "B.Tech", college: "PCCOE", year: "2025" },
        { degree: "HSC", college: "Modern College", year: "2021" },
    ]);

    const handleDeleteEducation = (eduToDelete) => {
        setEducation((prev) =>
            prev.filter((edu) => edu.degree !== eduToDelete.degree)
        );
    };


    const [showProfileModal, setShowProfileModal] = useState(false);
    const [showEduModal, setShowEduModal] = useState(false);
    const [selectedEdu, setSelectedEdu] = useState(null);

    return (
        <div className="student-profile">
            <ProfileHeader
                profile={profile}
                openProfileModal={() => setShowProfileModal(true)}
                onPhotoUpload={handleProfilePhotoUpload}
            />

            <div className="container py-5">
                <div className="row g-4">
                    <div className="col-lg-8">
                        <AboutCard bio={profile.bio} />

                        <EducationCard
                            education={education}
                            openAdd={() => {
                                setSelectedEdu(null);
                                setShowEduModal(true);
                            }}
                            openEdit={(edu) => {
                                setSelectedEdu(edu);
                                setShowEduModal(true);
                            }}
                        />
                    </div>

                    <div className="col-lg-4">
                        <SkillsCard
                            skills={profile.skills}
                            allSkills={allSkills}
                            onSave={(updatedSkills) =>
                                setProfile((prev) => ({
                                    ...prev,
                                    skills: updatedSkills,
                                }))
                            }
                        />

                        <ContactCard
                            location={profile.location}
                            email={profile.email}
                            phone={profile.phone}
                        />
                    </div>
                </div>
            </div>

            {/* Bootstrap Modals */}
            <EditProfileModal
                show={showProfileModal}
                onClose={() => setShowProfileModal(false)}
                profile={profile}
                onSave={setProfile}
            />

            <EditEducationModal
                show={showEduModal}
                onClose={() => setShowEduModal(false)}
                data={selectedEdu}
                onSave={(newEdu) => {
                    if (selectedEdu) {
                        setEducation((prev) =>
                            prev.map((e) =>
                                e.degree === selectedEdu.degree ? newEdu : e
                            )
                        );
                    } else {
                        setEducation((prev) => [...prev, newEdu]);
                    }
                }}
                onDelete={handleDeleteEducation}
            />
        </div>
    );
};

export default StudentProfile;
