import useFetch from "../Util/useFetch";
import HeroSection from "../element/HeroSection";
import CategorySection from "../element/CategorySection";
import FeaturedProducts from "../element/FeaturedProducts";
import JewelryFeatures from "../element/JewelryFeatures";

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
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title="Discover Exquisite Jewelry"
        subtitle="Elegant collections for every occasion"
        imgUrl="/images/hero-jewelry.jpg"
        buttonText="Shop Now"
      />

      {/* Category Section */}
      <CategorySection />

      {/* Featured Products */}
      <FeaturedProducts products={data.slice(0, 6)} />

      <JewelryFeatures />
    </div>
  );
}
