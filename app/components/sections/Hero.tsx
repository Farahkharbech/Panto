import Image from "next/image";
import ColorSelector from "../ui/ColorSelector";
import FloatingCircles from "../ui/FloatingCircles";
import SearchBar from "../ui/SearchBar";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-dark">
      {/* Container - image stays at left: 0 as per Figma */}
      <div className="relative w-full h-auto max-w-[1440px]">
        <Image
          src="/images/landingImage.jpg"
          alt="Modern interior with orange sofa"
          width={1440}
          height={1084}
        className="object-cover"
          priority
          quality={100}
        />

        {/* Overlays - positioned absolutely relative to the image */}
        <div className="absolute inset-0">

          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/10" />

          {/* White gradient overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(180deg, rgba(255,255,255,0) 86.13%, #FFFFFF 100%)",
            }}
          />

          {/* Floating Decorative Circles */}
          <FloatingCircles />

          {/* Content */}
          <div className="absolute inset-x-0" style={{ top: '161px' }}>
            <div className="w-full px-4 sm:px-6 lg:px-20">

              {/* Heading */}
              <h1 
                className="hero-title text-white mx-auto"
                style={{
                  width: '861px',
                  maxWidth: '100%',
                  textAlign: 'center',
                  marginBottom: '24px',
                }}
              >
                Make Your Interior More Minimalistic & Modern
              </h1>

              {/* Description */}
              <p className="hero-description text-white/90 mb-12 max-w-2xl mx-auto text-center">
                Turn your room with panto into a lot more minimalist and modern with ease and speed
              </p>

              {/* Search Bar */}
              <div className="mb-8">
                <SearchBar />
              </div>

            </div>
          </div>

          {/* Color Selector */}
          <div 
            className="absolute hidden lg:block"
            style={{
              top: '549px',
              left: '237px',
            }}
          >
            <ColorSelector />
          </div>

        </div>
      </div>
    </section>
  );
}