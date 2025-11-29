import React, { useEffect, useState } from "react";

const EditEducationModal = ({ show, onClose, data, onSave, onDelete }) => {
    const empty = { degree: "", college: "", year: "" };
    const [form, setForm] = useState(empty);

    useEffect(() => {
        if (data) setForm(data);
        else setForm(empty);
    }, [data, show]);

    const handleSave = () => {
        onSave(form);
        onClose();
    };

    const handleDelete = () => {
        onDelete(data); // pass the object to parent
        onClose();
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
                                {data ? "Edit Education" : "Add Education"}
                            </h5>
                            <button
                                className="btn-close"
                                onClick={onClose}></button>
                        </div>

                        <div className="modal-body">
                            <input
                                type="text"
                                className="form-control mb-3"
                                placeholder="Degree"
                                value={form.degree}
                                onChange={(e) =>
                                    setForm({ ...form, degree: e.target.value })
                                }
                            />

                            <input
                                type="text"
                                className="form-control mb-3"
                                placeholder="College"
                                value={form.college}
                                onChange={(e) =>
                                    setForm({
                                        ...form,
                                        college: e.target.value,
                                    })
                                }
                            />

                            <input
                                type="text"
                                className="form-control mb-3"
                                placeholder="Passing Year"
                                value={form.year}
                                onChange={(e) =>
                                    setForm({ ...form, year: e.target.value })
                                }
                            />
                        </div>

                        <div className="modal-footer d-flex justify-content-between">
                            {data && (
                                <button
                                    className="btn btn-danger"
                                    onClick={handleDelete}>
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
                                    onClick={handleSave}>
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
