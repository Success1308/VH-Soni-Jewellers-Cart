const HeroSection = () => {
  return (
    <section className="hero-section bg-cream -mt-12 mx-16 p-10 min-h-[90vh] flex items-center justify-between ">
      {/* Text Block */}
      <div className="w-1/2">
        <h1 className="text-5xl font-bold text-black leading-tight">
          The{" "}
          <span className="relative inline-block">
            most beautiful
            <span className="absolute inset-x-0 bottom-0 h-1 bg-red-500"></span>
          </span>{" "}
          and{" "}
          <span className="relative inline-block">
            high-quality
            <span className="absolute inset-x-0 bottom-0 h-1 bg-red-500"></span>
          </span>{" "}
          Jewelry in the whole world
        </h1>
        <p className="text-gray-500 mt-6 text-lg leading-relaxed">
          Discover the elegance and timeless beauty of our exclusive collection.
          Handcrafted with precision, our jewelry reflects unmatched
          craftsmanship and luxury. Perfect for every occasion, wear the
          brilliance you deserve.
        </p>
        <button className="mt-8 px-6 py-3 bg-[#131c28] text-white font-semibold rounded-lg shadow-lg hover:bg-[#131c28]/80 transition duration-300">
          Explore Now
        </button>
      </div>

      {/* Product Card */}
      <div className="relative w-1/3 text-center">
        <div className="relative inline-block bg-white rounded-lg shadow-lg p-6">
          <img
            src="/src/assets/1000.jpeg"
            alt="Product"
            className="w-80 h-80  object-cover mx-auto"
          />
          <div className="mt-4 flex justify-between items-center">
            <h3 className="text-lg font-semibold">Beautiful Earrings</h3>
            <p className="text-red-500 font-bold">$300</p>
          </div>
          <div className="absolute inset-0 rounded-lg border-2 border-black transform translate-x-2 translate-y-2 -z-10 bg-[#131c28]"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
