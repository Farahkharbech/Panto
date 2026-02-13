'use client'

import { useState } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'
import Image from 'next/image'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [cartCount] = useState(0)
  const [activeMenuItem, setActiveMenuItem] = useState<string | null>('Furniture') 

  const navigation = [
    { name: 'Furniture', href: '#furniture', hasDropdown: true },
    { name: 'Shop', href: '#shop', hasDropdown: true },
    { name: 'About Us', href: '#about', hasDropdown: true },
    { name: 'Contact', href: '#contact', hasDropdown: true },
  ]

  const handleMenuClick = (itemName: string) => {
    setActiveMenuItem(activeMenuItem === itemName ? null : itemName)
  }

  return (
    <header className="absolute top-0 w-full z-50">
      <div className="w-full px-4 sm:px-8 lg:px-20">
        <nav className="flex items-center justify-between h-20 max-w-[1440px] mx-auto">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="logo-text text-white">
              Panto
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => handleMenuClick(item.name)}
                className="text-white text-base font-normal transition-colors relative group flex items-center gap-1"
              >
                {item.name}
                {item.hasDropdown && activeMenuItem === item.name && (
                  <ChevronDown className="w-4 h-4" strokeWidth={2} />
                )}
              </button>
            ))}
          </div>

          {/* Shopping Cart */}
          <div className="hidden md:flex items-center">
            <button 
              className="relative p-2 hover:opacity-80 transition-opacity"
              aria-label="Shopping cart"
            >
              <Image 
                src="/images/Bag.png" 
                alt="Shopping bag"
                width={28}
                height={28}
                className="w-7 h-7"
              />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center" style={{ background: '#E58411' }}>
                  {cartCount}
                </span>
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10 bg-black/50 backdrop-blur-md">
            <div className="flex flex-col gap-4">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    handleMenuClick(item.name)
                  }}
                  className="text-white text-base font-normal transition-colors py-2 flex items-center gap-2 justify-between"
                >
                  <span>{item.name}</span>
                  {item.hasDropdown && activeMenuItem === item.name && (
                    <ChevronDown className="w-4 h-4" strokeWidth={2} />
                  )}
                </button>
              ))}
              <button className="relative flex items-center gap-2 text-white py-2">
                <Image 
                  src="/images/Bag.png" 
                  alt="Shopping bag"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
                <span>Cart</span>
                {cartCount > 0 && (
                  <span className="text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center" style={{ background: '#E58411' }}>
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}