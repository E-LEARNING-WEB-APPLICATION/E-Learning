import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import StudentLayout from "./components/student/layout/StudentLayout";
import StudentDashboard from "./pages/student/dashboard/Dashboard";
import InstructorDashboard from "./pages/instructor/dashboard/Dashboard";
import MyCourses from "./pages/student/mycourses/MyCourses";
import WishList from "./pages/student/wishlist/WishList";
import InstructorLayout from "./components/instructor/layout/InstructorLayout";
import AddCourse from "./pages/instructor/AddCourse/AddCourse";
import AddedCourses from "./pages/instructor/AddedCourses/AddedCourses";
import AddSection from "./pages/instructor/AddSection/AddSection";
import ShowSection from "./pages/instructor/ShowSections/ShowSection";
import ShowTopic from "./pages/instructor/ShowTopics/ShowTopic";
import GuestLayout from "./components/guest/layout/GuestLayout";
import InstructorRegistration from "./pages/guest/instructorRegister/InstructorRegistration";
import StudentRegistration from "./pages/guest/studentRegister/StudentRegistration";
import Login from "./pages/guest/login/Login";
import AboutUs from "./pages/aboutUs/AboutUs";
import ContactUs from "./pages/contactUs/ContactUs";
import { ToastContainer } from "react-toastify";
import AdminLayout from "./components/admin/layout/AdminLayout";
import AdminDashboard from "./pages/admin/Dashboard/AdminDashboard";
import AdminCourses from "./pages/admin/CoursesView/AdminCourses";
import InstructorsList from "./pages/admin/InstructorsView/InstructorsList";
import InstructorRequests from "./pages/admin/InstrcutorRequests/InstructorRequest";
import StudentProfile from "./pages/student/studentProfile/StudentProfile";
import InstructorCourses from "./pages/admin/InstructorsView/InstructorCourses";
import CourseDetails from "./pages/student/coursedetails/CourseDetails";
import CourseEnrolledPage from "./pages/student/enrolledcoursedetails/CourseEnrolledPage";
import InstructorProfile from "./pages/instructor/instructorProfile/InstructorProfile";
import AdminCourseDetails from "./pages/admin/CoursesView/AdminCourseDetails";
import AdminCategoryPage from "./pages/admin/AddCategory/AdminCategoryPage";
import AnalyticsLayout from "./pages/analytics/AnalyticsLayout";
import CourseAnalyticsPage from "./pages/analytics/course/CourseAnalyticsPage";
import StudentAnalyticsPage from "./pages/analytics/student/StudentAnalyticsPage";
import InstructorAnalyticsPage from "./pages/analytics/instructors/InstructorAnalyticsPage";
import ProfileView from "./pages/profileView/ProfileView";
import CategoryCourses from "./pages/student/categorycourses/CategoryCourses";
import AddAdminPage from "./pages/admin/RegisterAdmin/AddAdminPage";
import { useNotificationSSE } from "./hooks/useNotificationSse";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getWishlistCount } from "./services/wishlist";
import { setWishlistCount } from "./slices/wishlist/wishlistSlice";
import NotificationPage from "./pages/admin/Notifications/NotificationPage";
import GuestDashboard from "./pages/guest/dashboard/GuestDashboard";
import { getToken } from "./utils/auth";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import StudentNotificationsPage from "./pages/student/notifications/StudentNotifications";
import AdminSettings from "./pages/admin/Settings/AdminSettings";
import EditCourse from "./pages/instructor/EditCourse/EditCourse";
import EditSection from "./pages/instructor/EditSection/EditSection";
import UpdateTopic from "./pages/instructor/UpdateTopic/UpdateTopic";

