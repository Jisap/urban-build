
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import Image from "next/image"



const Slider = () => {
  return (
    <Swiper className="bg-white shadow-custom w-[630px] h-[200px]">
      <SwiperSlide>
        slide 1
      </SwiperSlide>
      <SwiperSlide>
        slide 2
      </SwiperSlide>
      <SwiperSlide>
        slide 3
      </SwiperSlide>
    </Swiper>
  )
}

export default Slider