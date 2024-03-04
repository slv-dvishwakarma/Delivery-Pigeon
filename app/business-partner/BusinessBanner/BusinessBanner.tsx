"use client"
import { GridBox } from '@/components/GridBox'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { FaLongArrowAltRight } from 'react-icons/fa'

export const BusinessBanner = () => {
    
    const handleClick = () => {
        const contactForm = document.getElementById('contact');
        if (contactForm) {
            contactForm.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className=''>
            <div className='business-banner bg-[url(https://bslthemes.com/html/quickeat/assets/img/background-1.png)] bg-center bg-no-repeat bg-cover overflow-hidden relative font-poppins py-10 xl:pt-[30px] lg:pt-[30px] md:pt-[30px] pt-[5px] pb-[0px]'>
                <GridBox columns={5} gap={10} tablet={2} desktop={5} laptop={5} className="items-center container pt-[100px] xl:px-0 lg:px-0 md:px-6 px-6">
                    <GridBox.GridItem columnMerge={3} colMargeTablet={1} colMargeDesktop={3} colMargeLaptop={3} className='mobile-py-30 xl:py-[0px] lg:py-[0px] md:py-[34px]'>
                        <div className="crumbs flex">
                            <div><Link className='text-[#023462]' href="/">Home</Link></div>
                            <div><Link href="/business-partner" className="flex items-center text-[#000000b8]"><span className='px-2 text-theme-primary' ><FaLongArrowAltRight /></span>Become A Business Partner</Link></div>
                        </div>
                        <h1 className='xl:leading-[60px] lg:leading-[60px] md:leading-[45px] leading-[45px] xl:text-[42px] lg:text-[42px] md:text-[40px] text-[40px] text-[#005aabb5] font-normal pt-5 pb-5 '>We Are More than Just a Business Partner</h1>
                        <h6 className='leading-[27px] mt-[15px] font-normal text-[#000000b8] text-balance  mb-7'>Build your business with Delivery Pigeon Business Program We offer an all-in-one platform built to meet your business needs.</h6>
                        <button onClick={handleClick} className=' dark:text-white font-medium rounded-lg text-lg px-[30px] py-[15px] focus:outline-none bg-[#005AAB] scroll-smooth border-2 border-solid border-[#005AAB] hover:bg-[transparent] hover:text-[#005AAB]'>PARTNER WITH US</button>
                    </GridBox.GridItem>
                    <GridBox.GridItem columnMerge={2} colMargeTablet={1} colMargeDesktop={2} colMargeLaptop={2} className='hero-banner'>
                         <Image
                        className='xl:mt-0 lg:mt-0 md:mt-0 mt-10'
                        src="/images/business-banner.png"
                        alt="Business Partner"
                        width={700}
                        height={744}
                    /> 
                    </GridBox.GridItem>
                </GridBox>
            </div>
        </div>
    )
}
