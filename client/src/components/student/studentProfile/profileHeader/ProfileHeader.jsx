import React, { useRef } from "react";
import { FaMapMarkerAlt, FaCamera } from "react-icons/fa";

const ProfileHeader = ({ profile, openProfileModal, onPhotoUpload }) => {
    const fileInputRef = useRef();

    const openFilePicker = () => fileInputRef.current.click();

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) onPhotoUpload(file); // only preview
    };

    return (
        <div className="profile-header position-relative">
            <img
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1500&q=80"
                alt="cover"
                className="cover-photo"
            />

            <div className="profile-info text-center">
                <div className="profile-pic-wrapper">
                    <img
                        src={profile.photo}
                        alt="Profile"
                        className="profile-pic shadow-lg"
                    />

                    <div
                        className="camera-icon"
                        onClick={openFilePicker}>
                        <FaCamera size={18} />
                    </div>

                    <input
                        type="file"
                        accept="image/*"
                        ref={fileInputRef}
                        className="d-none"
                        onChange={handleFileChange}
                    />
                </div>

                <button
                    className="btn btn-primary btn-sm mt-3"
                    onClick={openProfileModal}>
                    Edit Profile
                </button>

                <h3 className="fw-bold mt-2 mb-1 text-dark">{profile.name}</h3>
                <p className="text-muted mb-0">{profile.bio}</p>
                <p className="small text-secondary mb-0">
                    <FaMapMarkerAlt className="me-1 text-primary" />
                    {profile.location}
                </p>
            </div>
        </div>
    );
};

export default ProfileHeader;
