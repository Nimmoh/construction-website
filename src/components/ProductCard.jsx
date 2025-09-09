import { div } from "framer-motion/client"
import React from "react"
import { Star, ShoppingCart } from "lucide-react"

export default function ProductCard({product}){
    return(
        <div>
              <div className="relative">
                 {/* <img src={product.image} alt={product.title} className="w-full h-48 object-cover" /> */} 
                <img loading="lazy" className="h-56 w-full object-cover" src={product.img!=='N/A' ? product.img: 'https://placehold.co/400x600'} alt={product.title} /> 
                {product.stock && (
                  <span className="absolute top-3 right-3 bg-orange-600 text-white text-xs font-semibold px-2 py-1 rounded">
                    Available
                  </span>
                )}
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-900">{product.title}</h3>
                <p className="text-green-700 font-semibold text-lg mt-1">
                  {product.price}{" "}
                  <span className="text-sm text-gray-500 font-normal">
                    {product.unit}
                  </span>
                </p>
                <p className="text-gray-600 mt-2 text-sm">{product.desc}</p>

                {/* Rating + Category */}
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center text-yellow-500 text-sm">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="ml-1">{product.rating}</span>
                  </div>
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                    {product.category}
                  </span>
                </div>

                {/* CTA */}
                 {/* <button className="mt-5 w-full flex items-center justify-center bg-green-700 hover:bg-green-800 text-white py-2 rounded-md font-medium shadow transition">
                  <ShoppingCart className="w-4 h-4 mr-2" /> Add to Cart
                </button>  */}
              </div>
            </div>
    )
}