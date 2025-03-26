import Image from "next/image"
import Link from "next/link"
import { RiArrowRightLine, RiMailFill, RiMapPin2Fill, RiPhoneFill } from "react-icons/ri"
import Socials from "./Socials"




const Footer = () => {
  return (
    <footer className="mt-16 xl:mt-32 bg-primary">
      <div className="container mx-auto">
        <div>
          {/* logo & text*/}
          <div className="flex-1">
            <Link href="/" className="flex mb-6">
              <Image
                src="/assets/logo.svg"
                alt="logo"
                width={230}
                height={48}
                className=""
              />
            </Link>
            <p className="text-border max-w-[270px]">
              lorem ipsum dolor sit amet consectetur adipisicing elit. fugiat
              voluptas, quidem, voluptate, consequuntur, velit, placeat
            </p>
          </div>

          {/* Contact */}
          <div className="flex-1 text-border">

          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer