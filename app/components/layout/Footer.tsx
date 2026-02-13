import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#F7F7F7] py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        
        <div className="flex flex-col lg:flex-row justify-between gap-12 mb-20">
          <div className="flex flex-col gap-6 lg:w-1/4">
            <h1 
              className="font-display text-[#1E1E1E] text-3xl leading-tight tracking-tight capitalize"
            >
              Panto
            </h1>
            <p className="font-sans text-[#1E1E1E] text-[15px] leading-relaxed opacity-80">
              The advantage of hiring a workspace with us is that gives you comfortable service and all-around facilities.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-[#FF911D] font-medium text-base tracking-tight">
              Services
            </h2>
            <nav className="flex flex-col gap-4">
              <a 
                href="#" 
                className="font-sans text-[#1E1E1E] text-[15px] leading-relaxed opacity-80 hover:opacity-100 transition-opacity font-medium"
              >
                Email Marketing
              </a>
              <a 
                href="#" 
                className="font-sans text-[#1E1E1E] text-[15px] leading-relaxed opacity-80 hover:opacity-100 transition-opacity font-medium"
              >
                Campaigns
              </a>
              <a 
                href="#" 
                className="font-sans text-[#1E1E1E] text-[15px] leading-relaxed opacity-80 hover:opacity-100 transition-opacity font-medium"
              >
                Branding
              </a>
            </nav>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-[#FF911D] font-medium text-base tracking-tight">
              Furniture
            </h2>
            <nav className="flex flex-col gap-4">
              <a 
                href="#" 
                className="font-sans text-[#1E1E1E] text-[15px] leading-relaxed opacity-80 hover:opacity-100 transition-opacity font-medium"
              >
                Beds
              </a>
              <a 
                href="#" 
                className="font-sans text-[#1E1E1E] text-[15px] leading-relaxed opacity-80 hover:opacity-100 transition-opacity font-medium"
              >
                Chair
              </a>
              <a 
                href="#" 
                className="font-sans text-[#1E1E1E] text-[15px] leading-relaxed opacity-80 hover:opacity-100 transition-opacity font-medium"
              >
                All
              </a>
            </nav>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-[#FF911D] font-medium text-base tracking-tight">
              Follow Us
            </h2>
            <nav className="flex flex-col gap-4">
              <a 
                href="#" 
                className="flex items-center font-sans text-[#1E1E1E] text-[15px] leading-relaxed opacity-80 hover:opacity-100 transition-opacity font-medium"
              >
                <div className="w-5 flex justify-start items-center">
                  <Image 
                    src="/images/facebook.png" 
                    alt=""
                    width={10}
                    height={20}
                  />
                </div>
                <span className="ml-3">Facebook</span>
              </a>
              <a 
                href="#" 
                className="flex items-center font-sans text-[#1E1E1E] text-[15px] leading-relaxed opacity-80 hover:opacity-100 transition-opacity font-medium"
              >
                <div className="w-5 flex justify-start items-center">
                  <Image 
                    src="/images/twitter.png" 
                    alt=""
                    width={20}
                    height={16}
                  />
                </div>
                <span className="ml-2">Twitter</span>
              </a>
              <a 
                href="#" 
                className="flex items-center font-sans text-[#1E1E1E] text-[15px] leading-relaxed opacity-80 hover:opacity-100 transition-opacity font-medium"
              >
                <div className="w-5 flex justify-start items-center">
                  <Image 
                    src="/images/instagram.png" 
                    alt=""
                    width={20}
                    height={20}
                  />
                </div>
                <span className="ml-3">Instagram</span>
              </a>
            </nav>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-black/10">
          <p className="text-[#1B2934] text-[15px] leading-tight opacity-50">
            Copyright © 2021
          </p>
          <div className="flex gap-8">
            <a 
              href="#" 
              className="font-sans text-[#1E1E1E] text-[15px] leading-relaxed opacity-80 hover:opacity-100 transition-opacity"
            >
              Terms & Conditions
            </a>
            <a 
              href="#" 
              className="font-sans text-[#1E1E1E] text-[15px] leading-relaxed opacity-80 hover:opacity-100 transition-opacity"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}