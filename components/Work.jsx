import Image from "next/image"
import Link from "next/link"
import Pretitle from "./Pretitle"
import {
  RiArrowRightUpLine,
  RiCheckboxCircleFill
} from "react-icons/ri";


const workData = [
  {
    img: "/assets/img/work/restoration.jpg",
    name: "restoration",
    description: "Your short description",
    href: "",
  },
  {
    img: "/assets/img/work/construction.jpg",
    name: "construction",
    description: "Your short description",
    href: "",
  },
  {
    img: "/assets/img/work/renovation.jpg",
    name: "renovation",
    description: "Your short description",
    href: "",
  },
  {
    img: "/assets/img/work/consulting.jpg",
    name: "consulting",
    description: "Your short description",
    href: "",
  },
]

const Work = () => {
  return (
    <div className="pt-16 xl:pt-32" id="projects">
      <div className="container mx-auto">
        <div className="text-center max-w-[540px] mx-auto xl:mb-20">
          <Pretitle text="Our Work" center />
          <h2 className="h1 mb-3">Discover Our Projects</h2>
          <p>
            Providing expert services designer to deliver quality and innovation in every project we undertake.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
        {workData.map((item, index) => {
          return (
            <div key={index} className="w-full h-[492px] flex-1 relative overflow-hidden group flex justify-center">
              <Image 
                src={item.img}
                fill
                className="object-cover"
                alt=""
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Work