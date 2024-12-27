const ContactForm = () => {
  return (
    <form className="w-full max-w-md mx-auto">
      {/* Name Field */}
      <div className="mb-5">
        <label
          htmlFor="name"
          className="block text-lg font-medium text-gray-700"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          className="w-full p-4 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent  transition duration-300"
          placeholder="Your Name"
        />
      </div>

      {/* Email Field */}
      <div className="mb-5">
        <label
          htmlFor="email"
          className="block text-lg font-medium text-gray-700"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          className="w-full p-4 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300"
          placeholder="Your Email"
        />
      </div>

      {/* Message Field */}
      <div className="mb-5">
        <label
          htmlFor="message"
          className="block text-lg font-medium text-gray-700"
        >
          Message
        </label>
        <textarea
          id="message"
          className="w-full p-4 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 resize-none"
          placeholder="Your Message"
          rows="6"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full p-4 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
