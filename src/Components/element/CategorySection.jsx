import { useState, useEffect } from "react";
import useFetch from "../Util/useFetch";

// Function to validate URL (basic URL validation)
const isValidUrl = (url) => {
  try {
    new URL(url);
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
};

const CategorySection = () => {
  const { data, loading, error } = useFetch(
    "https://jewellery-shop-api-one.vercel.app/jewellery"
  );
  const [categoryImages, setCategoryImages] = useState({
    Rings: null,
    Necklaces: null,
    Chains: null,
  });

  const getRandomImageForCategory = (categoryKeyword) => {
    if (data && Array.isArray(data)) {
      const filteredItems = data.filter((item) =>
        item.name.toLowerCase().includes(categoryKeyword.toLowerCase())
      );

      if (filteredItems.length > 0) {
        const randomItem =
          filteredItems[Math.floor(Math.random() * filteredItems.length)];
        // Validate the URL before returning it
        return isValidUrl(randomItem.img)
          ? randomItem.img
          : "/images/fallback.jpg";
      }
    }
    return "/images/fallback.jpg";
  };

  useEffect(() => {
    if (data && Array.isArray(data)) {
      setCategoryImages({
        Rings: getRandomImageForCategory("ring"),
        Necklaces: getRandomImageForCategory("necklace"),
        Chains: getRandomImageForCategory("chain"),
      });
    }
  }, [data]);

  if (loading) return <p>Loading categories...</p>;
  if (error) return <p>Error loading categories: {error}</p>;

  return (
    <section className="border my-auto min-h-[70vh] flex flex-col items-center justify-center">
      <h2 className="text-center text-3xl font-semibold">Shop by Category</h2>
      <div className="flex justify-center gap-8 my-10">
        {categoryImages.Rings && (
          <CategoryCard title="Rings" imgUrl={categoryImages.Rings} />
        )}
        {categoryImages.Necklaces && (
          <CategoryCard title="Necklaces" imgUrl={categoryImages.Necklaces} />
        )}
        {categoryImages.Chains && (
          <CategoryCard title="Chains" imgUrl={categoryImages.Chains} />
        )}
      </div>
    </section>
  );
};

export default CategorySection;

// CategoryCard component with basic XSS protections
const CategoryCard = ({ title, imgUrl }) => {
  return (
    <div className="category-card relative w-64 h-64 overflow-hidden rounded-lg shadow-lg">
      {/* Using a validated image URL */}
      <img src={imgUrl} alt={title} className="w-full h-full object-cover" />
      <div className="absolute bottom-0 w-full bg-black bg-opacity-50 p-4 text-white">
        <h3 className="text-xl">{title}</h3>
      </div>
    </div>
  );
};
