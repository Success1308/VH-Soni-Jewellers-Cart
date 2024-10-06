import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FiSearch, FiUser, FiShoppingBag, FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <header>
        <nav className="bg-white p-2 my-0 md:my-12 mb-8 shadow-md border-t border-b border-gray-300 text-lg">
          <div className=" container mx-auto flex justify-between items-center h-16">
            <img
              src="/src/assets/logo.jpg"
              alt="VH Soni Jewellers"
              className="h-20 md:h-32 rounded-lg"
            />

            <div className="hidden md:flex justify-center items-center space-x-12">
              <NavLink
                to="/"
                className="text-gray-700 font-semibold hover:text-black transition duration-300"
              >
                NEW IN
              </NavLink>
              <NavLink
                to="/all"
                className="text-gray-700 font-semibold py-2 hover:text-black transition duration-300"
                onClick={toggleMenu}
              >
                All
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

            {/* Mobile menu toggle button */}
            <button onClick={toggleMenu} className="md:hidden ml-4">
              {isOpen ? (
                <FiX className="text-gray-700 w-6 h-6 hover:text-black transition duration-300" />
              ) : (
                <FiMenu className="text-gray-700 w-6 h-6 hover:text-black transition duration-300" />
              )}
            </button>

            <div className="flex items-center space-x-4 hidden md:flex">
              <FiSearch className="text-gray-700 w-6 h-6 hover:text-black transition duration-300" />
              <FiUser className="text-gray-700 w-6 h-6 hover:text-black transition duration-300" />
              <div className="relative">
                <FiShoppingBag className="text-gray-700 w-6 h-6 hover:text-black transition duration-300" />
                <span className="absolute -top-1 -right-1.5 inline-flex items-center justify-center px-1 py-1 text-tiny font-bold leading-none text-white bg-black rounded-full">
                  0
                </span>
              </div>
            </div>
          </div>

          {/* Mobile menu */}
          {isOpen && (
            <div className="md:hidden p-1 flex flex-col items-center bg-white border-t border-gray-300 space-y-2">
              <NavLink
                to="/"
                className="text-gray-700 font-semibold py-2 hover:text-black transition duration-300"
                onClick={toggleMenu}
              >
                NEW IN
              </NavLink>
              <NavLink
                to="/all"
                className="text-gray-700 font-semibold py-2 hover:text-black transition duration-300"
                onClick={toggleMenu}
              >
                All
              </NavLink>
              <NavLink
                to="/men"
                className="text-gray-700 font-semibold py-2 hover:text-black transition duration-300"
                onClick={toggleMenu}
              >
                MEN
              </NavLink>
              <NavLink
                to="/women"
                className="text-gray-700 font-semibold py-2 hover:text-black transition duration-300"
                onClick={toggleMenu}
              >
                WOMEN
              </NavLink>
              <NavLink
                to="/about"
                className="text-gray-700 font-semibold py-2 hover:text-black transition duration-300"
                onClick={toggleMenu}
              >
                ABOUT
              </NavLink>
              <NavLink
                to="/contact"
                className="text-gray-700 font-semibold py-2 hover:text-black transition duration-300"
                onClick={toggleMenu}
              >
                CONTACT
              </NavLink>

              {/* Icons in mobile menu */}
              <div className="flex items-center space-x-4">
                <FiSearch className="text-gray-700 w-6 h-6 hover:text-black transition duration-300" />
                <FiUser className="text-gray-700 w-6 h-6 hover:text-black transition duration-300" />
                <div className="relative">
                  <FiShoppingBag className="text-gray-700 w-6 h-6 hover:text-black transition duration-300" />
                  <span className="absolute -top-1 -right-1.5 inline-flex items-center justify-center px-1 py-1 text-tiny font-bold leading-none text-white bg-black rounded-full">
                    0
                  </span>
                </div>
              </div>
            </div>
          )}
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
