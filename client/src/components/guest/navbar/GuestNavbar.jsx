import React from 'react'
import { Link } from 'react-router-dom'

const GuestNavbar = () => {
    return (
        <nav className='navbar navbar-expand-lg bg-primary' data-bs-theme="dark">
            <div className='container-fluid'>
                <Link className='navbar-brand' to='/guest/dashboard'>E-Learning</Link>
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
                <div className='collapse navbar-collapse' id='studentNavbar'>
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" to="/guest/instructor-registration">
                                Instructor Registration
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/guest/student-registration">
                                Student Registration
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link' to="/guest/login">
                                Login
                            </Link>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    )
}

export default GuestNavbar

