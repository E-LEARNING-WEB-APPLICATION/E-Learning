import React, { useEffect, useState } from "react";
import {
    addEducation,
    updateEducation,
    deleteEducation,
} from "@/services/Student/profileService";
import { toast } from "react-toastify";

/**
 * EditEducationModal
 *
 * Handles:
 * - Add new education
 * - Edit existing education
 * - Delete education
 */
const EditEducationModal = ({
    show,
    onClose,
    educationData,
    onSave,
    onDelete,
}) => {
    const EMPTY_FORM = {
        id: null,
        degree: "",
        fieldOfStudy: "",
        institute: "",
        passingYear: "",
    };

    const [educationForm, setEducationForm] = useState(EMPTY_FORM);

    // ✅ ADDED: validation errors
    const [errors, setErrors] = useState({});

    useEffect(() => {
        if (educationData) {
            setEducationForm(educationData);
        } else {
            setEducationForm(EMPTY_FORM);
        }
        setErrors({}); // ✅ clear errors when modal opens
    }, [educationData, show]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setEducationForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // ✅ ADDED: validation logic
    const validateForm = () => {
        const newErrors = {};

        if (!educationForm.degree?.trim())
            //✅ Is the trimmed value empty, null, or undefined?
            newErrors.degree = "Degree is required";

        if (!educationForm.fieldOfStudy?.trim())
            newErrors.fieldOfStudy = "Field of Study is required";

        if (!educationForm.institute?.trim())
            newErrors.institute = "Institute is required";

        if (!educationForm.passingYear)
            newErrors.passingYear = "Passing Year is required";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSaveEducation = async () => {
        // ✅ ADDED: block save if invalid
        if (!validateForm()) return;

        const payload = {
            ...educationForm,
            passingYear: Number(educationForm.passingYear),
        };

        try {
            if (payload.id) {
                const response = await updateEducation(payload);
                console.log(response.data.success);
                if (response.data.success) {
                    toast.success(response.data.message);
                    // Update UI state without refetch
                    onSave(payload);
                } else {
                    toast.error(response.data.message);
                }
            } else {
                const response = await addEducation(payload);
                if (response.data.success) {
                    toast.success(response.data.message);
                    // Update UI state without refetch
                    onSave(payload);
                } else {
                    toast.error(response.data.message);
                }
            }

            onClose();
        } catch (error) {
            toast.error(error.message);
        }
    };

    const handleDeleteEducation = async () => {
        try {
            const response = await deleteEducation(educationForm.id);
            if (response.data.success) {
                toast.success(response.data.message);
                // Update UI state without refetch
                onDelete(educationForm);
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
            <div
                className="modal fade show d-block"
                tabIndex="-1">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">
                                {educationData
                                    ? "Edit Education"
                                    : "Add Education"}
                            </h5>
                            <button
                                className="btn-close"
                                onClick={onClose}
                            />
                        </div>

                        <div className="modal-body">
                            {/* Degree */}
                            <label className="fw-semibold">Degree *</label>
                            <input
                                type="text"
                                name="degree"
                                className={`form-control mb-1 ${errors.degree ? "is-invalid" : ""}`}
                                value={educationForm.degree}
                                onChange={handleInputChange}
                                required
                            />
                            {errors.degree && (
                                <div className="invalid-feedback">
                                    {errors.degree}
                                </div>
                            )}

                            {/* Field of Study */}
                            <label className="fw-semibold">
                                Field of Study *
                            </label>
                            <input
                                type="text"
                                name="fieldOfStudy"
                                className={`form-control mb-1 ${errors.fieldOfStudy ? "is-invalid" : ""}`}
                                value={educationForm.fieldOfStudy}
                                onChange={handleInputChange}
                                required
                            />
                            {errors.fieldOfStudy && (
                                <div className="invalid-feedback">
                                    {errors.fieldOfStudy}
                                </div>
                            )}

                            {/* Institute */}
                            <label className="fw-semibold">Institute *</label>
                            <input
                                type="text"
                                name="institute"
                                className={`form-control mb-1 ${errors.institute ? "is-invalid" : ""}`}
                                value={educationForm.institute}
                                onChange={handleInputChange}
                                required
                            />
                            {errors.institute && (
                                <div className="invalid-feedback">
                                    {errors.institute}
                                </div>
                            )}

                            {/* Passing Year */}
                            <label className="fw-semibold">
                                Passing Year *
                            </label>
                            <input
                                type="number"
                                name="passingYear"
                                className={`form-control mb-3 ${errors.passingYear ? "is-invalid" : ""}`}
                                value={educationForm.passingYear}
                                onChange={handleInputChange}
                                required
                            />
                            {errors.passingYear && (
                                <div className="invalid-feedback">
                                    {errors.passingYear}
                                </div>
                            )}
                        </div>

                        <div className="modal-footer d-flex justify-content-between">
                            {educationData && (
                                <button
                                    className="btn btn-danger"
                                    onClick={handleDeleteEducation}>
                                    Delete
                                </button>
                            )}

                            <div>
                                <button
                                    className="btn btn-secondary me-2"
                                    onClick={onClose}>
                                    Cancel
                                </button>
                                <button
                                    className="btn btn-primary"
                                    onClick={handleSaveEducation}>
                                    Save
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal-backdrop fade show"></div>
        </>
    );
};

export default EditEducationModal;
