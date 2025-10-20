
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css'
import StudentLayout from './components/student/layout/StudentLayout';
import StudentDashboard from './pages/student/dashboard/Dashboard';
import InstructorDashboard from './pages/instructor/dashboard/Dashboard';
import MyCourses from './pages/student/mycourses/MyCourses';
import WishList from './pages/student/wishlist/WishList';
import InstructorLayout from './components/instructor/layout/InstructorLayout';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import AddCourse from './pages/instructor/AddCourse/AddCourse';
import AddedCourses from './pages/instructor/AddedCourses/AddedCourses';
import AddSection from './pages/instructor/AddSection/AddSection';
import ShowSection from './pages/instructor/ShowSections/ShowSection';
import ShowTopic from './pages/instructor/ShowTopics/ShowTopic';
import AddTopic from './pages/instructor/AddTopics/AddTopic';

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
            <Route path='dashboard' element={<InstructorDashboard />}>  </Route>

          <Route path='addCourse' element={<AddCourse />}></Route>
          
          <Route path='addedCourses' element={<AddedCourses/>}> </Route>
          <Route path='addedCourses/add-section' element={<AddSection/>}></Route>
          <Route path='addedCourses/show-sections' element={<ShowSection/>}> </Route>
          
        
          <Route path='addedCourses/show-sections/add-topic' element={<AddTopic/>}></Route>
          <Route path='addedCourses/show-sections/show-topics' element={<ShowTopic/>}></Route>
          </Route>
          
          
        </Routes>
        
      </div>
    </>
  );
}

export default App



      

      
      

      

      

      
      



 
     
