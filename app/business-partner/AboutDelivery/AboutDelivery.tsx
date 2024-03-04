import { GridBox } from '@/components/GridBox'
import { Paragraph } from '@/components/Paragraph'
import Image from 'next/image'
import React from 'react'

export const AboutDelivery = () => {
    return (
        <div className='pt-20 pb-10 container xl:px-0 lg:px-0 md:px-6 px-6'>
            <h2 className='xl:leading-[60px] lg:leading-[60px] md:leading-[45px] leading-[45px] xl:text-[50px] lg:text-[50px] md:text-[40px] text-[40px] text-[#363636] font-semibold capitalize text-center'>About Delivery Pigeon</h2>
            <Paragraph align='center' wrap="balance" padding="py4" color="primary" font="lg" className='xl:w-[80%] lg:w-[80%] md:w-[80%] w-full xl:m-auto lg:m-auto md:xl:m-auto' >Delivery Pigeon is based out of the headquarters in Kolkata, India and has been providing steady and efficient order deliveries all over the city.</Paragraph>
            <GridBox columns={2} gap={10} tablet={1} desktop={2} laptop={2} className='items-center'>
                <GridBox.GridItem columnMerge={1} colMargeTablet={1} colMargeDesktop={1} colMargeLaptop={1} className=''>
                    <div className=''>
                        <Image
                            className='xl:m-[unset] lg:m-[unset]  md:m-auto '
                            src="/images/about-delivery.jpg"
                            alt="Download App"
                            width={640}
                            height={424}
                        />
                    </div>
                </GridBox.GridItem>
                <GridBox.GridItem columnMerge={1} colMargeTablet={1} colMargeDesktop={1} colMargeLaptop={1}>  
                <Paragraph wrap="balance" color="primary" font="lg" className='mt-4'>We have a team of dedicated professionals who handle the entire process from accepting orders to the assembling and packaging process with due diligence.</Paragraph>
                <Paragraph wrap="balance" color="primary" font="lg" className='mt-4'>We have experienced and highly trained delivery agents as well, who form the backbone of our team and help to provide doorstep deliveries to our customers.</Paragraph>
                <Paragraph wrap="balance" color="primary" font="lg" className='mt-4'>We are committed to revolutionizing the logistics industry by providing fast and precision level service to one and all. We believe in using tech to better serve humanity and make it easy to deliver couriers and packages from one place to another.</Paragraph>
                </GridBox.GridItem>
            </GridBox>
        </div>
    )
}
