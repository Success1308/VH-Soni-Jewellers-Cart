import { useParams } from "react-router-dom";
import { useState } from "react";

const ProductDetails = ({ data, loading, error, addToCart }) => {
  const { id } = useParams();
  const product = data.find((item) => item.id === parseInt(id));

  // State for quantity and toast visibility
  const [quantity, setQuantity] = useState(1);
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  if (loading) return <LoadingSkeleton />;
  if (error) return <ErrorMessage />;
  if (!product) return <ProductNotFound />;

  const handleAddToCart = () => {
    const currentQuantity = quantity;

    addToCart({ ...product, quantity: currentQuantity });

    setToastMessage(` ${currentQuantity} ${product.name} added to cart!`);
    setToastVisible(true);

    setQuantity(1);

    // Hide the toast after 3 seconds
    setTimeout(() => {
      setToastVisible(false);
      setToastMessage("");
    }, 3000);
  };

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  return (
    <div className="flex items-center justify-center min-h-[70vh] p-4">
      {toastVisible && <Toast message={toastMessage} />}
      <div className="flex flex-col md:flex-row p-6 bg-white shadow-lg rounded-lg max-w-4xl w-full overflow-auto">
        <img
          src={product.img}
          alt={product.name}
          className="w-full h-72 md:w-72 md:h-72 mb-4 md:mr-6 rounded-lg object-cover"
        />
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
              {product.name}
            </h1>
            <p className="text-gray-600">{product.category}</p>
            <p className="text-xl md:text-2xl text-gray-800">
              ${product.price.toFixed(2)}
            </p>
            <p className="text-gray-600">Color: {product.color}</p>
            <p className="text-gray-600 mt-4">{product.details}</p>{" "}
            {/* Product Details */}
          </div>
          <div className="flex items-center mt-4">
            <button
              className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition duration-200"
              onClick={decreaseQuantity}
            >
              -
  
            </button>
            <span className="mx-2">{quantity}</span>
            <button
              className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition duration-200"
              onClick={increaseQuantity}
            >
              +
            </button>
          </div>
          <button
            className="mt-4 bg-black text-white px-5 py-2 rounded hover:bg-gray-800 transition duration-200"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

// Toast Component
const Toast = ({ message }) => {
  return (
    <div className="fixed bottom-12 right-5 bg-black border text-white px-4 py-2 rounded shadow-lg">
      {` ${message}`}
    </div>
  );
};

// Loading Skeleton Component
const LoadingSkeleton = () => {
  return (
    <div className="flex flex-col p-6 bg-white shadow-md rounded-lg">
      <div className="w-full h-40 bg-gray-200 animate-pulse mb-4" />
      <div className="h-6 bg-gray-200 animate-pulse mb-2" />
      <div className="h-6 bg-gray-200 animate-pulse mb-2" />
      <div className="h-8 w-24 bg-gray-200 animate-pulse mb-2" />
    </div>
  );
};

// Error Message Component
const ErrorMessage = () => {
  return (
    <div className="text-red-500 text-center font-semibold">
      Error loading product details
    </div>
  );
};

// Product Not Found Component
const ProductNotFound = () => {
  return (
    <div className="text-gray-500 text-center font-semibold">
      Product not found
    </div>
  );
};

export default ProductDetails;
