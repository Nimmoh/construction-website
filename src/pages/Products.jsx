import { React, useState } from "react";
import { ShoppingCart, Search, SlidersHorizontal, Star } from "lucide-react";
import products from "../products";
import ProductCard from "../components/ProductCard";

const Products = () => {
  const handleChange=(e)=>{
    const currentOption=e.target.value
      console.log("Current selected filter: ",currentOption)
     
  }

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
      <section>

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
          {
            
           
          }

          <select onChange={handleChange} className="px-4 py-2 rounded-md border border-gray-300 text-gray-600">
            <option>All Products</option>
            <option >Windows</option>
            <option>Doors</option>
            <option>Blocks</option>
            <option>Tiles</option>
          </select>
          <button className="flex items-center px-4 py-2 rounded-md border border-gray-300 text-gray-600 hover:bg-gray-100">
            <SlidersHorizontal className="w-4 h-4 mr-2"/> Advanced Filters
          </button>
         
        </div>
        {/* Product Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {
            products.map((product,index)=>{
              return(
                 <div
                key={index}
                className="bg-white rounded-lg border shadow hover:shadow-md transition overflow-hidden">
                   <ProductCard product={product}/>
              </div>
             
              )
            })
          }
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
