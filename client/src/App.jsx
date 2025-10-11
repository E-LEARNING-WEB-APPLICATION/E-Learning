
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css'
import StudentLayout from './components/student/layout/StudentLayout';
import StudentDashboard from './pages/student/dashboard/Dashboard';
import InstructorDashboard from './pages/instructor/dashboard/Dashboard';
import MyCourses from './pages/student/mycourses/MyCourses';
import WishList from './pages/student/wishlist/WishList';
import InstructorLayout from './components/instructor/layout/InstructorLayout';
import Login from './pages/login/Login';
import Register from './pages/register/Register';

function App() {

  return (
    <>
      <div>
        <Routes>
          <Route path='/' element={<Navigate to="/login" />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/student' element={<StudentLayout />}>
            <Route path='dashboard' element={<StudentDashboard />} />
            <Route path='mycourses' element={<MyCourses />} />
            <Route path='wishlist' element={<WishList />} />
          </Route>
        </Routes>
        <Routes>
          <Route path='/instructor' element={<InstructorLayout />}>
            <Route path='dashboard' element={<InstructorDashboard />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App
