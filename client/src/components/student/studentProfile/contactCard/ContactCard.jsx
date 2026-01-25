import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { BrowserRouter } from "react-router-dom";
const ContactCard = ({ address, email, phone }) => {
    return (
        <div className="card p-4 shadow-sm border-0 rounded-4">
            <h5 className="fw-bold text-primary mb-3">Address & Contact</h5>

            {address ? (
                <p className="text-muted mb-2 d-flex align-items-start">
                    <FaMapMarkerAlt className="me-3 text-danger mt-1" />

                    <span>
                        {address.addressLine1}, <br />
                        {address.addressLine2 && (
                            <>
                                {address.addressLine2}, <br />
                            </>
                        )}
                        {address.city}, {address.state}, {address.country}{" "}
                        <br />
                        <strong>Pincode - {address.pinCode}</strong>
                    </span>
                </p>
            ) : (
                <p className="text-muted mb-2">Address not available</p>
            )}

            <p className="text-muted mb-2">
                <FaEnvelope className="me-2 text-primary" />
                {email}
            </p>

            <p className="text-muted">
                <FaPhone className="me-2 text-success" /> {phone}
            </p>
        </div>
    );
};

export default ContactCard;
