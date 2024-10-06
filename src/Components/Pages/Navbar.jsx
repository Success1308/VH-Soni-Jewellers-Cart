import { NavLink } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { FiUser, FiShoppingBag } from "react-icons/fi";

export default function Navbar() {
  return (
    <nav className="bg-white p-2 my-12 mb-8 shadow-md border-t border-b border-gray-300 text-lg">
      <div className="container mx-auto flex justify-between items-center h-16">
        <img
          src="/src/assets/logo.jpg"
          alt="VH Soni Jewellers"
          className="h-32 rounded-lg"
        />
        <div className="hidden md:flex justify-center items-center space-x-8">
          <NavLink
            to="/"
            className="text-gray-700 font-semibold hover:text-black transition duration-300"
          >
            NEW IN
          </NavLink>
          <NavLink
            to="/men"
            className="text-gray-700 font-semibold hover:text-black transition duration-300"
          >
            MEN
          </NavLink>
          <NavLink
            to="/women"
            className="text-gray-700 font-semibold hover:text-black transition duration-300"
          >
            WOMEN
          </NavLink>
          <NavLink
            to="/about"
            className="text-gray-700 font-semibold hover:text-black transition duration-300"
          >
            ABOUT
          </NavLink>
          <NavLink
            to="/contact"
            className="text-gray-700 font-semibold hover:text-black transition duration-300"
          >
            CONTACT
          </NavLink>
        </div>

        <div className="flex items-center space-x-4">
          <FaSearch className="text-gray-700 w-6 h-6 hover:text-black transition duration-300" />
          <FiUser className="text-gray-700 w-6 h-6 hover:text-black transition duration-300" />
          <div className="relative">
            <FiShoppingBag className="text-gray-700 w-6 h-6 hover:text-black transition duration-300" />
            <span className="absolute -top-1 -right-1.5 inline-flex items-center justify-center px-1 py-1 text-tiny font-bold leading-none text-white bg-black rounded-full">
              0
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
}
