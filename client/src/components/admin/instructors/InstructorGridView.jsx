import React from "react";
import InstructorCard from "./InstructorCard";

const InstructorGridView = ({ instructors, onDelete }) => {
  return (
    <div>
      <div className="row mb-3 gy-3">
        {instructors.map((instructor) => {
          return (
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12" key={instructor.id}>
              <InstructorCard user={instructor} onDelete={onDelete} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default InstructorGridView;
