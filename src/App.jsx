import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Pages/Home";
import All from "./Components/Pages/All";
import Men from "./Components/Pages/Men";
import Women from "./Components/Pages/Women";
import About from "./Components/Pages/About";
import Navbar from "./Components/Pages/Navbar";
import Contact from "./Components/Pages/Navbar";

function App() {
  return (
    <BrowserRouter>
      <header>
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="all" element={<All />} />
          <Route path="men" element={<Men />} />
          <Route path="women" element={<Women />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
