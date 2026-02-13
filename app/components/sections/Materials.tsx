import React from "react";

export default function MaterialsSection() {
  return (
    <section className="relative w-full flex flex-col lg:flex-row items-center gap-12 px-6 lg:px-20 h-screen">
      {/* Left Content */}
      <div className="flex flex-col justify-center lg:w-1/2 gap-6 pl-4 lg:pl-0 h-full">
        <span className="text-[#F47E00] font-[Gilroy-SemiBold] text-[18px] leading-[21px] tracking-widest uppercase">
          Materials
        </span>

        <h2 className="text-[#1E1E1E] font-[Gilroy-Bold] text-[42px] leading-[49px] capitalize">
          Very Serious Materials For Making Furniture
        </h2>

        <p className="text-[#1E1E1E] font-[Gilroy-Regular] text-[18px] leading-[185%] opacity-80">
          Because Panto was very serious about designing furniture for our environment,
          using a very expensive and famous capital but at a relatively low price.
        </p>

        <div className="flex items-center gap-2 mt-2 text-[#F57E00] font-[Gilroy-Medium] text-[14px]">
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
        </div>
      </div>

      {/* Right Section - two columns */}
      <div className="relative lg:w-1/2 flex justify-end h-full gap-6">
        {/* Left column: vertical images */}
        <div className="flex flex-col lg:w-[223px] gap-6 z-20">
          <div
            className="w-[223px] h-[229px] rounded-[14px] bg-cover bg-left transform scale-x-[-1] rotate-180"
            style={{ backgroundImage: "url('/images/material1.jpg')" }}
          />
          <div
            className="w-[223px] h-[338px] rounded-[14px] bg-cover bg-left"
            style={{ backgroundImage: "url('/images/material2.jpg')" }}
          />
        </div>

        {/* Right column: main cut image */}
        <div className="relative lg:w-[629px] lg:h-[445px] -mr-10 flex-shrink-0 z-20">
          {/* Optional background rectangle behind main image */}
          <div className="absolute w-[555px] h-[423px] top-[22px] left-[35px] bg-[#F7F7F7] rounded-[20px]" />

          {/* Main cut image */}
          <div
            className="absolute w-[629px] h-[445px] top-0 right-0 rounded-[20px] bg-cover bg-left transform scale-x-[-1]"
            style={{ backgroundImage: "url('/images/material3.jpg')" }}
          />
        </div>

        {/* Blur behind vertical images */}
        <div
          className="absolute w-[177px] h-[183px] top-[10%] rounded-[29px] bg-cover bg-center opacity-50 blur-[25px] transform scale-x-[-1]"
          style={{ backgroundImage: "url('/images/material1-blur.jpg')" }}
        />
        <div
          className="absolute w-[177px] h-[301px] top-[40%] rounded-[29px] bg-cover bg-center opacity-50 blur-[25px] transform scale-x-[-1]"
          style={{ backgroundImage: "url('/images/material2-blur.jpg')" }}
        />

        {/* Blur behind main cut image */}
        <div
          className="absolute w-[555px] h-[423px] top-[22px] left-[35px] rounded-[49px] bg-cover opacity-50 backdrop-blur-[50px] transform scale-x-[-1] z-10"
          style={{ backgroundImage: "url('/images/material3-bg.jpg')" }}
        />
      </div>
    </section>
  );
}
