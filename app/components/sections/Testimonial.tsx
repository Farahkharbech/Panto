import React, { memo, useId } from "react";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  text: string;
  avatar: string;
  bg: string;
  rating: number;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: "bang-upin",
    name: "Bang Upin",
    role: "Pedagang Asongan",
    text: "Terimakasih banyak, kini ruanganku menjadi lebih mewah dan terlihat mahal.",
    avatar: "/images/person1.png",
    bg: "/images/bgtest3.jpg",
    rating: 4,
  },
  {
    id: "ibuk-sukijan",
    name: "Ibuk Sukijan",
    role: "Ibu Rumah Tangga",
    text: "Makasih Panto, aku sekarang berasa tinggal di apartment karena barang-barang yang terlihat mewah",
    avatar: "/images/person2.png",
    bg: "/images/bgtest1.jpg",
    rating: 4,
  },
  {
    id: "mpok-ina",
    name: "Mpok Ina",
    role: "Karyawan Swasta",
    text: "Sangat terjangkau untuk kantong saya yang tidak terlalu banyak",
    avatar: "/images/person3.png",
    bg: "/images/bgtest2.jpg",
    rating: 4,
  },
];

const clamp = (n: number, min: number, max: number): number => 
  Math.min(max, Math.max(min, n));

interface StarProps {
  filled?: boolean;
  className?: string;
}

const Star = memo(function Star({ filled = false, className = "" }: StarProps) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      style={{ opacity: filled ? 1 : 0.25 }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z"
        fill="currentColor"
      />
    </svg>
  );
});

interface TestimonialCardProps {
  t: Testimonial;
}

const TestimonialCard = memo(function TestimonialCard({ t }: TestimonialCardProps) {
  const titleId = useId();
  const rating = clamp(Number(t.rating ?? 4), 0, 5);

  return (
    <article
      aria-labelledby={titleId}
      className="relative w-full max-w-[370px] h-[506px] shrink-0"
    >
      <div
        aria-hidden="true"
        className="absolute w-[300px] h-[380px] left-[37px] top-[126px] bg-cover bg-center opacity-40 blur-[25px] rounded-[44px] scale-x-[-1]"
        style={{ backgroundImage: `url(${t.bg})` }}
      />

      <div
        aria-hidden="true"
        className="absolute left-0 top-0 w-full h-[476px] bg-cover bg-center rounded-[18px] overflow-hidden scale-x-[-1]"
        style={{ backgroundImage: `url(${t.bg})` }}
      />

      <div className="absolute left-1/2 top-[219px] -translate-x-1/2 w-[334px] h-[239px]">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[66px] h-[66px] rounded-full bg-white flex items-center justify-center z-20 shadow-sm">
          <div className="relative w-[50px] h-[50px]">
            <div
              aria-hidden="true"
              className="absolute inset-0 rounded-full opacity-50 blur-[6.5px] bg-cover bg-center"
              style={{ backgroundImage: `url(${t.avatar})` }}
            />
            <img
              src={t.avatar}
              alt={`${t.name} avatar`}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full rounded-full object-cover"
            />
          </div>
        </div>

        <div className="absolute left-0 top-[33px] w-[334px] h-[206px] rounded-[18px] bg-white z-10 flex flex-col items-center text-center px-8 pt-12 pb-6 shadow-sm">
          <h3
            id={titleId}
            className="font-bold text-lg leading-tight text-[#1E1E1E] capitalize"
          >
            {t.name}
          </h3>

          <p className="mt-1 text-xs leading-tight text-[#1E1E1E] opacity-60">
            {t.role}
          </p>

          <figure className="mt-6">
            <blockquote className="text-sm leading-tight text-[#1E1E1E] opacity-80">
              <span className="sr-only">Testimonial: </span>"{t.text}"
            </blockquote>
            <figcaption className="sr-only">{t.name}</figcaption>
          </figure>

          <div
            className="mt-auto flex items-center gap-1.5 text-[#FF911C]"
            role="img"
            aria-label={`${rating} out of 5 stars`}
          >
            {Array.from({ length: 5 }, (_, i) => (
              <Star key={i} filled={i < rating} />
            ))}
          </div>
        </div>
      </div>

      <div aria-hidden="true" className="absolute left-0 bottom-0 w-full h-8" />
    </article>
  );
});

interface TestimonialProps {
  items?: Testimonial[];
  eyebrow?: string;
  title?: string;
}

export default function Testimonial({
  items = TESTIMONIALS,
  eyebrow = "Testimonials",
  title = "Our Client Reviews",
}: TestimonialProps) {
  return (
    <section className="relative w-full flex flex-col items-center py-20 lg:py-32 px-6 lg:px-20">
      <span className="text-[#F47E00] font-semibold text-lg leading-tight tracking-widest uppercase mb-2">
        {eyebrow}
      </span>

      <h2 className="text-[#1E1E1E] font-bold text-4xl lg:text-[42px] leading-tight text-center capitalize mb-16">
        {title}
      </h2>

      <div className="flex flex-col lg:flex-row justify-center items-start gap-10 w-full max-w-7xl">
        {items.map((t) => (
          <TestimonialCard key={t.id} t={t} />
        ))}
      </div>
    </section>
  );
}