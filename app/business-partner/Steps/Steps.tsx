import { GridBox } from '@/components/GridBox'
import React from 'react'
import { TiUserAdd } from "react-icons/ti";
import { IoLocation } from "react-icons/io5";
import { TbTruckDelivery } from "react-icons/tb";
import { FaArrowRight } from "react-icons/fa";

export const Steps = () => {

    const menuSteps = [
        {
            step: "01",
            label: "Sign up for Delivery Pigeon Business Program",
            icon: TiUserAdd,
        },
        {
            step: "02",
            label: "Select The Preferred Location",
            icon: IoLocation,
        },
        {
            step: "03",
            label: "Start delivering and servicing customers in your territory",
            icon: TbTruckDelivery,
        },
    ];

    return (
        <div className='font-poppins py-20 bg-[#F2F2F2]'>
            <h2 className='xl:leading-[60px] lg:leading-[60px] md:leading-[45px] leading-[45px] xl:text-[50px] lg:text-[50px] md:text-[40px] text-[40px] text-[#363636] font-semibold capitalize text-center'>Get Started In Three Simple Steps</h2>
            <GridBox columns={3} gap={5} desktop={3} laptop={3} tablet={2} className="items-center container pt-10 xl:px-0 lg:px-0 md:px-6 px-6">
                {menuSteps.map((items, index) => (
                    <GridBox.GridItem columnMerge={1} key={index} className='border pt-10 pl-10 pr-10 pb-16 border-[5px] border-solid border-[rgba(0,0,0,0.1)] xl:mb-[0px] lg:mb-[0px] md:mb-[0px] mb-[30px] bg-white hover:border-[#90AEF4] steps-hover h-[284px]'>
                        <div className=''>
                            <span className='text-[rgba(0,0,0,0.1)] font-extrabold text-[22px]'>{items.step}</span>
                            <div className='text-center'>
                                <span className='text-[40px] text-black justify-center flex'><items.icon /></span>
                                <h4 className='text-black font-semibold leading-[120%] text-[22px] pt-[30px] pb-[10px]'>{items.label}</h4>
                                <div className='w-[60px] h-[5px] transition-[0.4s] duration-[cubic-bezier(0,0,0.3642,1)] mx-auto border-[3px] border-solid border-[rgba(0,0,0,0.1)]' style={{ borderImage: 'repeating-linear-gradient(-45deg,transparent,transparent 1px,rgba(0,0,0,0.1) 1px,rgba(0,0,0,0.1) 3px) 3' }}></div>
                            </div>
                        </div>
                    </GridBox.GridItem>
                ))}
            </GridBox>
        </div>
    )
}
