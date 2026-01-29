import React, { useState } from "react";
import "./Login.css";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import {
  signIn,
  requestPasswordResetOtp,
  resetPassword,
} from "@/services/authService";
import { toast } from "react-toastify";
import { jwtDecode } from "jwt-decode";

const Login = () => {
  const navigate = useNavigate();

  const [showForgotModal, setShowForgotModal] = useState(false);
  const [resetEmail, setResetEmail] = useState("");

  const [showOtpModal, setShowOtpModal] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [otpData, setOtpData] = useState({
    otp: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await signIn(formData);

    if (response.success) {
      toast.success(response.message);
      localStorage.setItem("token", response.token);

      const decoded = jwtDecode(response.token);
      const role = decoded.role;
      localStorage.setItem("role", role);

      if (role === "ADMIN") navigate("/admin/dashboard");
      else if (role === "INSTRUCTOR") navigate("/instructor/addedCourses");
      else navigate("/student/dashboard");
    } else {
      toast.error(response.message);
    }
  };

  const handleForgotPassword = async () => {
    if (!resetEmail) {
      toast.error("Please enter your email");
      return;
    }

    const response = await requestPasswordResetOtp({ email: resetEmail });
    toast.success(response.message);
    setShowForgotModal(false);
    setShowOtpModal(true);
  };

  const handleOtpSubmit = async () => {
    const { otp, newPassword, confirmPassword } = otpData;

    if (!otp || !newPassword || !confirmPassword) {
      toast.error("All fields are required");
      return;
    }

    if (newPassword !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    const response = await resetPassword({
      email: resetEmail,
      otp: otp,
      newPassword: newPassword,
    });

    if (response.success) {
      toast.success(response.message || "Password reset successful");
      setShowOtpModal(false);
      setOtpData({
        otp: "",
        newPassword: "",
        confirmPassword: "",
      });
      setResetEmail("");
    } else {
      toast.error(response.message);
    }
  };

  return (
    <div className="outer-container">
      <div className="p-4 p-md-5 inner-container">
        <h2 className="text-center fw-bold mb-4" style={{ color: "#214979ff" }}>
          Login
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="form-floating mb-4">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              id="email"
              onChange={handleChange}
              required
            />
            <label>
              <FaEnvelope className="me-2" /> Email
            </label>
          </div>

          <div className="form-floating mb-2">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              id="password"
              onChange={handleChange}
              required
            />
            <label>
              <FaLock className="me-2" /> Password
            </label>
          </div>

          {/* Forgot Password */}
          <div className="text-end mb-4">
            <button
              type="button"
              className="btn btn-link p-0 fw-semibold"
              style={{ color: "#214979ff" }}
              onClick={() => setShowForgotModal(true)}
            >
              Forgot password?
            </button>
          </div>

          <button type="submit" className="button-style fw-semibold w-100">
            Login
          </button>

          <p className="text-center mt-4">
            Don't have an account?{" "}
            <button
              type="button"
              className="text-decoration-underline fw-semibold btn btn-link"
              style={{ color: "#112d4e" }}
              onClick={() => navigate("/guest/student-registration")}
            >
              Register here
            </button>
          </p>
        </form>
      </div>

      {/* Forgot Password Modal */}
      {showForgotModal && (
        <>
          {/* Backdrop */}
          <div
            className="modal-backdrop fade show"
            onClick={() => setShowForgotModal(false)}
          />

          <div className="modal fade show d-block" tabIndex="-1" role="dialog">
            <div className="modal-dialog modal-top modal-pop-from-top">
              <div className="modal-content shadow-lg border-0 rounded-4">
                {/* Header */}
                <div className="modal-header bg-primary text-white rounded-top-4">
                  <h5 className="modal-title fw-semibold">Reset Password</h5>
                  <button
                    type="button"
                    className="btn-close btn-close-white"
                    onClick={() => setShowForgotModal(false)}
                  />
                </div>

                {/* Body */}
                <div className="modal-body px-4 py-3">
                  <p className="text-muted mb-3">
                    Enter your registered email to receive an OTP.
                  </p>

                  <input
                    type="email"
                    className="form-control form-control-lg"
                    placeholder="Email address"
                    value={resetEmail}
                    onChange={(e) => setResetEmail(e.target.value)}
                  />
                </div>

                {/* Footer */}
                <div className="modal-footer px-4">
                  <button
                    className="btn btn-outline-secondary"
                    onClick={() => setShowForgotModal(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className="btn btn-primary px-4"
                    onClick={handleForgotPassword}
                  >
                    Send OTP
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {showOtpModal && (
        <>
          <div
            className="modal-backdrop fade show"
            onClick={() => setShowOtpModal(false)}
          />

          <div className="modal fade show d-block" tabIndex="-1">
            <div className="modal-dialog modal-top modal-pop-from-top">
              <div className="modal-content shadow-lg border-0 rounded-4">
                <div className="modal-header bg-success text-white">
                  <h5 className="modal-title fw-semibold">Verify OTP</h5>
                  <button
                    type="button"
                    className="btn-close btn-close-white"
                    onClick={() => setShowOtpModal(false)}
                  />
                </div>

                <div className="modal-body px-4 py-3">
                  <input
                    type="text"
                    className="form-control mb-3"
                    placeholder="Enter 6-digit OTP"
                    value={otpData.otp}
                    onChange={(e) =>
                      setOtpData({ ...otpData, otp: e.target.value })
                    }
                  />

                  <input
                    type="password"
                    className="form-control mb-3"
                    placeholder="New password"
                    value={otpData.newPassword}
                    onChange={(e) =>
                      setOtpData({ ...otpData, newPassword: e.target.value })
                    }
                  />

                  <input
                    type="password"
                    className="form-control"
                    placeholder="Confirm password"
                    value={otpData.confirmPassword}
                    onChange={(e) =>
                      setOtpData({
                        ...otpData,
                        confirmPassword: e.target.value,
                      })
                    }
                  />
                </div>

                <div className="modal-footer px-4">
                  <button
                    className="btn btn-outline-secondary"
                    onClick={() => setShowOtpModal(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className="btn btn-success px-4"
                    onClick={handleOtpSubmit}
                  >
                    Reset Password
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Login;
