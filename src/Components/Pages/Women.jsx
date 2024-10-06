import useFetch from "../Util/useFetch";
import CardLayout from "../element/CardLayout ";

const Women = () => {
  const { data, loading, error } = useFetch(
    "https://jewellery-shop-api-one.vercel.app/jewellery"
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const title = "Women's Jewelry Collection";
  const womenJewelryData = data.filter((item) => item.category === "Women");

  return (
    <div>
      <CardLayout items={womenJewelryData} title={title} />
    </div>
  );
};

export default Women;
