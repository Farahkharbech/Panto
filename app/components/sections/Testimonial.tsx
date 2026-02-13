import React from "react";

const testimonials = [
  {
    name: "Bang Upin",
    role: "Pedagang Asongan",
    text: "Terimakasih banyak, kini ruanganku menjadi lebih mewah dan terlihat mahal.",
    avatar: "/images/person1.png",
    bg: "/images/bgtest3.jpg",
  },
  {
    name: "Ibuk Sukijan",
    role: "Ibu Rumah Tangga",
    text: "Makasih Panto, aku sekarang berasa tinggal di apartment karena barang-barang yang terlihat mewah",
    avatar: "/images/person2.png",
    bg: "/images/bgtest1.jpg",
  },
  {
    name: "Mpok Ina",
    role: "Karyawan Swasta",
    text: "Sangat terjangkau untuk kantong saya yang tidak terlalu banyak",
    avatar: "/images/person3.png",
    bg: "/images/bgtest2.jpg",
  },
];

function Star({ filled }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      style={{ opacity: filled ? 1 : 0.3 }}
    >
      <path
        d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z"
        fill="#FF911C"
      />
    </svg>
  );
}

function TestimonialCard({ t }) {
  return (
    <div className="relative w-[370px] h-[506px] flex-shrink-0">
      {/* Blur glow */}
      <div
        className="absolute w-[300px] h-[380px] left-[37px] top-[126px] bg-cover bg-center opacity-40 blur-[25px] rounded-[44.3895px] scale-x-[-1]"
        style={{ backgroundImage: `url(${t.bg})` }}
      />

      {/* Main BG image */}
      <div
        className="absolute left-0 top-0 w-[370px] h-[476px] bg-cover bg-center rounded-[18.1182px] overflow-hidden scale-x-[-1]"
        style={{ backgroundImage: `url(${t.bg})` }}
      />

      {/* Overlay group */}
      <div className="absolute left-1/2 top-[219px] -translate-x-1/2 w-[334px] h-[239px]">
        {/* Outer white box */}
        <div className="absolute inset-0 rounded-[10px] bg-white backdrop-blur-[5.5px]" />

        {/* Avatar */}
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[66px] h-[66px] rounded-full bg-white flex items-center justify-center z-20">
          <div className="relative w-[50px] h-[50px]">
            <div
              className="absolute inset-0 rounded-full opacity-50 blur-[6.5px] bg-cover bg-center"
              style={{ backgroundImage: `url(${t.avatar})` }}
            />
            <img
              src={t.avatar}
              alt={t.name}
              className="absolute inset-0 w-full h-full rounded-full object-cover"
            />
          </div>
        </div>

        {/* Inner panel */}
        <div className="absolute left-0 top-[33px] w-[334px] h-[206px] rounded-[18.1182px] bg-white/85 backdrop-blur-[5.5px] z-10 flex flex-col items-center text-center px-8 pt-12 pb-6">
          <h3 className="font-[Gilroy-Bold] text-[18px] leading-[21px] text-[#1E1E1E] capitalize">
            {t.name}
          </h3>

          <p className="mt-1 font-[Gilroy-Regular] text-[12px] leading-[14px] text-[#1E1E1E] opacity-60">
            {t.role}
          </p>

          <p className="mt-6 font-[Gilroy-Regular] text-[14px] leading-[16px] text-[#1E1E1E] opacity-80">
            “{t.text}”
          </p>

          {/* Always 4 filled stars */}
          <div className="mt-auto flex items-center gap-[5px]">
            {Array.from({ length: 5 }, (_, i) => (
              <Star key={i} filled={i < 4} />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom spacer */}
      <div className="absolute left-0 bottom-0 w-full h-[30px]" />
    </div>
  );
}

export default function Testimonial() {
  return (
    <section className="relative w-full flex flex-col items-center py-32 px-6 lg:px-20">
      <span className="text-[#F47E00] font-[Gilroy-SemiBold] text-[18px] leading-[21px] tracking-widest uppercase mb-2">
        Testimonials
      </span>

      <h2 className="text-[#1E1E1E] font-[Gilroy-Bold] text-[42px] leading-[49px] text-center capitalize mb-16">
        Our Client Reviews
      </h2>

      <div className="flex flex-col lg:flex-row justify-center items-start gap-10 w-full">
        {testimonials.map((t, idx) => (
          <TestimonialCard key={idx} t={t} />
        ))}
      </div>
    </section>
  );
}
