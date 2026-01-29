import React from "react";

const InstructorDashboardWallet = ({ wallet }) => {
    return (
        <div className="instructor-dashboard__wallet-card">
            <div>
                <p className="instructor-dashboard__wallet-label">
                    Instructor Wallet
                </p>
                <h2 className="instructor-dashboard__wallet-value">
                    ${wallet}
                </h2>
            </div>
            <button className="instructor-dashboard__withdraw-btn">
                Withdraw
            </button>
        </div>
    );
};

export default InstructorDashboardWallet;
