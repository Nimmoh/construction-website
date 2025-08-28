import React from "react";
import { ShoppingCart, Search, SlidersHorizontal, Star } from "lucide-react";

const Products = () => {
  const products = [
    {
      title: "Aluminum Sliding Windows",
      desc: "Premium aluminum sliding windows with double glazing and thermal break technology.",
      img:"/images/aluminium.jpg", 
      // price: "€185.00",
      // unit: "per window",
      category: "Aluminum Windows",
      // rating: 4.9,
      stock: true,
    },
    {
      title: "Aluminum Entry Doors",
      desc: "Modern aluminum entry doors with security features and energy efficiency.",
      img: "/images/alum_doors.jpg",
      // price: "€320.00",
      // unit: "per door",
      category: "Aluminum Doors",
      // rating: 4.8,
      stock: true,
    },
    {
      title: "Concrete Blocks",
      desc: " High-performance insulation material designed for modern construction. Engineered with sustainability and efficiency in mind, our product provides superior thermal performance, reduces energy costs, and contributes to a healthier indoor environment..",
      img: "/images/block1.jpg",
      // price: "€165.00",
      // unit: "per window",
      category: "Concrete Blocks",
      // rating: 4.7,
      stock: true,
    },
    {
      title: "Tiles",
      desc: " High-performance insulation material designed for modern construction. Engineered with sustainability and efficiency in mind, our product provides superior thermal performance, reduces energy costs, and contributes to a healthier indoor environment..",
      img: "/images/tiles2.jpg",
      // price: "€165.00",
      // unit: "per window",
      category: "tiles",
      // rating: 4.7,
      stock: true,
    },
    {
      title: "Tandoor Stones",
      desc: " High-performance insulation material designed for modern construction. Engineered with sustainability and efficiency in mind, our product provides superior thermal performance, reduces energy costs, and contributes to a healthier indoor environment..",
      img: "/images/tandoor_stone.jpg",
      // price: "€165.00",
      // unit: "per window",
      category: "tiles",
      // rating: 4.7,
      stock: true,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900">
            Our <span className="text-green-700">Product Range</span>
          </h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Specialized in aluminum doors & windows, concrete blocks, paving blocks,
            and brick tiles. Quality materials for all your construction needs.
          </p>
        </div>

        {/* Filters */}
        <div className="bg-gray-50 rounded-lg p-6 mb-12 flex flex-col md:flex-row gap-4 md:items-center justify-between shadow-sm">
          <div className="flex-1 flex items-center bg-white rounded-md shadow px-4 py-2">
            <Search className="text-gray-400 w-5 h-5 mr-2" />
            <input
              type="text"
              placeholder="Search products..."
              className="w-full outline-none text-gray-700"
            />
          </div>
          <select className="px-4 py-2 rounded-md border border-gray-300 text-gray-600">
            <option>All Products</option>
            <option>Windows</option>
            <option>Doors</option>
            <option>Blocks</option>
            <option>Tiles</option>
          </select>
          <button className="flex items-center px-4 py-2 rounded-md border border-gray-300 text-gray-600 hover:bg-gray-100">
            <SlidersHorizontal className="w-4 h-4 mr-2" /> Advanced Filters
          </button>
        </div>

        {/* Product Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((p, i) => (
            <div
              key={i}
              className="bg-white rounded-lg border shadow hover:shadow-md transition overflow-hidden"
            >
              <div className="relative">
                <img
                  src={p.img}
                  alt={p.title}
                  className="h-56 w-full object-cover"
                />
                {p.stock && (
                  <span className="absolute top-3 right-3 bg-orange-600 text-white text-xs font-semibold px-2 py-1 rounded">
                    Available
                  </span>
                )}
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-900">{p.title}</h3>
                <p className="text-green-700 font-semibold text-lg mt-1">
                  {p.price}{" "}
                  <span className="text-sm text-gray-500 font-normal">
                    {p.unit}
                  </span>
                </p>
                <p className="text-gray-600 mt-2 text-sm">{p.desc}</p>

                {/* Rating + Category */}
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center text-yellow-500 text-sm">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="ml-1">{p.rating}</span>
                  </div>
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                    {p.category}
                  </span>
                </div>

                {/* CTA */}
                {/* <button className="mt-5 w-full flex items-center justify-center bg-green-700 hover:bg-green-800 text-white py-2 rounded-md font-medium shadow transition">
                  <ShoppingCart className="w-4 h-4 mr-2" /> Add to Cart
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;