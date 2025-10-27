import React from 'react';
import { Link } from 'react-router-dom';

const AdminNavbar = ()  => {
    return (
        <nav className='navbar navbar-expand-lg bg-primary' data-bs-theme="dark">
            <div className='container-fluid'>
                <Link className='navbar-brand' to="/student/dashboard">E-Learning</Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#studentNavbar"
                    aria-controls="studentNavbar"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="studentNavbar">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" to="/admin/dashboard">
                                Dashboard
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/admin/courses">
                                Courses
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/admin/instructors">
                                Instructors
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/admin/instructor-requests">
                                New Requests
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link' to="/admin/notifications">
                                Notifications
                            </Link>
                        </li>
                        {/* <li>
                            <Link className='nav-link' to='/admin/about-us'>
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link className='nav-link' to='/admin/contact-us'>
                                Contact Us
                            </Link>
                        </li> */}
                        <li className="nav-item">
                            <Link className="nav-link" to="/admin/profile">
                                Profile
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">
                                Logout
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default AdminNavbar;
