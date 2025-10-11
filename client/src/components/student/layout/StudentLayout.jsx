import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../../footer/Footer'
import StudentNavbar from '../navbar/StudentNavbar'

const StudentLayout = () => {
    return (
        <div>
            <StudentNavbar />
            <main className='container mt-3'>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default StudentLayout