import React, { useState } from "react";
import "./ActionSection.css";
import { toast } from "react-toastify";
import { createBooking, verifyPayment } from "@/services/booking";
import Loader from "@/components/shared/Loader";
import { useNavigate } from "react-router-dom";

const ActionSection = ({ course }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [bookingContext, setBookingContext] = useState(null);
  const [isVerifying, setIsVerifying] = useState(false);
  const [isEnrolled, setIsEnrolled] = useState(false);

  const navigate = useNavigate();
  if (!course) return null;

  // ===== Price Calculation (UI ONLY) =====
  const originalPrice = course.fees;
  const discount = course.discountPercentage;
  const finalPrice =
    discount > 0
      ? originalPrice - (originalPrice * discount) / 100
      : originalPrice;

  const formatPrice = (price) =>
    price.toLocaleString("en-IN", { style: "currency", currency: "INR" });

  // ===== Free Course Flow =====
  const handleFreeEnroll = () => {
    console.log(bookingContext);
    toast.success("🎉 You have successfully enrolled in this free course!");
  };

  // ===== Paid Course Flow =====
  const handlePayClick = async () => {
    if (isEnrolled) return;

    try {
      setIsLoading(true);

      const booking = await createBooking({
        courseId: course.courseId,
        instructorId: course.iid,
      });

      setBookingContext(booking.data);

      if (!booking.success) {
        toast.warn(
          <div className="toast-card">
            <div className="toast-icon warn">🎓</div>
            <div>
              <h6 className="toast-title">Already Enrolled</h6>
              <p className="toast-text">
                You already have access to this course.
              </p>
            </div>
          </div>,
        );

        setIsEnrolled(true);
        return;
      }

      console.log("Booking created successfully:", booking);

      const options = {
        key: "rzp_test_S7JIma01VWtilE",
        amount: booking.data.amount, // paise
        currency: booking.data.currency,
        order_id: booking.data.razorpayOrderId,

        name: "LearnEase",
        description: "Course Enrollment",

        handler: async function (response) {
          try {
            setIsVerifying(true);

            console.log(response);

            await verifyPayment({
              bookingId: booking.data.bookingId,
              razorpayOrderId: response.razorpay_order_id,
              razorpayPaymentId: response.razorpay_payment_id,
              razorpaySignature: response.razorpay_signature,
            });

            toast.success(
              <div className="toast-card">
                <div className="toast-icon success">🎉</div>
                <div>
                  <h6 className="toast-title">Enrollment Successful</h6>
                  <p className="toast-text">
                    You now have lifetime access to this course.
                  </p>
                </div>
              </div>,
            );

            setIsEnrolled(true);
            navigate("/student/mycourses");
          } catch {
            toast.error(
              <div className="toast-card">
                <div className="toast-icon error">❌</div>
                <div>
                  <h6 className="toast-title">Payment Failed</h6>
                  <p className="toast-text">
                    Verification failed. If money was deducted, please contact
                    support.
                  </p>
                </div>
              </div>,
            );
          } finally {
            setIsVerifying(false);
          }
        },

        modal: {
          ondismiss: function () {
            console.log("Payment popup closed by user");
            toast.info(
              <div className="toast-card">
                <div className="toast-icon info">⏳</div>
                <div>
                  <h6 className="toast-title">Payment Incomplete</h6>
                  <p className="toast-text">
                    Payment was not completed. You can retry anytime.
                  </p>
                </div>
              </div>,
            );
          },
        },

        theme: {
          color: "#0d6efd",
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch {
      toast.error(
        <div className="toast-card">
          <div className="toast-icon error">❌</div>
          <div>
            <h6 className="toast-title">Payment Failed</h6>
            <p className="toast-text">
              Verification failed. If money was deducted, please contact
              support.
            </p>
          </div>
        </div>,
      );
    } finally {
      setIsLoading(false);
    }
  };

  // ===== Loading State UI =====
  if (isLoading || isVerifying) {
    return (
      <div className="action-card p-4 rounded shadow-sm">
        <Loader text="Verifying payment securely..." />
      </div>
    );
  }

  return (
    <>
      <div className="action-card p-4 rounded shadow-sm">
        <div className="text-center mb-3 price-box">
          {course.fees === 0 ? (
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
        {course.fees === 0 ? (
          <button
            className="btn btn-success w-100 fw-semibold pay-btn"
            onClick={handleFreeEnroll}
          >
            Enroll Now →
          </button>
        ) : (
          <button
            className="btn btn-primary w-100 fw-semibold pay-btn"
            onClick={handlePayClick}
            disabled={isEnrolled}
          >
            Pay & Enroll
          </button>
        )}

        {isEnrolled && (
          <p className="text-success text-center mt-3 fw-semibold">
            Congratulation 🎉 You are enrolled in this course
          </p>
        )}

        <p className="text-center mt-3 text-muted small">
          100% secure payment • Instant access after purchase
        </p>
      </div>
    </>
  );
};

export default ActionSection;
