const FeaturedProducts = ({ data, loading, error }) => {
  if (error) {
    return (
      <section className="py-12">
        <h2 className="text-center text-3xl font-semibold text-red-500">
          Error loading products. Please try again later.
        </h2>
      </section>
    );
  }

  if (loading) {
    return (
      <section className="py-12">
        <h2 className="text-center text-3xl font-semibold">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {Array.from({ length: 6 }).map((_, index) => (
            <SkeletonCard key={index} />
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="py-12">
      <h2 className="text-center text-3xl font-semibold">Featured Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        {data.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

// Product Card
const ProductCard = ({ product }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img
        src={product.img}
        alt={product.name}
        className="w-full min-h-64 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-center">{product.name}</h3>
        <p className="text-lg text-black text-center mt-2">
          ${product.price.toFixed(2)}
        </p>
      </div>
    </div>
  );
};

// Skeleton Card for loading state
const SkeletonCard = () => {
  return (
    <div className="bg-gray-200 animate-pulse shadow-lg rounded-lg overflow-hidden">
      <div className="w-full h-64 bg-gray-300" />
      <div className="p-4">
        <div className="h-6 bg-gray-300 mb-4" />
        <div className="h-4 bg-gray-300 w-24 mx-auto" />
      </div>
    </div>
  );
};

export default FeaturedProducts;
