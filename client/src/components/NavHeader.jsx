import { Link } from "react-router-dom";
import { Input, Button, Avatar } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import headerLogo from "../assets/images/header-logo.png";
import profileAvator from "../assets/images/header-profile-image.png";


export default function NavHeader() {
  return (
    <div className="flex items-center justify-between bg-white shadow-sm px-6 py-2 w-full">
      {/* Left Section - Logo & Navigation Links */}
      <div className="flex items-center space-x-6">
        {/* Logo */}
        <img
          src={headerLogo}
          alt="Logo"
          className="w-10 h-10"
        />

        {/* Navigation Links */}
        <nav className="flex space-x-5 text-gray-500 font-medium">
          <Link to="/find-jobs" className="text-blue-700 font-semibold">
            Find Jobs
          </Link>
          <Link to="/top-companies">Top Companies</Link>
          <Link to="/job-tracker">Job Tracker</Link>
          <Link to="/my-calendar">My Calendar</Link>
          <Link to="/documents">Documents</Link>
          <Link to="/messages">Messages</Link>
          <Link to="/notifications">Notifications</Link>
        </nav>
      </div>

      {/* Right Section - Search, Button, and Profile */}
      <div className="flex items-center space-x-4">
        {/* Search Input */}
        <div className="flex items-center bg-gray-100 px-3 py-1 rounded-lg">
          <SearchOutlined className="text-gray-500" />
          <Input
            placeholder="Search"
            className="bg-transparent border-none focus:ring-0 focus:outline-none w-24"
          />
        </div>

        {/* Resume Builder Button */}
        <Link to="/resume-builder">
          <Button type="primary" className="bg-blue-600 px-4 py-2 rounded-md">
            Resume Builder
          </Button>
        </Link>

        {/* Profile Avatar */}
        <Link to="/profile">
          <Avatar
            src={profileAvator}
            size={40}
            className="cursor-pointer"
          />
        </Link>
      </div>
    </div>
  );
}
