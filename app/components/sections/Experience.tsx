import React from "react";

export default function ExperienceSection() {
  return (
    <section className="relative w-full flex flex-col lg:flex-row items-start lg:items-center gap-12 lg:gap-36 py-20">
      {/* Left Image with background rectangle */}
      <div className="relative lg:w-[629px] lg:h-[445px] -ml-[27px] flex-shrink-0">
        {/* Background rectangle behind image */}
        <div className="absolute w-[495px] h-[301px] top-[72px] left-[195px] bg-[#F7F7F7] rounded-[20px]" />

        {/* Main image */}
        <div
          className="absolute w-[629px] h-[445px] top-0 left-0 rounded-[20px] bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/images/experience.jpg')",
          }}
        />
      </div>

      {/* Right Content */}
      <div className="flex flex-col lg:w-[556px] gap-6 px-6 lg:px-0">
        {/* Experiences label */}
        <span className="text-[#F47E00] font-[Gilroy-SemiBold] text-[18px] leading-[21px] tracking-widest uppercase">
          Experiences
        </span>

        {/* Heading */}
        <h2 className="text-[#1E1E1E] font-[Gilroy-Bold] text-[42px] leading-[49px] capitalize">
          We provide you the best experience
        </h2>

        {/* Paragraph */}
        <p className="text-[#1E1E1E] font-[Gilroy-Regular] text-[18px] leading-[185%] opacity-80">
          You don’t have to worry about the result because all of these interiors
          are made by people who are professionals in their fields with an elegant
          and luxurious style and with premium quality materials.
        </p>

        {/* More Info link */}
        <div className="flex items-center gap-4 mt-2">
          <span className="text-[#F57E00] font-[Gilroy-Medium] text-[14px] leading-[185%]">
            More Info
          </span>
          <span
            className="w-[48px] h-[24px] border border-[#F57E00] rounded flex justify-center items-center"
          >
            {/* Arrow icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 text-[#F57E00]"
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
          </span>
        </div>
      </div>
    </section>
  );
}
