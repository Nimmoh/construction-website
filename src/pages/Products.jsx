import { React, useState } from "react";
import { ShoppingCart, Search, SlidersHorizontal, Star } from "lucide-react";
import products from "../products";
import ProductCard from "../components/ProductCard";

const Products = () => {
  const handleChange=(e)=>{
    const currentOption=e.target.value
      console.log("Current selected filter: ",currentOption)
     
  }

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
      </div>
    </section>
  );
};

export default Products;