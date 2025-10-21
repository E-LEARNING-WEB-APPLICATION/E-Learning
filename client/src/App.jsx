
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css'
import StudentLayout from './components/student/layout/StudentLayout';
import StudentDashboard from './pages/student/dashboard/Dashboard';
import InstructorDashboard from './pages/instructor/dashboard/Dashboard';
import MyCourses from './pages/student/mycourses/MyCourses';
import WishList from './pages/student/wishlist/WishList';
import InstructorLayout from './components/instructor/layout/InstructorLayout';
import AddCourse from './pages/instructor/AddCourse/AddCourse';
import AddedCourses from './pages/instructor/AddedCourses/AddedCourses';
import AddSection from './pages/instructor/AddSection/AddSection';
import ShowSection from './pages/instructor/ShowSections/ShowSection';
import ShowTopic from './pages/instructor/ShowTopics/ShowTopic';
import AddTopic from './pages/instructor/AddTopics/AddTopic';
import GuestLayout from './components/guest/layout/GuestLayout';
import InstructorRegistration from './pages/guest/instructorRegister/InstructorRegistration';
import StudentRegistration from './pages/guest/studentRegister/StudentRegistration';
import Login from './pages/guest/login/Login';
import AboutUs from './pages/aboutUs/AboutUs';

function App() {

    return (
        <>
            <div>
                <Routes>
                    <Route path='/' element={<Navigate to="/guest" />} />
                    <Route path='/guest' element={<GuestLayout />}>
                        <Route path='instructor-registration' element={<InstructorRegistration />} />
                        <Route path='student-registration' element={<StudentRegistration />} />
                        <Route path='login' element={<Login />} />
                    </Route>
                    <Route path='/student' element={<StudentLayout />}>
                        <Route path='dashboard' element={<StudentDashboard />} />
                        <Route path='mycourses' element={<MyCourses />} />
                        <Route path='wishlist' element={<WishList />} />
                        <Route path='aboutus' element={<AboutUs/>} />
                    </Route>
                    <Route path='/instructor' element={<InstructorLayout />}>
                        <Route path='dashboard' element={<InstructorDashboard />} />
                        <Route path='addCourse' element={<AddCourse />} />
                        <Route path='addedCourses' element={<AddedCourses />} />
                        <Route path='addedCourses/add-section' element={<AddSection />} />
                        <Route path='addedCourses/show-sections' element={<ShowSection />} />
                        <Route path='addedCourses/show-sections/add-topic' element={<AddTopic />} />
                        <Route path='addedCourses/show-sections/show-topics' element={<ShowTopic />} />
                    </Route>
                </Routes>
            </div>
        </>
    );
}

export default App
