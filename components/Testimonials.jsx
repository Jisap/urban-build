import Image from "next/image"
import Button from "./Button"
import Pretitle from "./Pretitle"
import Slider from "./Slider"





const Testimonials = () => {
  return (
    <div className="pt-16 xl:pt-32">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row relative">
          {/* text */}
          <div className="flex-1 max-w-[484px] xl:pt-[54px] mb-12 xl:mb-0">
            <Pretitle text="Testomonials" />
            <h2 className="h2 mb-6">Built On Trust, Proven By Results</h2>
            <p className="mb-10 max-w-[420px]">
              From home to commercial spaces, our clients share their experiences of working wiht us. See how we&apos;ve helped them bring their dreams to live with expert craftmanship.
            </p>
            <Button 
              text="Work with us"
            />
          </div>
          {/* img & slider */}
          <div className="flex-1 flex flex-col xl:flex-row xl:justify-end">
            <div className="relative hidden xl:flex xl:w-[570px] xl:h-[580px]">
              <Image 
                src="/assets/img/testimonials/img.jpg"
                fill
                className="object-cover"
                quality={100}
                alt=""
              />
            </div>
            <div className="xl:absolute xl:bottom-0 xl:right-[160px] relative max-w-max">
              {/* quote icon img*/}
              <Image 
                src="/assets/img/testimonials/quote.svg"
                width={54}
                height={36}
                alt=""
                className="absolute z-20 -top-4 left-[60px]"
              />
              <Slider />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials