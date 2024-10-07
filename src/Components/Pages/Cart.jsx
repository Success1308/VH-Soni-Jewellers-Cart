import { useState } from "react";
import CheckoutModal from "../element/CheckoutModal";

const Cart = ({
  data,
  loading,
  error,
  cart,
  removeFromCart,
  clearCart,
  addToCart,
}) => {
  const [modalOpen, setModalOpen] = useState(false);

  // Handle loading state
  if (loading) {
    return <LoadingSkeleton />;
  }

  const handleCheckout = () => {
    setModalOpen(true);
  };

  // Handle error state
  if (error) {
    return (
      <div className="text-red-500 text-center font-semibold">
        Error fetching data: {error.message}
      </div>
    );
  }

  if (!cart || cart.length === 0) {
    return (
      <div className="text-center text-black font-bold text-3xl">
        Your cart is empty.
      </div>
    );
  }

  // Calculate total price
  const totalPrice = cart.reduce((total, cartItem) => {
    const product = data.find((item) => item.id === cartItem.id);
    return product ? total + product.price * cartItem.quantity : total;
  }, 0);

  return (
    <div className="max-w-xl mx-auto p-6 border border-gray-300 rounded-lg shadow-lg bg-white relative">
      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
        Your Shopping Cart
      </h2>
      <ul className="space-y-4">
        {cart.map((cartItem) => {
          const product = data.find((item) => item.id === cartItem.id);
          return (
            product && (
              <li
                key={cartItem.id}
                className="flex flex-col md:flex-row justify-between items-start p-4 border border-gray-200 rounded-lg shadow-sm bg-gray-50"
              >
                <div className="flex items-start space-x-4">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-32 h-32 rounded-lg object-cover"
                  />
                  <div className="flex flex-col justify-between">
                    <h3 className="text-lg font-semibold">{product.name}</h3>
                    <p className="text-gray-700">
                      Price:{" "}
                      <span className="font-bold">
                        ${product.price.toFixed(2)}
                      </span>
                    </p>
                    <p className="text-gray-700">
                      Quantity:{" "}
                      <span className="font-bold">{cartItem.quantity}</span>
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-center space-y-2 mt-4 md:mt-0">
                  <div className="flex space-x-2">
                    <button
                      onClick={() => {
                        if (cartItem.quantity === 1) {
                          removeFromCart(cartItem.id);
                        } else {
                          addToCart({ ...product, quantity: -1 });
                        }
                      }}
                      className="bg-black text-white px-3 py-2 rounded hover:bg-gray-800 transition"
                    >
                      -
                    </button>
                    <button
                      onClick={() => addToCart({ ...product, quantity: 1 })}
                      className="bg-black text-white px-3 py-2 rounded hover:bg-gray-800 transition"
                    >
                      +
                    </button>
                  </div>
                  <p className="font-semibold">
                    Subtotal:{" "}
                    <span className="font-bold">
                      ${(product.price * cartItem.quantity).toFixed(2)}
                    </span>
                  </p>
                </div>
              </li>
            )
          );
        })}
      </ul>
      <div className="mt-4 border-t pt-4 flex flex-col md:flex-row justify-between items-center">
        <button
          onClick={clearCart}
          className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition mb-4 md:mb-0"
        >
          Clear Cart
        </button>
        <div className="text-xl font-bold">
          Total: <span className="font-bold">${totalPrice.toFixed(2)}</span>
        </div>
        <button
          onClick={handleCheckout} // Open modal on checkout
          className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition mt-4 md:mt-0"
        >
          CHECKOUT
        </button>
      </div>
      <CheckoutModal
        isOpen={modalOpen}
        onClose={() => {
          setModalOpen(false);
          clearCart();
        }}
      />
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

export default Cart;
