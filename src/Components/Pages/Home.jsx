import useFetch from "../Util/useFetch";

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
      <h1 className="text-3xl font-bold mb-4 text-center">
        Jewelry Collection
      </h1>
      <div className="mx-8 grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5">
        {data.map((item) => (
          <div
            key={item.id}
            className="border rounded-lg p-4 bg-white shadow-md"
          >
            <img
              src={item.img}
              alt={item.name}
              className="w-45 h-45 object-cover mb-2 rounded-md"
            />
            <h2 className="text-xl font-semibold text-gray-800 text-center">
              {item.name}
            </h2>

            <p className="text-sm text-gray-500 text-center">
              Category: {item.category}
            </p>
            <p className="text-sm text-gray-500 text-center">
              Color: {item.color}
            </p>
            <p className="text-gray-700 mb-2 text-center">{item.details}</p>
            <p className="text-lg font-bold text-gray-900 text-center">
              ${item.price}
            </p>
            <div className="text-center mt-4">
              <button className="px-4 py-2 bg-[#FFD700] text-white font-semibold rounded hover:bg-[#FFBF00] transition duration-300">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export const apiLoader = async () => {
  const response = await fetch(
    "https://jewellery-shop-api-one.vercel.app/jewellery"
  );
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
};
