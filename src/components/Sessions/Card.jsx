import React from 'react'

const Card = () => {
  return (
    <div className='text-white h-auto w-64 p-3 pb-4 border border-solid border-[#FFE91F] rounded-2xl'>
        <div  ><img src="https://res.cloudinary.com/durga811/image/upload/v1667302674/cloud-Img/b_w_man_nlhuiu.jpg" className='overflow-hidden h-52 w-60 object-cover rounded-2xl' alt="guest1" /></div>
        <div className='flex flex-col justify-center items-start'>
          <p className='text-2xl mt-4 leading-6'>How To Present In A Hackthon</p>
          <p className='text-sm mt-4 leading-4  text-slate-300 font-semibold'>Sivraj Rajshiv <span className='text-xs font-light' >: MLH lead</span></p>
        </div>
        <div className='flex flex-row justify-between items-center mt-4'>
          <div>29 january</div>
          <div>Level</div>
        </div>
    </div>
  )
}

export default Card