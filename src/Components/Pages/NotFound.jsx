import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen p-4">
      <div className="bg-white rounded-lg  p-8 text-center">
        <h1 className="text-6xl font-bold text-black-800 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-black-600 mb-2">
          Page Not Found
        </h2>
        <p className="text-black-500 mb-4">
          Sorry, the page you are looking for does not exist.
        </p>

        <Link to="/">
          <button className="mt-4 px-6 py-3 bg-black text-white font-semibold rounded hover:bg-[#FFBF00] transition duration-300">
            Go to Homepage
          </button>
        </Link>
      </div>
    </div>
  );
}
