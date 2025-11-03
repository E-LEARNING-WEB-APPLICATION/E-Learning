import React, { useState } from "react";
import "./EducationBlock";
import { FaPencilAlt } from "react-icons/fa";
import JsonData from "../../../../../DummyData/Educationdata.json";

const EducationBlock = () => {
    const [selectedEducation, setSelectedEducation] = useState(null);
    
    const [educationData,setEducationData] = useState(JsonData)
    // Local form state for editing
    const [form, setForm] = useState({
        degree: "",
        field_of_study: "",
        institute: "",
        grade: "",
        description: "",
        start_date: "",
        end_date: "",
    });

    // Update form when user types
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    // Called when edit button is clicked — loads selected education into form
    const handleEditClick = (education,Index) => {
        setForm(education); // prefill modal form with this item’s data
        setSelectedEducation(Index)
        console.log(education);
    };

    // Called when user saves — right now just logs, but could update data
    const handleSave = (e) => {
        e.preventDefault();
        const updatedData = [...educationData];
        updatedData[selectedEducation] = form;
        setEducationData(updatedData);
        console.log("Updated education:", form);
        // TODO: Update educationData state if needed
    };
    const handleDelete = (e) => {
        e.preventDefault();
        const updatedData = [...educationData];
        updatedData.splice(selectedEducation,1)
        setEducationData(updatedData);
        console.log("Updated education:", form);
        // TODO: Update educationData state if needed
    };

    const handleAdd = (e) => {
        e.preventDefault();
        setEducationData([...educationData,form]);
    }

    return (
        <div>
            <div className="container row p-3 border shadow-sm mb-3">
                <div className="col">
                    <button
                        className="btn btn-success mb-1 d-flex justify-content-center align-items-center"
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target="#educationaddModal"
                        onClick={() => {
                            setForm({
                                degree: "",
                                field_of_study: "",
                                institute: "",
                                grade: "",
                                description: "",
                                start_date: "",
                                end_date: "",
                            });
                        }}>
                        Add Data
                    </button>
                    <section className="Academic-Form">
                        <div
                            className="modal fade"
                            id="educationaddModal"
                            tabIndex="-1"
                            aria-labelledby="exampleModalLabel"
                            aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h1
                                            className="modal-title fs-5"
                                            id="exampleModalLabel">
                                            Edit Education Details
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
                                                id="degree"
                                                name="degree"
                                                onChange={handleChange}
                                                value={form.degree}
                                                placeholder="degree"
                                            />
                                            <label htmlFor="degree">
                                                Degree
                                            </label>
                                        </div>

                                        <div className="form-floating mb-3">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="field_of_study"
                                                name="field_of_study"
                                                onChange={handleChange}
                                                value={form.field_of_study}
                                                placeholder="field_of_study"
                                            />
                                            <label htmlFor="field_of_study">
                                                Field of Study
                                            </label>
                                        </div>

                                        <div className="form-floating mb-3">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="institute"
                                                name="institute"
                                                onChange={handleChange}
                                                value={form.institute}
                                                placeholder="institute"
                                            />
                                            <label htmlFor="institute">
                                                Institute
                                            </label>
                                        </div>

                                        <div className="form-floating mb-3">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="grade"
                                                name="grade"
                                                onChange={handleChange}
                                                value={form.grade}
                                                placeholder="grade"
                                            />
                                            <label htmlFor="grade">Grade</label>
                                        </div>

                                        <div className="form-floating mb-3">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="description"
                                                name="description"
                                                onChange={handleChange}
                                                value={form.description}
                                                placeholder="description"
                                            />
                                            <label htmlFor="description">
                                                Description
                                            </label>
                                        </div>

                                        <div className="form-floating mb-3">
                                            <input
                                                type="date"
                                                className="form-control"
                                                id="start_date"
                                                name="start_date"
                                                onChange={handleChange}
                                                value={form.start_date}
                                                placeholder="start_date"
                                            />
                                            <label htmlFor="start_date">
                                                Start Date
                                            </label>
                                        </div>

                                        <div className="form-floating mb-3">
                                            <input
                                                type="date"
                                                className="form-control"
                                                id="end_date"
                                                name="end_date"
                                                onChange={handleChange}
                                                value={form.end_date}
                                                placeholder="end_date"
                                            />
                                            <label htmlFor="end_date">
                                                End Date
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
                                            onClick={handleAdd}>
                                            Save changes
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="row row-cols-1 row-cols-md-2 mt-3 mb-3">
                        {educationData.map((education, index) => (
                            <div
                                key={index}
                                className="col">
                                <div className="card p-3 mb-2 border shadow-sm position-relative">
                                    {/* Edit button opens modal and loads current education */}
                                    <button
                                        type="button"
                                        className="btn d-flex justify-content-center align-items-center button-edit"
                                        data-bs-toggle="modal"
                                        data-bs-target="#educationModal"
                                        onClick={() =>
                                            handleEditClick(education, index)
                                        }>
                                        <FaPencilAlt size={20} />
                                    </button>

                                    <h5 className="fw-semibold text-primary">
                                        Degree:{" "}
                                        <span className="text-dark">
                                            {education.degree}
                                        </span>
                                    </h5>
                                    <h5 className="fw-semibold text-primary">
                                        Field of Study:{" "}
                                        <span className="text-dark">
                                            {education.field_of_study}
                                        </span>
                                    </h5>
                                    <h5 className="fw-semibold text-primary">
                                        Institute:{" "}
                                        <span className="text-dark">
                                            {education.institute}
                                        </span>
                                    </h5>
                                    <h5 className="fw-semibold text-primary">
                                        Grade:{" "}
                                        <span className="text-dark">
                                            {education.grade}
                                        </span>
                                    </h5>
                                    <h5 className="fw-semibold text-primary">
                                        Description:{" "}
                                        <span className="text-dark">
                                            {education.description}
                                        </span>
                                    </h5>
                                    <h5 className="fw-semibold text-primary">
                                        Duration:{" "}
                                        <span className="text-dark">
                                            {education.start_date} –{" "}
                                            {education.end_date}
                                        </span>
                                    </h5>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Single Modal (shared by all cards) */}
            <section className="Academic-Form">
                <div
                    className="modal fade"
                    id="educationModal"
                    tabIndex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1
                                    className="modal-title fs-5"
                                    id="exampleModalLabel">
                                    Edit Education Details
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
                                        id="degree"
                                        name="degree"
                                        onChange={handleChange}
                                        value={form.degree}
                                        placeholder="degree"
                                    />
                                    <label htmlFor="degree">Degree</label>
                                </div>

                                <div className="form-floating mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="field_of_study"
                                        name="field_of_study"
                                        onChange={handleChange}
                                        value={form.field_of_study}
                                        placeholder="field_of_study"
                                    />
                                    <label htmlFor="field_of_study">
                                        Field of Study
                                    </label>
                                </div>

                                <div className="form-floating mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="institute"
                                        name="institute"
                                        onChange={handleChange}
                                        value={form.institute}
                                        placeholder="institute"
                                    />
                                    <label htmlFor="institute">Institute</label>
                                </div>

                                <div className="form-floating mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="grade"
                                        name="grade"
                                        onChange={handleChange}
                                        value={form.grade}
                                        placeholder="grade"
                                    />
                                    <label htmlFor="grade">Grade</label>
                                </div>

                                <div className="form-floating mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="description"
                                        name="description"
                                        onChange={handleChange}
                                        value={form.description}
                                        placeholder="description"
                                    />
                                    <label htmlFor="description">
                                        Description
                                    </label>
                                </div>

                                <div className="form-floating mb-3">
                                    <input
                                        type="date"
                                        className="form-control"
                                        id="start_date"
                                        name="start_date"
                                        onChange={handleChange}
                                        value={form.start_date}
                                        placeholder="start_date"
                                    />
                                    <label htmlFor="start_date">
                                        Start Date
                                    </label>
                                </div>

                                <div className="form-floating mb-3">
                                    <input
                                        type="date"
                                        className="form-control"
                                        id="end_date"
                                        name="end_date"
                                        onChange={handleChange}
                                        value={form.end_date}
                                        placeholder="end_date"
                                    />
                                    <label htmlFor="end_date">End Date</label>
                                </div>
                            </div>

                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-danger"
                                    data-bs-dismiss="modal"
                                onClick={handleDelete}>
                                    Delete
                                </button>
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
                                    onClick={handleSave}>
                                    Save changes
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default EducationBlock;
