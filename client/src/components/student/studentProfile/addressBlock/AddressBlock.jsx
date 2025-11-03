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
                                                    id="address_line1"
                                                    name="address_line1"
                                                    onChange={handleChangeAdd}
                                                    value={
                                                        formAdd.address_line1
                                                    }
                                                    placeholder="address"
                                                />
                                                <label htmlFor="address_line1">
                                                    Address Line 1
                                                </label>
                                            </div>

                                            <div className="form-floating mb-3">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="address_line2"
                                                    name="address_line2"
                                                    onChange={handleChangeAdd}
                                                    value={
                                                        formAdd.address_line2
                                                    }
                                                    placeholder="address"
                                                />
                                                <label htmlFor="address_line2">
                                                    Address Line 2
                                                </label>
                                            </div>
                                            <div className="form-floating mb-3">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="city"
                                                    name="city"
                                                    onChange={handleChangeAdd}
                                                    value={formAdd.city}
                                                    placeholder="city"
                                                />
                                                <label htmlFor="city">
                                                    City
                                                </label>
                                            </div>
                                            <div className="form-floating mb-3">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="state"
                                                    name="state"
                                                    onChange={handleChangeAdd}
                                                    value={formAdd.state}
                                                    placeholder="state"
                                                />
                                                <label htmlFor="state">
                                                    State
                                                </label>
                                            </div>
                                            <div className="form-floating mb-3">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="pincode"
                                                    name="pincode"
                                                    onChange={handleChangeAdd}
                                                    value={formAdd.pincode}
                                                    placeholder="pincode"
                                                />
                                                <label htmlFor="pincode">
                                                    Pincode
                                                </label>
                                            </div>
                                            <div className="form-floating mb-3">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="country"
                                                    name="country"
                                                    onChange={handleChangeAdd}
                                                    value={formAdd.country}
                                                    placeholder="country"
                                                />
                                                <label htmlFor="country">
                                                    Country
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
                                                    id="Enrollment_ID"
                                                    name="Enrollment_ID"
                                                    onChange={handleChange}
                                                    value={
                                                        formAcadamic.Enrollment_ID
                                                    }
                                                    placeholder="Enrollment_ID"
                                                />
                                                <label htmlFor="Enrollment_ID">
                                                    Enrollment ID
                                                </label>
                                            </div>
                                            <div className="form-floating mb-3">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="Program"
                                                    name="Program"
                                                    onChange={handleChange}
                                                    value={formAcadamic.Program}
                                                    placeholder="Program"
                                                />
                                                <label htmlFor="Program">
                                                    Program
                                                </label>
                                            </div>
                                            <div className="form-floating mb-3">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="Semester"
                                                    name="Semester"
                                                    onChange={handleChange}
                                                    value={
                                                        formAcadamic.Semester
                                                    }
                                                    placeholder="Semester"
                                                />
                                                <label htmlFor="Semester">
                                                    Semester
                                                </label>
                                            </div>
                                            <div className="form-floating mb-3">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="GPA"
                                                    name="GPA"
                                                    onChange={handleChange}
                                                    value={formAcadamic.GPA}
                                                    placeholder="GPA"
                                                />
                                                <label htmlFor="GPA">GPA</label>
                                            </div>
                                            <div className="form-floating mb-3">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="Courses_Enrolled"
                                                    name="Courses_Enrolled"
                                                    onChange={handleChange}
                                                    value={
                                                        formAcadamic.Courses_Enrolled
                                                    }
                                                    placeholder="Courses_Enrolled"
                                                />
                                                <label htmlFor="Courses_Enrolled">
                                                    Courses Enrolled
                                                </label>
                                            </div>
                                            <div className="form-floating mb-3">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="Certificates"
                                                    name="Certificates"
                                                    onChange={handleChange}
                                                    value={
                                                        formAcadamic.Certificates
                                                    }
                                                    placeholder="Certificates"
                                                />
                                                <label htmlFor="Certificates">
                                                    Certificates
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
                                                    console.log(formAcadamic);
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
