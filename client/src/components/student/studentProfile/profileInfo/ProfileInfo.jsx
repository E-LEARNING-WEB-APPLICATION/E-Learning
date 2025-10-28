import React, { useState } from "react";
import "./ProfileInfo.css";

const ProfileInfo = () => {
    const [form, setForm] = useState({
        dob: "",
        email: "",
        phoneno: "",
        gender: "",
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div>
            <div className="container">
                <div
                    className="card p-3 border shadow-sm"
                    style={{ justifyContent: "center" }}>
                    <button
                        type="button"
                        className="btn btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal">
                        Edit
                    </button>
                    <h5 className="fw-semibold text-primary">
                        D.O.B: <span className="text-dark">{form.dob}</span>
                    </h5>
                    <h5 className="fw-semibold text-primary">
                        Email: <span className="text-dark">{form.email}</span>
                    </h5>
                    <h5 className="fw-semibold text-primary">
                        Phone No:{" "}
                        <span className="text-dark">{form.phoneno}</span>
                    </h5>
                    <h5 className="fw-semibold text-primary">
                        Gender: <span className="text-dark">{form.gender}</span>
                    </h5>
                </div>
            </div>

            <div
                className="modal fade"
                id="exampleModal"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1
                                className="modal-title fs-5"
                                id="exampleModalLabel">
                                Edit Information
                            </h1>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="form-floating mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="dob"
                                    name="dob"
                                    onChange={handleChange}
                                    value={form.dob}
                                    placeholder="dob"
                                />
                                <label htmlFor="dob">Date of Birth</label>
                            </div>

                            <div className="form-floating mb-3">
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    name="email"
                                    onChange={handleChange}
                                    value={form.email}
                                    placeholder="email"
                                />
                                <label htmlFor="email">Email</label>
                            </div>

                            <div className="form-floating mb-3">
                                <input
                                    type="tel"
                                    className="form-control"
                                    id="phoneno"
                                    name="phoneno"
                                    onChange={handleChange}
                                    value={form.phoneno}
                                    placeholder="Phone No"
                                />
                                <label htmlFor="phoneno">Phone No</label>
                            </div>

                            <div className="form-floating mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="gender"
                                    name="gender"
                                    onChange={handleChange}
                                    value={form.gender}
                                    placeholder="Gender"
                                />
                                <label htmlFor="gender">Gender</label>
                            </div>
                        </div>
                        <div className="modal-footer">
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
                                onClick=
                                {(e) => {
                                    e.preventDefault();
                                    console.log(form);
                                }}
                                > Save changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileInfo;
