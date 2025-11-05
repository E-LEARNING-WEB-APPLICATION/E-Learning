const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:4000";

export const getInstructors = async () => {
  const res = await fetch(`${BASE_URL}/instructors`);
  return res.json();
};

export const getAdminNotification = async () => {
  const res = await fetch(`${BASE_URL}/notifications`);
  return res.json();
};

export const getEducationData = async () => {
  const res = await fetch(`${BASE_URL}/educationdata`);
  return res.json();
};