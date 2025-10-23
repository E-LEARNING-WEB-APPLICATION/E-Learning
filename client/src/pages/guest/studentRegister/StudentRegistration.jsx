import React from 'react'
import './StudentRegistration.css'
import { FaEnvelope, FaLock, FaUser, FaPhone, FaBirthdayCake } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'

const StudentRegistration = () => {

    const navigate = useNavigate();

    return (
        <div className="reg-outer-container d-flex align-items-center justify-content-center">
            <div className="reg-inner-container p-4 p-md-5">
                <h2 className="reg-title text-center mb-4" style={{ color: '#214979ff' }}>
                    Student Registration
                </h2>
                <form className="reg-form">
                    <div className="name-row row g-3 mb-3">
                        <div className="col-md-6 form-floating">
                            <input
                                type="text"
                                className="form-control"
                                id="fname"
                                placeholder="First Name"
                                required
                            />
                            <label>
                                <FaUser className="me-2" style={{ marginLeft: "10px" }} />
                                First Name
                            </label>
                        </div>
                        <div className="col-md-6 form-floating">
                            <input
                                type="text"
                                className="form-control"
                                id="lname"
                                placeholder="Last Name"
                                required
                            />
                            <label>
                                <FaUser className="me-2" style={{ marginLeft: "10px" }} />
                                Last Name
                            </label>
                        </div>
                    </div>

                    <div className="form-floating mb-3">
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="Email"
                            required
                        />
                        <label>
                            <FaEnvelope className="me-2" />
                            Email
                        </label>
                    </div>

                    <div className="form-floating mb-3">
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            placeholder="Password"
                            required
                        />
                        <label>
                            <FaLock className="me-2" />
                            Password
                        </label>
                    </div>

                    <div className="form-floating mb-3">
                        <input
                            type="password"
                            className="form-control"
                            id="confirmPassword"
                            placeholder="Confirm Password"
                            required
                        />
                        <label>
                            <FaLock className="me-2" />
                            Confirm Password
                        </label>
                    </div>

                    <div className="form-floating mb-3">
                        <input
                            type="tel"
                            className="form-control"
                            id="phone"
                            placeholder="Phone Number"
                            required />
                        <label>
                            <FaPhone className="me-2" />
                            Phone Number
                        </label>
                    </div>

                    <button type="submit" className="reg-button w-100 mb-3">Register</button>
                    <p className='text-center' style={{ color: "black" }}>
                        Don't have an account.?{' '}
                        <button onClick={() => { navigate('/guest/login') }} className='text-decoration-underline fw-semibold btn btn-link' style={{ color: '#112d4e' }}>
                            Login here
                        </button>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default StudentRegistration