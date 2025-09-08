import React, { useState } from "react";
import { Search, Star, ShoppingCart } from "lucide-react";

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const products = [
    {
      id: 1,
      title: "Aluminum Windows",
      price: "KSh 15,000",
      originalPrice: "KSh 18,000",
      desc: "High-quality aluminum windows with excellent durability and modern design.",
      image: "/images/aluminium.jpg",
      rating: 4.8,
      reviews: 124,
      category: "windows",
      inStock: true,
    },
    {
      id: 2,
      title: "Concrete Blocks",
      price: "KSh 45",
      originalPrice: "KSh 50",
      desc: "Standard concrete blocks perfect for construction projects.",
      image: "/images/block1.jpg",
      rating: 4.6,
      reviews: 89,
      category: "materials",
      inStock: true,
    },
    {
      id: 3,
      title: "Paving Blocks",
      price: "KSh 120",
      originalPrice: "KSh 140",
      desc: "Decorative paving blocks for driveways and walkways.",
      image: "/images/paving.jpg",
      rating: 4.7,
      reviews: 67,
      category: "materials",
      inStock: true,
    },
    {
      id: 4,
      title: "Brick Tiles",
      price: "KSh 80",
      originalPrice: "KSh 95",
      desc: "Traditional brick tiles for authentic construction look.",
      image: "/images/tiles.jpg",
      rating: 4.5,
      reviews: 45,
      category: "materials",
      inStock: false,
    },
    {
      id: 5,
      title: "Aluminum Doors",
      price: "KSh 25,000",
      originalPrice: "KSh 30,000",
      desc: "Premium aluminum doors with security features.",
      image: "/images/alum_doors.jpg",
      rating: 4.9,
      reviews: 156,
      category: "doors",
      inStock: true,
    },
    {
      id: 6,
      title: "Steel Frames",
      price: "KSh 8,500",
      originalPrice: "KSh 10,000",
      desc: "Heavy-duty steel frames for structural support.",
      image: "/images/product1.jpg",
      rating: 4.4,
      reviews: 78,
      category: "materials",
      inStock: true,
    },
  ];

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.desc.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary-50 py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-sm font-semibold text-accent-600 uppercase mb-2">
            Quality Construction Materials
          </p>
          <h1 className="text-4xl font-extrabold text-slate-900">
            Our <span className="text-primary-700">Product Range</span>
          </h1>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Discover our comprehensive range of high-quality construction materials
            and building supplies, sourced from trusted manufacturers.
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="bg-white py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-slate-50 rounded-lg p-6 mb-12 flex flex-col md:flex-row gap-4 md:items-center justify-between shadow-sm">
            <div className="flex-1 flex items-center bg-white rounded-md shadow px-4 py-2">
              <Search className="text-slate-400 w-5 h-5 mr-2" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full outline-none text-slate-700"
              />
            </div>
            <div className="flex gap-4">
              <select 
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 rounded-md border border-slate-300 text-slate-600"
              >
                <option value="all">All Categories</option>
                <option value="doors">Doors</option>
                <option value="windows">Windows</option>
                <option value="materials">Materials</option>
              </select>
              <button className="flex items-center px-4 py-2 rounded-md border border-slate-300 text-slate-600 hover:bg-slate-100">
                <ShoppingCart className="w-4 h-4 mr-2" />
                Cart (0)
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((p) => (
              <div key={p.id} className="bg-white border border-slate-200 rounded-xl shadow-lg hover:shadow-xl transition overflow-hidden">
                <div className="relative">
                  <img src={p.image} alt={p.title} className="w-full h-48 object-cover" />
                  {!p.inStock && (
                    <span className="absolute top-3 right-3 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
                      Out of Stock
                    </span>
                  )}
                  {p.originalPrice !== p.price && (
                    <span className="absolute top-3 left-3 bg-accent-600 text-white text-xs font-semibold px-2 py-1 rounded">
                      Sale
                    </span>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-900">{p.title}</h3>
                  <p className="text-primary-700 font-semibold text-lg mt-1">
                    {p.price}
                    {p.originalPrice !== p.price && (
                      <span className="text-sm text-slate-500 font-normal line-through ml-2">
                        {p.originalPrice}
                      </span>
                    )}
                  </p>
                  <p className="text-slate-600 mt-2 text-sm">{p.desc}</p>
                  
                  <div className="flex items-center mt-4">
                    <div className="flex items-center text-accent-500 text-sm">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="ml-1">{p.rating}</span>
                    </div>
                    <span className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded ml-2">
                      {p.reviews} reviews
                    </span>
                  </div>

                  {/* <button className="mt-5 w-full flex items-center justify-center bg-primary-700 hover:bg-primary-800 text-white py-2 rounded-md font-medium shadow transition">
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Add to Cart
                  </button> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
