import CardLayout from "../element/CardLayout ";

const All = ({ data, loading, error, addToCart }) => {
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const title = "All Products";
  return (
    <div>
      <CardLayout
        data={data}
        loading={loading}
        error={error}
        addToCart={addToCart}
        title={title}
      />
    </div>
  );
};

export default All;
