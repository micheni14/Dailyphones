import { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const heroSlides = [
  {
    image: "/image1.jpeg",
    title: "Lipa Mdogo Mdogo Online",
    description:
      "Call or WhatsApp 0726-770-758 for friendly, fast support. We're available from 8AM to 8PM, Monday to Saturday.",
  },
  {
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    title: "Premium Smartphones",
    description:
      "Get authentic Samsung and iPhone devices with flexible weekly payment plans and fast delivery.",
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
];

const samsungDeals = [
  {
    id: 1,
    discount: "-15%",
    name: "Samsung Galaxy A15",
    specs: "128GB/6GB • 50MP",
    price: "Ksh 499/week",
    image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400",
  },
  {
    id: 2,
    discount: "-12%",
    name: "Samsung Galaxy A25",
    specs: "256GB/8GB • 50MP",
    price: "Ksh 699/week",
    image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400",
  },
  {
    id: 3,
    discount: "-10%",
    name: "Samsung Galaxy A55",
    specs: "256GB/8GB • 50MP",
    price: "Ksh 999/week",
    image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400",
  },
  {
    id: 4,
    discount: "-18%",
    name: "Samsung Galaxy S23",
    specs: "256GB/8GB • 50MP",
    price: "Ksh 1,499/week",
    image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400",
  },
  {
    id: 5,
    discount: "-15%",
    name: "Samsung Galaxy S24",
    specs: "256GB/8GB • 50MP",
    price: "Ksh 1,799/week",
    image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400",
  },
];

const iphoneDeals = [
  {
    name: "iPhone 13",
    specs: "128GB • 6.1\"",
    price: "Ksh 1,299/week",
    image: "https://images.unsplash.com/photo-1632661674596-df8be070a5c5?w=400",
  },
  {
    name: "iPhone 14",
    specs: "128GB • 6.1\"",
    price: "Ksh 1,799/week",
    image: "https://images.unsplash.com/photo-1678652197950-14c3a9b6f2d7?w=400",
  },
  {
    name: "iPhone 14 Plus",
    specs: "128GB • 6.7\"",
    price: "Ksh 1,999/week",
    image: "https://images.unsplash.com/photo-1678652197950-14c3a9b6f2d7?w=400",
  },
  {
    name: "iPhone 15",
    specs: "128GB • 6.1\"",
    price: "Ksh 2,199/week",
    image: "https://images.unsplash.com/photo-1695048133551-f9cc40c87eb6?w=400",
  },
  {
    name: "iPhone 15 Pro",
    specs: "256GB • 6.1\"",
    price: "Ksh 2,799/week",
    image: "https://images.unsplash.com/photo-1695048133551-f9cc40c87eb6?w=400",
  },
];

const HomePage = () => {
  const [current, setCurrent] = useState(0);

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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
            {brands.map((brand) => (
              <div
                key={brand.name}
                className="group relative bg-linear-to-br from-gray-50 to-white border-2 border-gray-200 rounded-2xl p-8 md:p-12 hover:border-blue-500 hover:shadow-xl transition-all duration-300 cursor-pointer"
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
                <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SAMSUNG DEALS */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold font-montserrat text-gray-900">
              Samsung Galaxy Deals
            </h2>
            <button className="text-blue-900 hover:text-blue-700 font-semibold text-sm md:text-base font-montserrat hidden sm:block">
              View All →
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {samsungDeals.map((deal) => (
              <div
                key={deal.id}
                className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-200"
              >
                <div className="relative overflow-hidden bg-gray-100">
                  <img
                    src={deal.image}
                    alt={deal.name}
                    className="w-full h-48 md:h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-lg text-xs md:text-sm font-bold">
                    {deal.discount}
                  </div>
                </div>
                <div className="p-3 md:p-4">
                  <h3 className="font-bold text-sm md:text-base text-gray-900 mb-1 font-montserrat line-clamp-1">
                    {deal.name}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-600 mb-2 font-montserrat line-clamp-1">
                    {deal.specs}
                  </p>
                  <p className="text-blue-900 font-bold text-sm md:text-lg font-montserrat">
                    {deal.price}
                  </p>
                  <button className="w-full mt-3 bg-blue-900 text-white py-2 rounded-lg font-semibold text-xs md:text-sm hover:bg-blue-800 transition-colors font-montserrat">
                    Order Now
                  </button>
                </div>
              </div>
            ))}
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
                note: "Free delivery across Kenya"
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
                  0726-770-758
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

      {/* IPHONE DEALS */}
      <section className="py-12 md:py-16 bg-linear-to-b from-gray-900 to-black text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold font-montserrat">
              iPhone Premium Collection
            </h2>
            <Link 
  to="/products" 
  className="text-blue-400 hover:text-blue-300 font-semibold text-sm md:text-base font-montserrat hidden sm:block"
>
  View All →
</Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {iphoneDeals.map((deal, index) => (
              <div
                key={index}
                className="group bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border border-gray-700 hover:border-blue-500"
              >
                <div className="relative overflow-hidden bg-gray-700">
                  <img
                    src={deal.image}
                    alt={deal.name}
                    className="w-full h-48 md:h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-3 md:p-4">
                  <h3 className="font-bold text-sm md:text-base text-white mb-1 font-montserrat line-clamp-1">
                    {deal.name}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-400 mb-2 font-montserrat line-clamp-1">
                    {deal.specs}
                  </p>
                  <p className="text-blue-400 font-bold text-sm md:text-lg font-montserrat">
                    {deal.price}
                  </p>
                  <button className="w-full mt-3 bg-blue-600 text-white py-2 rounded-lg font-semibold text-xs md:text-sm hover:bg-blue-500 transition-colors font-montserrat">
                    Order Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
      </div>
      </>
  );
};

export default HomePage;