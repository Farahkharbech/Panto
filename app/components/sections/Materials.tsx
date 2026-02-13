import React from "react";

export default function MaterialsSection() {
  return (
    <section className="relative w-full flex flex-col lg:flex-row items-center px-6 lg:px-20 py-20 bg-white overflow-hidden">
      {/* Left Content - Half width */}
      <div className="flex flex-col justify-center lg:w-1/2 max-w-[500px] gap-6 z-10">
        <span className="text-[#F47E00] font-semibold text-sm tracking-[0.2em] uppercase">
          Materials
        </span>
        
        <h2 className="text-[#1E1E1E] font-bold text-[38px] lg:text-[42px] leading-tight">
          Very Serious Materials For Making Furniture
        </h2>
        
        <p className="text-[#1E1E1E] text-base lg:text-[17px] leading-relaxed opacity-70">
          Because panto was very serious about designing furniture for our environment, 
          using a very expensive and famous capital but at a relatively low price.
        </p>
        
        <button className="flex items-center gap-2 text-[#F47E00] font-medium text-sm hover:gap-3 transition-all duration-300">
          <span>More Info</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* Right Section - Image Gallery - Half width, overflows to the right */}
      <div className="relative lg:w-1/2 flex items-center gap-6 min-h-[600px] lg:pl-12">
        {/* Left Column - Two smaller images stacked vertically */}
        <div className="flex flex-col gap-6 z-20">
          {/* Top small image */}
          <div 
            className="w-[223px] h-[229px] rounded-2xl overflow-hidden shadow-lg"
          >
            <img 
              src="/images/material1.jpg" 
              alt="Modern furniture chair"
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Bottom small image */}
          <div 
            className="w-[223px] h-[338px] rounded-2xl overflow-hidden shadow-lg"
          >
            <img 
              src="/images/material2.jpg" 
              alt="Green wall with pink couch"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Column - Large main image (cut off on right side) */}
        <div className="relative">
          {/* Background rectangle for depth */}
          <div className="absolute w-[555px] h-[423px] top-[22px] left-[35px] bg-[#F7F7F7] rounded-[20px] z-0" />
          
          {/* Main large image - positioned to overflow right, flipped horizontally */}
          <div 
            className="relative w-[629px] h-[445px] rounded-[20px] overflow-hidden shadow-2xl z-10"
            style={{ transform: 'scaleX(-1)' }}
          >
            <img 
              src="/images/material3.jpg" 
              alt="Dining room with orange chairs"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}