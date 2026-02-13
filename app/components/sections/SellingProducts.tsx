'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Star, Plus } from 'lucide-react'

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
    <section 
      className="relative w-full bg-[#F7F7F7] py-12 mb-24"
      style={{
        minHeight: '906px',
      }}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20">
        
        {/* Section Title */}
        <h2 
          className="font-display text-[#1E1E1E] text-center mb-8"
          style={{
            fontSize: '42px',
            lineHeight: '49px',
          }}
        >
          Best Selling Product
        </h2>

        {/* Category Filter */}
        <div className="flex justify-center mb-12">
          <div 
            className="flex gap-1.5 p-1.5 bg-[#EEEEEE] rounded-[44px]"
            style={{
              width: '348px',
              height: '57px',
            }}
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`flex items-center justify-center px-4 rounded-[32px] transition-all duration-200 ${
                  activeCategory === category 
                    ? 'bg-white' 
                    : 'bg-transparent hover:bg-white/50'
                }`}
                style={{
                  width: '84px',
                  height: '45px',
                }}
              >
                <span 
                  className={`${
                    activeCategory === category ? 'font-sans' : 'font-sans'
                  } text-[#1E1E1E]`}
                  style={{
                    fontSize: '18px',
                    lineHeight: '185%',
                    opacity: 0.8,
                    fontWeight: activeCategory === category ? 500 : 400,
                  }}
                >
                  {category}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div 
              key={product.id}
              className="relative bg-white rounded-[20px] overflow-hidden"
              style={{
                height: '450px',
              }}
            >
              {/* Product Image Background */}
              <div 
                className="relative bg-[#FAFAFA] flex items-center justify-center"
                style={{
                  height: '239.15px',
                }}
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  width={218}
                  height={256}
                  className="object-cover"
                />
                {/* Shadow under product */}
                <div 
                  className="absolute bottom-8"
                  style={{
                    width: '150px',
                    height: '72px',
                    background: 'rgba(0, 0, 0, 0.09)',
                    filter: 'blur(12px)',
                    borderRadius: '50%',
                  }}
                />
              </div>

              {/* Product Info */}
              <div className="p-6">
                {/* Category */}
                <p 
                  className="text-[#8D8D8D] mb-2"
                  style={{
                    fontFamily: 'Inter',
                    fontSize: '16.76px',
                    lineHeight: '20px',
                  }}
                >
                  {product.category}
                </p>

                {/* Product Name */}
                <h3 
                  className="text-[#091B3C] mb-4"
                  style={{
                    fontFamily: 'Inter',
                    fontSize: '21.33px',
                    lineHeight: '26px',
                    fontWeight: 600,
                    textTransform: 'capitalize',
                  }}
                >
                  {product.name}
                </h3>

                {/* Rating Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(product.rating)].map((_, i) => (
                    <Star 
                      key={i}
                      className="text-[#FFB461]"
                      fill="#FFB461"
                      style={{
                        width: '18.28px',
                        height: '18.28px',
                      }}
                    />
                  ))}
                </div>

                {/* Price and Add Button */}
                <div className="flex items-center justify-between">
                  <div className="flex items-baseline gap-1">
                    <span 
                      className="text-[#091B3C]"
                      style={{
                        fontFamily: 'Inter',
                        fontSize: '15.23px',
                        lineHeight: '18px',
                        fontWeight: 600,
                      }}
                    >
                      $
                    </span>
                    <span 
                      className="text-[#091B3C]"
                      style={{
                        fontFamily: 'Inter',
                        fontSize: '21.33px',
                        lineHeight: '26px',
                        fontWeight: 600,
                      }}
                    >
                      {product.price}
                    </span>
                  </div>

                  {/* Add to Cart Button */}
                  <button 
                    className="flex items-center justify-center bg-[#091B3C] rounded-full hover:opacity-90 transition-opacity"
                    style={{
                      width: '48.74px',
                      height: '48.74px',
                    }}
                  >
                    <Plus 
                      className="text-white"
                      style={{
                        width: '24.37px',
                        height: '24.37px',
                      }}
                      strokeWidth={2}
                    />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}