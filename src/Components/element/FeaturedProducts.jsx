const FeaturedProducts = ({ products }) => {
  return (
    <section className="py-12">
      <h2 className="text-center text-3xl font-semibold">Featured Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

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
        </p>{" "}
      </div>
    </div>
  );
};

export default FeaturedProducts;
