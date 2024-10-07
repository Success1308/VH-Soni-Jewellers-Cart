import CardLayout from "../element/CardLayout ";

const Women = ({ data, loading, error, addToCart }) => {
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const title = "Women's Jewelry Collection";
  const womenJewelryData = data.filter((item) => item.category === "Women");
  return (
    <div>
      <CardLayout
        data={womenJewelryData}
        loading={loading}
        error={error}
        addToCart={addToCart}
        title={title}
      />
    </div>
  );
};

export default Women;
