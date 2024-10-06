import useFetch from "../Util/useFetch";
import { NavLink } from "react-router-dom";

export default function Home() {
  const { data, loading, error } = useFetch(
    "https://jewellery-shop-api-one.vercel.app/jewellery"
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!data || !Array.isArray(data)) {
    return <p>No data available.</p>;
  }

  return (
    <div className=" min-h-screen">
      {" "}
      <div className="bg-gray-100 p-4">
        <h2 className="text-2xl font-bold text-center mb-6">New Arrivals</h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
          {data.map((item) => (
            <div
              key={item.id}
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              <NavLink to={`/product/${item.id}`}>
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-gray-600">{item.price}</p>
                </div>
              </NavLink>
            </div>
          ))}
        </div>
      </div>{" "}
      <div className="bg-gray-100 p-4">
        <h2 className="text-2xl font-bold text-center mb-6">New Arrivals</h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
          {data.map((item) => (
            <div
              key={item.id}
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              <NavLink to={`/product/${item.id}`}>
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-gray-600">{item.price}</p>
                </div>
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
