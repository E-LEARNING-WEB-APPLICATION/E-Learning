import AboutCard from "@/components/student/studentProfile/aboutCard/aboutCard";
import EducationCard from "@/components/student/studentProfile/educationCard/EducationCard";
import ProfileHeader from "@/components/student/studentProfile/profileHeader/ProfileHeader";
import SkillsCard from "@/components/student/studentProfile/skillsCard/SkillsCard";
import React from "react";
import "./ProfileView.css";
import ContactCard from "@/components/student/studentProfile/contactCard/ContactCard";

const ProfileView = () => {
    const profile ={
        name: "Sanket Raut",
        bio: "Full-Stack Developer",
        location: "Pune, Maharashtra",
        role: "student",
        email: "sanket@example.com",
        phone: "+91 98765 43210",
        skills: ["React.js", "Node.js", "MongoDB", "JavaScript"],
        dob: "2003-25-1",
        gender: "male",
        photo: "https://i.pravatar.cc/160",
    };

    const education = [
        { degree: "B.Tech", college: "PCCOE", year: "2025" },
        { degree: "HSC", college: "Modern College", year: "2021" },
    ]

    return (
        <div className="student-profile profilebody">
            <ProfileHeader
                page={"viewOnly"}
                profile={profile}
            />

            <div className="container py-5">
                <div className="row g-4">
                    <div className="col-lg-8">
                        <AboutCard bio={profile.bio} />

                        <EducationCard
                            page={"viewOnly"}
                            education={education}
                        />
                    </div>

                    <div className="col-lg-4">
                        <SkillsCard
                            page={"viewOnly"}
                            skills={profile.skills}
                            role={profile.role}
                        />

                        <ContactCard
                            location={profile.location}
                            email={profile.email}
                            phone={profile.phone}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileView;
