import { useState, useEffect } from "react";

const CategorySection = ({ data, loading, error }) => {
  const [categoryImages, setCategoryImages] = useState({
    Rings: null,
    Necklaces: null,
    Chains: null,
  });
  const isValidUrl = (url) => {
    try {
      new URL(url);
      return true;
    } catch (e) {
      console.log(e);
      return false;
    }
  };

  const getRandomImageForCategory = (categoryKeyword) => {
    if (data && Array.isArray(data)) {
      const filteredItems = data.filter((item) =>
        item.name.toLowerCase().includes(categoryKeyword.toLowerCase())
      );

      if (filteredItems.length > 0) {
        const randomItem =
          filteredItems[Math.floor(Math.random() * filteredItems.length)];

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
    <section className="border my-auto min-h-[70vh] flex flex-col items-center justify-center p-4">
      <h2 className="text-center text-3xl font-semibold">Shop by Category</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 my-10">
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

const CategoryCard = ({ title, imgUrl }) => {
  return (
    <div className="category-card relative w-full h-64 overflow-hidden rounded-lg shadow-lg">
      <img
        src={imgUrl}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-105"
      />
      <div className="absolute bottom-0 w-full bg-black bg-opacity-50 p-4 text-white">
        <h3 className="text-xl">{title}</h3>
      </div>
    </div>
  );
};
