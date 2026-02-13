import Image from 'next/image'

export default function Footer() {
  return (
    <footer 
      className="relative w-full bg-[#F7F7F7]"
      style={{
        height: '462px',
      }}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 relative h-full">
        
        {/* Main Content Grid - Top 118px from top */}
        <div 
          className="absolute flex justify-between gap-12"
          style={{
            width: '1064px',
            left: '188px',
            top: '118px',
          }}
        >
          {/* Logo & About - 20.66% width */}
          <div className="flex flex-col gap-6" style={{ width: '21.66%' }}>
            <h1 
              className="font-display text-[#1E1E1E]"
              style={{
                fontSize: '28px',
                lineHeight: '33px',
                letterSpacing: '0.01em',
                textTransform: 'capitalize',
              }}
            >
              Panto
            </h1>
            <p 
              className="font-sans w-72 text-[#1E1E1E]"
              style={{
                fontSize: '15px',
                lineHeight: '160%',
                opacity: 0.8,
              }}
            >
              The advantage of hiring a workspace with us is that gives you comfortable service and all-around facilities.
            </p>
          </div>

          {/* Services - 9.23% width */}
          <div className="flex flex-col gap-4" style={{ width: '9.23%' }}>
            <h2 
              className="text-[#FF911D]"
              style={{
                fontFamily: 'DM Sans',
                fontSize: '16px',
                lineHeight: '22px',
                letterSpacing: '-0.3px',
                fontWeight: 500,
              }}
            >
              Services
            </h2>
            <nav className="flex flex-col gap-4">
              <a 
                href="#" 
                className="font-sans text-[#1E1E1E] hover:opacity-100 transition-opacity"
                style={{
                  fontSize: '15px',
                  lineHeight: '160%',
                  opacity: 0.8,
                  fontWeight: 500,
                }}
              >
                Email Marketing
              </a>
              <a 
                href="#" 
                className="font-sans text-[#1E1E1E] hover:opacity-100 transition-opacity"
                style={{
                  fontSize: '15px',
                  lineHeight: '160%',
                  opacity: 0.8,
                  fontWeight: 500,
                }}
              >
                Campaigns
              </a>
              <a 
                href="#" 
                className="font-sans text-[#1E1E1E] hover:opacity-100 transition-opacity"
                style={{
                  fontSize: '15px',
                  lineHeight: '160%',
                  opacity: 0.8,
                  fontWeight: 500,
                }}
              >
                Branding
              </a>
            </nav>
          </div>

          {/* Furniture - 9.24% width */}
          <div className="flex flex-col gap-4" style={{ width: '9.24%' }}>
            <h2 
              className="text-[#FF911D]"
              style={{
                fontFamily: 'DM Sans',
                fontSize: '17px',
                lineHeight: '22px',
                letterSpacing: '-0.231818px',
                fontWeight: 500,
              }}
            >
              Furniture
            </h2>
            <nav className="flex flex-col gap-4">
              <a 
                href="#" 
                className="font-sans text-[#1E1E1E] hover:opacity-100 transition-opacity"
                style={{
                  fontSize: '15px',
                  lineHeight: '160%',
                  opacity: 0.8,
                  fontWeight: 500,
                }}
              >
                Beds
              </a>
              <a 
                href="#" 
                className="font-sans text-[#1E1E1E] hover:opacity-100 transition-opacity"
                style={{
                  fontSize: '15px',
                  lineHeight: '160%',
                  opacity: 0.8,
                  fontWeight: 500,
                }}
              >
                Chair
              </a>
              <a 
                href="#" 
                className="font-sans text-[#1E1E1E] hover:opacity-100 transition-opacity"
                style={{
                  fontSize: '15px',
                  lineHeight: '160%',
                  opacity: 0.8,
                  fontWeight: 500,
                }}
              >
                All
              </a>
            </nav>
          </div>

          {/* Follow Us - 9.23% width - Icons on left, text aligned */}
          <div className="flex flex-col gap-4" style={{ width: '98px' }}>
            <h2 
              className="text-[#FF911D]"
              style={{
                fontFamily: 'DM Sans',
                fontSize: '17px',
                lineHeight: '22px',
                letterSpacing: '-0.3px',
                fontWeight: 500,
              }}
            >
              Follow Us
            </h2>
            <nav className="flex flex-col gap-4">
              {/* Facebook */}
              <a 
                href="#" 
                className="flex items-center font-sans text-[#1E1E1E] hover:opacity-100 transition-opacity"
                style={{
                  fontSize: '15px',
                  lineHeight: '160%',
                  opacity: 0.8,
                  fontWeight: 500,
                }}
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
              {/* Twitter */}
              <a 
                href="#" 
                className="flex items-center font-sans text-[#1E1E1E] hover:opacity-100 transition-opacity"
                style={{
                  fontSize: '15px',
                  lineHeight: '160%',
                  opacity: 0.8,
                  fontWeight: 500,
                }}
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
              {/* Instagram */}
              <a 
                href="#" 
                className="flex items-center font-sans text-[#1E1E1E] hover:opacity-100 transition-opacity"
                style={{
                  fontSize: '15px',
                  lineHeight: '160%',
                  opacity: 0.8,
                  fontWeight: 500,
                }}
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

        {/* Bottom Bar - 382px from top */}
        <div 
          className="absolute flex justify-between items-center"
          style={{
            width: '1064px',
            left: '188px',
            top: '382px',
          }}
        >
          <p 
            className="text-[#1B2934]"
            style={{
              fontFamily: 'DM Sans',
              fontSize: '15px',
              lineHeight: '20px',
              letterSpacing: '-0.204545px',
              opacity: 0.5,
            }}
          >
            Copyright © 2021.
          </p>
          <div className="flex gap-8">
            <a 
              href="#" 
              className="font-sans text-[#1E1E1E] hover:opacity-100 transition-opacity"
              style={{
                fontSize: '15px',
                lineHeight: '160%',
                opacity: 0.8,
              }}
            >
              Terms & Conditions
            </a>
            <a 
              href="#" 
              className="font-sans text-[#1E1E1E] hover:opacity-100 transition-opacity"
              style={{
                fontSize: '15px',
                lineHeight: '160%',
                opacity: 0.8,
              }}
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}