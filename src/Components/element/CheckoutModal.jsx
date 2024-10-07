import { useNavigate } from "react-router-dom";

const CheckoutModal = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-60 transition-opacity duration-300">
      <div className="bg-gradient-to-br from-white to-gray-100 rounded-lg shadow-lg p-6 sm:p-8 lg:p-10 transform transition-transform duration-300 scale-95 hover:scale-100 max-w-md w-full">
        <h3 className="text-lg sm:text-xl font-bold mb-4 text-center text-gray-800">
          🎉 Your imaginary order has been placed! 🎉
        </h3>
        <p className="mb-6 text-center text-gray-600 text-sm sm:text-base">
          Please click the button below to return to the homepage.
        </p>
        <div className="flex justify-center">
          <button
            onClick={() => {
              onClose();
              navigate("/");
            }}
            className="bg-black text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg shadow hover:bg-gray-800 transition-transform transform hover:scale-105 duration-200 text-sm sm:text-base"
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutModal;
