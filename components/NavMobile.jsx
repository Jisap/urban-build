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
            <SheetDescription>
              Navigation menu
            </SheetDescription>
          </SheetHeader>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default NavMobile