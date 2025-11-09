import React, { useEffect, useState } from "react";
import "./EducationBlock";
import { FaPencilAlt } from "react-icons/fa";
import Popup from "../educationPopUp/EducationPopUp";
import { getEducationData } from "@/api/api";

const EducationBlock = () => {
  const [selectedEducation, setSelectedEducation] = useState(null);

  const [educationData, setEducationData] = useState([]);

  useEffect(() => {
    getEducationData().then((data) => setEducationData(data));
  }, []);
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
  const handleEditClick = (education, Index) => {
    setForm(education); // prefill modal form with this item’s data
    setSelectedEducation(Index);
    console.log(education);
  };

  // Called when user saves — right now just logs, but could update data
  const handleSave = (e) => {
    e.preventDefault();
    const updatedData = [...educationData];
    updatedData[selectedEducation] = form;
    setEducationData(updatedData);
    console.log("Updated education:", form);
  };

  const handleDelete = (e) => {
    e.preventDefault();
    const updatedData = [...educationData];
    updatedData.splice(selectedEducation, 1);
    setEducationData(updatedData);
    console.log("Updated education:", form);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    setEducationData([...educationData, form]);
  };

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
            }}
          >
            Add Data
          </button>
          <Popup
            modalId={"educationaddModal"}
            title={"Add Education"}
            form={form}
            handleChange={handleChange}
            onSave={handleAdd}
          />

          <div className="row row-cols-1 row-cols-md-2 mt-3 mb-3">
            {educationData.map((education, index) => (
              <div key={index} className="col">
                <div className="card p-3 mb-2 border shadow-sm position-relative">
                  {/* Edit button opens modal and loads current education */}
                  <button
                    type="button"
                    className="btn d-flex justify-content-center align-items-center button-edit"
                    data-bs-toggle="modal"
                    data-bs-target="#educationModal"
                    onClick={() => handleEditClick(education, index)}
                  >
                    <FaPencilAlt size={20} />
                  </button>

                  <h5 className="fw-semibold text-primary">
                    Degree:{" "}
                    <span className="text-dark">{education.degree}</span>
                  </h5>
                  <h5 className="fw-semibold text-primary">
                    Field of Study:{" "}
                    <span className="text-dark">
                      {education.field_of_study}
                    </span>
                  </h5>
                  <h5 className="fw-semibold text-primary">
                    Institute:{" "}
                    <span className="text-dark">{education.institute}</span>
                  </h5>
                  <h5 className="fw-semibold text-primary">
                    Grade: <span className="text-dark">{education.grade}</span>
                  </h5>
                  <h5 className="fw-semibold text-primary">
                    Description:{" "}
                    <span className="text-dark">{education.description}</span>
                  </h5>
                  <h5 className="fw-semibold text-primary">
                    Duration:{" "}
                    <span className="text-dark">
                      {education.start_date} – {education.end_date}
                    </span>
                  </h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Popup
        modalId={"educationModal"}
        title={"Edit Education Detail"}
        form={form}
        handleChange={handleChange}
        onSave={handleSave}
        showDelete="true"
        onDelete={handleDelete}
      />
    </div>
  );
};

export default EducationBlock;
