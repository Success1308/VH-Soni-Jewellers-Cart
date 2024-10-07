import { BiCartAdd } from "react-icons/bi";
import { NavLink } from "react-router-dom";

const Card = ({ item, loading, error, addToCart }) => {
  if (loading) {
    return (
      <div className="max-w-xs mx-auto bg-white rounded-lg shadow-md overflow-hidden animate-pulse">
        <div className="w-45 h-45 bg-gray-200 rounded-md mb-2"></div>
        <div className="p-4">
          <div className="h-4 bg-gray-200 rounded-md mb-2"></div>

          <div className="h-4 bg-gray-200 rounded-md mb-1"></div>

          <div className="h-4 bg-gray-200 rounded-md mb-1"></div>
          <div className="flex justify-between items-center mt-4">
            <div className="h-6 w-12 bg-gray-200 rounded-md"></div>

            <div className="h-8 w-8 bg-gray-200 rounded-md"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-xs mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-4">
          <p className="text-red-600 font-semibold">Error: {error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-xs mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={item.img}
        alt={item.name}
        className="w-45 h-45 object-cover mb-2 rounded-md transform transition duration-500 hover:scale-95 cursor-pointer"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{item.name}</h3>
        <p className="text-gray-600">Category: {item.category}</p>
        <p className="text-gray-600">Color: {item.color}</p>
        <div className="flex justify-between items-center mt-4">
          <p className="text-xl font-bold text-gray-800">
            ${item.price.toFixed(2)}
          </p>
          <NavLink
            key={item.id}
            to={`/${item.category.toLowerCase()}/${item.id}`}
          >
            <button
              onClick={() => addToCart(item)}
              className="border border-black bg-transparent text-black text-xl py-2 px-2 rounded hover:bg-black hover:text-white transition duration-300"
            >
              <BiCartAdd className="text-2xl" />
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Card;
