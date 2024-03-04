"use client"
import React, { useState } from 'react'
import { GridBox } from '@/components/GridBox'
import Image from 'next/image'
import { Login } from '../Login';
import { Paragraph } from '@/components/Paragraph';


export const Hero = () => {

    const [isOpen, setIsOpen] = useState(false);

    const Popuptoggle = () => {
        setIsOpen(!isOpen); 
    };

    return (
        <div className='bg-[url(https://bslthemes.com/html/quickeat/assets/img/background-1.png)] bg-center bg-no-repeat bg-cover overflow-hidden relative font-poppins head'>
            <GridBox columns={2} className="items-center container pt-[100px] xl:px-0 lg:px-0 md:px-6 px-6">
                <GridBox.GridItem columnMerge={1} className='mobile-py-30'>
                    <h1 className='xl:leading-[60px] lg:leading-[60px] md:leading-[45px] leading-[45px] xl:text-[42px] lg:text-[42px] md:text-[40px] text-[40px] text-[#005aabb5] font-normal capitalize'>RELIABLE AND FAST COURIER SERVICES IN KOLKATA</h1>
                    <Paragraph wrap="balance" padding="py4" color="primary" font="lg" >Choose our services for low-cost and high quality delivery at your doorstep. Place hassle-free orders for courier delivery without sign-up and extra charges</Paragraph>
                    <h6 className='text-theme-primary font-medium cursor-pointer' onClick={Popuptoggle}>Register Now And Win A FREE Android Phone</h6>
                    <Paragraph wrap="balance" padding="py4" color="primary" font='xs' >* Anyone who registers on our website or our mobile apps before 31st May will be eligible for the lucky draw contest.</Paragraph>
                    <Paragraph wrap="balance" color="primary" font='xs' >* Conditions Apply</Paragraph>
                </GridBox.GridItem>
                <GridBox.GridItem columnMerge={1} className='hero-banner'>
                    <Image
                        className='m-auto rounded-l'
                        src="/images/Home-banner.png"
                        alt=""
                        width={680}
                        height={720}
                    />
                </GridBox.GridItem>
            </GridBox>
            {isOpen && (
                <Login togglePopup={Popuptoggle} />
            )}
        </div>
    )
}
