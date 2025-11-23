import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:4000";

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Get all instructors
export const getInstructors = async () => {
  try {
    const res = await api.get("/instructors");
    return res.data;
  } catch (error) {
    console.error("Error fetching instructors:", error);
    throw error;
  }
};

// Get admin notifications
export const getAdminNotification = async () => {
  try {
    const res = await api.get("/notifications");
    return res.data;
  } catch (error) {
    console.error("Error fetching admin notifications:", error);
    throw error;
  }
};

// Get education data
export const getEducationData = async () => {
  try {
    const res = await api.get("/educationdata");
    return res.data;
  } catch (error) {
    console.error("Error fetching education data:", error);
    throw error;
  }
};

// Get all courses
export const getAllCourses = async () => {
  try {
    const res = await api.get("/courses");
    return res.data;
  } catch (error) {
    console.error("Error fetching courses:", error);
    throw error;
  }
};

// Get course by ID
export const getCourseById = async (id) => {
  try {
    const res = await api.get("/courses");
    const { courses } = res.data;
    const course = courses.filter((course) => course.courseId == id);
    return course;
  } catch (error) {
    console.error(`Error fetching course with ID ${id}:`, error);
    throw error;
  }
};

// Get courses by instructor ID
export const getInstructorCourses = async (id) => {
  try {
    const res = await api.get("/courses");
    const { courses } = res.data;
    const instructorCourses = courses.filter((course) => course.iId == id);
    return instructorCourses;
  } catch (error) {
    console.error(`Error fetching courses for instructor ${id}:`, error);
    throw error;
  }
};

export const getInstructorById = async (id) => {
  try {
    const res = await api.get("/instructors");
    const instructors = res.data;
    const instructor = instructors.filter((inst) => inst.id == id);
    return instructor;
  } catch (error) {
    console.error(`Error fetching instructor with ID ${id}:`, error);
    throw error;
  }
};
