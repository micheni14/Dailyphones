import { useState, useEffect, useMemo } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { products } from "../data/products";

const heroSlides = [
  {
    image: "/image1.jpeg",
    title: "Lipa Mdogo Mdogo Online",
    description:
      "Call or WhatsApp0745-507-108 for friendly, fast support. We're available from 8AM to 8PM, Monday to Saturday.",
  },

  {
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
    title: "Trusted Phone Store",
    description:
      "Genuine Samsung and iPhone devices — quality guaranteed with 1-year warranty.",
  },
];

const brands = [
  { 
    name: "Samsung", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/b4/Samsung_wordmark.svg",
    description: "Latest Galaxy series"
  },
  { 
    name: "Apple iPhone", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    description: "iPhone 13, 14 & 15 series"
  },
  {
    name: "Motorola",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/32/Motorola_logo.svg",
    description: "G Power & Stylus series"
  }
];


const HomePage = () => {
  const [current, setCurrent] = useState(0);
  const [filterBrand, setFilterBrand] = useState<string | null>(null);

  const displayedProducts = useMemo(() => {
    const seenModels = new Set();
    const filtered = products.filter(p => {
      const hasImage = p.images && p.images.length > 0 && p.images[0] !== "";
      const isNewModel = !seenModels.has(p.model);
      if (hasImage && isNewModel) {
        seenModels.add(p.model);
        return true;
      }
      return false;
    });

    return filterBrand 
      ? filtered.filter(p => p.brand === filterBrand)
      : filtered.slice(0, 10);
  }, [filterBrand]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-gray-50">
      
      {/* HERO CAROUSEL */}
      <section className="relative h-100 md:h-200 lg:h-250 overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/55"></div>

            {/* Text Overlay */}
            <div className="absolute inset-0 flex items-center">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-2xl text-white">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 font-montserrat">
                    {slide.title}
                  </h1>
                  <p className="mb-6 text-base sm:text-lg text-gray-200 font-montserrat">
                    {slide.description}
                  </p>
                  <Link 
  to="/products"
  className="inline-block bg-blue-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-blue-800 transition-colors text-sm sm:text-base font-montserrat text-white"
>
  SHOP NOW
</Link>
                </div>
              </div>
            </div>
          </div>
        ))}

       

        {/* Dots indicator */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                index === current ? "bg-white w-6 md:w-8" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </section>

      {/* BRANDS SECTION */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center font-montserrat text-gray-900">
            Premium Brands We Offer
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
            {brands.map((brand) => (
              <div
                key={brand.name}
                onClick={() => setFilterBrand(brand.name)}
                className={`group relative bg-linear-to-br from-gray-50 to-white border-2 rounded-2xl p-8 md:p-12 hover:border-blue-500 hover:shadow-xl transition-all duration-300 cursor-pointer ${
                  filterBrand === brand.name ? "border-blue-600 shadow-md" : "border-gray-200"
                }`}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="h-16 md:h-20 mb-6 flex items-center justify-center">
                    <img
                      src={brand.logo}
                      alt={brand.name}
                      className="h-full object-contain filter group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 font-montserrat">
                    {brand.name}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base font-montserrat">
                    {brand.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          {filterBrand && (
            <div className="text-center mt-8">
              <button 
                onClick={() => setFilterBrand(null)}
                className="text-blue-600 font-semibold hover:underline"
              >
                Clear Filter
              </button>
            </div>
          )}
        </div>
      </section>

      {/* RECENT STOCK SECTION */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold font-montserrat text-gray-900">
              {filterBrand ? `${filterBrand} Stock` : "Recent Stock"}
            </h2>
            <Link to="/products" className="text-blue-900 hover:text-blue-700 font-semibold text-sm md:text-base font-montserrat hidden sm:block">
              View All →
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {displayedProducts.map((p) => {
              const pricing = Object.values(p.pricing)[0] as any;
              return (
                <Link
                  to={`/products/${p.id}`}
                  key={p.id}
                  className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-200"
                >
                  <div className="relative overflow-hidden bg-gray-100">
                    <img
                      src={p.images?.[0] || ""}
                      alt={p.name}
                      className="w-full h-48 md:h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {p.condition === "Excellent" && (
                      <div className="absolute top-3 left-3 bg-green-500 text-white px-2 py-1 rounded-lg text-xs md:text-sm font-bold">
                        New Stock
                      </div>
                    )}
                  </div>
                  <div className="p-3 md:p-4">
                    <h3 className="font-bold text-sm md:text-base text-gray-900 mb-1 font-montserrat line-clamp-1">
                      {p.name}
                    </h3>
                    <p className="text-xs md:text-sm text-gray-600 mb-2 font-montserrat line-clamp-1">
                      {p.storage[0]} • {p.condition}
                    </p>
                    <p className="text-blue-900 font-bold text-sm md:text-lg font-montserrat">
                      Ksh {pricing.weekly.toLocaleString()}/week
                    </p>
                    <button className="w-full mt-3 bg-blue-900 text-white py-2 rounded-lg font-semibold text-xs md:text-sm hover:bg-blue-800 transition-colors font-montserrat">
                      Order Now
                    </button>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-12 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-blue-900 font-montserrat">
              How It Works
            </h2>
            <p className="text-gray-600 text-base md:text-xl leading-relaxed font-montserrat">
              Get your dream phone easily with Lipa Mdogo Mdogo — fast approval, safe delivery,
              and flexible weekly payments.
            </p>
          </div>

          {/* Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12 md:mb-24">
            {[
              {
                number: "1",
                title: "Choose & Apply",
                description: "Pick your device and complete our quick 1-minute application.",
                note: "Requirements: MPESA statement and national ID"
              },
              {
                number: "2",
                title: "Receive Your Phone",
                description: "We deliver to your doorstep. Inspect thoroughly before payment.",
                note: "Free delivery within Nairobi."
              },
              {
                number: "3",
                title: "Pay Conveniently",
                description: "Small deposit, then flexible weekly installments via MPESA.",
                note: "Automatic reminders included"
              }
            ].map((step, index) => (
              <div key={index} className="relative text-center">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-blue-900 text-white flex items-center justify-center text-2xl md:text-3xl font-bold shadow-lg">
                    {step.number}
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4 font-montserrat">
                  {step.title}
                </h3>
                <p className="text-gray-600 mb-3 leading-relaxed text-sm md:text-base font-montserrat">
                  {step.description}
                </p>
                <p className="text-xs md:text-sm text-blue-600 font-semibold bg-blue-50 inline-block px-4 py-2 rounded-lg font-montserrat">
                  {step.note}
                </p>
              </div>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="mb-12 md:mb-24">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 font-montserrat">
              <span className="text-gray-900">A Deal </span>
              <span className="text-blue-600">You Can Trust</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              {[
                { text: "Pay on Delivery", icon: "✓", color: "green" },
                { text: "48 Hours Return", icon: "⏱", color: "blue" },
                { text: "1 Year Warranty", icon: "🛡", color: "purple" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center p-6 bg-linear-to-br from-gray-50 to-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200"
                >
                  <div
                    className={`text-3xl md:text-4xl font-bold mb-4 ${
                      item.color === "green"
                        ? "text-green-500"
                        : item.color === "blue"
                        ? "text-blue-500"
                        : "text-purple-500"
                    }`}
                  >
                    {item.icon}
                  </div>
                  <div className="text-gray-800 font-semibold text-base md:text-lg font-montserrat text-center">
                    {item.text}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-linear-to-br from-blue-50 to-indigo-50 rounded-2xl md:rounded-3xl p-8 md:p-12">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 font-montserrat">
                Start Your Lipa Mdogo Mdogo Journey
              </h3>
              <p className="text-gray-700 text-base md:text-lg mb-6 md:mb-8 leading-relaxed font-montserrat">
                Call or WhatsApp{" "}
                <span className="font-bold text-blue-600 text-lg md:text-xl">
                 0745-507-108
                </span>
                <br className="hidden sm:block" />
                <span className="text-sm md:text-base text-gray-500">
                  Available 8AM – 8PM, Monday to Saturday
                </span>
              </p>

                <Link
                  to="/products"
                  className="bg-blue-900 hover:bg-blue-800 text-white px-8 md:px-10 py-3 md:py-4 rounded-xl font-semibold text-base md:text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 font-montserrat">
                Shop Available Phones
              </Link>

              <p className="text-gray-500 text-xs md:text-sm mt-6 font-montserrat">
                ⚡ Fast approval • 🔒 Secure payments • 🚚 Free delivery
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      </div>
      </>
  );
};

export default HomePage;