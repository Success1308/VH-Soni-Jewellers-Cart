export default function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 shadow-md">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="text-white font-bold text-xl">My Website</div>

          <div className="hidden md:flex space-x-6">
            <a
              href="#"
              className="text-white hover:text-gray-200 transition duration-300"
            >
              Home
            </a>

            <a
              href="#"
              className="text-white hover:text-gray-200 transition duration-300"
            >
              About
            </a>

            <a
              href="#"
              className="text-white hover:text-gray-200 transition duration-300"
            >
              Services
            </a>

            <a
              href="#"
              className="text-white hover:text-gray-200 transition duration-300"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-white focus:outline-none">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
