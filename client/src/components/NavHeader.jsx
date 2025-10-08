import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Input, Button, Avatar } from "antd";
import { SearchOutlined, MenuOutlined, CloseOutlined } from "@ant-design/icons";
import headerLogo from "../assets/images/header-logo.png";
import profileAvator from "../assets/images/header-profile-image.png";

export default function NavHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    {id:1, path: "/find-jobs", label: "Find Jobs" },
    {id:2, path: "/top-companies", label: "Top Companies" },
    {id:3, path: "/job-tracker", label: "Job Tracker" },
    {id:4, path: "/my-calendar", label: "My Calendar" },
    {id:5, path: "/documents", label: "Documents" },
    {id:6, path: "/messages", label: "Messages" },
    {id:7, path: "/notifications", label: "Notifications" },
  ];

  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between bg-white shadow-sm px-4 md:px-6 py-2 w-full relative">
      {/* Left Section - Logo & Navigation Links ka ha */}
      <div className="flex items-center justify-between w-full md:w-auto">
        {/* Logo */}
        <img src={headerLogo} alt="Logo" className="w-10 h-10" />

        {/* Mobile scren pr view ka liye functionality*/}
        <button
          className="md:hidden text-xl text-gray-600"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <CloseOutlined /> : <MenuOutlined />}
        </button>
      </div>

      {/* Navigation Links work karyngy jub hamaray pass multiple pages hongay */}
      <nav
        className={`flex-col md:flex-row md:flex md:space-x-5 text-gray-500 font-medium ${
          menuOpen ? "flex mt-4 space-y-2 md:space-y-0" : "hidden"
        }`}
      >
        {navLinks.map((link , key) => (
          <Link
            key={key}
            to={link.path}
            className={`${
              location.pathname === link.path ? "text-blue-700 font-semibold" : ""
            }`}
            onClick={() => setMenuOpen(false)} // close menu on click
          >
            {link.label}
          </Link>
        ))}
      </nav>

     
      <div className="flex items-center space-x-4 mt-4 md:mt-0">
      
        <div className="flex items-center bg-gray-100 px-3 py-1 rounded-lg">
          <SearchOutlined className="text-gray-500" />
          <Input
            placeholder="Search"
            className="bg-transparent border-none focus:ring-0 focus:outline-none w-24"
          />
        </div>

       
        <Link to="/resume-builder">
          <Button type="primary" className="bg-blue-600 px-4 py-2 rounded-md">
            Resume Builder
          </Button>
        </Link>

        {/* Profile picture part */}
        <Link to="/profile">
          <Avatar src={profileAvator} size={40} className="cursor-pointer" />
        </Link>
      </div>
    </div>
  );
}
