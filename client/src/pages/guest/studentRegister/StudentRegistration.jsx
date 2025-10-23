import React, { useState } from 'react'
import './StudentRegistration.css'
import { FaEnvelope, FaLock, FaUser, FaPhone, FaBirthdayCake } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

const StudentRegistration = () => {

    const [formData, setFormData] = useState({
        fname: "",
        lname: "",
        email: "",
        password: "",
        confirmPassword: "",
        phone: "",
        role: "student"
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.password != formData.confirmPassword) {
            toast.warning("Password and Confirm Password Did not Match !!");
            return;
        }
        console.log(formData);
        setTimeout(() => {
            navigate("/guest/login");
        }, 1000);
    }


    return (
        <div className="reg-outer-container d-flex align-items-center justify-content-center">
            <div className="reg-inner-container p-4 p-md-5">
                <h2 className="reg-title text-center mb-4" style={{ color: '#214979ff' }}>
                    Student Registration
                </h2>
                <form className="reg-form" onSubmit={handleSubmit}>
                    <div className="name-row row g-3 mb-3">
                        <div className="col-md-6 form-floating">
                            <input
                                type="text"
                                onChange={handleChange}
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
                                onChange={handleChange}
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
                            onChange={handleChange}
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
                            onChange={handleChange}
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
                            onChange={handleChange}
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
                            onChange={handleChange}
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

export default StudentRegistration