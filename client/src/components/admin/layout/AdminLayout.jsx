import React from 'react'
import AdminNavbar from '../navbar/AdminNavbar'
import { Outlet } from 'react-router-dom'
import Footer from '../../footer/Footer';

const AdminLayout = () => {
  return (
    <div>
        <AdminNavbar/>
                    <main className='container mt-3'>
                <Outlet />
            </main>
            <Footer />
    </div>
  )
}

export default AdminLayout
