import React, { useState } from "react";
import "./ActionSection.css";
import PaymentModel from "../paymentmodel/PaymentModel";
import { toast } from "react-toastify";

const ActionSection = ({ course }) => {
  const [showModal, setShowModel] = useState(false);

  const openModal = () => setShowModel(true);
  const closeModal = () => setShowModel(false);

  if (!course) return null;

  const originalPrice = course[0].fees;
  const discount = course[0].discount_percentage;
  const finalPrice =
    discount > 0
      ? originalPrice - (originalPrice * discount) / 100
      : originalPrice;

  const formatPrice = (price) =>
    price.toLocaleString("en-IN", { style: "currency", currency: "INR" });

  const handleFreeEnroll = () => {
    toast.success("🎉 You have successfully enrolled in this free course!");
  };

  return (
    <>
      <div className="action-card p-4 rounded shadow-sm">
        <div className="text-center mb-3 price-box">
          {course[0].fees === 0 ? (
            <>
              <h2 className="fw-bold text-success mb-1">Free Course 🎓</h2>
              <p className="text-muted small mb-0">
                Enroll now and start learning instantly
              </p>
            </>
          ) : (
            <>
              <div className="d-flex justify-content-center align-items-end gap-2 mb-1">
                {discount > 0 && (
                  <h5 className="text-muted text-decoration-line-through mb-0 fw-normal">
                    {formatPrice(originalPrice)}
                  </h5>
                )}
                <h2 className="fw-bold text-success mb-0 discounted-price">
                  {formatPrice(finalPrice)}
                </h2>
              </div>
              {discount > 0 && (
                <span className="discount-badge">{discount}% OFF</span>
              )}
              <p className="text-muted small mb-0">One-time Payment</p>
            </>
          )}
        </div>

        <hr />

        {/* ===== Course Features ===== */}
        <ul className="list-unstyled text-secondary small mb-4">
          <li className="mb-2">Lifetime Access</li>
          <li className="mb-2">Certificate on Completion</li>
          <li className="mb-2">Full HD Video Lessons</li>
          <li className="mb-2">Access on Mobile & Desktop</li>
        </ul>

        {/* ===== CTA Button ===== */}
        {course[0].fees === 0 ? (
          <button
            className="btn btn-success w-100 fw-semibold pay-btn"
            onClick={handleFreeEnroll}
          >
            Enroll Now →
          </button>
        ) : (
          <button
            className="btn btn-primary w-100 fw-semibold pay-btn"
            onClick={openModal}
          >
            Pay & Enroll
          </button>
        )}

        <p className="text-center mt-3 text-muted small">
          100% secure payment • Instant access after purchase
        </p>
      </div>
      <PaymentModel show={showModal} onClose={closeModal} />
    </>
  );
};

export default ActionSection;
