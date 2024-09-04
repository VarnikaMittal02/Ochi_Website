import React from 'react'

function Cards() {
  return (
    <div className='w-full flex gap-5 h-screen px-14 items-center bg-zinc-900'>

      <div className="cardcontainer h-[45vh]   w-1/2">

{/* here is 1 box */}

        <div className='relative card w-full h-full rounded-xl  bg-[#004D43] flex items-center justify-center'>
          <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
          <button className=' absolute px-5 rounded-full border-2 border-[#73A658] text-[#73A658] py-1 left-10 bottom-10 '> &copy; 2019-2022</button>
        </div>


      </div>




      <div className="cardcontainer  flex gap-5 w-1/2 h-[45vh]  ">

{/* here is 2 box */}

        <div className=' card relative flex items-center justify-center  rounded-xl w-1/2  h-full bg-[#212121]'>
          <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
          <button className=' absolute px-5 rounded-full border-2  py-1 left-10 bottom-10 '> RATINGS.0 ON CLUTCH</button>
        </div>


        <div className=' card relative flex items-center justify-center  rounded-xl w-1/2  h-full bg-[#212121]'>
          <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
          <button className=' absolute px-5 rounded-full border-2  py-1 left-10 bottom-10 '>BUSINESS BOOTCAMP ALUMNI</button>
        </div>


      </div>



    </div>
  )
}

export default Cards