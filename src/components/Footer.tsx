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
              <h2 className="text-2xl font-bold text-white uppercase">Kenya Phonemart</h2>
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
                  href="https://www.facebook.com/share/1LbvYa3mD7/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-900 rounded-full hover:bg-blue-600 transition-all duration-300 transform hover:scale-110"
                  aria-label="Facebook"
                >
                  <FaFacebookF className="text-white text-xl" />
                </a>
                <a
                  href="https://www.instagram.com/kenya_phonemart?igsh=MXM1YWR2amw3aGpvMw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-900 rounded-full hover:bg-linear-to-r from-purple-600 to-pink-600 transition-all duration-300 transform hover:scale-110"
                  aria-label="Instagram"
                >
                  <FaInstagram className="text-white text-xl" />
                </a>
                <a
                  href="https://www.tiktok.com/@pho.ne.hub?_r=1&_t=ZS-954J1oDrdeT"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-900 rounded-full hover:bg-black transition-all duration-300 transform hover:scale-110"
                  aria-label="TikTok"
                >
                  <svg className="w-5 h-5 text-white fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.28-2.26.74-4.63 2.58-5.91 1.64-1.15 3.7-1.46 5.66-.9v4.02c-1.31-.32-2.73-.15-3.84.6-1.07.72-1.66 2.01-1.54 3.3.14 1.21.93 2.32 2.02 2.85 1.05.52 2.3.48 3.3-.12 1.07-.63 1.65-1.81 1.65-3.05.02-6.13.01-12.26.04-18.39z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* QUICK LINK */}
           
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-gray-800 mt-12 pt-6 text-center">
          <div className="text-gray-500 text-sm mb-2">
            © <span className="text-white font-medium">Kenya Phonemart</span>
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