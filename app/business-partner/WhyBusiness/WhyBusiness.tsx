import { GridBox } from '@/components/GridBox'
import Image from 'next/image'
import React from 'react'
import { IoMdCheckboxOutline } from "react-icons/io";
import { MdDeliveryDining } from "react-icons/md";

export const WhyBusiness = () => {

    const whyChoose = [
        {
            label: "Pickup or Drop Any Items",
        },
        {
            label: "Easy Order Management",
        },
        {
            label: "Tracking of Orders",
        },
        {
            label: "Safe and Secure Delivery",
        },
        {
            label: "Best-in-class Support",
        },
    ]

    return (
        <div className='font-poppins py-10'>
            <div className=''>
                <GridBox columns={2} gap={10} className='items-center container xl:px-0 lg:px-0 md:px-6 px-6 py-20'>
                     <GridBox.GridItem columnMerge={1} className=''>
                    <div className='before:absolute before:content-[""] before:h-[420px] before:w-[500px] before:rounded-[20px] before:border-8 before:border-solid before:border-[#F29F05] before:left-[11%] about-banner'>
                        <Image
                            className='z-[1] relative rounded-[20px]'
                            src="/images/young-coworkers-conference-hall-working.jpg"
                            alt="Download App"
                            width={821}
                            height={600}
                        />
                    </div>
                </GridBox.GridItem> 
                    <GridBox.GridItem columnMerge={1} className='xl:ml-10 lg:ml-10 md:ml-10 ml-0'>
                        <h2 className='xl:leading-[60px] lg:leading-[60px] md:leading-[45px] leading-[45px] xl:text-[50px] lg:text-[50px] md:text-[40px] text-[40px] text-[#363636] font-semibold capitalize xl:pt-0 lg:pt-0 md:pt-0 pt-10'>Why Business With Us?</h2>
                        <GridBox columns={1} gap={4} className='pt-10'>
                            {whyChoose.map((items, index) => (
                                <GridBox.GridItem key={index} columnMerge={1} className='flex items-center'>
                                    <span className=' text-[35px] text-[#005AAB] pr-3'><IoMdCheckboxOutline /></span>
                                    <h5 className='text-[#787878] font-[600]'>{items.label}</h5>
                                </GridBox.GridItem>
                            ))}
                        </GridBox>
                    </GridBox.GridItem>
                </GridBox>
            </div>
        </div>
    )
}
