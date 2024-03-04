import { GridBox } from '@/components/GridBox'
import { Paragraph } from '@/components/Paragraph';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";

export const MBanner = () => {
    return (
        <div className='bg-[url(https://bslthemes.com/html/quickeat/assets/img/background-1.png)] bg-center bg-no-repeat bg-cover overflow-hidden relative font-poppins py-10'>
            <GridBox columns={2} gap={5} className='items-center container pt-[100px] xl:px-0 lg:px-0 md:px-6 px-6'>
                <GridBox.GridItem columnMerge={1}>
                    <div className="about-text">
                        <div className="crumbs flex">
                            <div><Link className='text-[#023462]' href="/">Home</Link></div>
                            <div><Link href="/media" className="flex items-center text-light-black"><span className='px-2 text-theme-primary' ><FaLongArrowAltRight /></span>Media</Link></div>
                        </div>
                        <h1 className='xl:leading-[60px] lg:leading-[60px] md:leading-[45px] leading-[45px] xl:text-[42px] lg:text-[42px] md:text-[40px] text-[40px] text-[#005aabb5] font-normal capitalize pt-10 '>Media</h1>
                        <Paragraph wrap="balance" padding="py4" color="primary" font="lg">We are proud to announce that Delivery Pigeon was featured on a number of reputed newspapers and news journals in Kolkata. Check below to get all news and updates about us.</Paragraph>
                    </div>
                </GridBox.GridItem>
                <GridBox.GridItem columnMerge={1}>
                    <div className="about-img">
                        <Image
                            className='m-auto relative rounded-l'
                            src="/images/media.png"
                            alt=""
                            width={724}
                            height={581}
                        />
                    </div>
                </GridBox.GridItem>
            </GridBox>
        </div>
    )
}
