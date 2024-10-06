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
import { useState } from "react";

const App = () => {
  // State to hold cart items
  const [cartItems, setCartItems] = useState([]);

  // Function to add item to cart
  const addItemToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  // Function to remove item from cart
  const removeItemFromCart = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  // Function to clear the cart
  const clearCart = () => {
    setCartItems([]);
  };

  // Create routes and pass down cart state and functions as props
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={<Navbar cartItems={cartItems} clearCart={clearCart} />}
      >
        <Route index element={<Home />} />
        <Route path="all" element={<All addItemToCart={addItemToCart} />} />
        <Route path="men" element={<Men addItemToCart={addItemToCart} />} />
        <Route path="women" element={<Women addItemToCart={addItemToCart} />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
