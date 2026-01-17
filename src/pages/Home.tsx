import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const heroSlides = [
  {
    image: "/image1.jpeg", // your local image
    title: "Lipa Mdogo Mdogo Online",
    description:
      "Call or WhatsApp 0726-770-758 for friendly, fast support. We’re available from 8AM to 8PM, Monday to Saturday, to help you choose, order, and receive your new phone.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    title: "Affordable Smartphones",
    description:
      "Buy original phones on Lipa Mdogo Mdogo with flexible payment plans and fast delivery countrywide.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
    title: "Trusted Phone Store",
    description:
      "Samsung, Infinix, Tecno, Oppo, Vivo and more — quality guaranteed.",
  },
];

const brands = [
  { name: "Redmi", logo: "https://upload.wikimedia.org/wikipedia/commons/2/29/Xiaomi_logo.svg" },
  { name: "Samsung", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b4/Samsung_wordmark.svg" },
  { name: "Oppo", logo: "https://upload.wikimedia.org/wikipedia/commons/2/29/Xiaomi_logo.svg" },
  { name: "Realme", logo: "https://upload.wikimedia.org/wikipedia/commons/2/29/Xiaomi_logo.svg" },
  { name: "Vivo", logo: "https://upload.wikimedia.org/wikipedia/commons/2/29/Xiaomi_logo.svg" },
  { name: "Itel", logo: "https://upload.wikimedia.org/wikipedia/commons/2/29/Xiaomi_logo.svg" },
  { name: "Tecno", logo: "https://upload.wikimedia.org/wikipedia/commons/2/29/Xiaomi_logo.svg" },
  { name: "Infinix", logo: "https://upload.wikimedia.org/wikipedia/commons/2/29/Xiaomi_logo.svg" },
  { name: "ZTE", logo: "https://upload.wikimedia.org/wikipedia/commons/2/29/Xiaomi_logo.svg" },
];

const deals = [
  {
    id: 1,
    discount: "-4%",
    name: "Tecno Spark Slim",
    specs: "256GB/8GB",
    priceRange: "KSh 7,200",
        price: "Ksh 6,900",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Tecno_Mobile_logo.svg",
  },
  {
    id: 2,
    discount: "-4%",
    name: "Vivo V60 Lite 5G",
    specs: "256GB/12GB",
    priceRange: "KSh 7,300 – KSh 8,900",
      price: "",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Tecno_Mobile_logo.svg",

  },
  {
    id: 3,
    discount: "-8%",
    name: "Oppo Reno 14F 5G",
    specs: "",
    priceRange: "KSh 13,500",
      price: "Ksh 12,400",
        logo: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Tecno_Mobile_logo.svg",

  },
  {
    id: 4,
    discount: "-9%",
    name: "Vivo V60 5G",
    specs: "512GB/12GB; 50MP",
    priceRange: "KSh 12,900 – KSh 14,000",
      price: "",
        logo: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Tecno_Mobile_logo.svg",

  },
  {
    id: 5,
    discount: "-8%",
    name: "Infinix Hot 60 Pro+",
    specs: "256GB/8GB",
    priceRange: "KSh 5,100 – KSh 5,900",
      price: "",
        logo: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Tecno_Mobile_logo.svg",

  },
  {
    id: 6,
    discount: "-7%",
    name: "vivo V50 Lite 5G",
    specs: "",
    priceRange: "",
      price: "",
        logo: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Tecno_Mobile_logo.svg",

    },
  {
    id: 7,
    discount: "-7%",
    name: "vivo V50 Lite 5G",
    specs: "",
    priceRange: "",
      price: "",
        logo: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Tecno_Mobile_logo.svg",

    },
  {
    id: 8,
    discount: "-7%",
    name: "vivo V50 Lite 5G",
    specs: "",
    priceRange: "",
      price: "",
        logo: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Tecno_Mobile_logo.svg",

    },

  {
    id: 9,
    discount: "-7%",
    name: "vivo V50 Lite 5G",
    specs: "",
    priceRange: "",
      price: "",
        logo: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Tecno_Mobile_logo.svg",

    },
  {
    id: 10,
    discount: "-7%",
    name: "vivo V50 Lite 5G",
    specs: "",
    priceRange: "",
      price: "",
        logo: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Tecno_Mobile_logo.svg",

  }
];

const IphoneDeals = [
     {
      name: "iPhone 15 Pro Max",
      specs: "6.7\", 256GB",
      priceRange: "Premium",
      price: "Ksh 2,999/week",
      logo: "/iphone-15-pro-max.png"
    },
    {
      name: "iPhone 15 Pro",
      specs: "6.1\", 128GB",
      priceRange: "Premium",
      price: "Ksh 2,399/week",
      logo: "/iphone-15-pro.png"
    },
    {
      name: "iPhone 15 Plus",
      specs: "6.7\", 128GB",
      priceRange: "Standard",
      price: "Ksh 1,999/week",
      logo: "/iphone-15-plus.png"
    },
    {
      name: "iPhone 15",
      specs: "6.1\", 128GB",
      priceRange: "Standard",
      price: "Ksh 1,799/week",
      logo: "/iphone-15.png"
    },
    {
      name: "iPhone 14 Pro",
      specs: "6.1\", 128GB",
      priceRange: "Value",
      price: "Ksh 1,599/week",
      logo: "/iphone-14-pro.png"
    }
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
      {/* HERO CAROUSEL */}
      <section className="relative h-180 overflow-hidden">
    {heroSlides.map((slide, index) => (
  <div
    key={index}
    className={`absolute inset-0 transition-opacity duration-700 ${
      index === current ? "opacity-100" : "opacity-0"
    }`}
  >
    {/* Container with aspect ratio */}
    <div className="relative w-full pt-[56.25%]"> {/* 16:9 aspect ratio */}
      <img
        src={slide.image}
        alt={slide.title}
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/55"></div>
      
      {/* Text Overlay */}
      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl text-white">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              {slide.title}
            </h1>
            <p className="mb-6 text-base sm:text-lg text-gray-200">
              {slide.description}
            </p>
            <button className="bg-blue-900 px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors">
              SHOP NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
))}

        {/* Controls */}
        <button
          onClick={() =>
            setCurrent(
              (current - 1 + heroSlides.length) % heroSlides.length
            )
          }
          className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/80 p-3 rounded-full"
        >
          <FaChevronLeft />
        </button>

        <button
          onClick={() =>
            setCurrent((current + 1) % heroSlides.length)
          }
          className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/80 p-3 rounded-full"
        >
          <FaChevronRight />
        </button>
      </section>
      {/* BRANDS */}
      <section className="py-16 bg-white">
        <div className=" px-8">
          <h2 className="text-xl font-semibold mb-8">
            Lipa Mdogo Mdogo Brands
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-9 border border-gray-200">
            {brands.map((brand) => (
              <div
                key={brand.name}
                className="flex flex-col items-center justify-center p-6 border-r border-b hover:bg-gray-50"
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="h-8 object-contain mb-2"
                />
                <span className="text-sm text-gray-700">
                  {brand.name}
                </span>
              </div>
            ))}
          </div>
        </div>
          </section>
          <section className="py-16 bg-white">
        <div className=" px-8">
          <h2 className="text-xl font-semibold mb-8">
            Popular smartphones
          </h2>

<div className="grid grid-cols-5 divide-x divide-y border">
            {deals.map((deal) => (
              <div
                key={deal.name}
                className="flex flex-col items-center justify-center p-6 border-r border-b hover:bg-gray-50"
              >
                <img
                  src={deal.logo}
                  alt={deal.name}
                  className="h-60 w-full object-contain mb-2"
                />
                <span className="text-sm text-gray-700">
                  {deal.name}
                    </span>
                    <span className="text-sm text-gray-700">
                        {deal.specs}
                    </span>
                    <span className="text-sm text-gray-700">
                        {deal.priceRange}
                    </span>
                    <span className="text-sm text-gray-700 font-bold">
                        {deal.price}
                    </span>
              </div>
            ))}
          </div>
        </div>
          </section>
          
        <section className="py-24 bg-linear-to-b from-gray-50 to-white">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    
    {/* Section Header */}
    <div className="text-center max-w-3xl mx-auto mb-20">
      <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-linear-to-b from-blue-900 to-blue-600 bg-clip-text text-transparent">
        How It Works
      </h2>
      <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
        Get your dream phone easily with Lipa Mdogo Mdogo — fast approval, safe delivery, 
        and flexible weekly payments.
      </p>
    </div>

    {/* Process Steps - Timeline Style */}
    <div className="relative mb-24">
      {/* Connecting Line */}
      <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-linear-to-b from-blue-100 to-blue-300"></div>
      
      {/* Step 1 */}
      <div className="relative flex flex-col md:flex-row items-center mb-16 md:mb-24">
        {/* Left Content */}
        <div className="md:w-1/2 md:pr-16 md:text-right mb-8 md:mb-0">
          <div className="inline-block">
            <div className="flex items-center justify-center md:justify-end mb-4">
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-linear-to-b from-blue-600 to-blue-400 text-white text-2xl font-bold shadow-lg">
                1
              </div>
              <div className="hidden md:block w-8 h-1 bg-blue-400 ml-4"></div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Choose & Apply
            </h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Pick your dream device and complete our quick application in under 1 minute. 
              No lengthy paperwork, just a simple online form.
            </p>
            <div className="text-sm text-gray-500 bg-blue-50 inline-block px-4 py-2 rounded-lg">
              <span className="font-medium">Requirements:</span> 12-month MPESA statement and national ID
            </div>
          </div>
        </div>

        {/* Center Icon/Connector */}
        <div className="shrink-0 w-6 h-6 rounded-full bg-blue-500 border-4 border-white shadow-lg z-10 md:absolute left-1/2 transform -translate-x-1/2"></div>

        {/* Right Placeholder for Desktop alignment */}
        <div className="md:w-1/2 md:pl-16 hidden md:block"></div>
      </div>

      {/* Step 2 */}
      <div className="relative flex flex-col md:flex-row items-center mb-16 md:mb-24">
        {/* Left Placeholder for Desktop alignment */}
        <div className="md:w-1/2 md:pr-16 hidden md:block"></div>

        {/* Center Icon/Connector */}
        <div className="shrink-0 w-6 h-6 rounded-full bg-blue-500 border-4 border-white shadow-lg z-10 md:absolute left-1/2 transform -translate-x-1/2"></div>

        {/* Right Content */}
        <div className="md:w-1/2 md:pl-16 mt-8 md:mt-0">
          <div className="inline-block">
            <div className="flex items-center justify-center md:justify-start mb-4">
              <div className="hidden md:block w-8 h-1 bg-blue-400 mr-4"></div>
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-linear-to-b from-blue-600 to-blue-400 text-white text-2xl font-bold shadow-lg">
                2
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Receive Your Phone
            </h3>
            <p className="text-gray-600 leading-relaxed">
              We deliver straight to your doorstep across Kenya. 
              <span className="font-semibold text-blue-600"> Inspect your phone thoroughly</span> before 
              making any payment — your satisfaction is guaranteed.
            </p>
          </div>
        </div>
      </div>

      {/* Step 3 */}
      <div className="relative flex flex-col md:flex-row items-center">
        {/* Left Content */}
        <div className="md:w-1/2 md:pr-16 md:text-right mb-8 md:mb-0">
          <div className="inline-block">
            <div className="flex items-center justify-center md:justify-end mb-4">
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-linear-to-b from-blue-600 to-blue-400 text-white text-2xl font-bold shadow-lg">
                3
              </div>
              <div className="hidden md:block w-8 h-1 bg-blue-400 ml-4"></div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Pay Conveniently
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Start with a small deposit and enjoy flexible weekly installments that 
              fit your budget. Pay via MPESA with automatic reminders and full 
              payment history.
            </p>
          </div>
        </div>

        {/* Center Icon/Connector */}
        <div className="shrink-0 w-6 h-6 rounded-full bg-blue-500 border-4 border-white shadow-lg z-10 md:absolute left-1/2 transform -translate-x-1/2"></div>

        {/* Right Placeholder for Desktop alignment */}
        <div className="md:w-1/2 md:pl-16 hidden md:block"></div>
      </div>
    </div>

    {/* Trust Indicators - Badge Style */}
    <div className="mb-24">
      <h3 className="text-3xl font-bold text-center mb-12">
        <span className="text-gray-900">A Deal </span>
        <span className="text-blue-600">You Can Trust</span>
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { text: "Pay on Delivery", icon: "✓", color: "green" },
          { text: "48 Hours Return Policy", icon: "⏱", color: "blue" },
          { text: "1 Year Warranty", icon: "🛡", iconText: "W", color: "purple" },
        ].map((item, index) => (
          <div key={index} className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className={`text-3xl font-bold mb-4 ${
              item.color === 'green' ? 'text-green-500' :
              item.color === 'blue' ? 'text-blue-500' :
              item.color === 'purple' ? 'text-purple-500' :
              'text-amber-500'
            }`}>
              {item.icon}
            </div>
            <div className="text-center">
              <div className="text-gray-800 font-medium text-lg">{item.text}</div>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Features Grid */}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
      {[
        {
          title: "Fast Delivery",
          description: "Order before 4 PM for free same-day delivery across Kenya. Your phone arrives fast, safe, and fully insured.",
          image: "/accessories-infobox-1.svg"
        },
        {
          title: "Pay on Delivery",
          description: "Inspect your phone first, confirm it's exactly what you ordered, then pay. Zero risk, maximum satisfaction.",
          image: "/accessories-infobox-2.svg"
        },
        {
          title: "All Phone Brands",
          description: "Samsung, Oppo, Infinix, Tecno, Redmi, Vivo, Realme, HMD and more — premium selection, affordable payments.",
          image: "/accessories-infobox-3.svg"
        }
      ].map((feature, index) => (
        <div key={index} className="group relative bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
            <div className="w-12 h-12 rounded-full bg-linear-to-b from-blue-500 to-blue-300 flex items-center justify-center shadow-lg">
              <img src={feature.image} alt="" className="h-6 w-6 filter brightness-0 invert" />
            </div>
          </div>
          <div className="pt-8 text-center">
            <h4 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h4>
            <p className="text-gray-600 leading-relaxed">{feature.description}</p>
          </div>
        </div>
      ))}
    </div>

    {/* CTA Section */}
    <div className="text-center bg-linear-to-b from-blue-50 to-indigo-50 rounded-3xl p-12">
      <div className="max-w-2xl mx-auto">
        <h3 className="text-3xl font-bold text-gray-900 mb-6">
          Start Your Lipa Mdogo Mdogo Journey Today
        </h3>
        <p className="text-gray-700 text-lg mb-8 leading-relaxed">
          Call or WhatsApp{" "}
          <span className="font-bold text-blue-600 text-xl">0726-770-758</span>{" "}
          for friendly, personalized assistance.
          <br className="hidden md:block" />
          <span className="text-gray-500">Available 8AM – 8PM, Monday to Saturday.</span>
        </p>
        
       <Link 
  to="/products"
  className="group relative bg-linear-to-r from-blue-600 to-blue-800 text-white px-10 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden inline-block"
>
  <span className="relative z-10">Shop Available Phones</span>
  <div className="absolute inset-0 bg-linear-to-r from-blue-700 to-blue-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
</Link>
        
        <p className="text-gray-500 text-sm mt-6">
          ⚡ Fast approval • 🔒 Secure payments • 🚚 Free delivery
        </p>
      </div>
    </div>
  </div>
</section>
            <section className="py-16 bg-white">
        <div className=" px-8">
          <h2 className="text-xl font-semibold mb-8">
          Flagship Deals
          </h2>

<div className="grid grid-cols-5 divide-x divide-y border">
            {IphoneDeals.map((IphoneDeal) => (
              <div
                key={IphoneDeal.name}
                className="flex flex-col items-center justify-center p-6 border-r border-b hover:bg-gray-50"
              >
                <img
                  src={IphoneDeal.logo}
                  alt={IphoneDeal.name}
                  className="h-60 w-full object-contain mb-2"
                />
                <span className="text-sm text-gray-700">
                  {IphoneDeal.name}
                    </span>
                    <span className="text-sm text-gray-700">
                        {IphoneDeal.specs}
                    </span>
                    <span className="text-sm text-gray-700">
                        {IphoneDeal.priceRange}
                    </span>
                    <span className="text-sm text-gray-700 font-bold">
                        {IphoneDeal.price}
                    </span>
              </div>
            ))}
          </div>
        </div>
          </section>
<Footer />  
    </>
  );
};

export default HomePage;
