import React from 'react'
import { GridBox } from '@/components/GridBox'
import Image from 'next/image'
import { Paragraph } from '@/components/Paragraph'

export const WhyChoose = () => {

    const choose = [
        {
            image: "/choose/Customer-Support.jpg",
            title: "Customer Support",
            description: "In case of any queries or issues arising during the delivery process, we have a dedicated helpline to help our customers in the best possible manner.",
        },
        {
            image: "/choose/All-Round-Services.jpg",
            title: "All-round services",
            description: "Whether it is medicine or delivery of groceries from your favourite store, we are there to provide all-round service as and when needed.",
        },
        {
            image: "/choose/Secure-Interface.jpg",
            title: "Secure interface",
            description: "We put the security of customer data above everything else. Our security firewalls help to keep customer data safe from data breaches.",
        },
    ]

    return (
        <div className='bg-bg-color pt-14 pb-14'>
            <div className='container xl:px-0 lg:px-0 md:px-6 px-6'>
                <div>
                    <GridBox columns={2} gap={8} tablet={2} className='items-center'>
                        <GridBox.GridItem columnMerge={1}>
                            <h2 className='xl:leading-[60px] lg:leading-[60px] md:leading-[45px] leading-[45px] xl:text-[50px] lg:text-[50px] md:text-[40px] text-[40px] text-[#363636] font-semibold xl:text-left lg:text-left md:text-left text-center'>Why<br />choose us?</h2>
                            <Paragraph wrap="balance" align='center' color="primary" font="lg" className='md-text-center mt-3 xl:text-left lg:text-left md:text-left' >Delivery Pigeon is reputed for high-quality delivery services in Kolkata.</Paragraph>
                        </GridBox.GridItem>
                        {choose.map((items, index) => (
                            <GridBox.GridItem key={index} columnMerge={1} className=''>
                                <GridBox gap={5} columns={2} desktop={3} laptop={3} tablet={3} className='p-6 bg-white items-center shadow-[rgba(149,157,165,0.2)_0px_8px_24px] rounded-[20px] xl:h-[230px] lg:h-[230px] md:h-[352px] h-[unset] xl:text-left lg:text-left md:text-left text-center xl:my-0 lg:my-0 md:my-0 my-8'>
                                    <GridBox.GridItem columnMerge={1} colMargeDesktop={1} colMargeLaptop={1} colMargeTablet={1} className=''>
                                        <Image
                                            className='m-auto w-[200px]'
                                            src={items.image}
                                            alt=""
                                            width={1000}
                                            height={1000}
                                        />
                                    </GridBox.GridItem>
                                    <GridBox.GridItem columnMerge={1} colMargeDesktop={2} colMargeLaptop={2} colMargeTablet={2}>
                                        <h4 className='text-xl font-semibold capitalize leading-9 text-light-black'>{items.title}</h4>
                                        <Paragraph wrap="balance" color="primary" font="lg" className='mt-1' >{items.description}</Paragraph>
                                    </GridBox.GridItem>
                                </GridBox>
                            </GridBox.GridItem>
                        ))}
                    </GridBox>
                </div>
            </div>
        </div>
    )
}
