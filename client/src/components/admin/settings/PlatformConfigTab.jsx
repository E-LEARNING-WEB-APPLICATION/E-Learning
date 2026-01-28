import { FaPercentage, FaSave } from "react-icons/fa";

export const PlatformConfigTab = () => {
  return (
    <div className="row">
      <div className="col-lg-6">
        <div className="settings-card">
          <h5 className="fw-bold mb-3">
            <FaPercentage className="me-2 text-success" />
            Platform Commission
          </h5>

          <p className="text-muted small">
            Set the commission percentage deducted from instructor earnings.
          </p>

          <div className="input-group mb-3">
            <input
              type="number"
              className="form-control"
              placeholder="Commission Percentage"
            />
            <span className="input-group-text">%</span>
          </div>

          <button className="btn btn-success">
            <FaSave className="me-2" />
            Save Commission
          </button>
        </div>
      </div>
    </div>
  );
};
