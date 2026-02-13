import { ArrowRight } from 'lucide-react'

interface Feature {
  id: string
  title: string
  description: string
}

const FEATURES: Feature[] = [
  {
    id: 'luxury',
    title: 'Luxury facilities',
    description: 'The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities.',
  },
  {
    id: 'affordable',
    title: 'Affordable Price',
    description: 'You can get a workspace of the highst quality at an affordable price and still enjoy the facilities that are oly here.',
  },
  {
    id: 'choices',
    title: 'Many Choices',
    description: 'We provide many unique work space choices so that you can choose the workspace to your liking.',
  },
]

export default function WhyChoosingUs() {
  return (
    <section className="relative w-full py-20 lg:py-32 px-6 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[242px_1fr] gap-12 lg:gap-36">
          <div>
            <h2 className="font-bold text-4xl lg:text-[42px] leading-tight text-[#1E1E1E]">
              Why Choosing Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {FEATURES.map((feature) => (
              <div key={feature.id} className="flex flex-col">
                <h3 className="font-bold text-2xl leading-tight text-[#1E1E1E] opacity-90 mb-4">
                  {feature.title}
                </h3>
                
                <p className="text-[#1E1E1E] text-base leading-[185%] opacity-80 mb-6">
                  {feature.description}
                </p>
                
                <button className="flex items-center gap-3 text-[#F57E00] font-medium text-sm hover:gap-4 transition-all duration-300 group">
                  <span>More Info</span>
                  <ArrowRight 
                    className="w-6 h-6 group-hover:translate-x-1 transition-transform"
                    strokeWidth={1.5}
                  />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}