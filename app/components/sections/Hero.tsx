import Image from "next/image";
import ColorSelector from "../ui/ColorSelector";
import FloatingCircles from "../ui/FloatingCircles";
import SearchBar from "../ui/SearchBar";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-dark">
      <div className="relative w-full aspect-[1440/1084]">
        <Image
          src="/images/landingImage.jpg"
          alt="Modern interior with orange sofa"
          fill
          className="object-cover"
          priority
          quality={100}
          sizes="100vw"
        />

        <div className="absolute inset-0 bg-black/10" />

        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0) 86.13%, #FFFFFF 100%)",
          }}
        />

        <FloatingCircles />

        <div className="absolute inset-x-0 top-[161px] px-4 sm:px-6 lg:px-20">
          <h1 
            className="hero-title text-white mx-auto text-center mb-6 max-w-[861px]"
          >
            Make Your Interior More Minimalistic & Modern
          </h1>

          <p className="hero-description text-white/90 mb-12 max-w-2xl mx-auto text-center">
            Turn your room with panto into a lot more minimalist and modern with ease and speed
          </p>

          <div className="mb-8">
            <SearchBar />
          </div>
        </div>

        <div 
          className="absolute hidden lg:block"
          style={{
            top: '585px',
            left: '249px',
          }}
        >
          <ColorSelector />
        </div>
      </div>
    </section>
  );
}