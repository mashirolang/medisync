import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/img/logo.png";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const handleScroll = () => {
    if (window.scrollY > 150) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isActive = (path) => location.pathname === path;
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-red-500 shadow-lg" : ""
      }`}
    >
      <div
        className={`max-w-screen-xl xl:max-w-screen-xl lg:max-w-screen-lg flex flex-wrap items-center justify-between mx-auto ${
          isScrolled ? "px-12 py-2" : "px-6 py-6"
        }`}
      >
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={Logo} className={isScrolled ? "h-20" : "h-28"} />
        </a>
        <button
          data-collapse-toggle="navbar-multi-level"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-20"
          aria-controls="navbar-multi-level"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className="hidden w-full md:block md:w-auto"
          id="navbar-multi-level"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
            <li>
              <Link
                to="/"
                className={`block py-2 px-3 rounded md:p-0 ${
                  isActive("/") ? "text-white font-bold" : "text-white"
                } hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-400`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`block py-2 px-3 rounded md:p-0 ${
                  isActive("/about") ? "text-white font-bold" : "text-white"
                } hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-400`}
              >
                About MediSync
              </Link>
            </li>
            <li>
              <Link
                to="/faq"
                className={`block py-2 px-3 rounded md:p-0 ${
                  isActive("/faq") ? "text-white font-bold" : "text-white"
                } hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-400`}
              >
                FAQ
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={`block py-2 px-3 rounded md:p-0 ${
                  isActive("/contact") ? "text-white font-bold" : "text-white"
                } hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-400`}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
