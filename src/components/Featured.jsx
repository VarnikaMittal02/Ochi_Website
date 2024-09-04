
// import { Power4 } from "gsap/all";
import { motion, useAnimation } from 'framer-motion'
import React, { useState } from 'react'

function Featured() {

    const cards = [useAnimation(), useAnimation(),useAnimation(), useAnimation()];

    const handleHover = (index) => {
        cards[index].start({ y: "0" })
    }

    const handleHoverEnd = (index) => {
        cards[index].start({ y: "100%" })
    }

    return (
        <div className='w-full py-36 bg-zinc-850'>

            <div className='w-full px-20 border-b-[1px] border-zinc-700 pb-20'>

                <h1 className='text-6xl font-["Neue_Montreal"] '>Featured projects</h1>

            </div>


            <div className='px-12'>

                <div className="cards w-full flex gap-10 mt-14">
                    {/* 1 card */}
                    <motion.div onHoverStart={() => handleHover(0)} onHoverEnd={() => handleHoverEnd(0)} className=" cardcontainer relative  rounded-xl  w-1/2 h-[75vh] ">
                        {/* <h1 className='absolute text-[#CDEA68] left-full -translate-x-1/2 top-[1/2]  '> */}
                        <h1 className='absolute flex text-[#CEEB6D] overflow-hidden -translate-x-1/2 -translate-y-1/2 top-1/2 left-full z-[9] Grotesk text-[17vh] leading-none  '>


                            {"FYDE".split('').map((item, index) =>

                                <motion.span initial={{ y: "100%" }}
                                    animate={cards[0]}
                                    transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}
                                    className='inline-block'>{item}
                                </motion.span>)}

                            {/* </h1> */}
                        </h1>

                        <div className=' card w-full  h-full   rounded-xl  overflow-hidden'>
                            <img className='w-full  h-full bg-cover ' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />
                        </div>

                    </motion.div>

                    {/* 2 card */}
                    <motion.div onHoverStart={() => handleHover(1)} onHoverEnd={() => handleHoverEnd(1)}  className="cardcontainer relative rounded-xl  w-1/2 h-[75vh]">

                        <h1 className='absolute flex overflow-hidden text-[#CEEB6D]  translate-x-1/2 -translate-y-1/2 top-1/2 right-full  z-[9] Grotesk text-[17vh] leading-none  '>

                            {"VISE".split('').map((item, index) =>

                                <motion.span initial={{ y: "100%" }}
                                    animate={cards[1]}
                                    transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}
                                    className='inline-block'>{item}
                                </motion.span>)}

                        </h1>

                        <div className=' card w-full  rounded-xl h-full overflow-hidden'>
                            <img className='w-full  h-full bg-cover ' src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="" />

                        </div>

                    </motion.div>


                </div>
            </div>












            {/* 2 part */}


            <div className='px-12'>

                <div className="cards w-full flex gap-10 mt-14">

                    {/* effct */}
                    {/* <div className='headings absolute bg-red-500'>
<h1 className='a'> </h1>
</div> */}

                    {/* 1 card */}
                    <motion.div onHoverStart={() => handleHover(2)} onHoverEnd={() => handleHoverEnd(2)} className=" cardcontainer relative  rounded-xl  w-1/2 h-[75vh] ">

                        <h1 className='absolute flex overflow-hidden text-[#CEEB6D]  -translate-x-1/2 -translate-y-1/2 top-1/2 left-full z-[9] Grotesk text-[17vh] leading-none  '>


                            {"TRAWA".split('').map((item, index) =>
                                     <motion.span initial={{ y: "100%" }}
                                     animate={cards[2]}
                                     transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}
                                     className='inline-block'>{item}
                                 </motion.span>)}
 

                        </h1>

                        <div className=' card w-full  h-full   rounded-xl  overflow-hidden'>
                            <img className='w-full  h-full bg-cover ' src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg" alt="" />
                        </div>

                    </motion.div>

                    {/* 2 card */}
                    <motion.div onHoverStart={() => handleHover(3)} onHoverEnd={() => handleHoverEnd(3)} className="cardcontainer relative rounded-xl  w-1/2 h-[75vh]">

                        <h1 className='absolute flex overflow-hidden text-[#CEEB6D]  translate-x-1/2 -translate-y-1/2 top-1/2 right-full  z-[9] Grotesk text-[17vh] leading-none  '>

                            {"PREMIUMBLEBD".split('').map((item, index) =>
                                
                                <motion.span initial={{ y: "100%" }}
                                animate={cards[3]}
                                transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}
                                className='inline-block'>{item}
                            </motion.span>)}

                        </h1>

                        <div className=' card w-full  rounded-xl h-full overflow-hidden'>
                            <img className='w-full  h-full bg-cover ' src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png" alt="" />

                        </div>

                    </motion.div>


                </div>
            </div>



        </div>
    )
}

export default Featured