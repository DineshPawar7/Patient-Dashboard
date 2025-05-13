import React from "react";
import { FaChartPie, FaCalendarAlt, FaUserInjured, FaComments, FaUserCog, FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="h-screen w-64 bg-white shadow-md p-6 flex flex-col justify-between">
      <div>
        <h1 className="text-2xl font-bold text-blue-600 mb-8">Dashboard</h1>

        <nav className="space-y-4">
          <SidebarItem icon={<FaChartPie />} label="Overview" to="/" />
          <SidebarItem icon={<FaCalendarAlt />} label="Appointments" to="/appointments" />
          <SidebarItem icon={<FaUserInjured />} label="Patients" to="/patients" />
          <SidebarItem icon={<FaComments />} label="Chats" to="/chats" />
        </nav>
      </div>

      <div className="space-y-2">
        <div className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Account</div>
        <SidebarItem icon={<FaUserCog />} label="Settings" to="/settings" />
        <SidebarItem icon={<FaSignOutAlt />} label="Logout" to="/logout" />
      </div>
    </aside>
  );
};

const SidebarItem = ({ icon, label, to }) => (
  <Link
    to={to}
    className="flex items-center space-x-3 text-gray-700 hover:bg-gray-100 p-2 rounded cursor-pointer transition"
  >
    <span className="text-lg">{icon}</span>
    <span className="text-base font-medium">{label}</span>
  </Link>
);

export default Sidebar;
