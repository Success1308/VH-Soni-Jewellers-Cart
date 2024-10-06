import useFetch from "../Util/useFetch";
import CardLayout from "../element/CardLayout ";

const All = () => {
  const { data, loading, error } = useFetch(
    "https://jewellery-shop-api-one.vercel.app/jewellery"
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const title = "All Products";

  return (
    <div>
      <CardLayout items={data} title={title} loading={loading} />
    </div>
  );
};

export default All;
