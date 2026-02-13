'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Star, Plus, ArrowRight } from 'lucide-react'

export default function BestSellingProducts() {
  const [activeCategory, setActiveCategory] = useState('Chair')

  const categories = ['Chair', 'Beds', 'Sofa', 'Lamp']

  const products = [
    {
      id: 1,
      name: 'Sakarias Armchair',
      category: 'Chair',
      price: 392,
      rating: 5,
      image: '/images/sakarias.png',
    },
    {
      id: 2,
      name: 'Baltsar Chair',
      category: 'Chair',
      price: 299,
      rating: 5,
      image: '/images/baltsar.png',
    },
    {
      id: 3,
      name: 'Anjay Chair',
      category: 'Chair',
      price: 519,
      rating: 5,
      image: '/images/anjay.png',
    },
    {
      id: 4,
      name: 'Nyantuy Chair',
      category: 'Chair',
      price: 921,
      rating: 5,
      image: '/images/nyantuy.png',
    },
  ]

  return (
    <section className="relative w-full bg-[#F7F7F7] py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        
        <h2 className="font-bold text-[#1E1E1E] text-4xl lg:text-[42px] leading-tight text-center mb-8">
          Best Selling Product
        </h2>

        <div className="flex justify-center mb-12">
          <div className="flex gap-1.5 p-1.5 bg-[#EEEEEE] rounded-full">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2.5 rounded-full transition-all duration-200 text-lg ${
                  activeCategory === category 
                    ? 'bg-white font-medium' 
                    : 'bg-transparent hover:bg-white/50'
                }`}
              >
                <span className="text-[#1E1E1E] opacity-80">
                  {category}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12">
          {products.map((product) => (
            <div 
              key={product.id}
              className="relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative bg-[#FAFAFA] h-60 flex items-center justify-center">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={218}
                  height={256}
                  className="object-contain"
                />
                <div 
                  className="absolute bottom-8 w-[150px] h-[72px] bg-black/10 blur-xl rounded-full"
                />
              </div>

              <div className="p-6">
                <p className="text-[#8D8D8D] text-base mb-2">
                  {product.category}
                </p>

                <h3 className="text-[#091B3C] text-xl font-semibold capitalize mb-4">
                  {product.name}
                </h3>

                <div className="flex gap-1 mb-4">
                  {[...Array(product.rating)].map((_, i) => (
                    <Star 
                      key={i}
                      className="w-[18px] h-[18px] text-[#FFB461]"
                      fill="#FFB461"
                    />
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-baseline gap-1">
                    <span className="text-[#091B3C] text-sm font-semibold">
                      $
                    </span>
                    <span className="text-[#091B3C] text-xl font-semibold">
                      {product.price}
                    </span>
                  </div>

                  <button 
                    className="flex items-center justify-center w-12 h-12 bg-[#091B3C] rounded-full hover:opacity-90 transition-opacity"
                    aria-label="Add to cart"
                  >
                    <Plus 
                      className="w-6 h-6 text-white"
                      strokeWidth={2}
                    />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <button className="flex items-center gap-3 text-[#F57E00] font-medium text-lg hover:gap-4 transition-all duration-300 group">
            <span>View All</span>
            <ArrowRight 
              className="w-6 h-6 group-hover:translate-x-1 transition-transform"
              strokeWidth={1.5}
            />
          </button>
        </div>
      </div>
    </section>
  )
}