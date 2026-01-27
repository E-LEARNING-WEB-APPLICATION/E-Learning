import AboutCard from "@/components/student/studentProfile/aboutCard/aboutCard";
import EducationCard from "@/components/student/studentProfile/educationCard/EducationCard";
import ProfileHeader from "@/components/student/studentProfile/profileHeader/ProfileHeader";
import SkillsCard from "@/components/student/studentProfile/skillsCard/SkillsCard";
import React, { useEffect, useState } from "react";
import "./ProfileView.css";
import ContactCard from "@/components/student/studentProfile/contactCard/ContactCard";
import { useParams } from "react-router-dom";
import { getInstructorDetailById } from "@/services/Profile/profileService";
import { toast } from "react-toastify";

const ProfileView = () => {

    const { instructorId } = useParams();
    const [education, setEducation] = useState([]);
       const [profile, setProfile] = useState({
            firstName: "",
            lastName: "",
            email: "",
            phoneNo: "",
            dob: "",
            gender: "",
            profilePic: null,
    
            bio: "",
            experience: "",
            gitHubUrl: "",
            linkedInUrl: "",
            twitterUrl: "",
    
            specialization: [],
    
            address: {
                addressLine1: "",
                addressLine2: "",
                city: "",
                state: "",
                pinCode: "",
                country: "",
            },
        });
    
        useEffect(() => {
            const fetchInstructor = async () => {
                try {
                    const data = await getInstructorDetailById(instructorId);
                   
                    setProfile({
                        firstName: data.firstName ?? "",
                        lastName: data.lastName ?? "",
                        email: data.email ?? "",
                        phoneNo: data.phoneNo ?? "",
                        dob: data.dob ?? "",
                        gender: data.gender ?? "",
                        profilePic: data.profilePic || null,
    
                        bio: data.bio ?? "",
                        experience: data.experience ?? "",
                        gitHubUrl: data.gitHubUrl ?? "",
                        linkedInUrl: data.linkedInUrl ?? "",
                        twitterUrl: data.twitterUrl ?? "",
    
                        specialization: data.specializations ?? [],
    
                        address: {
                            addressLine1: data.address?.addressLine1 ?? "",
                            addressLine2: data.address?.addressLine2 ?? "",
                            city: data.address?.city ?? "",
                            state: data.address?.state ?? "",
                            pinCode: data.address?.pinCode ?? "",
                            country: data.address?.country ?? "",
                        },
                    });
    
                    setEducation(data.educations ?? []);
                } catch (error) {
                    toast.error(error.response?.data?.message || error.message);
                }
            };
            fetchInstructor();
        }, []);


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
                            skills={profile.specialization}
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
