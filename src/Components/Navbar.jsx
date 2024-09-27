export default function Navbar() {
  return (
    <nav className="bg-[#0C1429] p-4 shadow-md">
      <div className="container min-w-full flex justify-between items-center">
        {/* Logo Image */}
        <img
          src="/src/assets/logo.jpg"
          alt="VH Soni Jewellers"
          className="h-32 ml-14"
        />

        <div className="hidden md:flex space-x-6 mr-20">
          <a
            href="#"
            className="text-[#FFD700] text-2xl hover:text-[#FFBF00] transition duration-300"
          >
            Home
          </a>
          <a
            href="#"
            className="text-[#FFD700] text-2xl hover:text-[#FFBF00] transition duration-300"
          >
            About
          </a>
          <a
            href="#"
            className="text-[#FFD700] text-2xl hover:text-[#FFBF00] transition duration-300"
          >
            Products
          </a>
          <a
            href="#"
            className="text-[#FFD700] text-2xl hover:text-[#FFBF00] transition duration-300"
          >
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="text-[#FFD700] focus:outline-none">
            <svg
              className="w-8 h-8"
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
    </nav>
  );
}
