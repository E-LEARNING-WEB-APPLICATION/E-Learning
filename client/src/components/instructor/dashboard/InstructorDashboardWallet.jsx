import Loader from "@/components/shared/Loader";
import { withdrawAmount } from "@/services/Instructor/dashboardService";
import React, { useState } from "react";
import { toast } from "react-toastify";

const InstructorDashboardWallet = ({ wallet, onSave }) => {
    const [loading, setLoading] = useState(false);

    const handleWithdraw = async () => {
        try {
            setLoading(true);

            const newAmount = await withdrawAmount();
            console.log(newAmount);
            if (!newAmount.success) {
                toast.error(newAmount.message);
            } else {
                onSave(0);
                toast.success("Withdrawal successful");
            }
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="instructor-dashboard__wallet-card">
            <div>
                <p className="instructor-dashboard__wallet-label">
                    Instructor Wallet
                </p>
                <h2 className="instructor-dashboard__wallet-value">
                    ₹ {wallet}
                </h2>
            </div>

            {loading ? (
                <Loader text="Processing withdrawal..." size={22} />
            ) : (
                <button
                    onClick={handleWithdraw}
                    className="instructor-dashboard__withdraw-btn"
                >
                    Withdraw
                </button>
            )}
        </div>
    );
};

export default InstructorDashboardWallet;
