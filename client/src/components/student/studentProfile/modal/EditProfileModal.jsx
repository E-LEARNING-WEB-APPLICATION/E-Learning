import React, { useEffect, useState } from "react";
import { updateProfileDetails } from "@/services/Student/profileService";
import { toast } from "react-toastify";

/**
 * EditProfileModal
 *
 * - page === "student" → basic profile + address
 * - page === "instructor" → extra UI fields (not sent to this API)
 * - ALL API-required fields are validated
 */
const EditProfileModal = ({ show, onClose, profile, onSave, page }) => {

    const [form, setForm] = useState(profile);
    const [errors, setErrors] = useState({});

    /**
     * Sync form state on modal open / profile change
     */
    useEffect(() => {
        setForm(profile);
        setErrors({});
    }, [profile, show]);

    /**
     * Handle input change
     * Supports nested address fields
     */
    const handleChange = (e) => {
        const { name, value } = e.target;

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

    /**
     * Validate ALL required fields
     */
    const validateForm = () => {
        const newErrors = {};

        // Core required fields'
        //✅ Is the trimmed value empty, null, or undefined?
        if (!form.firstName?.trim()) newErrors.firstName = "First name is required";
        if (!form.lastName?.trim()) newErrors.lastName = "Last name is required";
        if (!form.dob) newErrors.dob = "Date of birth is required";
        if (!form.gender) newErrors.gender = "Gender is required";
        if (!form.phoneNo?.trim()) newErrors.phoneNo = "Phone number is required";

        // Address (ALL mandatory)
        if (!form.address?.addressLine1?.trim()) newErrors.addressLine1 = "Address Line 1 is required";
        if (!form.address?.addressLine2?.trim()) newErrors.addressLine2 = "Address Line 2 is required";
        if (!form.address?.city?.trim()) newErrors.city = "City is required";
        if (!form.address?.state?.trim()) newErrors.state = "State is required";
        if (!form.address?.pinCode?.trim()) newErrors.pinCode = "Pincode is required";
        if (!form.address?.country?.trim()) newErrors.country = "Country is required";

        // Instructor-only UI validation (if needed later)
        if (page === "instructor") {
            if (!form.bio?.trim()) newErrors.bio = "Bio is required";
            if (!form.experience) newErrors.experience = "Experience is required";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    /**
     * Save profile (API-aligned)
     */
    const handleSave = async () => {
        if (!validateForm()) return;

        // 🔒 API payload — EXACT contract
        const payload = {
            email: form.email,
            firstName: form.firstName,
            lastName: form.lastName,
            dob: form.dob,
            gender: form.gender,
            phoneNo: form.phoneNo,
            address: {
                addressLine1: form.address.addressLine1,
                addressLine2: form.address.addressLine2,
                city: form.address.city,
                state: form.address.state,
                pinCode: form.address.pinCode,
                country: form.address.country,
            },
        };

        try {
            const response = await updateProfileDetails(payload);

            if (response.data.success) {
                toast.success(response.data.message)
                // Update UI state without refetch
                onSave((prev) => ({
                    ...prev,
                    ...payload,
                }));
            } else {
                toast.error(response.data.message);
            }
            onClose();
        } catch (error) {
            toast.error(error.message);
        }
    };

    if (!show) return null;

    return (
        <>
            <div className="modal fade show d-block" tabIndex="-1">
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content">

                        {/* Header */}
                        <div className="modal-header">
                            <h5 className="modal-title">Edit Profile</h5>
                            <button className="btn-close" onClick={onClose} />
                        </div>

                        {/* Body */}
                        <div className="modal-body">

                            {/* First Name */}
                            <label className="fw-semibold">First Name *</label>
                            <input
                                type="text"
                                name="firstName"
                                className={`form-control mb-1 ${errors.firstName ? "is-invalid" : ""}`}
                                value={form.firstName || ""}
                                onChange={handleChange}
                                required
                            />
                            {errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>}

                            {/* Last Name */}
                            <label className="fw-semibold">Last Name *</label>
                            <input
                                type="text"
                                name="lastName"
                                className={`form-control mb-1 ${errors.lastName ? "is-invalid" : ""}`}
                                value={form.lastName || ""}
                                onChange={handleChange}
                                required
                            />
                            {errors.lastName && <div className="invalid-feedback">{errors.lastName}</div>}

                            {/* DOB */}
                            <label className="fw-semibold">Date of Birth *</label>
                            <input
                                type="date"
                                name="dob"
                                className={`form-control mb-1 ${errors.dob ? "is-invalid" : ""}`}
                                value={form.dob || ""}
                                onChange={handleChange}
                                required
                            />
                            {errors.dob && <div className="invalid-feedback">{errors.dob}</div>}

                            {/* Gender */}
                            <label className="fw-semibold">Gender *</label>
                            <select
                                name="gender"
                                className={`form-control mb-1 ${errors.gender ? "is-invalid" : ""}`}
                                value={form.gender || ""}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select Gender</option>
                                <option value="MALE">Male</option>
                                <option value="FEMALE">Female</option>
                            </select>
                            {errors.gender && <div className="invalid-feedback">{errors.gender}</div>}

                            {/* Instructor-only UI fields */}
                            {page === "instructor" && (
                                <>
                                    <label className="fw-semibold">About Me *</label>
                                    <textarea
                                        name="bio"
                                        className={`form-control mb-1 ${errors.bio ? "is-invalid" : ""}`}
                                        value={form.bio || ""}
                                        onChange={handleChange}
                                    />
                                    {errors.bio && <div className="invalid-feedback">{errors.bio}</div>}

                                    <label className="fw-semibold">Experience (Years) *</label>
                                    <input
                                        type="number"
                                        name="experience"
                                        className={`form-control mb-3 ${errors.experience ? "is-invalid" : ""}`}
                                        value={form.experience || ""}
                                        onChange={handleChange}
                                    />
                                    {errors.experience && <div className="invalid-feedback">{errors.experience}</div>}
                                </>
                            )}

                            {/* Address (ALL required) */}
                            {/* Address Line 1 */}
                            <label className="fw-semibold">Address Line 1 *</label>
                            <input
                                type="text"
                                name="address.addressLine1"
                                className={`form-control mb-1 ${errors.addressLine1 ? "is-invalid" : ""}`}
                                value={form.address?.addressLine1 || ""}
                                onChange={handleChange}
                                required
                            />
                            {errors.addressLine1 && <div className="invalid-feedback">{errors.addressLine1}</div>}

                            {/* Address Line 2 */}
                            <label className="fw-semibold">Address Line 2 *</label>
                            <input
                                type="text"
                                name="address.addressLine2"
                                className={`form-control mb-1 ${errors.addressLine2 ? "is-invalid" : ""}`}
                                value={form.address?.addressLine2 || ""}
                                onChange={handleChange}
                                required
                            />
                            {errors.addressLine2 && <div className="invalid-feedback">{errors.addressLine2}</div>}

                            {/* City */}
                            <label className="fw-semibold">City *</label>
                            <input
                                type="text"
                                name="address.city"
                                className={`form-control mb-1 ${errors.city ? "is-invalid" : ""}`}
                                value={form.address?.city || ""}
                                onChange={handleChange}
                                required
                            />
                            {errors.city && <div className="invalid-feedback">{errors.city}</div>}

                            {/* State */}
                            <label className="fw-semibold">State *</label>
                            <input
                                type="text"
                                name="address.state"
                                className={`form-control mb-1 ${errors.state ? "is-invalid" : ""}`}
                                value={form.address?.state || ""}
                                onChange={handleChange}
                                required
                            />
                            {errors.state && <div className="invalid-feedback">{errors.state}</div>}

                            {/* Pincode */}
                            <label className="fw-semibold">Pincode *</label>
                            <input
                                type="text"
                                name="address.pinCode"
                                className={`form-control mb-1 ${errors.pinCode ? "is-invalid" : ""}`}
                                value={form.address?.pinCode || ""}
                                onChange={handleChange}
                                required
                            />
                            {errors.pinCode && <div className="invalid-feedback">{errors.pinCode}</div>}

                            {/* Country */}
                            <label className="fw-semibold">Country *</label>
                            <input
                                type="text"
                                name="address.country"
                                className={`form-control mb-3 ${errors.country ? "is-invalid" : ""}`}
                                value={form.address?.country || ""}
                                onChange={handleChange}
                                required
                            />
                            {errors.country && <div className="invalid-feedback">{errors.country}</div>}

                            {/* Email (read-only) */}
                            <label className="fw-semibold">Email *</label>
                            <input
                                type="email"
                                className="form-control mb-3"
                                value={form.email || ""}
                                disabled
                            />

                            {/* Phone */}
                            <label className="fw-semibold">Phone *</label>
                            <input
                                type="text"
                                name="phoneNo"
                                className={`form-control mb-3 ${errors.phoneNo ? "is-invalid" : ""}`}
                                value={form.phoneNo || ""}
                                onChange={handleChange}
                                required
                            />
                            {errors.phoneNo && <div className="invalid-feedback">{errors.phoneNo}</div>}
                        </div>

                        {/* Footer */}
                        <div className="modal-footer">
                            <button className="btn btn-secondary" onClick={onClose}>
                                Cancel
                            </button>
                            <button className="btn btn-primary" onClick={handleSave}>
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
