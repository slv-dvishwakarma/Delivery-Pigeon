import React from 'react'
import { GridBox } from '@/components/GridBox';
import Image from 'next/image';
import { Paragraph } from '@/components/Paragraph';

export const Works = () => {

    const itemsData = [
        {
            iconSrc: '/works/quick-support.jpg',
            title: 'Quick service',
            series: '01',
            description: 'Our commitment to clients involves completing deliveries within the stipulated time stated. We keep our word!'
        },
        {
            iconSrc: '/works/Low-Cost-Courier-Delivery.jpg',
            title: 'Low-cost courier delivery',
            series: '02',
            description: 'Our commitment to clients involves completing deliveries within the stipulated time stated. We keep our word!'
        },
        {
            iconSrc: '/works/Complete-Accountability.jpg',
            title: 'Complete accountability',
            series: '03',
            description: 'Our commitment to clients involves completing deliveries within the stipulated time stated. We keep our word!'
        },
        {
            iconSrc: '/works/Easy-Payment.jpg',
            title: 'Easy payment',
            series: '04',
            description: 'Our commitment to clients involves completing deliveries within the stipulated time stated. We keep our word!'
        },
        {
            iconSrc: '/works/Wide-Coverage.jpg',
            title: 'Wide coverage',
            series: '05',
            description: 'Our commitment to clients involves completing deliveries within the stipulated time stated. We keep our word!'
        },
        {
            iconSrc: '/works/Trained-Professionals.jpg',
            title: 'Trained professionals',
            series: '06',
            description: 'Our commitment to clients involves completing deliveries within the stipulated time stated. We keep our word!'
        },
    ];

    return (
        <div className='container xl:px-0 lg:px-0 md:px-6 px-6 pb-20'>
            <div className='working-pocess text-center pt-14 pb-12'>
                <h2 className='xl:leading-[60px] lg:leading-[60px] md:leading-[45px] leading-[45px] xl:text-[50px] lg:text-[50px] md:text-[40px] text-[40px] text-[#363636] font-semibold'>How It Works</h2>
            </div>
            <GridBox columns={3} gap={5} laptop={3} desktop={3} tablet={2} className='working-step'>
                {itemsData.map((item, index) => (
                    <GridBox.GridItem key={index} columnMerge={1} className='text-center pt-11'>
                        <div className='works'>
                            <Image
                                className='m-auto w-[200px]'
                                src={item.iconSrc}
                                alt={`Icon ${index}`}
                                width={1000}
                                height={1000}
                            />
                        </div>
                        <h4 className='text-[22px] font-semibold capitalize xl:leading-[80px] lg:leading-[80px] md:leading-[80px] leading-[40px] text-light-black xl:mt-0 lg:mt-0 md:mt-0 mt-5'><span className='text-normal-light xl:text-[30px] lg:text-[30px] md:text-[25px] text-[30px]'>{item.series}</span> {item.title}</h4>
                        <Paragraph wrap="balance" color="primary" font="lg" >{item.description}</Paragraph>
                    </GridBox.GridItem>
                ))}
            </GridBox>
        </div>
    )
}
