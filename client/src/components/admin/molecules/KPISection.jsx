import {
  FaUsers,
  FaBook,
  FaUserPlus,
  FaMoneyBillWave,
  FaUserCheck,
} from "react-icons/fa";
import StatCard from "../atoms/StatCard";
import AdvancedStatCard from "../atoms/AdvancedStatCard";

const KPISection = () => {
  return (
    <div className="container-fluid">
      <div className="row row-cols-md-6">
        <StatCard
          title="Total Students"
          value="12,430"
          color="danger"
          growth={-5}
          icon={<FaUsers size={28} />}
        />
        <StatCard
          title="Total Instructors"
          value="240"
          icon={<FaUsers size={28} />}
          color="warning"
        />
        <AdvancedStatCard
          title="New Enrollments"
          stats={{ daily: 100, weekly: 300, monthly: 1000 }}
          icon={<FaUserPlus size={28} />}
        />
        <StatCard
          title="Total Courses"
          value="85"
          icon={<FaBook size={28} />}
        />
        <AdvancedStatCard
          title="Active Students"
          stats={{ daily: 1000, weekly: 5204, monthly: 24023 }}
          icon={<FaUserCheck size={28} />}
        />
        <StatCard
          title="Revenue (Monthly)"
          value="$12,400"
          icon={<FaMoneyBillWave size={28} />}
          growth={10}
          color="success"
        />
      </div>
    </div>
  );
};

export default KPISection;
