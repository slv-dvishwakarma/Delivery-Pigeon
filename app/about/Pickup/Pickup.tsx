import { GridBox } from '@/components/GridBox'
import { Paragraph } from '@/components/Paragraph'
import Image from 'next/image'
import React from 'react'

export const Pickup = () => {

    const pickupItem = [
        {
            withouthover: "/images/Multipoint-Delivery.png",
            withhover: "/images/Multipoint-Delivery-white.png",
            title: "Multipoint Delivery",
        },
        {
            withouthover: "/images/Parcel-Delivery.png",
            withhover: "/images/Parcel-Delivery-white.png",
            title: "Parcel Delivery cost is 25% lower than others",
        },
        {
            withouthover: "/images/Fastest-Courier-Delivery.png",
            withhover: "/images/Fastest-Courier-Delivery-white.png",
            title: "Fastest Courier Delivery (delivery within 3 hours)",
        },
        {
            withouthover: "/images/Secured-Goods-Delivery.png",
            withhover: "/images/Secured-Goods-Delivery-white.png",
            title: "Secured Goods Delivery",
        },
        {
            withouthover: "/images/friendly-Customer-Support.png",
            withhover: "/images/friendly-Customer-Support-white.png",
            title: "Friendly Customer Support",
        },
    ]

    return (
        <div className='container pt-10 pb-10 xl:px-0 lg:px-0 md:px-6 px-6'>
            <GridBox columns={2} gap={10} className='items-center reverse-col'>
                <GridBox.GridItem columnMerge={1}>
                    <Image
                        className=''
                        src="/images/mission.png"
                        alt=""
                        width={724}
                        height={581}
                    />
                </GridBox.GridItem>
                <GridBox.GridItem columnMerge={1}>
                    <h2 className='xl:leading-[60px] lg:leading-[60px] md:leading-[45px] leading-[45px] xl:text-[50px] lg:text-[50px] md:text-[40px] text-[40px] text-[#363636] font-semibold'>Why Us</h2>
                    <Paragraph wrap="balance" padding="py4" color="primary" font="lg" >Have to pick up or dropoff items? Want to send gifts to your friends and family? Clothes are given for altering but no time to collect them? Celebration at your home and want to share sweets and food? Dont worry! Delivery Pigeon is at your service! We pick and drop from anywhere around the city and deliver it to your desired destination/s all from the comfort of your home. Now in 3 simple steps get rid of the hassle of collecting and delivering and make more time for what you love!</Paragraph>
                </GridBox.GridItem>
            </GridBox>
            <GridBox columns={5} tablet={3} desktop={5} laptop={5} className='pt-14'>
                {pickupItem.map((items, index) => (
                    <GridBox.GridItem key={index} columnMerge={1} className='text-center p-5 hover:bg-theme-primary hover:rounded-t-3xl hover:rounded-b-3xl hover-text-white odd:shadow-[rgba(149,157,165,0.2)_0px_8px_24px]'>
                        <Image
                            className='m-auto without-hover'
                            src={items.withouthover}
                            alt=""
                            width={100}
                            height={100}
                        />
                        <Image
                            className='m-auto hover-image hidden'
                            src={items.withhover}
                            alt=""
                            width={100}
                            height={100}
                        />
                        <h3 className='text-[#000000b8] text-lg'>{items.title}</h3>
                    </GridBox.GridItem>
                ))}
            </GridBox>
        </div>
    )
}
