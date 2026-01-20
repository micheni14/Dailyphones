import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPhoneAlt,
  FaShoppingBag,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300">
      <div className=" px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          
          {/* BRAND & DESCRIPTION */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-white p-2 rounded-full">
                <FaShoppingBag className="text-black text-xl" />
              </div>
              <h2 className="text-2xl font-bold text-white">DailyPHONES KE</h2>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Your one-stop shop for <span className="text-white font-semibold">lipa mdogo mdogo</span> gadgets 
              from top brands in Kenya such as Samsung and Iphone.
            </p>
            <div className="pt-4">
              <p className="text-sm text-gray-400">
                Deposits range from as low as <span className="text-white font-bold">Ksh 1,000</span>, 
                and easy daily installments starting from <span className="text-white font-bold">Ksh 50</span>.
              </p>
            </div>
          </div>

          {/* CONTACT & SOCIAL MEDIA */}
          <div className="space-y-6">
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">
                Get In Touch
              </h3>
              <div className="flex items-center gap-3 mb-6">
                <FaPhoneAlt className="text-white" />
                <span className="text-white font-semibold text-lg">0745-507-108</span>
              </div>
            </div>

            {/* SOCIAL MEDIA */}
            <div>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="p-3 bg-gray-900 rounded-full hover:bg-blue-600 transition-all duration-300 transform hover:scale-110"
                  aria-label="Facebook"
                >
                  <FaFacebookF className="text-white text-xl" />
                </a>
                <a
                  href="#"
                  className="p-3 bg-gray-900 rounded-full hover:bg-linear-to-r from-purple-600 to-pink-600 transition-all duration-300 transform hover:scale-110"
                  aria-label="Instagram"
                >
                  <FaInstagram className="text-white text-xl" />
                </a>
                <a
                  href="#"
                  className="p-3 bg-gray-900 rounded-full hover:bg-sky-500 transition-all duration-300 transform hover:scale-110"
                  aria-label="Twitter"
                >
                  <FaTwitter className="text-white text-xl" />
                </a>
              </div>
            </div>

            {/* QUICK LINK */}
           
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-gray-800 mt-12 pt-6 text-center">
          <div className="text-gray-500 text-sm mb-2">
            © <span className="text-white font-medium">DailyPHONES KE</span>
          </div>
          <p className="text-gray-400 text-xs">
            Quality smartphones made affordable for everyone
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;