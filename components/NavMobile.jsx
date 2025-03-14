"use client"

import { RiMenu3Fill } from "react-icons/ri";
import { 
  Sheet, 
  SheetContent, 
  SheetDescription, 
  SheetHeader, 
  SheetTitle, 
  SheetTrigger 
} from "./ui/sheet";
import Logo from "./Logo";
import Socials from "./Socials";
import { Link as ScrollLink} from "react-scroll";
import { useState } from "react";

const links = [
  {
    name: "home",
    path: "home",
  },
  {
    name: "about",
    path: "about",
  },
  {
    name: "services",
    path: "services",
  },
  {
    name: "projects",
    path: "projects",
  },
  {
    name: "contact",
    path: "contact",
  }
]

const NavMobile = () => {

  const[isOpen, setIsOpen] = useState(false);

  return (
    <Sheet
      open={isOpen}
      onOpenChange={setIsOpen}
    >
      <SheetTrigger 
        asChild 
        onClick={() => setIsOpen(true)}
        className= "text-white flex items-center justify-center text-3xl">
        <RiMenu3Fill />
      </SheetTrigger>
      <SheetContent className="bg-primary border-none text-white">
        <div>
          <SheetHeader>
            <SheetTitle><Logo /></SheetTitle>
            <SheetDescription className="sr-only">
              Navigation menu
            </SheetDescription>
          </SheetHeader>
          <ul className="w-full flex flex-col gap-10 justify-center text-center">
            {links.map((link, index) => {
              return (
                <li key={index} className="text-white uppercase font-primary font-medium tracking-[1.2px]">
                  <ScrollLink 
                    to={link.path}
                    smooth
                    spy
                    duration={500}
                    className="cursor-pointer"  
                    activeClass="text-accent"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </ScrollLink>
                </li>
              )
            })}
          </ul>
          {/* socials */}
          <Socials />
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default NavMobile