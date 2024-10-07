import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer bg-black text-white py-8 mt-8 stick bottom-0 w-full">
      <div className="container mx-auto flex flex-col items-center">
        {/* Logo Section */}
        <img
          src="https://github.com/Success1308/VH-Soni-Jewellers-Cart/blob/main/public/img/logo.jpg?raw=true"
          alt="VH Soni Jewellers Logo"
          className="mb-4 h-24 w-auto rounded-lg"
        />

        {/* Title and Description */}
        <div className="text-center">
          <h4 className="text-2xl font-bold mb-2">VH Soni Jewellers</h4>
          <p className="text-sm">Discover fine jewelry for every occasion.</p>
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-6 mt-4">
          <a
            href="#"
            className="text-gray-400 hover:text-white transition duration-300"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition duration-300"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition duration-300"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
