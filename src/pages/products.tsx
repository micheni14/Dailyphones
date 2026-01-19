import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaChevronDown } from "react-icons/fa";

/* =====================
   DATA (FROM ORIGINAL)
===================== */
const allProducts = [
  {
    id: "iphone-11",
    name: "Apple iPhone 11",
    brand: "Apple iPhone",
    storage: "128GB",
    depositRange: "Ksh 25k to 30k",
    weekly: "Ksh 1,160 / Week",
    deposit: "Ksh 8,999 deposit",
    discount: "27% Off new",
    image: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?w=500",
  },
  {
    id: "iphone-11-pro",
    name: "Apple iPhone 11 Pro",
    brand: "Apple iPhone",
    storage: "256GB",
    depositRange: "Ksh 30k to 40k",
    weekly: "Ksh 1,540 / Week",
    deposit: "Ksh 10,799 deposit",
    discount: "32% Off new",
    image: "https://images.unsplash.com/photo-1574755393849-623942496936?w=500",
  },
  {
    id: "galaxy-s23-fe",
    name: "Samsung Galaxy S23 FE",
    brand: "Samsung",
    storage: "128GB",
    depositRange: "Ksh 20k to 25k",
    weekly: "Ksh 1,420 / Week",
    deposit: "Ksh 9,500 deposit",
    discount: "20% Off new",
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=500",
  },
];

/* =====================
   FILTER OPTIONS
===================== */
const brands = ["Apple iPhone", "Samsung"];
const storageOptions = ["128GB", "256GB"];
const depositRanges = [
  "Ksh 20k to 25k",
  "Ksh 25k to 30k",
  "Ksh 30k to 40k",
];

/* =====================
   ACCORDION
===================== */
const FilterSection = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  const [open, setOpen] = useState(true);

  return (
    <div className="border-b border-gray-200 pb-4">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-3 font-semibold text-gray-800"
      >
        {title}
        <FaChevronDown
          className={`transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      {open && <div className="space-y-3">{children}</div>}
    </div>
  );
};

/* =====================
   PAGE
===================== */
const ProductsPage = () => {
  const navigate = useNavigate();

  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedStorage, setSelectedStorage] = useState<string[]>([]);
  const [selectedDeposit, setSelectedDeposit] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState("latest");

  /* =====================
     FILTER LOGIC
  ===================== */
  const filteredProducts = useMemo(() => {
    let filtered = [...allProducts];

    if (selectedBrands.length) {
      filtered = filtered.filter((p) =>
        selectedBrands.includes(p.brand)
      );
    }

    if (selectedStorage.length) {
      filtered = filtered.filter((p) =>
        selectedStorage.includes(p.storage)
      );
    }

    if (selectedDeposit.length) {
      filtered = filtered.filter((p) =>
        selectedDeposit.includes(p.depositRange)
      );
    }

    return filtered;
  }, [selectedBrands, selectedStorage, selectedDeposit]);

  /* =====================
     SORTING
  ===================== */
  const sortedProducts = useMemo(() => {
    const list = [...filteredProducts];

    if (sortBy === "price-low") {
      list.sort(
        (a, b) =>
          parseInt(a.weekly.replace(/\D/g, "")) -
          parseInt(b.weekly.replace(/\D/g, ""))
      );
    }

    if (sortBy === "price-high") {
      list.sort(
        (a, b) =>
          parseInt(b.weekly.replace(/\D/g, "")) -
          parseInt(a.weekly.replace(/\D/g, ""))
      );
    }

    return list;
  }, [filteredProducts, sortBy]);

  /* =====================
     TOGGLES
  ===================== */
  const toggle = (
    value: string,
    setter: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    setter((prev) =>
      prev.includes(value)
        ? prev.filter((v) => v !== value)
        : [...prev, value]
    );
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 py-10 flex gap-8">
        {/* FILTERS */}
        <aside className="hidden lg:block w-1/4  p-6">
          <h2 className="text-2xl font-bold mb-4">Filters</h2>

          <FilterSection title="Brand">
            {brands.map((b) => (
              <label key={b} className="flex gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={selectedBrands.includes(b)}
                  onChange={() => toggle(b, setSelectedBrands)}
                  className="accent-blue-600"
                />
                {b}
              </label>
            ))}
          </FilterSection>

          <FilterSection title="Storage">
            {storageOptions.map((s) => (
              <label key={s} className="flex gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={selectedStorage.includes(s)}
                  onChange={() => toggle(s, setSelectedStorage)}
                  className="accent-blue-600"
                />
                {s}
              </label>
            ))}
          </FilterSection>

          <FilterSection title="Deposit Amount">
            {depositRanges.map((d) => (
              <label key={d} className="flex gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={selectedDeposit.includes(d)}
                  onChange={() => toggle(d, setSelectedDeposit)}
                  className="accent-blue-600"
                />
                {d}
              </label>
            ))}
          </FilterSection>
        </aside>

        {/* PRODUCTS */}
        <main className="flex-1">
          {/* SORT */}
          <div className="flex justify-end mb-6">
            <select
              className=" px-4 py-2"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="latest">Sort by: Latest</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedProducts.map((p) => (
              <div
                key={p.id}
                onClick={() => navigate(`/products/${p.id}`)}
                className="bg-white  shadow-sm hover:shadow-lg transition cursor-pointer relative"
              >
                <span className="absolute top-4 right-4 bg-red-500 text-white text-xs px-3 py-1 rounded-full font-semibold">
                  {p.discount}
                </span>

                <div className="h-100 ">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="h-70 object-cover"
                  />
                </div>

                <div className="p-6 text-center space-y-2">
                  <h3 className="font-bold text-lg">{p.name}</h3>
                  <p className="text-sm text-gray-500">Starting from</p>
                  <p className="text-xl font-semibold">{p.weekly}</p>
                  <p className="text-sm text-gray-500">
                    + {p.deposit}
                  </p>
                  <p className="text-xs italic text-gray-400">
                    Including 1 week credit
                  </p>
                </div>
              </div>
            ))}
          </div>

          {sortedProducts.length === 0 && (
            <div className="text-center py-20 text-gray-500">
              No products found
            </div>
          )}
        </main>
      </div>
      <Footer />
    </div>
  );
}
export default ProductsPage;