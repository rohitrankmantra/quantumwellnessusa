"use client";
import { useState } from "react";
import { storeProducts } from "../../app/data/storeProducts";
import { CiSearch } from "react-icons/ci";
import Image from "next/image";

const PRODUCTS_PER_PAGE = 10;

export default function Store() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]);
  const [addedSuccess, setAddedSuccess] = useState(false);

  const categories = [
    "all",
    ...new Set(storeProducts.map((item) => item.category)),
  ];

  const formatCategory = (slug) =>
    slug === "all"
      ? "All"
      : slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

  const filteredProducts = storeProducts.filter((item) => {
    const matchSearch = item.name.toLowerCase().includes(search.toLowerCase());
    const matchCategory =
      activeCategory === "all" || item.category === activeCategory;
    return matchSearch && matchCategory;
  });

  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);
  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const paginatedProducts = filteredProducts.slice(
    startIndex,
    startIndex + PRODUCTS_PER_PAGE
  );

  const handleAddToCart = (product) => {
    setCart((prev) => [...prev, product]);
    setAddedSuccess(true);
    setTimeout(() => setAddedSuccess(false), 2000);
  };

  return (
    <>
      <div className="bg-[#F1F1F1]">
        <section className="max-w-6xl mx-auto px-4 py-12">

          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <h2 className="text-2xl font-bold">
              Total Items ({filteredProducts.length})
            </h2>

            <div className="relative w-full md:w-80">
              <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full border rounded-md px-4 py-2 pl-10"
              />
              <span className="absolute left-3 top-2.5 text-gray-400">
                <CiSearch />
              </span>
            </div>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-3 mt-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setCurrentPage(1);
                }}
                className={`px-5 py-2 rounded-md border ${
                  activeCategory === cat
                    ? "bg-[#70512E] text-white"
                    : "bg-white hover:bg-[#70512E] hover:text-white"
                }`}
              >
                {formatCategory(cat)}
              </button>
            ))}
          </div>

          {/* Products */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {paginatedProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white border rounded-xl shadow-sm"
              >
                <div className="relative h-56 w-full rounded-t-xl overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                    loading="lazy"
                  />
                </div>

                <div className="p-5">
                  <h4 className="text-xl font-semibold">{product.name}</h4>
                  <p className="text-gray-500">{product.price}</p>

                  <div className="flex gap-3 mt-4">
                    <button
                      onClick={() => setSelectedProduct(product)}
                      className="flex-1 border rounded-lg py-2 text-[#7A5C32]"
                    >
                      View Details
                    </button>

                    <button
                      onClick={() => handleAddToCart(product)}
                      className="flex-1 bg-[#7A5C32] text-white rounded-lg py-2"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* 🔥 BEST LOOK PRODUCT MODAL */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/60 z-50 flex justify-center items-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-xl shadow-2xl flex flex-col max-h-[90vh]">

            {/* Header */}
            <div className="p-5 border-b flex justify-between items-center">
              <h3 className="text-xl font-bold">{selectedProduct.name}</h3>
              <button
                onClick={() => setSelectedProduct(null)}
                className="text-2xl"
              >
                ✕
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="p-5 overflow-y-auto">
              <div className="relative w-full h-48 rounded-lg overflow-hidden">
                <Image
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 32rem"
                  className="object-cover"
                  priority
                />
              </div>

              <p className="text-lg font-semibold mt-4">
                {selectedProduct.price}
              </p>

              <ul className="list-disc ml-5 mt-3 space-y-2 text-sm text-gray-700">
                {selectedProduct.details.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>

              {addedSuccess && (
                <p className="mt-4 text-green-600 font-medium">
                  ✅ Added to cart successfully
                </p>
              )}
            </div>

            {/* Footer Buttons */}
            <div className="p-5 border-t flex gap-3">
              <button
                onClick={() => handleAddToCart(selectedProduct)}
                className="flex-1 bg-[#7A5C32] text-white py-3 rounded-lg"
              >
                Add to Cart
              </button>

              <button
                disabled={cart.length === 0}
                className={`flex-1 py-3 rounded-lg border ${
                  cart.length === 0
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-gray-100"
                }`}
              >
                View Cart ({cart.length})
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
