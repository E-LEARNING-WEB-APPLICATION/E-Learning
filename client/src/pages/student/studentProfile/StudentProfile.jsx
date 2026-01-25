import "./StudentProfile.css";
import React, { useEffect, useState } from "react";

import ProfileHeader from "../../../components/student/studentProfile/profileHeader/ProfileHeader";
import SkillsCard from "../../../components/student/studentProfile/skillsCard/SkillsCard";
import ContactCard from "../../../components/student/studentProfile/contactCard/ContactCard";
import EducationCard from "../../../components/student/studentProfile/educationCard/EducationCard";

import EditProfileModal from "../../../components/student/studentProfile/modal/EditProfileModal";
import EditEducationModal from "../../../components/student/studentProfile/modal/EditEducationModal";
import {
    getAllSkills,
    getStudentDetail,
    updateProfilePic,
} from "@/services/Profile/profileService";
import { toast } from "react-toastify";

const StudentProfile = () => {
    const [allSkills, setAllSkills] = useState([]);
    const [profile, setProfile] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNo: "",
        dob: "",
        gender: "",
        profilePic: null,
        skills: [],
        address: {
            addressLine1: "",
            addressLine2: "",
            city: "",
            state: "",
            pinCode: "",
            country: "",
        },
    });

    const [education, setEducation] = useState([]);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const data = await getStudentDetail();
                console.log(data);
                setProfile({
                    firstName: data.firstName ?? "",
                    lastName: data.lastName ?? "",
                    email: data.email ?? "",
                    phoneNo: data.phoneNo ?? "",
                    dob: data.dob ?? "",
                    gender: data.gender ?? "",
                    profilePic: data.profilePic || null,
                    skills: data.skills ?? [],
                    address: {
                        addressLine1: data.address?.addressLine1 ?? "",
                        addressLine2: data.address?.addressLine2 ?? "",
                        city: data.address?.city ?? "",
                        state: data.address?.state ?? "",
                        pinCode: data.address?.pinCode ?? "",
                        country: data.address?.country ?? "",
                    },
                });

                setEducation(data.educations);
            } catch (error) {
                toast.error(error.message)
            }
        };

        const getSkill = async () => {
            try {
                const data = await getAllSkills();
                setAllSkills(data.data);
            } catch (error) {
                toast.error(error.message);
            }
        };

        fetchProfile();
        getSkill();
    }, []);

    const handleProfilePhotoUpload = async (file) => {

    // Preview
    const previewURL = URL.createObjectURL(file);
    setProfile((prev) => ({
        ...prev,
        profilePic: previewURL,
    }));

    // Upload
    try {
        const response = await updateProfilePic(file);
        if (response.data.success) {
                toast.success(response.data.message)
            } else {
                toast.error(response.data.message);
            }
    } catch (error) {
        toast.error(error.message);
    }
};


    const [showProfileModal, setShowProfileModal] = useState(false);
    const [showEduModal, setShowEduModal] = useState(false);
    const [selectedEdu, setSelectedEdu] = useState(null);

    return (
        <div className="student-profile profilebody">
            <ProfileHeader
                profile={profile}
                page="student"
                openProfileModal={() => setShowProfileModal(true)}
                onPhotoUpload={handleProfilePhotoUpload}
            />

            <div className="container py-5">
                <div className="row g-4">
                    <div className="col-lg-8">
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
                            page="student"
                            skills={profile.skills}
                            allSkills={allSkills}
                            role="student"
                            onSave={(updatedSkills) =>
                                setProfile((prev) => ({
                                    ...prev,
                                    skills: updatedSkills,
                                }))
                            }
                        />

                        <ContactCard
                            address={profile.address}
                            email={profile.email}
                            phone={profile.phoneNo}
                        />
                    </div>
                </div>
            </div>

            <EditProfileModal
                page="student"
                show={showProfileModal}
                onClose={() => setShowProfileModal(false)}
                profile={profile}
                onSave={setProfile}
            />

            <EditEducationModal
                show={showEduModal}
                onClose={() => setShowEduModal(false)}
                educationData={selectedEdu}
                onSave={(newEdu) => {
                    if (selectedEdu?.id) {
                        // EDIT existing education (by id)
                        setEducation((prev) =>
                            prev.map((e) => (e.id === newEdu.id ? newEdu : e)),
                        );
                    } else {
                        // ADD new education
                        setEducation((prev) => [...prev, newEdu]);
                    }
                }}
                onDelete={(eduToDelete) => {
                    // DELETE education (by id)
                    setEducation((prev) =>
                        prev.filter((e) => e.id !== eduToDelete.id),
                    );
                }}
            />
        </div>
    );
};

export default StudentProfile;
