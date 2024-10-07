import CardLayout from "../element/CardLayout ";

const Men = ({ data, loading, error, addToCart }) => {
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  const title = "Men's Jewelry Collection";
  const menJewelryData = data.filter((item) => item.category === "Men");
  return (
    <div>
      <CardLayout
        data={menJewelryData}
        loading={loading}
        error={error}
        addToCart={addToCart}
        title={title}
      />
    </div>
  );
};

export default Men;
