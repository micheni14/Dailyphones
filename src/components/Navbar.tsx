import { useState, useEffect } from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaSearch,
  FaTimes,
  FaPhone,
  FaBox,
} from "react-icons/fa";

const PROMOS = [
  "One year warranty",
  "Free delivery across Kenya",
  "Flexible weekly payment plans",
];

const Navbar = () => {
  const [promoIndex, setPromoIndex] = useState(0);
  const [showPromo, setShowPromo] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setShowPromo(false);
      setTimeout(() => {
        setPromoIndex((prev) => (prev + 1) % PROMOS.length);
        setShowPromo(true);
      }, 300);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const goToNextPromo = () => {
    setShowPromo(false);
    setTimeout(() => {
      setPromoIndex((prev) => (prev + 1) % PROMOS.length);
      setShowPromo(true);
    }, 300);
  };

  const goToPrevPromo = () => {
    setShowPromo(false);
    setTimeout(() => {
      setPromoIndex((prev) => (prev - 1 + PROMOS.length) % PROMOS.length);
      setShowPromo(true);
    }, 300);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
    if (!searchOpen) {
      setTimeout(() => {
        document.getElementById('search-input')?.focus();
      }, 100);
    }
  };

  const handleSearchSubmit = () => {
    console.log("Searching for:", searchQuery);
    // Add your search logic here
  };

  const handleKeyPress = (e: { key: string; }) => {
    if (e.key === 'Enter') {
      handleSearchSubmit();
    }
  };

  return (
    <>
      {/* Top promo bar */}
      <div
        className={`bg-linear-to-r from-blue-50 to-blue-100 text-gray-800 h-12 transition-opacity duration-300 ease-in-out ${
          showPromo ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-2 text-sm">
            <button
              onClick={goToPrevPromo}
              className="text-gray-600 hover:text-blue-900 focus:outline-none transition-colors p-2"
              aria-label="Previous promotion"
            >
              <FaArrowLeft />
            </button>

            <p className="font-medium text-center flex-1 truncate font-montserrat px-4">
              {PROMOS[promoIndex]}
            </p>

            <button
              onClick={goToNextPromo}
              className="text-gray-600 hover:text-blue-900 focus:outline-none transition-colors p-2"
              aria-label="Next promotion"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <nav className="bg-white sticky top-0 z-50 border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 lg:h-28">
            {/* Logo */}
            <a href="/" className="flex items-center z-50">
              <span className="text-2xl lg:text-3xl font-bold text-blue-900 font-montserrat-alternates">
                Dailyphoneske
              </span>
            </a>

            {/* Center links - Desktop */}
            <div className="hidden lg:flex items-center space-x-10">
              <a
                href="/products"
                className="text-gray-700 hover:text-blue-900 hover:underline font-medium text-lg font-montserrat transition-colors"
              >
                Our Products
              </a>

              <span className="text-gray-700 hover:cursor-pointer font-medium text-lg font-montserrat hover:underline transition-colors">
                Call to order –{" "}
                <span className="font-semibold">0745-507-108</span>
              </span>
            </div>

            {/* Right actions */}
            <div className="flex items-center space-x-4 lg:space-x-6">
              <button
                onClick={toggleSearch}
                aria-label="Search"
                className="text-gray-700 hover:text-blue-900 focus:outline-none transition-colors p-2"
              >
                <FaSearch className="text-lg lg:text-xl" />
              </button>

              {/* Hamburger Menu Button */}
              <button
                onClick={toggleMobileMenu}
                className="lg:hidden p-2 text-gray-700 cursor-pointer hover:text-blue-900 focus:outline-none transition-colors z-50"
                aria-label="Toggle menu"
              >
                <div className="w-6 h-5 flex flex-col justify-between">
                  <span
                    className={`w-full h-0.5 bg-current transform transition-all duration-300 ${
                      mobileMenuOpen ? "rotate-45 translate-y-2" : ""
                    }`}
                  ></span>
                  <span
                    className={`w-full h-0.5 bg-current transition-all duration-300 ${
                      mobileMenuOpen ? "opacity-0" : "opacity-100"
                    }`}
                  ></span>
                  <span
                    className={`w-full h-0.5 bg-current transform transition-all duration-300 ${
                      mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                    }`}
                  ></span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Search Overlay */}
      <div
        className={`fixed inset-0 bg-black z-50 transition-all duration-300 ${
          searchOpen ? "bg-opacity-70 opacity-100" : "bg-opacity-0 opacity-0 pointer-events-none"
        }`}
        onClick={toggleSearch}
      >
        {/* Search Container */}
        <div
          className={`absolute top-0 left-0 right-0 bg-white shadow-2xl transition-transform duration-300 ${
            searchOpen ? "translate-y-0" : "-translate-y-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="max-w-4xl mx-auto p-6 lg:p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-800 font-montserrat">
                Search Products
              </h2>
              <button
                onClick={toggleSearch}
                className="text-gray-600 hover:text-blue-900 transition-colors"
                aria-label="Close search"
              >
                <FaTimes className="text-2xl" />
              </button>
            </div>

            <div className="relative">
              <div className="relative">
                <input
                  id="search-input"
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Search for phones, accessories..."
                  className="w-full px-6 py-4 pr-12 text-lg border-2 border-gray-300 rounded-xl focus:border-blue-900 focus:outline-none transition-colors font-montserrat"
                />
                <button
                  onClick={handleSearchSubmit}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-blue-900 hover:text-blue-700 transition-colors"
                  aria-label="Submit search"
                >
                  <FaSearch className="text-xl" />
                </button>
              </div>
            </div>

            {/* Popular Searches */}
            <div className="mt-6">
              <p className="text-sm text-gray-500 font-semibold mb-3 font-montserrat">
                Popular Searches:
              </p>
              <div className="flex flex-wrap gap-2">
                {["Samsung", "iPhone", "Accessories", "Cases", "Chargers"].map((term) => (
                  <button
                    key={term}
                    onClick={() => setSearchQuery(term)}
                    className="px-4 py-2 bg-gray-100 hover:bg-blue-100 text-gray-700 hover:text-blue-900 rounded-full text-sm font-medium transition-colors font-montserrat"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-transparent bg-opacity-50 z-40 lg:hidden transition-opacity duration-300 ${
          mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMobileMenu}
      ></div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white z-50 lg:hidden transform transition-transform duration-300 ease-in-out shadow-2xl ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Close button */}
          <div className="flex justify-end p-6 border-b border-gray-100">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-600 cursor-pointer hover:text-blue-900 focus:outline-none transition-colors"
              aria-label="Close menu"
            >
              <FaTimes className="text-2xl" />
            </button>
          </div>

          {/* Menu Content */}
          <div className="flex-1 overflow-y-auto">
            <div className="p-6 space-y-6">
              {/* Products Link */}
              <a
                href="/products"
                className={`flex items-center space-x-4 p-4 rounded-xl bg-linear-to-r from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 transition-all duration-300 group ${
                  mobileMenuOpen ? "animate-slide-in-1" : ""
                }`}
                onClick={toggleMobileMenu}
              >
                <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <FaBox className="text-white text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 font-montserrat">
                    Our Products
                  </h3>
                  <p className="text-sm text-gray-600">Browse our collection</p>
                </div>
              </a>

              {/* Call to Order */}
              <a
                href="tel:0745507108"
                className={`flex items-center space-x-4 p-4 rounded-xl bg-linear-to-r from-green-50 to-green-100 hover:from-green-100 hover:to-green-200 transition-all duration-300 group ${
                  mobileMenuOpen ? "animate-slide-in-2" : ""
                }`}
              >
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <FaPhone className="text-white text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 font-montserrat">
                    Call to Order
                  </h3>
                  <p className="text-sm font-semibold text-green-700">
                    0745-507-108
                  </p>
                </div>
              </a>

              {/* Promotions Section */}
              <div
                className={`mt-8 ${
                  mobileMenuOpen ? "animate-slide-in-3" : ""
                }`}
              >
                <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4 font-montserrat">
                  Why Choose Us
                </h4>
                <div className="space-y-3">
                  {PROMOS.map((promo, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                    >
                      <div className="w-2 h-2 bg-blue-900 rounded-full mt-2 shrink-0"></div>
                      <p className="text-sm text-gray-700 font-montserrat">
                        {promo}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="p-6 border-t border-gray-100 bg-gray-50">
            <p className="text-xs text-gray-500 text-center font-montserrat">
              © 2024 Dailyphoneske. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideIn1 {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideIn2 {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideIn3 {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-slide-in-1 {
          animation: slideIn1 0.4s ease-out 0.1s both;
        }

        .animate-slide-in-2 {
          animation: slideIn2 0.4s ease-out 0.2s both;
        }

        .animate-slide-in-3 {
          animation: slideIn3 0.4s ease-out 0.3s both;
        }
      `}</style>
    </>
  );
};

export default Navbar;