function App() {
  useNotificationSSE();

  const dispatch = useDispatch();

  useEffect(() => {
    const initWishlistCount = async () => {
      const token = getToken();
      if (!token) return;

      const response = await getWishlistCount();
      if (response?.count !== undefined) {
        dispatch(setWishlistCount(response.count));
      }
    };

    initWishlistCount();
  }, [dispatch]);

  return (
    <>
      <div>
        <ToastContainer />
        <Routes>
          {/* Redirect root to /guest */}
          <Route path="/" element={<Navigate to="/guest" />} />
          <Route path="/guest" element={<GuestLayout />}>
            <Route path="" element={<GuestDashboard />} />
            <Route
              path="courses/category/:categoryId"
              element={<CategoryCourses />}
            />
            <Route
              path="instructor-registration"
              element={<InstructorRegistration />}
            />
            <Route
              path="student-registration"
              element={<StudentRegistration />}
            />
            <Route path="login" element={<Login />} />
            <Route path="aboutus" element={<AboutUs />} />
            <Route path="contactus" element={<ContactUs />} />
          </Route>
          {/* Student Routes */}
          <Route element={<ProtectedRoute allowedRoles={["STUDENT"]} />}>
            <Route path="/student" element={<StudentLayout />}>
              <Route path="dashboard" element={<StudentDashboard />} />
              <Route path="course-details" element={<CourseDetails />} />
              <Route path="mycourses" element={<MyCourses />} />
              <Route path="wishlist" element={<WishList />} />
              <Route
                path="notifications"
                element={<StudentNotificationsPage />}
              />
              <Route path="aboutus" element={<AboutUs />} />
              <Route path="contactus" element={<ContactUs />} />
              <Route path="profile" element={<StudentProfile />} />
              <Route
                path="enrolled-course-details"
                element={<CourseEnrolledPage />}
              />
              <Route
                path="courses/category/:categoryId"
                element={<CategoryCourses />}
              />
            </Route>
          </Route>
          {/* Instructor Routes */}
          <Route element={<ProtectedRoute allowedRoles={["INSTRUCTOR"]} />}>
            <Route path="/instructor" element={<InstructorLayout />}>
              <Route path="dashboard" element={<InstructorDashboard />} />
              <Route path="addCourse" element={<AddCourse />} />
              <Route path="addedCourses" element={<AddedCourses />} />
              <Route path="addedCourses/add-section/:courseId" element={<AddSection />} />
              <Route path="addedCourses/editCourse/:courseId" element={<EditCourse />} />
              <Route path="profile" element={<InstructorProfile />} />
              <Route path="aboutus" element={<AboutUs />} />
              <Route
              path="addedCourses/show-sections/:courseId"
              element={<ShowSection />}
            />
            <Route
              path="addedCourses/editSection/:sectionId"
              element={<EditSection />}
            />
            instructor/addedCourses/editSection
              <Route
              path="addedCourses/show-sections/show-topics/:sectionId"
              element={<ShowTopic />}
            />
              <Route
                path="addedCourses/show-sections/update-topic/:topicId"
                element={<UpdateTopic />}
              />

            </Route>
          </Route>
          {/* Admin Routes */}
          <Route element={<ProtectedRoute allowedRoles={["ADMIN"]} />}>
            <Route path="/admin" element={<AdminLayout />}>
              <Route path="dashboard" element={<AdminDashboard />} />
              <Route
                path="courses/:courseId"
                element={<AdminCourseDetails />}
              />
              <Route path="course-categories" element={<AdminCategoryPage />} />
              <Route path="courses" element={<AdminCourses />} />
              <Route path="instructors" element={<InstructorsList />} />
              <Route
                path="instructor-courses"
                element={<InstructorCourses />}
              />
              <Route
                path="instructor-requests"
                element={<InstructorRequests />}
              />
              <Route path="notifications" element={<NotificationPage />} />
              <Route path="settings" element={<AdminSettings />} />
              <Route path="add-admin" element={<AddAdminPage />} />
              <Route path="analytics" element={<AnalyticsLayout />}>
                <Route path="course" element={<CourseAnalyticsPage />} />
                <Route path="student" element={<StudentAnalyticsPage />} />
                <Route
                  path="instructor"
                  element={<InstructorAnalyticsPage />}
                />
              </Route>
              <Route
                path="profile-view/:instructorId"
                element={<ProfileView />}
              />
              <Route
                path="instructor-requests"
                element={<InstructorRequests />}
              />
            </Route>
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
