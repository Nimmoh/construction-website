import React, { useState } from "react";
import { ShoppingCart, Search, SlidersHorizontal, Star } from "lucide-react";
import products from "../products";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";


const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchSubmitted,setSearchSubmitted] = useState(false)


  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.desc.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });
//Updates the searchBar
 function handleChange(event){
        const search = event.target.value
        setSearchTerm(previousSearch =>{
            return (
                previousSearch,
                search
            )
            
            
        })
        
    }
    //Function to handle the enter button
     function handleSearchClick() {
       if (searchTerm.trim() !== "") {
    setSearchSubmitted(true)
    setSearchTerm(searchTerm);
  }
      // console.log("^^^^^^^^^^^>>>>>>",searchTerm)
  }

  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary-50 py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-sm font-bold text-accent-900 uppercase mb-2">
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
               <SearchBar
              searchTerm={searchTerm}
              searchType="text"
              handleChange={handleChange}
              handleSearchClick={()=>{handleSearchClick()}}

              />
           
            
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
              {/* <button className="flex items-center px-4 py-2 rounded-md border border-slate-300 text-slate-600 hover:bg-slate-100">
                <ShoppingCart className="w-4 h-4 mr-2" />
                Cart (0)
              </button> */}
            </div>
          </div>
          </div>
       
      </section>

      {/* Products Cards */}
      <section className="py-12 bg-white">
         <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {
            filteredProducts.map((product)=>{
              return(
                 <div key={product.id} className="bg-white border border-slate-200 rounded-xl shadow-lg hover:shadow-xl transition overflow-hidden">
                   <ProductCard product={product}/>
              </div>
             
              )
            })
          }
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
