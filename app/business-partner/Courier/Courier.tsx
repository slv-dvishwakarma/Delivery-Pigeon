import { GridBox } from '@/components/GridBox'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Courier = () => {
    return (
        <div className='font-poppins bg-[url(/images/delivery-banner.jpg)] bg-cover bg-no-repeat xl:py-20 lg:py-20 md:py-20 py-10'>
            <GridBox columns={5} desktop={5} laptop={5} tablet={3} gap={10} className="container xl:pt-[100px] lg:pt-[100px] md:pt-[100px] xl:px-0 lg:px-0 md:px-6 px-6 items-center">
                <GridBox.GridItem columnMerge={3} colMargeTablet={2} colMargeDesktop={3} colMargeLaptop={3} className=''>
                    <h2 className='xl:leading-[60px] lg:leading-[60px] md:leading-[45px] leading-[45px] xl:text-[50px] lg:text-[50px] md:text-[40px] text-[40px] font-semibold capitalize text-white'>Deliver Courier Anywhere in Kolkata Using Delivery Pigeon</h2>
                    <h6 className='text-balance py-4 text-lg text-white mb-10'>Business With Us for a Hassle-Free Business Experience. Manage your delivery from a single platform.</h6>
                    <Link href='/' className='dark:text-white font-medium rounded-lg text-lg px-[30px] py-[15px] focus:outline-none bg-[#005AAB] scroll-smooth border-2 border-solid border-[#005AAB] hover:border-white hover:bg-[transparent] hover:text-white'>Get Started Now</Link>
                </GridBox.GridItem>
                <GridBox.GridItem columnMerge={2} colMargeTablet={1} className='mobile-py-30 bg-[white] clipy w-[476px] h-[454px] rounded-[30%_70%_70%_30%/30%_30%_70%_70%]'>
                    <Image
                        className=''
                        src="/images/delivery-pegion.png"
                        alt="Business Partner"
                        width={778}
                        height={800}
                    />
                </GridBox.GridItem>
            </GridBox>
        </div>
    )
}
