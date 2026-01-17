import  { useState, useMemo } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaCheck,  FaFire, FaSort } from 'react-icons/fa';

const brands = [
  { name: "SAMSUNG", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b4/Samsung_wordmark.svg" },
  { name: "OPPO", logo: "https://upload.wikimedia.org/wikipedia/commons/8/8c/OPPO_Logo.svg" },
  { name: "realme", logo: "https://upload.wikimedia.org/wikipedia/commons/9/9b/Realme-logo.svg" },
  { name: "vivo", logo: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Vivo_logo.svg" },
  { name: "itel", logo: "https://upload.wikimedia.org/wikipedia/commons/5/59/Itel_logo.svg" },
  { name: "Safaricom", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Safaricom_Logo.svg" },
  { name: "TECNO", logo: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Tecno_Mobile_logo.svg" },
  { name: "Infinix", logo: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Infinix-logo.svg" },
  { name: "Redmi", logo: "https://upload.wikimedia.org/wikipedia/commons/2/29/Xiaomi_logo.svg" },
];

const allProducts = [
  {
    id: 1,
    name: "InfiniX GT30 Pro",
    specs: "256GB/12GB",
    originalPrice: "Ksh 9,200",
    discountedPrice: "Ksh 8,800",
    discount: "-4%",
    series: "GT Series",
    brand: "Infinix",
    storage: "256GB",
    depositRange: "Ksh 8k+",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400",
    rating: 4.5,
    reviews: 128
  },
  {
    id: 2,
    name: "Tecno Phantom X2",
    specs: "256GB/8GB",
    price: "Ksh 8,500/week",
    series: "Phantom Series",
    brand: "Tecno",
    storage: "256GB",
    depositRange: "Ksh 2k to 4k",
    image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=400",
    rating: 4.2,
    reviews: 89
  },
  {
    id: 3,
    name: "Samsung Galaxy A54",
    specs: "128GB/6GB",
    originalPrice: "Ksh 7,800",
    discountedPrice: "Ksh 7,200",
    discount: "-8%",
    series: "Galaxy A Series",
    brand: "Samsung",
    storage: "128GB",
    depositRange: "Ksh 2k to 4k",
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w-400",
    rating: 4.3,
    reviews: 156
  },
  {
    id: 4,
    name: "Oppo Reno 8",
    specs: "256GB/12GB",
    priceRange: "Ksh 6,999 - Ksh 8,999",
    series: "Reno Series",
    brand: "Oppo",
    storage: "256GB",
    depositRange: "Ksh 4k to 6k",
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400",
    rating: 4.4,
    reviews: 92
  },
  {
    id: 5,
    name: "Infinix Note 30",
    specs: "128GB/8GB",
    originalPrice: "Ksh 6,500",
    discountedPrice: "Ksh 6,000",
    discount: "-9%",
    series: "Note Series",
    brand: "Infinix",
    storage: "128GB",
    depositRange: "Ksh 2k to 4k",
    image: "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=400",
    rating: 4.1,
    reviews: 76
  },
  {
    id: 6,
    name: "Redmi Note 12 Pro",
    specs: "128GB/6GB",
    originalPrice: "Ksh 8,200",
    discountedPrice: "Ksh 7,600",
    discount: "-7%",
    series: "Note Series",
    brand: "Redmi",
    storage: "128GB",
    depositRange: "Ksh 4k to 6k",
    image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=400",
    rating: 4.6,
    reviews: 201
  },
];

const storageOptions = [
  { id: 1, size: "256GB", count: 3 },
  { id: 2, size: "128GB", count: 5 },
  { id: 3, size: "64GB", count: 2 },
];

const depositRanges = [
  { id: 1, range: "Ksh 2k to 4k", count: 4 },
  { id: 2, range: "Ksh 4k to 6k", count: 2 },
  { id: 3, range: "Ksh 8k+", count: 1 },
];

const Products = () => {
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedStorage, setSelectedStorage] = useState<string[]>([]);
  const [selectedDeposit, setSelectedDeposit] = useState<string[]>([]);
  const [showPerPage, setShowPerPage] = useState<number>(12);
  const [sortBy, setSortBy] = useState<string>("latest");

  const filteredProducts = useMemo(() => {
    let filtered = [...allProducts];

    if (selectedBrands.length > 0) {
      filtered = filtered.filter(product => selectedBrands.includes(product.brand));
    }

    if (selectedStorage.length > 0) {
      filtered = filtered.filter(product => product.storage && selectedStorage.includes(product.storage));
    }

    if (selectedDeposit.length > 0) {
      filtered = filtered.filter(product => product.depositRange && selectedDeposit.includes(product.depositRange));
    }

    return filtered.slice(0, showPerPage);
  }, [selectedBrands, selectedStorage, selectedDeposit, showPerPage]);

  const toggleBrand = (brandName: string) => {
    setSelectedBrands(prev =>
      prev.includes(brandName)
        ? prev.filter(b => b !== brandName)
        : [...prev, brandName]
    );
  };

  const toggleStorage = (storage: string) => {
    setSelectedStorage(prev =>
      prev.includes(storage)
        ? prev.filter(s => s !== storage)
        : [...prev, storage]
    );
  };

  const toggleDeposit = (deposit: string) => {
    setSelectedDeposit(prev =>
      prev.includes(deposit)
        ? prev.filter(d => d !== deposit)
        : [...prev, deposit]
    );
  };

  const clearAllFilters = () => {
    setSelectedBrands([]);
    setSelectedStorage([]);
    setSelectedDeposit([]);
  };

  return (
    <div>
      <Navbar />
      
      {/* Brands Grid Section - Exactly as you wanted */}
      <section className="bg-white py-6">
        <div className=" px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Popular Brands</h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-9 border border-gray-200">
            {brands.map((brand) => (
              <div
                key={brand.name}
                className="flex flex-col items-center justify-center p-6 border-r border-b hover:bg-gray-50 cursor-pointer"
                onClick={() => toggleBrand(brand.name)}
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

      <div className=" px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Sidebar - Filters */}
          <div className="lg:w-1/4">
            <div className="bg-white p-6   mb-4">
              <div className="flex items-center justify-between mb-6">
                
                {(selectedBrands.length > 0 || selectedStorage.length > 0 || selectedDeposit.length > 0) && (
                  <button 
                    onClick={clearAllFilters}
                    className="text-sm text-black hover:text-black"
                  >
                    Clear All
                  </button>
                )}
              </div>

              {/* Filter by Storage */}
              <div className="mb-8">
                <h3 className="font-bold text-gray-900 mb-4">FILTER BY STORAGE</h3>
                <div className="space-y-3">
                  {storageOptions.map((storage) => (
                    <div 
                      key={storage.id}
                      className="flex items-center justify-between cursor-pointer"
                      onClick={() => toggleStorage(storage.size)}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-5 h-5 border rounded flex items-center justify-center ${
                          selectedStorage.includes(storage.size) 
                            ? 'bg-black-600 border-white-600' 
                            : 'border-gray-300'
                        }`}>
                          {selectedStorage.includes(storage.size) && (
                            <FaCheck className="text-white text-xs" />
                          )}
                        </div>
                        <span className="text-gray-700">{storage.size}</span>
                      </div>
                      <span className="text-gray-500 text-sm">({storage.count})</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Filter by Deposit */}
              <div className="mb-8">
                <h3 className="font-bold text-gray-900 mb-4">FILTER BY DEPOSIT</h3>
                <div className="space-y-3">
                  {depositRanges.map((deposit) => (
                    <div 
                      key={deposit.id}
                      className="flex items-center justify-between cursor-pointer"
                      onClick={() => toggleDeposit(deposit.range)}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-5 h-5 border rounded flex items-center justify-center ${
                          selectedDeposit.includes(deposit.range) 
                            ? 'bg-black-600 border-black-600' 
                            : 'border-gray-300'
                        }`}>
                          {selectedDeposit.includes(deposit.range) && (
                            <FaCheck className="text-white text-xs" />
                          )}
                        </div>
                        <span className="text-gray-700">{deposit.range}</span>
                      </div>
                      <span className="text-gray-500 text-sm">({deposit.count})</span>
                    </div>
                  ))}
                </div>
              </div>

             
            </div>
          </div>

          {/* Right Content - Products */}
          <div className="lg:w-3/4">
            {/* Toolbar */}
            <div className="bg-white p-4 mb-6 ">
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <div className="text-gray-600">
                  Showing <span className="font-bold">{filteredProducts.length}</span> of{" "}
                  <span className="font-bold">{allProducts.length}</span> products
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <span className="text-gray-700">Show:</span>
                    <select 
                      className="border border-gray-300 rounded px-3 py-1 text-sm bg-white"
                      value={showPerPage}
                      onChange={(e) => setShowPerPage(Number(e.target.value))}
                    >
                      {[9, 12, 18, 24].map(num => (
                        <option key={num} value={num}>{num}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <FaSort className="text-gray-600" />
                    <select 
                      className="border border-gray-300 rounded px-3 py-1 text-sm bg-white"
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                    >
                      <option value="latest">Sort by latest</option>
                      <option value="price-low">Price: Low to High</option>
                      <option value="price-high">Price: High to Low</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            {filteredProducts.length === 0 ? (
              <div className="bg-white p-12 text-center border border-gray-200 rounded-lg">
                <h3 className="text-xl font-bold text-gray-700 mb-2">No products found</h3>
                <p className="text-gray-600 mb-4">Try adjusting your filters to find what you're looking for.</p>
                <button 
                  onClick={clearAllFilters}
                  className="bg-black-600 text-white px-6 py-2 rounded-lg hover:bg-black-700"
                >
                  Clear All Filters
                </button>
              </div>
            ) : (
<div className="grid grid-cols-4 divide-x divide-y border">
                {filteredProducts.map((product) => (
                  <div key={product.id} className="bg-white border border-gray-100 overflow-hidden  transition-shadow">
                    {/* Discount Badge */}
                    {product.discount && (
                      <div className="absolute top-3 left-3 z-10">
                        <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                          <FaFire className="text-xs" />
                          {product.discount}
                        </div>
                      </div>
                    )}

                    {/* Product Image */}
                    <div className="h-72 flex items-center justify-center">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-full w-full object-cover"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="px-2">
                      <div className="flex justify-between items-start mb-1">
                        <h3 className="font-medium text-gray-900 text-sm">{product.name}</h3>
                        <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                          {product.series}
                        </span>
                      </div>
                      
                      <p className="text-gray-600 text-sm ">{product.specs}</p>
                      
                      {/* Price */}
                      <div className="mb-2">
                        {product.discountedPrice ? (
                          <div className="flex items-center gap-3">
                            <span className="text-xl font-semibold text-blue-700">{product.discountedPrice}</span>
                            <span className="text-gray-500 line-through text-sm">{product.originalPrice}</span>
                          </div>
                        ) : product.priceRange ? (
                          <div className="text-xl font-medium text-blue-700">{product.priceRange}</div>
                        ) : product.price ? (
                          <div className="text-xl font-medium text-blue-700">{product.price}</div>
                        ) : (
                          <div className="text-lg text-gray-500">Price on request</div>
                        )}
                      </div>

                     

                      {/* Action Buttons */}
                      
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Active Filters Display */}
            {(selectedBrands.length > 0 || selectedStorage.length > 0 || selectedDeposit.length > 0) && (
              <div className="mt-6 p-4 bg-gray-100 rounded-lg border border-gray-200">
                <div className="flex flex-wrap gap-2">
                  {selectedBrands.map((brand, index) => (
                    <div key={index} className="flex items-center gap-1 bg-gray-300 text-black px-3 py-1 rounded-full text-sm">
                      <span className="font-medium">Brand:</span>
                      <span>{brand}</span>
                      <button 
                        onClick={() => toggleBrand(brand)}
                        className="ml-1 hover:text-red-600"
                      >
                        ×
                      </button>
                    </div>
                  ))}
                  {selectedStorage.map((storage, index) => (
                    <div key={index} className="flex items-center gap-1 bg-gray-300 text-black px-3 py-1 rounded-full text-sm">
                      <span className="font-medium">Storage:</span>
                      <span>{storage}</span>
                      <button 
                        onClick={() => toggleStorage(storage)}
                        className="ml-1 hover:text-red-600"
                      >
                        ×
                      </button>
                    </div>
                  ))}
                  {selectedDeposit.map((deposit, index) => (
                    <div key={index} className="flex items-center gap-1 bg-gray-300 text-black px-3 py-1 rounded-full text-sm">
                      <span className="font-medium">Deposit:</span>
                      <span>{deposit}</span>
                      <button 
                        onClick={() => toggleDeposit(deposit)}
                        className="ml-1 hover:text-red-600"
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Products;