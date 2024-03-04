import React from 'react'
import Testimonials from '../Testimonials/Testimonials'

export const ClientSay = () => {
  return (
    <div className='bg-[#F9F9F9] py-16 testimonials'>
        <div className='container xl:px-0 lg:px-0 md:px-6 px-6'>
        <h2 className='xl:leading-[60px] lg:leading-[60px] md:leading-[45px] leading-[45px] xl:text-[50px] lg:text-[50px] md:text-[40px] text-[40px] text-[#363636] font-semibold capitalize text-center'>What Clients Say</h2>
        <div className='mt-16 '>
        <Testimonials />
        </div>
        </div>
    </div>
  )
}
