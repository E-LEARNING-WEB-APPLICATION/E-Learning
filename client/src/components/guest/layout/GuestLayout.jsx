import React from 'react'
import GuestNavbar from '../navbar/GuestNavbar'
import { Outlet } from 'react-router-dom'
import Footer from '../../footer/Footer'

const GuestLayout = () => {
    return (
        <div>
            <GuestNavbar />
            <main className='container mt-3'>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default GuestLayout