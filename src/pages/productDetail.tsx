import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaCheckCircle, FaTruck, FaShieldAlt, FaBoxOpen, FaStar } from "react-icons/fa";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { products } from "../data/products";

const faqs = [
  {
    q: "What are renewed devices?",
    a: "Renewed is not the same as used or secondhand. Our devices are held to rigorous quality standards that ensure every phone runs like new. The refurbishment process includes meticulously cleaning, testing, and assessing every phone, as well as replacing aging parts with high-quality new components."
  },
  {
    q: "What does the 12 months warranty cover?",
    a: "This warranty is limited to technical and manufacturer defects that affect the functionality of your item. It doesn't cover accidental breakage or theft."
  },
  {
    q: "Can I buy cash if I want to?",
    a: "Of course you can! Just select cash at checkout or inform your sales rep. Cash purchases still enjoy a 12 month warranty and full support."
  },
  {
    q: "How do I become eligible for the payment plans?",
    a: "Choose your phone, contact our CX, complete pre-approval, make a down payment and schedule delivery. Approval takes about 15 minutes."
  },
  {
    q: "When do I get my phone?",
    a: "Orders are delivered the next day within Nairobi." 
  },
  {
    q: "What happens if I change my mind?",
    a: "You may return your device within 48 hours provided it has no damage and includes original packaging."
  }
];

