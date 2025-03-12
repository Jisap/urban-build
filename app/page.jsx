import Hero from "@/components/Hero"
import Topbar from "@/components/Topbar"
import Header from "./Header"
import Stats from "@/components/Stats"
import Services from "@/components/Services"
import Work from "@/components/Work"
import About from "@/components/About"
import Testimonials from "@/components/Testimonials"
import Faq from "@/components/Faq"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"


const Home = () => {
  return (
    <div>
      <Topbar />
      <Header />
      <Hero />
      <About />
      <Stats />
      <Services />
      <Work />
      <Testimonials />
      <Faq />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home