import React from 'react'
import "./Footer.css";

import { FaFacebook, FaTwitter, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-dark text-light pt-5 pb-3 mt-5">
            <div className="container">

                {/* Top Section */}
                <div className="row">

                    {/* Brand */}
                    <div className="col-md-4 mb-4">
                        <h4 className="fw-bold">E Learning</h4>
                        <p className="  small">
                            Learn from the best instructors and boost your career.
                            Start your journey with industry-oriented courses.
                        </p>

                        {/* Social Icons */}
                        <div className="d-flex gap-3 mt-3">
                            <a href="#" className="text-light fs-4"><FaLinkedin /></a>
                            <a href="#" className="text-light fs-4"><FaTwitter /></a>
                            <a href="#" className="text-light fs-4"><FaGithub /></a>
                            <a href="#" className="text-light fs-4"><FaInstagram /></a>
                            <a href="#" className="text-light fs-4"><FaFacebook /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="col-md-2 mb-4">
                        <h5 className="fw-semibold mb-3">Quick Links</h5>
                        <ul className="list-unstyled footer-links">
                            <li><a href="#" className=" ">Home</a></li>
                            <li><a href="#" className=" ">Courses</a></li>
                            <li><a href="#" className=" ">Dashboard</a></li>
                            <li><a href="#" className=" ">My Learning</a></li>
                        </ul>
                    </div>

                    {/* Categories */}
                    <div className="col-md-3 mb-4">
                        <h5 className="fw-semibold mb-3">Categories</h5>
                        <ul className="list-unstyled footer-links">
                            <li><a href="#" className=" ">Web Development</a></li>
                            <li><a href="#" className=" ">Data Science</a></li>
                            <li><a href="#" className=" ">Programming</a></li>
                            <li><a href="#" className=" ">Mobile Development</a></li>
                            <li><a href="#" className=" ">Backend</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="col-md-3 mb-4">
                        <h5 className="fw-semibold mb-3">Contact Us</h5>
                        <p className="  small mb-1">Email: support@elearning.com</p>
                        <p className="  small mb-1">Phone: +91 12345 67890</p>
                        <p className="  small">Address: Pune, Maharashtra</p>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-top border-secondary mt-4 pt-3 text-center">
                    <p className="  small mb-0">
                        © {new Date().getFullYear()} Sunbeam Learning. All rights reserved.
                    </p>
                </div>

            </div>
        </footer>
    );
}

export default Footer