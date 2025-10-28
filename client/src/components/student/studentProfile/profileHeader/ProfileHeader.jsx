import React, { useState } from "react";
import "./ProfileHeader.css";

const ProfileHeader = () => {
      
    return (
          <div className="container mb-3">
            <div
                className="card p-3 border shadow-sm"
                style={{ justifyContent: "center" }}>
                <img
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    alt="Instructor"
                    className="rounded-circle mb-3 community-img"
                />
                <h5 className="fw-semibold text-primary">
                    Name: <span className="text-dark">Sanket Raut</span>
                </h5>
                <h5 className="fw-semibold text-primary">
                    Role: <span className="text-dark">Student</span>
                </h5>
                
            </div>
        </div>
    );
};

export default ProfileHeader;
