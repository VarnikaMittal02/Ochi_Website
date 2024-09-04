import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";


function LandingPage() {
  
    return (
        <div data-scroll data-scroll-speed="-.3" className='w-full h-screen bg-black-850 pt-1'>
            <div className='textstructure mt-40 px-20 Grotesk '>


                {["We Create", "Eye Opening", "Presentations"].map((item, index) => {
                    return (

                        <div className='masker'>

                            <div className='w-fit flex items-center overflow-hidden'>

                                {index == 1 && (
                                    <motion.div initial={{width:0}} animate={{width:"8vw"}} transition={{ease:[0.76, 0, 0.24, 1],duration:1}}  className=" overflow-hidden mr-3 w-[8vw] h-[5.6vw] rounded-md relative -bottom-[0.5vw]  bg-red-500">  <img className='justify-center w-[14vw] h-[8vw]  ' src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg" alt="" /> </motion.div>
                         
                            )}

                                <h1 className="uppercase  text-[9vw]  h-full leading-[7vw]  ">
                                    {item}
                                </h1>

                            </div>
                        </div>
                    );
                })}
            </div>

            {/* 2 part */}

            <div className='border-t-[1px] border-zinc-400 mt-32 flex justify-between items-center py-5 px-20 font-["Neue Montreal"]'>
                {["For public and private companies", "From the first pitch to IPO"].map((item, index) => (
                    <p className="text-md font-light tracking-tight leading-none"> {item}</p>

                ))}


                {/* 3 part */}

                <div className="start flex items-center gap-5">

                    <div className='uppercase px-5 py-2 border-[1px]  border-zinc-400 rounded-full font-light text-md '> Start the Project
                    </div>

                    <div className='h-10 w-10 border-[1px] flex items-center justify-center  border-zinc-400 rounded-full '>
                        <span className='rotate-[45deg]'>
                            <FaArrowUpLong />

                        </span>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default LandingPage