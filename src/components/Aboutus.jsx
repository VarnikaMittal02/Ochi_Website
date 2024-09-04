import React from 'react'

function Aboutus() {
  return (
    <div className='w-full p-20 bg-[rgb(205,234,104)] rounded-tl-3xl rounded-tr-3xl text-black '>

      <h1 className='font-["Neue_Montreal"] text-[3.6vw] leading-[3.5vw] w-[90%] '>Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell
        products, explain complex ideas, and hire great people.</h1>



      <div className='w-full flex gap-5 border-t-[1px] pt-4 mt-20 border-[#738146]'>
        <div className='w-1/2'>
          <h1 className=' text-5xl '>Our approach :</h1>
          <button className='px-8 py-4 uppercase flex gap-10 items-center  bg-zinc-900 mt-10 rounded-full text-white  '> Read More
            <div className='w-3 h-3 rounded-full bg-zinc-100'> </div>

          </button>
        </div>

<div className='w-1/2 h-[70vh] rounded-3xl'>
<img className='w-full h-full bg-cover rounded-2xl ' src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="" />


</div>




      </div>
    </div>

  )  
}

export default Aboutus