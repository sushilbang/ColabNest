import React from "react";
import { LayoutDashboard, CheckSquare, User, HelpCircle, LogOut } from "lucide-react";

const Sidebar = () => {
  return (
    <aside className="flex w-64 flex-col bg-white border-r border-neutral-200">
      <div className="flex h-16 items-center justify-center border-b border-neutral-200">
        <div className="h-10 w-10 rounded-full bg-neutral-100" />
      </div>
      <nav className="flex-1 space-y-1 p-4">
        <NavItem icon={LayoutDashboard} label="My Projects" active />
        <NavItem icon={CheckSquare} label="My Tasks" />
        <NavItem icon={User} label="Profile" />
        <NavItem icon={HelpCircle} label="Help" />
      </nav>
      <div className="border-t border-neutral-200 p-4">
        <NavItem icon={LogOut} label="Logout" />
      </div>
    </aside>
  );
};

const NavItem = ({ icon: Icon, label, active }) => {
  return (
    <button
      className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors
        ${
          active
            ? "bg-neutral-100 text-neutral-900"
            : "text-neutral-500 hover:bg-neutral-50 hover:text-neutral-900"
        }`}
    >
      <Icon size={18} />
      {label}
    </button>
  );
};

export default Sidebar;