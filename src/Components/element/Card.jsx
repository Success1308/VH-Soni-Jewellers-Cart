const Card = ({ item, onAdd }) => {
  return (
    <div className="max-w-xs mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={item.img}
        alt={item.name}
        className=" w-45 h-45 object-cover mb-2 rounded-md"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{item.name}</h3>
        <p className="text-gray-600">Category: {item.category}</p>
        <p className="text-gray-600">Color: {item.color}</p>
        <p className="text-xl font-bold text-gray-800">
          ₹{item.price.toFixed(2)}
        </p>
        <button
          onClick={() => onAdd(item)}
          className="mt-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
        >
          + Add
        </button>
      </div>
    </div>
  );
};

export default Card;
