import HeroSection from "../element/HeroSection";
import CategorySection from "../element/CategorySection";
import FeaturedProducts from "../element/FeaturedProducts";
import JewelryFeatures from "../element/JewelryFeatures";

export default function Home({ data, loading, error }) {
  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <HeroSection />

      {/* Category Section */}
      <CategorySection data={data} loading={loading} error={error} />

      {/* Featured Products */}
      <FeaturedProducts
        data={data.slice(0, 6)}
        loading={loading}
        error={error}
      />

      <JewelryFeatures />
    </div>
  );
}
