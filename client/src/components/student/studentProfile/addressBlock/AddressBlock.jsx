import React, { useState } from "react";
import "./AddressBlock";

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
    return (
        <div>
            <div className="container row p-3 border shadow-sm mb-3">
                <div className="col">
                    <div className="row row-cols-1 row-cols-md-2 mt-3 mb-3">
                        <div className="col">
                            <div
                                className="card p-3 border shadow-sm"
                                style={{ justifyContent: "center" }}>
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

                        <div className="col">
                            <div
                                className="card p-3 border shadow-sm"
                                style={{ justifyContent: "center" }}>
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
                                    GPA: <span className="text-dark">
                                        {formAcadamic.GPA}
                                    </span>
                                </h5>
                                <h5 className="fw-semibold text-primary">
                                    Courses Enrolled:{" "}
                                    <span className="text-dark">
                                        {formAcadamic.Courses_Enrolled}
                                    </span> |
                                    Certificates:{" "}
                                    <span className="text-dark">
                                        {formAcadamic.Certificates}
                                    </span>
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddressBlock;
