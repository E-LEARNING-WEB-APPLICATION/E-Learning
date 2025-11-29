import React from "react";

const AboutCard = ({ bio }) => {
    return (
        <div className="card p-4 shadow-sm border-0 rounded-4 mb-4">
            <h5 className="fw-bold text-primary mb-3">About Me</h5>
            <p className="text-muted mb-0">{bio}</p>
        </div>
    );
};

export default AboutCard;
