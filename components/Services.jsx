import { useState } from "react"
import { Tabs, TabsContent, TabsTrigger } from "./ui/tabs"
import Image from "next/image"
import Button from "./Button"
import { PiWallFill, PiPaintRollerFill, PiWrenchFill, PiUserGearFill } from "react-icons/pi"


const services = [
  {
    name: "construction",
    icon: <PiWallFill />,
    title: "Construction Services",
    description: "We build with precision and innovation, ensuring that every structure is strong, reliable, and built to last. From foundations to finishing touches, our expertise transforms ideas into reality.",
    serviceList: [
      "Residential Builds",
      "Structural Design",
      "Site Prep",
      "Concrete Work",
      "Framing & Roofing",
      "Interior Finish",
    ],
    thumbs: [
      { url: "/assets/img/services/htumb-1.jpg" },
      { url: "/assets/img/services/htumb-2.jpg" },
    ],
  },
  {
    name: "renovation",
    icon: <PiPaintRollerFill />,
    title: "Renovation Services",
    description: "Revitalizing spaces with modern designs and high-quality craftmanship. Whether upgrading a home or remodeling an office, we bring fresh life to every project.",
    serviceList: [
      "Kitchen Remodel",
      "Basement Finish",
      "Flooring",
      "Energy Upgrades",
      "Carpentry",
      "Painting",
    ],
    thumbs: [
      {url: "/assets/img/services/htumb-3.jpg"},
      {url: "/assets/img/services/htumb-4.jpg"},
    ],
  },
  {
    name: "restoration",
    icon: <PiWrenchFill />,
    title: "Restoration Services",
    description: "Bring damaged or aging structures back to life. We specialize in restoring historical landmarks, fire-damaged buildings, and water-damaged propierties with meticulous care.",
    serviceList: [
      "Historic Restore",
      "Water Damage",
      "Fire Repair",
      "Structural Fix",
      "Mold Removal",
      "Roof Restore",
    ],
    thumbs: [
      { url: "/assets/img/services/htumb-4.jpg" },
      { url: "/assets/img/services/htumb-5.jpg" },
    ],
  },
  {
    name: "consulting",
    icon: <PiUserGearFill />,
    title: "Consulting Services",
    description: "Providing expert guidance for construction and renovation projects. From planning and budgeting to compliance and sustainability, our consulting service ensure project success.",
    serviceList: [
      "Project Plans",
      "Costing",
      "Site Management",
      "Permits",
      "Sustainability",
      "Safety",
    ],
    thumbs: [
      { url: "/assets/img/services/htumb-1.jpg" },
      { url: "/assets/img/services/htumb-3.jpg" },
    ],
  },
]

const Services = () => {
  return (
    <div className="h-screen bg-green-200" id="services">
      Services
    </div>
  )
}

export default Services