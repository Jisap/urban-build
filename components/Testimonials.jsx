import Image from "next/image"
import Button from "./Button"
import Pretitle from "./Pretitle"





const Testimonials = () => {
  return (
    <div className="pt-16 xl:pt-32">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row relative">
          {/* text */}
          <div className="flex-1">
            <h2 className="h2 mb-6">Built On Trust, Proven By Results</h2>
            <p className="mb-10 max-w-[420px]">
              From home to commercial spaces, our clients share their experiences of working wiht us. See how we&apos;ve helped them bring their dreams to live with expert craftmanship.
            </p>
            <Button 
              text="Work with us"
            />
          </div>
          {/* img & slider */}
          <div className="flex-1">img & slider</div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials