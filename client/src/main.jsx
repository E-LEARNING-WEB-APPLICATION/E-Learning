import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddCourse from './pages/instructor/AddCourse/AddCourse';
import AddedCourses from './pages/instructor/AddedCourses/AddedCourses';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/login' element={<App />}>

      </Route>

      <Route path='instructor/addCourse' element={<AddCourse />}>

      </Route>
      <Route path='instructor/addedCourses' element={<AddedCourses/>}></Route>

    </Routes>

  </BrowserRouter>
)
