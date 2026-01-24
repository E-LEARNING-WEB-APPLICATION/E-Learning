import React, { useEffect, useState } from "react";

const EditEducationModal = ({ show, onClose, data, onSave, onDelete }) => {
    const empty = {
        degree: "",
        fieldOfStudy: "",
        institute: "",
        passingYear: "",
    };

    const [form, setForm] = useState(empty);

    useEffect(() => {
        if (data) setForm(data);
        else setForm(empty);
    }, [data, show]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSave = () => {
        onSave({
            ...form,
            passingYear: Number(form.passingYear), // ✅ ensure number
        });
        onClose();
    };

    const handleDelete = () => {
        onDelete(data);
        onClose();
    };

    if (!show) return null;

    return (
        <>
            <div className="modal fade show d-block" tabIndex="-1">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">

                        <div className="modal-header">
                            <h5 className="modal-title">
                                {data ? "Edit Education" : "Add Education"}
                            </h5>
                            <button className="btn-close" onClick={onClose} />
                        </div>

                        <div className="modal-body">
                            {/* Degree */}
                            <label className="fw-semibold">Degree</label>
                            <input
                                type="text"
                                name="degree"
                                className="form-control mb-3"
                                value={form.degree}
                                onChange={handleChange}
                            />

                            {/* Field of Study */}
                            <label className="fw-semibold">Field of Study</label>
                            <input
                                type="text"
                                name="fieldOfStudy"
                                className="form-control mb-3"
                                value={form.fieldOfStudy}
                                onChange={handleChange}
                            />

                            {/* Institute */}
                            <label className="fw-semibold">Institute</label>
                            <input
                                type="text"
                                name="institute"
                                className="form-control mb-3"
                                value={form.institute}
                                onChange={handleChange}
                            />

                            {/* Passing Year */}
                            <label className="fw-semibold">Passing Year</label>
                            <input
                                type="number"
                                name="passingYear"
                                className="form-control mb-3"
                                value={form.passingYear}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="modal-footer d-flex justify-content-between">
                            {data && (
                                <button
                                    className="btn btn-danger"
                                    onClick={handleDelete}
                                >
                                    Delete
                                </button>
                            )}

                            <div>
                                <button
                                    className="btn btn-secondary me-2"
                                    onClick={onClose}
                                >
                                    Cancel
                                </button>
                                <button
                                    className="btn btn-primary"
                                    onClick={handleSave}
                                >
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
