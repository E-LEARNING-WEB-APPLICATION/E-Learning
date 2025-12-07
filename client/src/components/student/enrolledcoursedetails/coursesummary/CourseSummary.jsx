// CourseSummary.jsx
import React from "react";
import { BiBookOpen, BiUser, BiFlag } from "react-icons/bi";
import { MdSubtitles } from "react-icons/md";
import { FiBookOpen, FiClock, FiAward, FiSmartphone } from "react-icons/fi";

const CourseSummary = () => {
  return (
    <div className="p-1 bg-white rounded summary-card">
      <h5 className="fw-bold mb-3">Summary</h5>

      <div className="row gy-3">
        {/* LEFT COLUMN */}
        <div className="col-md-6">
          <div className="d-flex align-items-center mb-3">
            <BiBookOpen size={22} className="me-2 text-secondary" />
            <span>Skill Level: All Levels</span>
          </div>

          <div className="d-flex align-items-center mb-3">
            <BiUser size={22} className="me-2 text-secondary" />
            <span>Students: 215,118</span>
          </div>

          <div className="d-flex align-items-center mb-3">
            <BiFlag size={22} className="me-2 text-secondary" />
            <span>Languages: EN, JP</span>
          </div>

          <div className="d-flex align-items-center mb-3">
            <MdSubtitles size={22} className="me-2 text-secondary" />
            <span>Captions: Yes</span>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="col-md-6">
          <div className="d-flex align-items-center mb-3">
            <FiBookOpen size={22} className="me-2 text-secondary" />
            <span>Lectures: 25</span>
          </div>

          <div className="d-flex align-items-center mb-3">
            <FiClock size={22} className="me-2 text-secondary" />
            <span>Duration: 6h</span>
          </div>

          <div className="d-flex align-items-center mb-3">
            <FiAward size={22} className="me-2 text-secondary" />
            <span>Certification: Yes</span>
          </div>

          <div className="d-flex align-items-center mb-3">
            <FiSmartphone size={22} className="me-2 text-secondary" />
            <span>App Support: Yes</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseSummary;
