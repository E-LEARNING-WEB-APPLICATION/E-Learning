import React, { useState } from "react";
import { toast } from "react-toastify";
import {
  verifyEmailOtp,
  resendEmailVerificationOtp,
} from "@/services/authService";
import "./OtpVerificationModal.css";

const OtpVerificationModal = ({ email, onSuccess, onClose }) => {
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);

  const handleVerify = async () => {
    if (!otp) {
      toast.warning("Please enter the OTP");
      return;
    }

    setLoading(true);

    const response = await verifyEmailOtp({ email, otp });

    setLoading(false);

    if (response.success) {
      toast.success(response.message || "Email verified successfully");
      onSuccess();
    } else {
      toast.error(response.message || "Invalid OTP");
    }
  };

  const handleResendOtp = async () => {
    setLoading(true);

    const response = await resendEmailVerificationOtp({ email });

    setLoading(false);

    if (response.success) {
      toast.success("OTP resent to your email");
    } else {
      toast.error(response.message || "Failed to resend OTP");
    }
  };

  return (
    <>
      {/* Backdrop */}
      <div className="otp-backdrop" onClick={onClose} />

      {/* Modal */}
      <div className="otp-modal-container">
        <div className="otp-card shadow-lg">
          {/* Header */}
          <div className="otp-header text-center">
            <h4 className="fw-bold mb-1">Verify Your Email</h4>
            <p className="text-muted small mb-0">We sent a 6-digit OTP to</p>
            <p className="fw-semibold text-primary small">{email}</p>
          </div>

          {/* Body */}
          <div className="otp-body">
            <input
              type="text"
              maxLength="6"
              className="form-control otp-input text-center mb-3"
              placeholder="● ● ● ● ● ●"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />

            <button
              className="btn btn-primary w-100 fw-semibold mb-2"
              onClick={handleVerify}
              disabled={loading}
            >
              {loading ? "Verifying..." : "Verify OTP"}
            </button>

            <button
              className="btn btn-link w-100 otp-resend"
              onClick={handleResendOtp}
              disabled={loading}
            >
              Didn’t receive OTP? Resend
            </button>
          </div>

          {/* Footer */}
          {onClose && (
            <div className="otp-footer">
              <button
                className="btn btn-outline-secondary w-100"
                onClick={onClose}
              >
                Cancel
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default OtpVerificationModal;
