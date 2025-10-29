import React, { useState } from "react";
import "./AddressBlock";
import { FaPencilAlt } from "react-icons/fa";

const AddressBlock = () => {
    const [formAdd, setFormAdd] = useState({
        address_line1: "",
        address_line2: "",
        city: "",
        state: "",
        pincode: "",
        country: "",
    });
    const [formAcadamic, setformAcadamic] = useState({
        Enrollment_ID: "",
        Program: "",
        Semester: "",
        GPA: "",
        Courses_Enrolled: "",
        Certificates: "",
    });
    const handleChangeAdd = (e) => {
        setFormAdd({
            ...formAdd,
            [e.target.name]: e.target.value,
        });
    };
    const handleChange = (e) => {
        setformAcadamic({
            ...formAcadamic,
            [e.target.name]: e.target.value,
        });
    };
    return (
        <div>
            <div className="container row p-3 border shadow-sm mb-3">
                <div className="col">
                    <div className="row row-cols-1 row-cols-md-2 mt-3 mb-3">
                        <section className="Address-detail">
                            <div className="col">
                                <div className="card p-3 border shadow-sm">
                                    <button
                                        type="button "
                                        className="btn d-flex justify-content-center align-items-center button-edit"
                                        data-bs-toggle="modal"
                                        data-bs-target="#addressModal">
                                        <FaPencilAlt size={20} />
                                    </button>
                                    <h5 className="fw-semibold text-primary">
                                        Address Line 1:{" "}
                                        <span className="text-dark">
                                            {formAdd.address_line1}
                                        </span>
                                    </h5>
                                    <h5 className="fw-semibold text-primary">
                                        Address Line 2:{" "}
                                        <span className="text-dark">
                                            {formAdd.address_line2}
                                        </span>
                                    </h5>
                                    <h5 className="fw-semibold text-primary">
                                        City:{" "}
                                        <span className="text-dark">
                                            {formAdd.city}
                                        </span>
                                    </h5>
                                    <h5 className="fw-semibold text-primary">
                                        State:{" "}
                                        <span className="text-dark">
                                            {formAdd.state}
                                        </span>
                                    </h5>
                                    <h5 className="fw-semibold text-primary">
                                        Pincode:{" "}
                                        <span className="text-dark">
                                            {formAdd.pincode}
                                        </span>
                                    </h5>
                                    <h5 className="fw-semibold text-primary">
                                        Country:{" "}
                                        <span className="text-dark">
                                            {formAdd.country}
                                        </span>
                                    </h5>
                                </div>
                            </div>
                        </section>
                        <section className="acadamic-detail">
                            <div className="col">
                                <div className="card p-3 border shadow-sm">
                                    <button
                                        type="button "
                                        className="btn d-flex justify-content-center align-items-center button-edit"
                                        data-bs-toggle="modal"
                                        data-bs-target="#academicModal">
                                        <FaPencilAlt size={20} />
                                    </button>
                                    <h5 className="fw-semibold text-primary">
                                        Enrollment ID:{" "}
                                        <span className="text-dark">
                                            {formAcadamic.Enrollment_ID}
                                        </span>
                                    </h5>
                                    <h5 className="fw-semibold text-primary">
                                        Program:{" "}
                                        <span className="text-dark">
                                            {formAcadamic.Program}
                                        </span>
                                    </h5>
                                    <h5 className="fw-semibold text-primary">
                                        Semester:{" "}
                                        <span className="text-dark">
                                            {formAcadamic.Semester}
                                        </span>
                                    </h5>
                                    <h5 className="fw-semibold text-primary">
                                        GPA:{" "}
                                        <span className="text-dark">
                                            {formAcadamic.GPA}
                                        </span>
                                    </h5>
                                    <h5 className="fw-semibold text-primary">
                                        Courses Enrolled:{" "}
                                        <span className="text-dark">
                                            {formAcadamic.Courses_Enrolled}
                                        </span>{" "}
                                        | Certificates:{" "}
                                        <span className="text-dark">
                                            {formAcadamic.Certificates}
                                        </span>
                                    </h5>
                                </div>
                            </div>
                        </section>
                        <section className="Address-Form">
                            <div
                                className="modal fade"
                                id="addressModal"
                                tabIndex="-1"
                                aria-labelledby="exampleModalLabel"
                                aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h1
                                                className="modal-title fs-5"
                                                id="exampleModalLabel">
                                                Edit Address Detail
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
                                                    onChange={handleChangeAdd}
                                                    value={formAdd.dob}
                                                    placeholder="dob"
                                                />
                                                <label htmlFor="dob">
                                                    Date of Birth
                                                </label>
                                            </div>
                                            <div className="form-floating mb-3">
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    id="email"
                                                    name="email"
                                                    onChange={handleChangeAdd}
                                                    value={formAdd.email}
                                                    placeholder="email"
                                                />
                                                <label htmlFor="email">
                                                    Email
                                                </label>
                                            </div>
                                            <div className="form-floating mb-3">
                                                <input
                                                    type="tel"
                                                    className="form-control"
                                                    id="phoneno"
                                                    name="phoneno"
                                                    onChange={handleChangeAdd}
                                                    value={formAdd.phoneno}
                                                    placeholder="Phone No"
                                                />
                                                <label htmlFor="phoneno">
                                                    Phone No
                                                </label>
                                            </div>
                                            <div className="form-floating mb-3">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="gender"
                                                    name="gender"
                                                    onChange={handleChangeAdd}
                                                    value={formAdd.gender}
                                                    placeholder="Gender"
                                                />
                                                <label htmlFor="gender">
                                                    Gender
                                                </label>
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
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    console.log(formAdd);
                                                }}>
                                                {" "}
                                                Save changes
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="Academic-Form">
                            <div
                                className="modal fade"
                                id="academicModal"
                                tabIndex="-1"
                                aria-labelledby="exampleModalLabel"
                                aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h1
                                                className="modal-title fs-5"
                                                id="exampleModalLabel">
                                                Edit Academic Details
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
                                                    value={formAdd.dob}
                                                    placeholder="dob"
                                                />
                                                <label htmlFor="dob">
                                                    Date of Birth
                                                </label>
                                            </div>
                                            <div className="form-floating mb-3">
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    id="email"
                                                    name="email"
                                                    onChange={handleChange}
                                                    value={formAdd.email}
                                                    placeholder="email"
                                                />
                                                <label htmlFor="email">
                                                    Email
                                                </label>
                                            </div>
                                            <div className="form-floating mb-3">
                                                <input
                                                    type="tel"
                                                    className="form-control"
                                                    id="phoneno"
                                                    name="phoneno"
                                                    onChange={handleChange}
                                                    value={formAdd.phoneno}
                                                    placeholder="Phone No"
                                                />
                                                <label htmlFor="phoneno">
                                                    Phone No
                                                </label>
                                            </div>
                                            <div className="form-floating mb-3">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="gender"
                                                    name="gender"
                                                    onChange={handleChange}
                                                    value={formAdd.gender}
                                                    placeholder="Gender"
                                                />
                                                <label htmlFor="gender">
                                                    Gender
                                                </label>
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
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    console.log(formAdd);
                                                }}>
                                                {" "}
                                                Save changes
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddressBlock;
