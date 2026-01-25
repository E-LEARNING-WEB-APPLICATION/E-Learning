import AboutCard from "@/components/student/studentProfile/aboutCard/aboutCard";
import EducationCard from "@/components/student/studentProfile/educationCard/EducationCard";
import ProfileHeader from "@/components/student/studentProfile/profileHeader/ProfileHeader";
import SkillsCard from "@/components/student/studentProfile/skillsCard/SkillsCard";
import React from "react";
import "./ProfileView.css";
import ContactCard from "@/components/student/studentProfile/contactCard/ContactCard";

const ProfileView = () => {
    const profile = {
    email: "test1@gmail.com",
    firstName: "abc",
    lastName: "efg",
    dob: "2024-01-25",
    gender: "MALE",
    phoneNo: "6905157375",
    profilePic:
        "https://e-learning-backend-bucket.s3.amazonaws.com/ProfilePic/7f5bf9ee-2fd9-4d0e-8bc9-bd1307730c07.jpg",

    educations: [
        {
            id: "0d3a33cc-1dad-4a0e-88c1-158832f1b3c5",
            createdAt: "2026-01-25T13:49:09.53346",
            updatedAt: "2026-01-25T13:50:17.595897",
            degree: "B.Tech",
            fieldOfStudy: "string",
            institute: "string",
            passingYear: 2025,
        },
    ],

    address: {
        addressLine1: "VTP Belair",
        addressLine2: "Malunge",
        city: "Pune",
        state: "Maharashtra",
        pinCode: "442211",
        country: "India",
    },

    bio: "hi i am instructor",
    experience: "3-4",
    gitHubUrl: "",
    linkedInUrl: "",
    twitterUrl: "",

    specializations: [
        {
            id: "d3271562-f9c4-11f0-9789-50ebf6e15c29",
            createdAt: "2026-01-25T13:36:59.963292",
            updatedAt: null,
            title: "Artificial Intelligence",
        },
        {
            id: "d3271770-f9c4-11f0-9789-50ebf6e15c29",
            createdAt: "2026-01-25T13:36:59.963292",
            updatedAt: null,
            title: "Cyber Security",
        },
        {
            id: "d326fb82-f9c4-11f0-9789-50ebf6e15c29",
            createdAt: "2026-01-25T13:36:59.963292",
            updatedAt: null,
            title: "Data Science",
        },
    ],
};


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
                            education={profile.educations}
                        />
                    </div>

                    <div className="col-lg-4">
                        <SkillsCard
                            page={"viewOnly"}
                            skills={profile.specializations}
                            role={profile.role}
                        />

                        <ContactCard
                            address={profile.address}
                            email={profile.email}
                            phone={profile.phoneNo}
                            gitHubUrl={profile.gitHubUrl}
                            linkedInUrl={profile.linkedInUrl}
                            twitterUrl={profile.twitterUrl}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileView;
