const JewelryFeatures = () => {
  const features = [
    {
      id: 1,
      icon: "/public/img/shipping.png",
      title: "FAST & SECURE SHIPPING",
      description: "Enjoy quick delivery of your favorite jewelry pieces!",
    },
    {
      id: 2,
      icon: "/public/img/discount.png",
      title: "EXCLUSIVE OFFERS",
      description: "Get special discounts on your first purchase!",
    },
    {
      id: 3,
      icon: "/public/img/authentic.png",
      title: "100% AUTHENTIC",
      description:
        "All our jewelry is crafted with the highest quality standards.",
    },
    {
      id: 4,
      icon: "/public/img/customer.png",
      title: "24/7 CUSTOMER SUPPORT",
      description: "We're here to help you anytime, anywhere.",
    },
  ];

  return (
    <section className="py-12 bg-black-50">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="flex flex-col items-center p-4 bg-white rounded-lg transition-transform duration-300 hover:scale-102"
          >
            <img
              src={feature.icon}
              alt={feature.title}
              className="w-16 h-16 mb-4"
            />
            <h3 className="text-lg font-semibold">{feature.title}</h3>
            <p className="mt-2 text-gray-500">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default JewelryFeatures;
