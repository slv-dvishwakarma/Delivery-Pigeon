import React from 'react'
import { LuAlertCircle } from "react-icons/lu";

export const OrderTab = () => {
  return (
    <div className='my-order flex items-center border bg-[#005aab0d] p-2.5 border-solid border-[#005AAB]'>
      <span className='text-xl text-white bg-[#005AAB] w-[35px] h-[35px] leading-[35px] rounded-[50%] p-[7.5px] mx-2.5 my-0'><LuAlertCircle /></span>
      <span>No order has been made yet.</span>
    </div>
  )
}