export default function ProductDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === id);
  
  const [storage, setStorage] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [mainImage, setMainImage] = useState("");

  // Initialize storage, color, and main image when product loads
  useEffect(() => {
    if (product) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setStorage(product.storage[0]);
      setSelectedColor(product.colors[0]);
      setMainImage(product.images[0]);
    }
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Product not found</h1>
          <p className="text-gray-600 mb-6">The product you're looking for doesn't exist.</p>
          <a href="/products" className="text-blue-600 hover:underline">← Back to Products</a>
        </div>
      </div>
    );
  }

  const currentPricing = product.pricing[storage as keyof typeof product.pricing];

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-6">
          <a href="/products" className="hover:text-blue-600">Products</a>
          <span className="mx-2">/</span>
          <span className="text-gray-800">{product.name}</span>
        </div>

        {/* Top Section */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="bg-gray-100 rounded-lg overflow-hidden aspect-square flex items-center justify-center">
              <img
                src={mainImage}
                alt={product.name}
                className="w-full h-full object-contain p-8"
              />
            </div>
            
            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setMainImage(img)}
                  className={`border-2 rounded-lg overflow-hidden hover:border-blue-600 transition ${
                    mainImage === img ? "border-blue-600" : "border-gray-200"
                  }`}
                >
                  <img
                    src={img}
                    alt={`${product.name} view ${i + 1}`}
                    className="w-full h-20 object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
              <p className="text-gray-600 mt-2">{product.shortDescription}</p>
              
              {/* Rating */}
              <div className="flex items-center gap-3 mt-4">
                <div className="flex text-yellow-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <FaStar key={i} className={i < Math.floor(product.rating) ? "" : "opacity-30"} />
                  ))}
                </div>
                <span className="text-sm text-gray-600">
                  {product.rating} ({product.reviewCount} reviews)
                </span>
              </div>
            </div>

            {/* Pricing Card */}
            <div className="border-2 border-blue-600 rounded-xl p-6 space-y-4 bg-blue-50">
              <h2 className="text-xl font-semibold text-gray-900">Dealer Deal</h2>
              
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Deposit</span>
                <strong className="text-2xl text-gray-900">
                  Ksh {currentPricing?.deposit.toLocaleString()}
                </strong>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Weekly Payment (6 months)</span>
                <span className="bg-orange-100 text-orange-700 font-bold px-4 py-2 rounded-lg text-lg">
                  Ksh {currentPricing?.weekly.toLocaleString()}
                </span>
              </div>

              <div className="pt-4 border-t border-blue-200">
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Total Price</span>
                  <span className="font-semibold">Ksh {currentPricing?.totalPrice.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-500 mt-1">
                  <span>Retail Price</span>
                  <span className="line-through">Ksh {currentPricing?.retailPrice.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm text-green-600 font-semibold mt-1">
                  <span>You Save</span>
                  <span>Ksh {currentPricing?.savings.toLocaleString()}</span>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg text-sm">
              Get up to <strong>25%</strong> discount by paying off your loan faster.
            </div>

            {/* Storage Selection */}
            <div className="space-y-3">
              <p className="font-semibold text-gray-900">Storage: {storage}</p>
              <div className="flex flex-wrap gap-3">
                {product.storage.map(s => (
                  <button
                    key={s}
                    onClick={() => setStorage(s)}
                    className={`px-6 py-3 border-2 rounded-lg font-medium transition ${
                      storage === s 
                        ? "border-blue-600 bg-blue-50 text-blue-600" 
                        : "border-gray-300 hover:border-gray-400"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            <div className="space-y-3">
              <p className="font-semibold text-gray-900">Color: {selectedColor}</p>
              <div className="flex flex-wrap gap-3">
                {product.colors.map(color => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 border-2 rounded-lg text-sm font-medium transition ${
                      selectedColor === color 
                        ? "border-blue-600 bg-blue-50 text-blue-600" 
                        : "border-gray-300 hover:border-gray-400"
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Condition */}
            <div className="space-y-2">
              <p className="font-semibold text-gray-900">
                Condition: <span className="text-green-600">{product.condition}</span>
              </p>
              <p className="text-sm text-gray-600">
                Professionally refurbished with minimal signs of use
              </p>
            </div>

            {/* CTA Button */}
            <button 
              onClick={() => navigate('/checkout', { 
                state: { 
                  productId: product.id, 
                  storage, 
                  color: selectedColor 
                } 
              })}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
            >
              Lipa Mdogo Mdogo
              <span className="block text-xs font-normal">(Continue to checkout)</span>
            </button>
          </div>
        </div>

        {/* Promise Section */}
        <div className="grid md:grid-cols-2 gap-12 mt-20 bg-gray-50 p-8 rounded-xl">
          <div>
            <h2 className="text-2xl font-bold mb-6">The MoPhones Promise</h2>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-700">
                <FaCheckCircle className="text-blue-600 text-xl shrink-0" />
                <span>Affordable Lipa Pole Pole payment plans</span>
              </li>
              <li className="flex items-center gap-3 text-gray-700">
                <FaShieldAlt className="text-blue-600 text-xl shrink-0" />
                <span>Premium Certified Renewed devices</span>
              </li>
              <li className="flex items-center gap-3 text-gray-700">
                <FaTruck className="text-blue-600 text-xl shrink-0" />
                <span>Free delivery within Nairobi</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-6">A Deal You Can Trust</h2>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-700">
                <FaBoxOpen className="text-blue-600 text-xl shrink-0" />
                <span>Pay on delivery available</span>
              </li>
              <li className="flex items-center gap-3 text-gray-700">
                <FaShieldAlt className="text-blue-600 text-xl shrink-0" />
                <span>12 months warranty included</span>
              </li>
              <li className="flex items-center gap-3 text-gray-700">
                <FaCheckCircle className="text-blue-600 text-xl shrink-0" />
                <span>48-hour return policy</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Key Features */}
        <section className="mt-20">
          <h2 className="text-2xl font-bold mb-6">Key Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {product.features.map((feature, i) => (
              <div key={i} className="flex items-start gap-3 bg-white border rounded-lg p-4">
                <FaCheckCircle className="text-green-600 mt-1 shrink-0" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Specifications */}
        <section className="mt-20">
          <h2 className="text-2xl font-bold mb-6">Technical Specifications</h2>
          <div className="bg-white border rounded-xl overflow-hidden">
            {Object.entries(product.specs).map(([category, specs]) => (
              <div key={category} className="border-b last:border-b-0">
                <h3 className="bg-gray-50 px-6 py-3 font-semibold text-gray-900 capitalize">
                  {category.replace(/([A-Z])/g, ' $1').trim()}
                </h3>
                <div className="p-6 space-y-3">
                  {typeof specs === 'object' ? (
                    Object.entries(specs).map(([key, value]) => (
                      <div key={key} className="flex justify-between py-2 border-b border-gray-100 last:border-b-0">
                        <span className="text-gray-600 capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}:
                        </span>
                        <span className="text-gray-900 font-medium text-right">
  {Array.isArray(value)
    ? value.join(', ')
    : typeof value === 'string' || typeof value === 'number'
    ? value
    : String(value)}
</span>

                      </div>
                    ))
                  ) : (
                    <p className="text-gray-700">{specs}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* What's in the Box */}
        <section className="mt-20">
          <h2 className="text-2xl font-bold mb-6">What's in the Box</h2>
          <div className="bg-white border rounded-xl p-6">
            <ul className="space-y-3">
              {product.inBox.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700">
                  <FaBoxOpen className="text-blue-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Reviews */}
        <section className="mt-20">
          <h2 className="text-2xl font-bold mb-6">Customer Reviews</h2>
          <div className="space-y-4">
            <div className="bg-white border rounded-xl p-6 space-y-3">
              <div className="flex gap-1 text-yellow-400">
                {Array.from({ length: 5 }).map((_, i) => <FaStar key={i} />)}
              </div>
              <p className="text-gray-700">"Amazing phone, looks brand new and delivery was fast. The payment plan made it very affordable!"</p>
              <span className="text-sm text-gray-500">– Verified Buyer</span>
            </div>
            
            <div className="bg-white border rounded-xl p-6 space-y-3">
              <div className="flex gap-1 text-yellow-400">
                {Array.from({ length: 5 }).map((_, i) => <FaStar key={i} />)}
              </div>
              <p className="text-gray-700">"Great condition and the warranty gives me peace of mind. Highly recommend MoPhones!"</p>
              <span className="text-sm text-gray-500">– Verified Buyer</span>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-20">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <div key={i} className="bg-white border rounded-lg overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="font-semibold w-full text-left px-6 py-4 hover:bg-gray-50 transition flex justify-between items-center"
                >
                  <span>{f.q}</span>
                  <span className={`transform transition-transform ${openFaq === i ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </button>
                {openFaq === i && (
                  <div className="px-6 py-4 bg-gray-50 border-t">
                    <p className="text-gray-600">{f.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Full Description */}
        <section className="mt-20">
          <h2 className="text-2xl font-bold mb-6">Product Description</h2>
          <div className="bg-white border rounded-xl p-8">
            <div className="prose max-w-none whitespace-pre-line text-gray-700 leading-relaxed">
              {product.description}
            </div>
          </div>
        </section>

        {/* Warranty & Returns */}
        <section className="mt-20 mb-12">
          <h2 className="text-2xl font-bold mb-6">Warranty & Returns</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border rounded-xl p-6">
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                <FaShieldAlt className="text-blue-600" />
                Warranty Coverage
              </h3>
              <p className="text-gray-600 mb-3">Duration: {product.warranty.duration}</p>
              <p className="text-gray-600 mb-3">Covers: {product.warranty.coverage}</p>
              <p className="text-sm text-gray-500">
                Does not cover: {product.warranty.excludes.join(', ')}
              </p>
            </div>
            
            <div className="bg-white border rounded-xl p-6">
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                <FaCheckCircle className="text-blue-600" />
                Return Policy
              </h3>
              <p className="text-gray-600 mb-3">Return window: {product.returns.period}</p>
              <p className="text-gray-600 mb-3">Refund: {product.returns.refundMethod}</p>
              <p className="text-sm text-gray-500">
                Conditions: {product.returns.conditions.join(', ')}
              </p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}