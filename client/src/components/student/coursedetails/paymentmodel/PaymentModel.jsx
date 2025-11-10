// src/components/student/coursedetails/paymentmodel/PaymentModel.jsx
import React, { useEffect, useState } from "react";
import "./PaymentModel.css";
import { BsCheckLg } from "react-icons/bs";
import Loader from "../../../shared/Loader";

const PaymentModel = ({ show, onClose }) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  // Reset internal state whenever modal is closed (or opened)
  useEffect(() => {
    if (!show) {
      setIsProcessing(false);
      setPaymentSuccess(false);
    }
    if (show) {
      // ensure fresh state each time modal opens
      setIsProcessing(false);
      setPaymentSuccess(false);
    }
  }, [show]);

  if (!show) return null;

  const handlePayment = (e) => {
    e.preventDefault();
    setIsProcessing(true);

    // simulate payment delay
    setTimeout(() => {
      setIsProcessing(false);
      setPaymentSuccess(true);
    }, 2000);
  };

  const handleClose = () => {
    // reset then call parent's onClose
    setIsProcessing(false);
    setPaymentSuccess(false);
    onClose();
  };

  return (
    <div
      className="payment-overlay"
      role="dialog"
      aria-modal="true"
      aria-label="Payment dialog"
    >
      <div className="payment-box">
        {/* ===== Payment Success ===== */}
        {paymentSuccess ? (
          <div className="text-center py-4">
            <div className="success-circle mx-auto mb-3">
              <BsCheckLg size={32} />
            </div>
            <h5 className="fw-bold text-success mb-2">Payment Successful!</h5>
            <p className="text-muted mb-4">
              You are now enrolled in{" "}
              <strong>React Bootcamp for Beginners</strong>.
            </p>
            <button className="btn btn-primary px-4" onClick={handleClose}>
              Continue
            </button>
          </div>
        ) : isProcessing ? (
          /* ===== Processing State ===== */
          <Loader text="Processing Payment..." />
        ) : (
          /* ===== Payment Form ===== */
          <>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h5 className="fw-bold text-primary mb-0">Payment Details</h5>
              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={handleClose}
              ></button>
            </div>

            <p className="text-muted mb-3">
              Complete your payment for{" "}
              <strong>React Bootcamp for Beginners</strong>.
            </p>

            <form onSubmit={handlePayment}>
              <div className="mb-3">
                <label className="form-label fw-semibold">Name on Card</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">Card Number</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="1234 5678 9012 3456"
                  required
                />
              </div>

              <div className="row">
                <div className="col-6 mb-3">
                  <label className="form-label fw-semibold">Expiry</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="MM/YY"
                    required
                  />
                </div>
                <div className="col-6 mb-3">
                  <label className="form-label fw-semibold">CVV</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="***"
                    required
                  />
                </div>
              </div>

              <div className="d-flex justify-content-end gap-2 mt-3">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleClose}
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  Pay ₹999
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default PaymentModel;
