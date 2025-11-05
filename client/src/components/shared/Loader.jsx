import React from "react";
import "./Loader.css";
import { FaSpinner } from "react-icons/fa";

const Loader = ({ text = "Loading...", size = 30, color = "#0d6efd" }) => {
  return (
    <div className="loader-wrapper text-center py-4">
      <div className="loader-circle mx-auto mb-3">
        <FaSpinner
          className="loader-spin-icon"
          size={size}
          style={{ color: color }}
        />
      </div>
      <h6 className="fw-semibold" style={{ color }}>
        {text}
      </h6>
      <p className="text-muted small mb-0">Please wait a moment</p>
    </div>
  );
};

export default Loader;
