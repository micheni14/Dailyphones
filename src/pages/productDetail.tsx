import { useState } from "react";
import { FaCheckCircle, FaTruck, FaShieldAlt, FaBoxOpen, FaStar } from "react-icons/fa";

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

import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const products = [
  {
    id: "iphone-11",
    name: "Apple iPhone 11",
    image: "/iphone.png",
    description: `The Apple iPhone 11 combines powerful performance, an advanced dual-camera system, and Apple’s legendary build quality into a device designed to feel fast, reliable, and premium every day. This certified renewed iPhone 11 has been professionally inspected, tested, and refurbished to meet strict quality standards, ensuring it delivers the same smooth experience you expect from a new device — at a significantly better price.

DESIGN & BUILD QUALITY
The iPhone 11 features a precision-engineered aluminum frame paired with durable glass on both the front and back. It feels solid in hand while remaining comfortable for daily use. Rated Excellent condition, it shows minimal cosmetic wear.

DISPLAY
6.1-inch Liquid Retina HD display with True Tone and wide color (P3), delivering sharp visuals, natural colors, and excellent brightness for indoor and outdoor use.

PERFORMANCE
Powered by Apple’s A13 Bionic chip, the iPhone 11 handles multitasking, gaming, streaming, and everyday apps smoothly with excellent power efficiency.

CAMERAS
Dual 12MP rear cameras (Wide + Ultra-Wide) with Night Mode, Smart HDR, and 4K video recording. 12MP front camera supports Face ID, selfies, and video calls.

BATTERY & CHARGING
All-day battery life with fast charging and Qi wireless charging support.

SECURITY & SOFTWARE
Face ID, iOS updates, App Store access, and seamless Apple ecosystem integration.

CONNECTIVITY
4G LTE, Dual SIM (Nano-SIM + eSIM), Wi-Fi, Bluetooth, GPS, stereo speakers.

WHAT'S IN THE BOX
iPhone 11 (Renewed), charging cable, SIM ejector tool.`
  }
];

export default function ProductDetailsPage() {
const [storage, setStorage] = useState("128GB");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { id } = useParams();
    const product = products.find(p => p.id === id);
    console.log(id, "product")

  if (!product) {
      return <div className="p-12 text-center">Product not found</div>;
  }



    return (
        <>
            <Navbar />
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Top Section */}
      <div className="grid lg:grid-cols-2 gap-12">
        {/* Image */}
        <div className="flex justify-center">
          <img
            src={product.image}
            alt="Phone"
            className="max-h-112.5 object-contain"
          />
        </div>

        {/* Info */}
        <div className="space-y-6">
          <h1 className="text-3xl font-bold">{product.name}</h1>

          <div className="border-2 border-blue-600 rounded-xl p-6 space-y-4">
            <h2 className="text-xl font-semibold">Dealer deal</h2>
            <div className="flex justify-between">
              <span>Deposit</span>
              <strong>Ksh 16,199</strong>
            </div>
            <div className="flex justify-between items-center">
              <span>6 month Weekly Payment</span>
              <span className="bg-orange-100 text-orange-700 font-bold px-3 py-1 rounded">Ksh 1,660</span>
            </div>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg text-sm">
            Get up to <strong>25%</strong> by paying off your loan faster.
          </div>

          <div className="space-y-4">
            <p><strong>Condition:</strong> Excellent</p>
            <p><strong>Storage:</strong> {storage}</p>
            <div className="flex gap-4">
              {["128GB", "256GB"].map(s => (
                <button
                  key={s}
                  onClick={() => setStorage(s)}
                  className={`px-6 py-3 border rounded ${storage === s ? "bg-gray-200 font-bold" : ""}`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
                <div className=" flex justify-end ">
                    <button className="mt-12 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                        Lipa mdogo mdogo
                        <p className="text-xs">(continue)</p>
                    </button>
</div>

      {/* Promise Section */}
      <div className="grid md:grid-cols-2 gap-12 mt-20">
        <div>
          <h2 className="text-2xl font-bold mb-6">The MoPhones Promise</h2>
          <ul className="space-y-4">
            <li className="flex items-center gap-3"><FaCheckCircle /> Affordable Lipa Pole Pole</li>
            <li className="flex items-center gap-3"><FaShieldAlt /> Premium Certified Renewed</li>
            <li className="flex items-center gap-3"><FaTruck /> Free delivery</li>
          </ul>
        </div>
        
        <div>
          <h2 className="text-2xl font-bold mb-6">A Deal You Can Trust</h2>
          <ul className="space-y-4">
            <li className="flex items-center gap-3"><FaBoxOpen /> Pay on delivery</li>
            <li className="flex items-center gap-3"><FaShieldAlt /> 1 year warranty</li>
            <li className="flex items-center gap-3"><FaCheckCircle /> 48 hour returns</li>
          </ul>
        </div>
      </div>

      {/* Reviews */}
      <section className="mt-20">
        <h2 className="text-2xl font-bold mb-6">Customer Reviews</h2>
        <div className="bg-white border rounded-xl p-6 space-y-3">
          <div className="flex gap-1 text-yellow-400">
            {Array.from({ length: 5 }).map((_, i) => <FaStar key={i} />)}
          </div>
          <p className="text-gray-600">"Amazing phone, looks brand new and delivery was fast."</p>
          <span className="text-sm text-gray-500">– Verified Buyer</span>
        </div>
      </section>

      {/* FAQ */}
      <section className="mt-20">
        <h2 className="text-2xl font-bold mb-6">FAQs</h2>
        <div className="space-y-4">
          {faqs.map((f, i) => (
            <div key={i} className="border rounded-lg p-4">
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="font-semibold w-full text-left"
              >
                {f.q}
              </button>
              {openFaq === i && <p className="mt-3 text-gray-600">{f.a}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* Description */}
      <section className="mt-20">
        <h2 className="text-2xl font-bold mb-6">Product Description</h2>
        <div className="prose max-w-none whitespace-pre-line text-gray-700">
          {product.description}
        </div>
      </section>
            </div>
            <Footer />
        </>
  );
}
