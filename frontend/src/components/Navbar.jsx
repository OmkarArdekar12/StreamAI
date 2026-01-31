import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { useAuthStore } from "../store/useAuthStore";
import { IoMdLogOut } from "react-icons/io";
import { FaUserAstronaut } from "react-icons/fa";

const Navbar = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const { authUser, isAuthenticate, logout } = useAuthStore();

  return (
    <>
      {/* Navbar */}
      <nav className="navbar bg-black/50 backdrop-blur-md text-white px-6 py-6 sticky top-0 z-50 shadow-md">
        {/* Left: Logo */}
        <div className="flex-1">
          <Link
            to="/"
            className="text-2xl md:text-3xl font-extrabold tracking-wide text-red-500 hover:text-white transition duration-300"
          >
            Stream<span className="text-white">AI</span>
          </Link>
        </div>

        {/* Right: Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <NavLink to="/" label="Home" />
          <NavLink to="/explore" label="Live Streams" />
          <NavLink to="/" label="About" />

          {authUser ? (
            <>
              <div
                onClick={() => navigate("/profile")}
                className="flex gap-1 items-center cursor-pointer"
              >
                <FaUserAstronaut className="text-red-600 size-6" />
                Profile
              </div>
              <div
                onClick={logout}
                className="flex gap-1 items-center cursor-pointer"
              >
                <IoMdLogOut className="text-red-600 size-5" />
                Logout
              </div>
            </>
          ) : (
            <Link
              to="/login"
              className="text-red-500 hover:border-2 hover:border-red-500 px-4 py-2 rounded-lg font-semibold shadow-md transition duration-300"
            >
              Login / Sign-in
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setSidebarOpen(true)}
            className="text-white hover:text-red-500 transition"
          >
            <FiMenu size={26} />
          </button>
        </div>
      </nav>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-black/95 backdrop-blur-lg text-white transform transition-transform duration-300 ease-in-out z-60 ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-6 py-4 border-b border-red-500">
          <h2 className="text-2xl font-semibold text-red-500">Explore</h2>
          <button
            onClick={() => setSidebarOpen(false)}
            className="text-white hover:text-red-500 transition"
          >
            <FiX size={26} />
          </button>
        </div>

        {/* Sidebar Links */}
        <ul className="flex flex-col space-y-4 mt-6 px-6">
          <SidebarLink to="/" label="Home" setSidebarOpen={setSidebarOpen} />
          <SidebarLink
            to="/stream"
            label="Streams"
            setSidebarOpen={setSidebarOpen}
          />
          <SidebarLink
            to="/about"
            label="About"
            setSidebarOpen={setSidebarOpen}
          />
          <SidebarLink
            to="/login"
            label="Login / Sign-in"
            setSidebarOpen={setSidebarOpen}
          />
        </ul>
      </div>

      {/* Overlay when Sidebar is open */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
    </>
  );
};

const NavLink = ({ to, label }) => (
  <Link
    to={to}
    className="hover:text-white text-gray-200 transition font-normal text-lg tracking-wide"
  >
    {label}
  </Link>
);

const SidebarLink = ({ to, label, setSidebarOpen }) => (
  <li>
    <Link
      to={to}
      onClick={() => setSidebarOpen(false)}
      className="block text-gray-200 text-lg font-medium hover:text-red-500 transition"
    >
      {label}
    </Link>
  </li>
);

export default Navbar;
