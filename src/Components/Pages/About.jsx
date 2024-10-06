import { FaGem, FaRegClock, FaRegHeart } from "react-icons/fa";

const About = () => {
  return (
    <section className="about  py-12">
      <div className="container mx-auto flex flex-col items-center">
        {/* Title Section */}
        <h2 className="text-4xl font-bold mb-6 text-center">About Us</h2>
        <p className="text-lg mb-8 text-center px-4 max-w-2xl">
          Welcome to VH Soni Jewellers! We are dedicated to providing you with
          exquisite jewelry that captures the essence of elegance and
          sophistication. With a commitment to quality and craftsmanship, our
          pieces are designed to celebrate every occasion.
        </p>

        {/* Image Section */}
        <img
          src="https://github.com/Success1308/VH-Soni-Jewellers-Cart/blob/main/public/img/logo.jpg?raw=true"
          alt="Jewelry Display"
          className="mb-8 rounded-lg shadow-lg h-64 w-auto"
        />

        {/* Features Section */}
        <div className="flex flex-wrap justify-around max-w-4xl">
          <div className="feature flex flex-col items-center bg-white p-6 m-4 rounded-lg shadow-lg transition transform hover:scale-103">
            <FaGem className="text-5xl text-black-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              Quality Craftsmanship
            </h3>
            <p className="text-center">
              Our jewelry is crafted with precision and attention to detail,
              ensuring the highest quality in every piece.
            </p>
          </div>

          <div className="feature flex flex-col items-center bg-white p-6 m-4 rounded-lg shadow-lg transition transform hover:scale-103">
            <FaRegClock className="text-5xl text-black-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Timeless Designs</h3>
            <p className="text-center">
              Our timeless designs are perfect for any occasion, making them
              cherished keepsakes for years to come.
            </p>
          </div>

          <div className="feature flex flex-col items-center bg-white p-6 m-4 rounded-lg shadow-lg transition transform hover:scale-103">
            <FaRegHeart className="text-5xl text-black-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              Customer Satisfaction
            </h3>
            <p className="text-center">
              We prioritize our customers and strive to provide an exceptional
              experience with every purchase.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
