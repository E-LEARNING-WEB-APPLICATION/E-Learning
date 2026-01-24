import React, { useEffect, useState } from "react";

const EditProfileModal = ({ show, onClose, profile, onSave, page }) => {
    const [form, setForm] = useState(profile);

    useEffect(() => {
        setForm(profile);
    }, [profile, show]);

    const handleChange = (e) => {
        const { name, value } = e.target;

        // Handle nested address fields
        if (name.startsWith("address.")) {
            const field = name.split(".")[1];
            setForm((prev) => ({
                ...prev,
                address: {
                    ...prev.address,
                    [field]: value,
                },
            }));
        } else {
            setForm((prev) => ({
                ...prev,
                [name]: value,
            }));
        }
    };

    const handleSave = () => {
        onSave(form);
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
                                onClick={onClose}
                            />
                        </div>

                        <div className="modal-body">
                            {/* First Name */}
                            <label className="fw-semibold">First Name</label>
                            <input
                                type="text"
                                name="firstName"
                                className="form-control mb-3"
                                value={form.firstName || ""}
                                onChange={handleChange}
                            />

                            {/* Last Name */}
                            <label className="fw-semibold">Last Name</label>
                            <input
                                type="text"
                                name="lastName"
                                className="form-control mb-3"
                                value={form.lastName || ""}
                                onChange={handleChange}
                            />

                            {/* Date of Birth */}
                            <label className="fw-semibold">Date of Birth</label>
                            <input
                                type="date"
                                name="dob"
                                className="form-control mb-3"
                                value={form.dob || ""}
                                onChange={handleChange}
                            />

                            {/* Instructor-only fields */}
                            {page === "instructor" && (
                                <>
                                    <label className="fw-semibold">
                                        About Me
                                    </label>
                                    <textarea
                                        name="bio"
                                        className="form-control mb-3"
                                        rows="3"
                                        value={form.bio || ""}
                                        onChange={handleChange}
                                    />

                                    <label className="fw-semibold">
                                        Experience (Years)
                                    </label>
                                    <input
                                        type="number"
                                        name="experience"
                                        className="form-control mb-3"
                                        value={form.experience || ""}
                                        onChange={handleChange}
                                    />
                                </>
                            )}

                            {/* Address */}
                            <label className="fw-semibold">
                                Address Line 1
                            </label>
                            <input
                                type="text"
                                name="address.addressLine1"
                                className="form-control mb-3"
                                value={form.address?.addressLine1 || ""}
                                onChange={handleChange}
                            />

                            <label className="fw-semibold">
                                Address Line 2
                            </label>
                            <input
                                type="text"
                                name="address.addressLine2"
                                className="form-control mb-3"
                                value={form.address?.addressLine2 || ""}
                                onChange={handleChange}
                            />

                            <label className="fw-semibold">City</label>
                            <input
                                type="text"
                                name="address.city"
                                className="form-control mb-3"
                                value={form.address?.city || ""}
                                onChange={handleChange}
                            />

                            <label className="fw-semibold">State</label>
                            <input
                                type="text"
                                name="address.state"
                                className="form-control mb-3"
                                value={form.address?.state || ""}
                                onChange={handleChange}
                            />

                            <label className="fw-semibold">Pincode</label>
                            <input
                                type="text"
                                name="address.pinCode"
                                className="form-control mb-3"
                                value={form.address?.pinCode || ""}
                                onChange={handleChange}
                            />

                            <label className="fw-semibold">Country</label>
                            <input
                                type="text"
                                name="address.country"
                                className="form-control mb-3"
                                value={form.address?.country || ""}
                                onChange={handleChange}
                            />

                            {/* Email */}
                            <label className="fw-semibold">Email</label>
                            <input
                                type="email"
                                name="email"
                                className="form-control mb-3"
                                value={form.email || ""}
                                disabled
                            />

                            {/* Phone */}
                            <label className="fw-semibold">Phone</label>
                            <input
                                type="text"
                                name="phoneNo"
                                className="form-control mb-3"
                                value={form.phoneNo || ""}
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
