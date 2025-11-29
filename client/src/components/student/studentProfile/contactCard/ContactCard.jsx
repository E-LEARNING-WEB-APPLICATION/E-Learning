import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const ContactCard = ({ location, email, phone }) => {
    return (
        <div className="card p-4 shadow-sm border-0 rounded-4">
            <h5 className="fw-bold text-primary mb-3">Address & Contact</h5>

            <p className="text-muted mb-2">
                <FaMapMarkerAlt className="me-2 text-danger" />
                {location}
            </p>

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