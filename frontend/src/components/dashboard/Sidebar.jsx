import React from "react";
import { Search, CheckSquare, User, HelpCircle, LogOut, Folder } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom"; // Import useNavigate

const Sidebar = () => {
  const navigate = useNavigate(); // Get navigate function

  const handleLogout = () => {
    // Clear user cookies here
    document.cookie = "user_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"; // Example: Clear user_token cookie
    document.cookie = "user_id=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"; // Example: Clear user_id cookie
    // ... clear other cookies as needed

    navigate("/"); // Redirect to the home page after logout
  };

  return (
    <aside className="flex w-64 flex-col bg-white border-r border-neutral-200">
      <div className="flex h-16 items-center justify-center border-b border-neutral-200">
        <div className="h-10 w-10 rounded-full bg-neutral-100" />
      </div>
      <nav className="flex-1 space-y-1 p-4">
        <NavItem icon={Search} label="Explore" to="/dashboard" />
        <NavItem icon={Folder} label="My Projects" to="/projects" />
        <NavItem icon={CheckSquare} label="My Tasks" to="/tasks" />
        <NavItem icon={User} label="Profile" to="/profile" />
        <NavItem icon={HelpCircle} label="Help" to="/help" />
      </nav>
      <div className="border-t border-neutral-200 p-4">
        <button
          className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors text-neutral-500 hover:bg-neutral-50 hover:text-neutral-900"
          onClick={handleLogout}
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </aside>
  );
};

const NavItem = ({ icon: Icon, label, to }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  return (
    <Link to={to} className="w-full">
      <button
        className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors
          ${
            isActive
              ? "bg-neutral-100 text-neutral-900"
              : "text-neutral-500 hover:bg-neutral-50 hover:text-neutral-900"
          }`}
      >
        <Icon size={18} />
        {label}
      </button>
    </Link>
  );
};

export default Sidebar;