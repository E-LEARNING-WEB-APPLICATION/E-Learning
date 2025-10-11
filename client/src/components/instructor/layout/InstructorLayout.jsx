import React from 'react'
import InstructorNavbar from '../navbar/InstructorNavbar'
import { Outlet } from 'react-router-dom'
import Footer from '../../footer/Footer'

const InstructorLayout = () => {
    return (
        <div>
            <InstructorNavbar />
            <main className='container mt-3'>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default InstructorLayout