import { FaUsers, FaBook, FaUserPlus, FaMoneyBillWave } from "react-icons/fa";
import StatCard from '../atoms/StatCard';

const KPISection = () => {
  return (
    <div className="row">
      <StatCard title="Total Students" value="12,430" icon={<FaUsers size={28} />} />
      <StatCard title="New Enrollments" value="320" icon={<FaUserPlus size={28} />} />
      <StatCard title="Total Courses" value="85" icon={<FaBook size={28} />} />
      <StatCard title="Revenue (Monthly)" value="$12,400" icon={<FaMoneyBillWave size={28} />} />
    </div>
  );
};

export default KPISection;
