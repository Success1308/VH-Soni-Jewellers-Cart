import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import Home, { apiLoader } from "./Components/Pages/Home";
import All from "./Components/Pages/All";
import Men from "./Components/Pages/Men";
import Women from "./Components/Pages/Women";
import About from "./Components/Pages/About";
import Navbar from "./Components/Pages/Navbar";
import Contact from "./Components/Pages/Navbar";
import NotFound from "./Components/Pages/NotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navbar />}>
      <Route index element={<Home />} />
      <Route path="all" element={<All />} loader={apiLoader} />
      <Route path="men" element={<Men />} />
      <Route path="women" element={<Women />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
