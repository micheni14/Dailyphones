import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaChevronDown } from "react-icons/fa";
import { products } from "../data/products";

/* =====================
   EXTRACT UNIQUE FILTER OPTIONS FROM PRODUCTS DATA
===================== */
const brands = [...new Set(products.map(p => p.brand))];
const storageOptions = [...new Set(products.flatMap(p => p.storage))];
const depositRanges = [...new Set(
  products.flatMap(p => 
    Object.values(p.pricing).map(price => price.depositRange)
  )
)];

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
    let filtered = [...products];

    // Filter by brand
    if (selectedBrands.length) {
      filtered = filtered.filter((p) =>
        selectedBrands.includes(p.brand)
      );
    }

    // Filter by storage (check if product has any of the selected storage options)
    if (selectedStorage.length) {
      filtered = filtered.filter((p) =>
        p.storage.some(s => selectedStorage.includes(s))
      );
    }

    // Filter by deposit range (check if any pricing tier matches)
    if (selectedDeposit.length) {
      filtered = filtered.filter((p) =>
        Object.values(p.pricing).some(price => 
          selectedDeposit.includes(price.depositRange)
        )
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
      list.sort((a, b) => {
        const aPrice = Object.values(a.pricing)[0].weekly;
        const bPrice = Object.values(b.pricing)[0].weekly;
        return aPrice - bPrice;
      });
    }

    if (sortBy === "price-high") {
      list.sort((a, b) => {
        const aPrice = Object.values(a.pricing)[0].weekly;
        const bPrice = Object.values(b.pricing)[0].weekly;
        return bPrice - aPrice;
      });
    }

    // Default is "latest" - sort by year descending
    if (sortBy === "latest") {
      list.sort((a, b) => b.year - a.year);
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
        <aside className="hidden lg:block w-1/4 p-6">
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
          <div className="flex justify-between items-center mb-6">
            <p className="text-gray-600">
              Showing {sortedProducts.length} of {products.length} products
            </p>
            <select
              className="px-4 py-2 border rounded-lg"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="latest">Sort by: Latest</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedProducts.map((p) => {
              // Get the first storage option and its pricing
              const firstStorage = p.storage[0];
              const pricing = p.pricing[firstStorage as keyof typeof p.pricing];
              
              return (
                <div
                  key={p.id}
                  onClick={() => navigate(`/products/${p.id}`)}
                  className="bg-white rounded-lg shadow-sm hover:shadow-lg transition cursor-pointer relative overflow-hidden"
                >
                

                  <div className="h-64 bg-gray-100 flex items-center justify-center overflow-hidden">
                    <img
                      src={p.images[0]}
                      alt={p.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <div className="p-6 text-center space-y-2">
                    <h3 className="font-bold text-lg">{p.name}</h3>
                    <p className="text-sm text-gray-500">{p.condition} • {firstStorage}</p>
                    <p className="text-sm text-gray-500">Starting from</p>
                    {pricing && (
                      <>
                        <p className="text-xl font-semibold text-blue-600">
                          Ksh {pricing.weekly.toLocaleString()} / Week
                        </p>
                        <p className="text-sm text-gray-500">
                          + Ksh {pricing.deposit.toLocaleString()} deposit
                        </p>
                      </>
                    )}
                    <p className="text-xs italic text-gray-400">
                      Including 1 week credit
                    </p>
                    
                    {/* Rating */}
                    <div className="flex items-center justify-center gap-2 pt-2">
                      <div className="flex text-yellow-400 text-sm">
                        {'★'.repeat(Math.floor(p.rating))}
                        {p.rating % 1 !== 0 && '☆'}
                      </div>
                      
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {sortedProducts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">No products found</p>
              <button 
                onClick={() => {
                  setSelectedBrands([]);
                  setSelectedStorage([]);
                  setSelectedDeposit([]);
                }}
                className="mt-4 text-blue-600 hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default ProductsPage;