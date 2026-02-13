import Header from './components/layout/Header'
import Hero from './components/sections/Hero'
import Footer from './components/layout/Footer'
import SellingProduct from './components/sections/SellingProducts'
import Experience from './components/sections/Experience'
import MaterialsSection from './components/sections/Materials'
import Testimonial from './components/sections/Testimonial'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
       <SellingProduct/>
        <Experience/>
        <MaterialsSection/>
        <Testimonial/>
      </main>
      <Footer/>
    </>
  )
}