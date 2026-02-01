import { updateCommission } from "@/services/admin/instructorService";
import { FaPercentage, FaSave } from "react-icons/fa";
import { useState } from "react";
import { toast } from "react-toastify";

export const PlatformConfigTab = () => {
  const [commission, setCommission] = useState("");

  const handleSave = async () => {
    try {
      await updateCommission(Number(commission)); 
      toast.success("Commission updated successfully");
    } catch (error) {
      toast.error(error.message);
    }
  };

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
              value={commission}
              onChange={(e) => setCommission(e.target.value)}
            />
            <span className="input-group-text">%</span>
          </div>

          <button
            className="btn btn-success"
            onClick={handleSave}
            disabled={!commission}
          >
            <FaSave className="me-2" />
            Save Commission
          </button>
        </div>
      </div>
    </div>
  );
};
