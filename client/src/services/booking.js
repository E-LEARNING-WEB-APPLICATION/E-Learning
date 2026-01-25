import apiClient from "@/utils/apiClient";

export const createBooking = async ({ courseId, instructorId }) => {
  try {
    const response = await apiClient.post("/api/v1/bookings", {
      courseId,
      instructorId,
    });

    return response.data;
  } catch (error) {
    if (error.response) {
      return error.response.data;
    }
    return {
      success: false,
      message: "Server error. Please try again.",
    };
  }
};

export const verifyPayment = async ({
  bookingId,
  razorpayOrderId,
  razorpayPaymentId,
  razorpaySignature,
}) => {
  await apiClient.post(`/api/v1/bookings/${bookingId}/verify-payment`, {
    razorpayOrderId,
    razorpayPaymentId,
    razorpaySignature,
  });
};
