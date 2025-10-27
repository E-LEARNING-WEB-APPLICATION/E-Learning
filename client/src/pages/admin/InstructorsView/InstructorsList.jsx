import React, { useEffect, useState } from "react";
import instructorData from "../../../../DummyData/Instructors.json";
import InstructorTableView from '../../../components/admin/instructors/InstructorTableView';
import InstructorGridView from '../../../components/admin/instructors/InstructorGridView';

const InstructorsList = () => {
  const [instructors, setInstructors] = useState([]);
  const [view, setView] = useState("table");

  const fetchInstructors = () => {
    setInstructors(instructorData);
  };

  const handleViewToggle = (view) => {
    view === "grid" ? setView("grid") : setView("table");
  };

  const handleRemove = (index) => {
    console.log(`remove ${index}`)
  }

  useEffect(() => {
    fetchInstructors();
  }, []);

  return (
    <div>
      <div className="container text-center">
        <div className="d-flex mb-3 justify-content-between align-items-center">
          <h4>Courses</h4>
          <div className="btn-group">
            <button
              type="button"
              className={`btn btn-primary ${view == "grid" ? "active" : ""}`}
              onClick={() => {
                handleViewToggle("grid");
              }}
            >
              <i className="bi bi-grid"></i>
            </button>
            <button
              type="button"
              className={`btn btn-primary ${view == "table" ? "active" : ""}`}
              onClick={() => {
                handleViewToggle("table");
              }}
            >
              <i className="bi bi-list"></i>
            </button>
          </div>
        </div>
        {view == "grid" && <InstructorGridView instructors={instructors} onDelete={handleRemove}/>}
        {view == "table" && <InstructorTableView instructors={instructors} handleRemove={handleRemove} />}
      </div>
    </div>
  );
};

export default InstructorsList;
