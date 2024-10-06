export default function Contact() {
  return (
    <section className="contact bg-white py-12">
      <div className="container mx-auto flex flex-col items-center">
        {/* Title Section */}
        <h2 className="text-4xl font-bold mb-6 text-center">Get in Touch</h2>
        <p className="text-lg mb-8 text-center px-4 max-w-2xl">
          We would love to hear from you! Whether you have a question, feedback,
          or just want to say hello, feel free to reach out using the form
          below.
        </p>

        {/* Contact Form */}
        <form className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              required
              className="border border-gray-300 rounded-lg p-2 w-full"
              placeholder="Your Name"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              required
              className="border border-gray-300 rounded-lg p-2 w-full"
              placeholder="Your Email"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              required
              className="border border-gray-300 rounded-lg p-2 w-full h-32"
              placeholder="Your Message"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
