const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t mt-16">
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* Left Content */}
          <div className="text-center lg:text-left">
            
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
              Subscribe to our Newsletter
            </h2>

            <p className="mt-4 text-gray-600 text-sm sm:text-base max-w-lg">
              Be the first to hear about new products, exclusive events,
              and special online offers.
            </p>

            <p className="mt-3 text-sm sm:text-base font-medium text-blue-600">
              Sign up today and get 10% off on your first order.
            </p>
          </div>

          {/* Right Form */}
          <div className="bg-white shadow-xl rounded-2xl p-5 sm:p-8 w-full">
            
            <form className="space-y-5">

              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>

                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 text-sm sm:text-base border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 text-sm sm:text-base border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 active:scale-95 transition-all duration-300 text-white font-semibold py-3 rounded-xl"
              >
                Subscribe Now
              </button>

            </form>
          </div>

        </div>

        {/* Bottom Footer */}
        <div className="border-t mt-12 pt-6 text-center text-sm text-gray-500">
          © 2026 Your Brand. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;