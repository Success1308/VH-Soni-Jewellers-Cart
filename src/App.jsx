// src/App.js
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import Home from "./Components/Pages/Home";
import All from "./Components/Pages/All";
import Men from "./Components/Pages/Men";
import Women from "./Components/Pages/Women";
import About from "./Components/Pages/About";
import Navbar from "./Components/Pages/Navbar";
import Contact from "./Components/Pages/Contact";
import NotFound from "./Components/Pages/NotFound";
import Cart from "./Components/Pages/Cart";
import ProductDetails from "./Components/Pages/ProductDetails";
import { useState } from "react";
import useFetch from "./Components/Util/useFetch";

const App = () => {
  const [cart, setCart] = useState([]);
  const { data, loading, error } = useFetch(
    "https://jewellery-shop-api-one.vercel.app/jewellery"
  );

  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);

      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
            : cartItem
        );
      } else {
        return [...prevCart, { ...item }];
      }
    });
  };

  // Function to remove an item from the cart
  const removeFromCart = (itemId) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === itemId);
      if (existingItem.quantity === 1) {
        // Remove the item if its quantity is 1
        return prevCart.filter((cartItem) => cartItem.id !== itemId);
      } else {
        // Decrease the quantity by 1 if more than 1 exists
        return prevCart.map((cartItem) =>
          cartItem.id === itemId
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        );
      }
    });
  };

  // Function to clear all items from the cart
  const clearCart = () => {
    setCart([]);
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Navbar cart={cart} />}>
        <Route
          index
          element={<Home data={data} loading={loading} error={error} />}
        />
        <Route
          path="all"
          element={<All data={data} loading={loading} error={error} />}
        />
        <Route
          path="men"
          element={<Men data={data} loading={loading} error={error} />}
        />
        <Route
          path="women"
          element={<Women data={data} loading={loading} error={error} />}
        />

        <Route
          path=":category/:id"
          element={
            <ProductDetails
              data={data}
              loading={loading}
              error={error}
              addToCart={addToCart}
            />
          }
        />

        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route
          path="cart"
          element={
            <Cart
              data={data}
              loading={loading}
              error={error}
              cart={cart}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
              clearCart={clearCart}
            />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
