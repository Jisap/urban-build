"use client"


import Hero from "@/components/Hero"
import Topbar from "@/components/Topbar"
import Header from "../components/Header"
import Stats from "@/components/Stats"
import Services from "@/components/Services"
import Work from "@/components/Work"
import About from "@/components/About"
import Testimonials from "@/components/Testimonials"
import Faq from "@/components/Faq"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import { useEffect, useState } from "react"


const Home = () => {

  const [headerActive, setHeaderActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHeaderActive(window.scrollY > 200);
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }

  },[])

  return (
    <div className="overflow-hidden">
      <Topbar />
      {/* static header */}
      <div className="relative z-10">
        <Header  />
      </div>
      {/* animated header */} 
      <div className={`w-full transition-transform duration-500 fixed top-0 left-0 z-50 ${headerActive ? "translate-y-0" : "-translate-y-full"}`}>
        <Header />
      </div>
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