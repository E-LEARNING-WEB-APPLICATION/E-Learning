import React, { useEffect, useState } from "react";

const EditProfileModal = ({ show, onClose, profile, onSave }) => {
    const [form, setForm] = useState(profile);

    useEffect(() => {
        setForm(profile);
    }, [profile, show]);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSave = () => {
        // Convert skills string → array
        const updatedForm = {
            ...form,
            skills: form.skills.split(",").map((s) => s.trim()),
        };

        onSave(updatedForm);
        onClose();
    };

    if (!show) return null;

    return (
        <>
            <div
                className="modal fade show d-block"
                tabIndex="-1">
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Edit Profile</h5>
                            <button
                                className="btn-close"
                                onClick={onClose}></button>
                        </div>

                        <div className="modal-body">
                            {/* Name */}
                            <label className="fw-semibold">Name</label>
                            <input
                                type="text"
                                name="name"
                                className="form-control mb-3"
                                value={form.name}
                                onChange={handleChange}
                            />

                            {/* About Me */}
                            <label className="fw-semibold">About Me</label>
                            <textarea
                                name="bio"
                                className="form-control mb-3"
                                rows="3"
                                value={form.bio}
                                onChange={handleChange}></textarea>

                            {/* Skills */}
                            <label className="fw-semibold">
                                Skills (comma-separated)
                            </label>
                            <input
                                type="text"
                                name="skills"
                                className="form-control mb-3"
                                value={form.skills}
                                onChange={handleChange}
                                placeholder="React, Node.js, MongoDB"
                            />

                            {/* Address */}
                            <label className="fw-semibold">Address</label>
                            <input
                                type="text"
                                name="location"
                                className="form-control mb-3"
                                value={form.location}
                                onChange={handleChange}
                            />

                            {/* Email */}
                            <label className="fw-semibold">Email</label>
                            <input
                                type="email"
                                name="email"
                                className="form-control mb-3"
                                value={form.email}
                                onChange={handleChange}
                            />

                            {/* Phone */}
                            <label className="fw-semibold">Phone</label>
                            <input
                                type="text"
                                name="phone"
                                className="form-control mb-3"
                                value={form.phone}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="modal-footer">
                            <button
                                className="btn btn-secondary"
                                onClick={onClose}>
                                Cancel
                            </button>
                            <button
                                className="btn btn-primary"
                                onClick={handleSave}>
                                Save Changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal-backdrop fade show"></div>
        </>
    );
};

export default EditProfileModal;
