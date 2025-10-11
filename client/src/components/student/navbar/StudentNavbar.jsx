import React from 'react';
import { Link } from 'react-router-dom';

function StudentNavbar() {
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
                            <Link className="nav-link active" to="/student/dashboard">
                                Dashboard
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/student/mycourses">
                                MyCourses
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link' to="/student/wishlist">
                                Wishlist
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link' to="/student/notification">
                                Notifications
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/student/profile">
                                Profile
                            </Link>
                        </li>
                        <li>
                            <Link className='nav-link' to='/student/about-us'>
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link className='nav-link' to='/student/contact-us'>
                                Contact Us
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

export default StudentNavbar;
