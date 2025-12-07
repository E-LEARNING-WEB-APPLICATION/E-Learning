import { Outlet } from "react-router-dom";

export default function AnalyticsLayout() {
  return (
    <div className="p-3">
      {/* Anything common can go here */}
      <Outlet />
    </div>
  );
}
