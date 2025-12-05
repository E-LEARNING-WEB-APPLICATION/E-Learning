import AboutCard from "@/components/student/studentProfile/aboutCard/aboutCard";
import ContactCard from "@/components/student/studentProfile/contactCard/ContactCard";
import EducationCard from "@/components/student/studentProfile/educationCard/EducationCard";
import EditEducationModal from "@/components/student/studentProfile/modal/EditEducationModal";
import EditProfileModal from "@/components/student/studentProfile/modal/EditProfileModal";
import ProfileHeader from "@/components/student/studentProfile/profileHeader/ProfileHeader";
import SkillsCard from "@/components/student/studentProfile/skillsCard/SkillsCard";
import React, { useState } from "react";

const InstructorProfile = () => {
    const allSpecializations = [
        "Machine Learning",
        "Data Science",
        "Artificial Intelligence",
        "Cloud Computing",
        "Cyber Security",
        "DevOps",
        "Full-Stack Development",
        "Backend Engineering",
        "Frontend Engineering",
        "Software Architecture",
        "Database Management",
        "Blockchain",
        "Mobile App Development",
        "IoT (Internet of Things)",
    ];

    const [instructor, setInstructor] = useState({
        name: "John Doe",
        bio: "Senior Instructor | Expert in Computer Science",
        location: "Pune, Maharashtra",
        email: "john@example.com",
        phone: "+91 98765 43210",
        specialization: ["Machine Learning", "Data Science", "Cloud Computing"],
        experience: "3-5",
        dob: "1990-05-12", 
        gender: "female",
        photo: "https://i.pravatar.cc/160",
    });

    const handleProfilePhotoUpload = (file) => {
        const previewURL = URL.createObjectURL(file);
        setInstructor((prev) => ({ ...prev, photo: previewURL }));
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
        <div className="student-profile profilebody">
            <ProfileHeader
                page={"instructor"}
                profile={instructor}
                openProfileModal={() => setShowProfileModal(true)}
                onPhotoUpload={handleProfilePhotoUpload}
            />

            <div className="container py-5">
                <div className="row g-4">
                    <div className="col-lg-8">
                        <AboutCard bio={instructor.bio} />

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
                            page={"instructor"}
                            skills={instructor.specialization}
                            allSkills={allSpecializations}
                            onSave={(updatedSpecializations) =>
                                setInstructor((prev) => ({
                                    ...prev,
                                    specialization: updatedSpecializations,
                                }))
                            }
                        />

                        <ContactCard
                            location={instructor.location}
                            email={instructor.email}
                            phone={instructor.phone}
                        />
                    </div>
                </div>
            </div>

            {/* Bootstrap Modals */}
            <EditProfileModal
                page={"instructor"}
                show={showProfileModal}
                onClose={() => setShowProfileModal(false)}
                profile={instructor}
                onSave={setInstructor}
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

export default InstructorProfile;
