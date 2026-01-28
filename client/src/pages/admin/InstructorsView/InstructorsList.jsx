import React, { useEffect, useState } from "react";
import { IoGridOutline } from "react-icons/io5";
import { LuTableOfContents } from "react-icons/lu";

import InstructorTableView from "@/components/admin/instructors/InstructorTableView";
import InstructorGridView from "@/components/admin/instructors/InstructorGridView";
import { fetchAllInstructors } from "@/services/admin/instructorService";

const InstructorsList = () => {
  const [instructors, setInstructors] = useState([]);
  const [view, setView] = useState("table");

  const fetchInstructors = () => {
    fetchAllInstructors().then((data) => setInstructors(data));
  };

  const handleViewToggle = (view) => {
    view === "grid" ? setView("grid") : setView("table");
  };

  const handleRemove = (index) => {
    console.log(`remove ${index}`);
  };

  useEffect(() => {
    fetchInstructors();
  }, []);

  return (
    <div>
      <div className="container text-center">
        <div className="d-flex mb-3 justify-content-between align-items-center">
          <h4>Instructors</h4>
          <div className="btn-group">
            <button
              type="button"
              className={`btn btn-primary ${view == "grid" ? "active" : ""}`}
              onClick={() => {
                handleViewToggle("grid");
              }}
            >
              <IoGridOutline />
            </button>
            <button
              type="button"
              className={`btn btn-primary ${view == "table" ? "active" : ""}`}
              onClick={() => {
                handleViewToggle("table");
              }}
            >
              <LuTableOfContents />
            </button>
          </div>
        </div>
        {view == "grid" && (
          <InstructorGridView
            instructors={instructors}
            onDelete={handleRemove}
          />
        )}
        {view == "table" && (
          <InstructorTableView
            instructors={instructors}
            handleRemove={handleRemove}
          />
        )}
      </div>
    </div>
  );
};

export default InstructorsList;
