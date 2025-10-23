import React, { useState } from 'react'
import { FaBriefcase, FaEnvelope, FaGraduationCap, FaLock, FaPhone, FaUser, FaUserEdit } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


const InstructorRegistration = () => {
    return (
        <div className='reg-outer-container d-flex justify-content-center align-content-center'>
            <div className='reg-inner-container p-4 p-md-5'>
                <h2 className='reg-title text-center mb-4' style={{ color: '#214979ff' }}>
                    Instructor Registration
                </h2>
                <form>
                    <div className='name-row row g-3 mb-3'>
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
                    <div className="form-floating mb-3">
                        <input
                            type="text"
                            className="form-control"
                            id="specialization"
                            placeholder="Expertise / Specialization"
                            required />
                        <label>
                            <FaGraduationCap className="me-2" />
                            Expertise / Specialization
                        </label>
                    </div>
                    <div className="form-floating mb-3">
                        <select
                            className="form-select"
                            id="experience"
                            defaultValue=""
                            required
                        >
                            <option value="" disabled>Select experience level</option>
                            <option value="0-1">0-1 years</option>
                            <option value="2-3">2-3 years</option>
                            <option value="4-5">4-5 years</option>
                            <option value="5+">5+ years</option>
                        </select>
                        <label>
                            <FaBriefcase className="me-2" /> Years of Experience
                        </label>
                    </div>

                    <div className="form-floating mb-3">
                        <textarea
                            className="form-control"
                            placeholder="Tell us something about yourself"
                            id="bio"
                            style={{ height: "120px", resize: "none" }}
                            required
                        ></textarea>
                        <label>
                            <FaUserEdit className="me-2" /> Short Bio
                        </label>
                    </div>
                    <button type="submit" className="reg-button w-100 mb-3">Register</button>
                    <p className='text-center' style={{ color: "black" }}>
                        Don't have an account.?{' '}
                        <button
                            type='submit'
                            className='text-decoration-underline fw-semibold btn btn-link'
                            style={{ color: '#112d4e' }}>
                            Login here
                        </button>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default InstructorRegistration