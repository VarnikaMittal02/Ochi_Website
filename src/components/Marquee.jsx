import {motion} from 'framer-motion'
import React from 'react'

function Marquee() {
  
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1"  className='w-full py-20 rounded-tr-3xl rounded-tl-3xl  bg-[#004D43]'>
      <div className="text border-t-2 border-b-2 border-zinc-300  overflow-hidden flex whitespace-nowrap ">
        <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{ease:"linear", repeat:Infinity, duration:10}} className='text-[20vw] leading-none font-semibold Grotesk uppercase mb-[2vw] pr-20 '>We are ochi </motion.h1>
        <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{ease:"linear", repeat:Infinity, duration:10}} className='text-[20vw] leading-none font-semibold Grotesk uppercase mb-[2vw]  pr-20'>We are ochi </motion.h1>
        <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{ease:"linear", repeat:Infinity, duration:10}} className='text-[20vw] leading-none font-semibold Grotesk uppercase mb-[2vw] pr-20'>We are ochi </motion.h1>

      </div>


    </div>
  )
}

export default Marquee