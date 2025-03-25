import { RiChat1Line, RiMap2Line, RiSmartphoneLine } from "react-icons/ri"
import Socials from "./Socials"




const Contact = () => {
  return (
    <div className="pt-16 xl:pt-32" id="contact">
      <div className="container mx-auto">
        <div className="w-full xl:h-[730px] shadow-custom p-4 xl:p-8 xl:px-[90px] xl:py-[36px] border-t-4 border-accent">
          <div className="flex flex-col xl:flex-row h-full gap-[40px] xl:gap-[90px]">
            {/* info */}
            <div className="w-full">info</div>
            {/* form */}
            <div className="flex-1">
              <h2 className="h2 mb-3">
                Request a Quote
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact