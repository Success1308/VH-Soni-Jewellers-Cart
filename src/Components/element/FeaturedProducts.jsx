const FeaturedProducts = ({ products }) => {
  return (
    <section className="featured-products py-12">
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
    <div className="product-card bg-white p-4 shadow-lg rounded-lg">
      <img
        src={product.img}
        alt={product.name}
        className="w-full h-48 object-cover rounded-md"
      />
      <h3 className="text-xl font-semibold mt-4">{product.name}</h3>
      <p className="text-lg text-gold mt-2">${product.price}</p>
      <button className="mt-4 px-4 py-2 bg-gold text-white rounded-lg">
        Add to Cart
      </button>
    </div>
  );
};

export default FeaturedProducts;
