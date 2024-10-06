import { BiCartAdd } from "react-icons/bi";
import CardSkeleton from "./CardSkeleton";

const Card = ({ item, onAdd, loading }) => {
  // If loading, render the skeleton
  if (loading) {
    return <CardSkeleton />;
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
        <div className="flex justify-between items-center">
          <p className="text-xl font-bold text-gray-800">
            ₹{item.price.toFixed(2)}
          </p>
          <button
            onClick={() => onAdd(item)}
            className="border border-black bg-transparent text-black text-xl py-2 px-2 rounded hover:bg-black hover:text-white transition duration-300"
          >
            <BiCartAdd className="text-2xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
