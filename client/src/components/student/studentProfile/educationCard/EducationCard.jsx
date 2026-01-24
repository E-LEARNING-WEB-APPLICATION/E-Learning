import React from "react";
import { FaGraduationCap, FaPlus } from "react-icons/fa";

const EducationCard = ({ education, openAdd, openEdit,page }) => {
    return (
        <div className="card p-4 shadow-sm border-0 rounded-4">
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h5 className="fw-bold text-primary">
                    <FaGraduationCap className="me-2" /> Education
                </h5>
                {page === "viewOnly" ? null : (
                <button
                    className="btn btn-sm btn-outline-primary"
                    onClick={openAdd}>
                    <FaPlus /> Add
                </button>)}
            </div>

            {education.map((edu, i) => (
                <div
                    key={i}
                    className="edu-item p-3 mb-3 rounded-3 d-flex justify-content-between">
                    <div>
                        <h6 className="fw-semibold">{edu.degree}</h6>
                        <p className="text-muted mb-0">{edu.institute}</p>
                        <p className="text-muted mb-0">{edu.fieldOfStudy}</p>
                        <small>{edu.passingYear}</small>
                    </div>
                    {page === "viewOnly" ? null : (
                    <button
                        className="btn btn-sm btn-outline-secondary"
                        onClick={() => openEdit(edu)}>
                        Edit
                    </button>)}
                </div>
            ))}
        </div>
    );
};

export default EducationCard;
