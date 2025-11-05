import React from "react";

const Popup = ({
    modalId,
    form,
    handleChange,
    onSave,
    onDelete,
    title,
    showDelete = false,
}) => {
    return (
        <section className="Academic-Form">
            <div
                className="modal fade"
                id={modalId}
                tabIndex="-1"
                aria-labelledby={`${modalId}Label`}
                aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1
                                className="modal-title fs-5"
                                id={`${modalId}Label`}>
                                {title}
                            </h1>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"></button>
                        </div>

                        <div className="modal-body">
                            {/* All input fields */}
                            {[
                                ["degree", "Degree", "text"],
                                ["field_of_study", "Field of Study", "text"],
                                ["institute", "Institute", "text"],
                                ["grade", "Grade", "text"],
                                ["description", "Description", "text"],
                                ["start_date", "Start Date", "date"],
                                ["end_date", "End Date", "date"],
                            ].map(([name, label, type]) => (
                                <div
                                    className="form-floating mb-3"
                                    key={name}>
                                    <input
                                        type={type}
                                        className="form-control"
                                        id={name}
                                        name={name}
                                        onChange={handleChange}
                                        value={form[name]}
                                        placeholder={name}
                                    />
                                    <label htmlFor={name}>{label}</label>
                                </div>
                            ))}
                        </div>

                        <div className="modal-footer">
                            {showDelete && (
                                <button
                                    type="button"
                                    className="btn btn-danger"
                                    data-bs-dismiss="modal"
                                    onClick={onDelete}>
                                    Delete
                                </button>
                            )}
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal">
                                Close
                            </button>
                            <button
                                type="button"
                                className="btn btn-primary"
                                data-bs-dismiss="modal"
                                onClick={onSave}>
                                Save changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Popup;
