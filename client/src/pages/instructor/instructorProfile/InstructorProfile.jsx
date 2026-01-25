import "./InstructorProfile.css";
import AboutCard from "@/components/student/studentProfile/aboutCard/aboutCard";
import ContactCard from "@/components/student/studentProfile/contactCard/ContactCard";
import EducationCard from "@/components/student/studentProfile/educationCard/EducationCard";
import EditEducationModal from "@/components/student/studentProfile/modal/EditEducationModal";
import EditProfileModal from "@/components/student/studentProfile/modal/EditProfileModal";
import ProfileHeader from "@/components/student/studentProfile/profileHeader/ProfileHeader";
import SkillsCard from "@/components/student/studentProfile/skillsCard/SkillsCard";
import { getAllSpecialization, getInstructorDetail } from "@/services/Profile/profileService";
import React, { useState } from "react";
import { useEffect } from "react";
import { toast } from "react-toastify";

const InstructorProfile = () => {
    const [allSpecialization, setAllSpecializations] = useState();
    const [education, setEducation] = useState([]);
    const [instructor, setInstructor] = useState({
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
                const data = await getInstructorDetail();
               
                setInstructor({
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

        const getSpecialization = async () => {
                    try {
                        const data = await getAllSpecialization();
                        setAllSpecializations(data.data);
                    } catch (error) {
                        toast.error(error.message);
                    }
        };
        getSpecialization();
        fetchInstructor();
    }, []);

    const handleProfilePhotoUpload = async (file) => {
        const previewURL = URL.createObjectURL(file);
        setInstructor((prev) => ({
            ...prev,
            profilePic: previewURL,
        }));

        try {
            const response = await updateProfilePic(file);
            if (response.data.success) {
                toast.success(response.data.message);
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            toast.error(error.message);
        }
    };

    const handleDeleteEducation = (eduToDelete) => {
        setEducation((prev) =>
            prev.filter((edu) => edu.degree !== eduToDelete.degree),
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
                            allSkills={allSpecialization}
                            role={"instructor"}
                            onSave={(updatedSpecializations) =>
                                setInstructor((prev) => ({
                                    ...prev,
                                    specialization: updatedSpecializations,
                                }))
                            }
                        />

                        <ContactCard
                            address={instructor.address}
                            email={instructor.email}
                            phone={instructor.phoneNo}
                            gitHubUrl={instructor.gitHubUrl}
                            linkedInUrl={instructor.linkedInUrl}
                            twitterUrl={instructor.twitterUrl}
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
                                e.degree === selectedEdu.degree ? newEdu : e,
                            ),
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
