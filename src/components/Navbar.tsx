import { useState, useEffect } from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaSearch,
} from "react-icons/fa";

const PROMOS = [
  "One year warranty",
  "Free delivery across Kenya",
  "Flexible weekly payment plans",
];

const Navbar = () => {
  const [promoIndex, setPromoIndex] = useState(0);
  const [showPromo, setShowPromo] = useState(true);

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

  return (
    <>
      {/* Top promo bar - scrolls with content */}
      <div
        className={`bg-gray-200 text-gray-800 h-12 transition-opacity duration-300 ease-in-out ${
          showPromo ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-2 text-sm">
            <button
              onClick={goToPrevPromo}
              className="text-gray-600 hover:text-blue-900 focus:outline-none transition-colors"
            >
              <FaArrowLeft />
            </button>

            <p className="font-medium text-center flex-1 truncate font-montserrat">
              {PROMOS[promoIndex]}
            </p>

            <button
              onClick={goToNextPromo}
              className="text-gray-600 hover:text-blue-900 focus:outline-none transition-colors"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>

      {/* Main navbar - sticky */}
      <nav className="bg-white sticky top-0 z-50 border-b border-gray-200">
        <div className=" px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-28">
            {/* Logo */}
            <a href="/" className="flex items-center">
              <span className="text-3xl font-bold text-blue-900 font-montserrat-alternates">
                Dailyphoneske
              </span>
            </a>

            {/* Center links */}
            <div className="hidden md:flex items-center space-x-10 ">
              <a
                href="/products"
                className="text-gray-700 hover:text-blue-900 hover:underline font-medium text-lg font-montserrat transition-colors"
              >
                Our Products
              </a>

              <span className="text-gray-700 hover:cursor-pointer font-medium text-lg font-montserrat hover:underline transition-colors">
                Call to order –{" "}
                <span className="font-semibold">0745 -507-108</span>
              </span>
            </div>

            {/* Right actions */}
            <div className="flex items-center space-x-6">
              <button
                aria-label="Search"
                className="text-gray-700 hover:text-blue-900 focus:outline-none transition-colors"
              >
                <FaSearch className="text-lg" />
              </button>

              
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;