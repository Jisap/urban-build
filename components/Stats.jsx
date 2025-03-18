"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import CountUp from "react-countup"

const statsData = [
  {
    endCountNum: 99,
    endCountText: "%",
    text: "Client Satisfaction",
  },
  {
    endCountNum: 800,
    endCountText: "+",
    text: "Successful Projects",
  },
  {
    endCountNum: 32,
    endCountText: "k",
    text: "Happy Clients",
  },
  {
    endCountNum: 26,
    endCountText: "+",
    text: "Years of Experience",
  }
]

const Stats = () => {

  const ref = useRef(null);
  const inView  = useInView(ref, {threshold: 0.2});

  return (
    <div ref={ref} className="mt-16 xl:mt-32 bg-primary py-10 w-full">
      <div className="container mx-auto h-full">
        <div className="text-white">
          {statsData.map((item, index) => {
            return (
              <div key={index} className="w-full">
                <div className="text-5xl font-semibold">
                  {inView && (
                    <CountUp 
                      start={0}
                      end={item.endCountNum}
                      delay={0.5}
                      duration={3}
                    />
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Stats