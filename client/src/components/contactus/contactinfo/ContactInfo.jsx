import React from "react";
import "./ContactInfo.css";
import { FaPhoneAlt, FaEnvelope, FaGlobe, FaClock } from "react-icons/fa";
import { BsGeoAltFill } from "react-icons/bs";

const ContactInfo = () => {
    return (
        <div className="contactinfo-container ">
            <h5 className="info-title">CONTACT INFORMATION</h5>
            <div className=" info-row">
                <div className=" info-item">
                    <div className="d-flex align-items-start">
                        <FaPhoneAlt className="info-icon text-primary" />
                        <div className="ms-3">
                            <h6 className="info-label">PHONE</h6>
                            <p className="info-text mb-0">+1 (773) 385-1240</p>
                        </div>
                    </div>
                </div>
                <div className=" info-item">
                    <div className="d-flex align-items-start">
                        <BsGeoAltFill className="info-icon text-primary" />
                        <div className="ms-3">
                            <h6 className="info-label">ADDRESS</h6>
                            <p className="info-text mb-0">
                                "Sunbeam IT Park", Second Floor, Phase 2 of
                                Rajiv Gandhi Infotech Park,Hinjawadi, Pune -
                                411057, MH-INDIA
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" info-row">
                <div className=" info-item">
                    <div className="d-flex align-items-start">
                        <FaEnvelope className="info-icon text-primary" />
                        <div className="ms-3">
                            <h6 className="info-label">EMAIL</h6>
                            <p className="info-text mb-0">
                                office@Elearning.com
                            </p>
                        </div>
                    </div>
                </div>
                <div className=" info-item">
                    <div className="d-flex align-items-start">
                        <FaGlobe className="info-icon text-primary" />
                        <div className="ms-3">
                            <h6 className="info-label">WEBSITE</h6>
                            <p className="info-text mb-0">www.Elearning.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" info-row">
                <div className=" info-item">
                    <div className="d-flex align-items-start">
                        <FaClock className="info-icon text-primary" />
                        <div className="ms-3">
                            <h6 className="info-label">WORKING HOURS</h6>
                            <p className="info-text mb-0">
                                Mon - Fri: 9:00 AM - 6:00 PM
                            </p>
                        </div>
                    </div>
                </div>
                <div className=" info-item">
                    <div className="d-flex align-items-start">
                        <FaEnvelope className="info-icon text-primary" />
                        <div className="ms-3">
                            <h6 className="info-label">SUPPORT</h6>
                            <p className="info-text mb-0">
                                support@Elearning.com
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactInfo;
