import { GridBox } from '@/components/GridBox'
import { Paragraph } from '@/components/Paragraph'
import Image from 'next/image'
import React from 'react'

export const Team = () => {
    return (
        <div className='container pt-8 pb-20 xl:px-0 lg:px-0 md:px-6 px-6'>
            <GridBox columns={2} gap={10} className='items-center'>
                <GridBox.GridItem columnMerge={1}>
                <h2 className='xl:leading-[60px] lg:leading-[60px] md:leading-[45px] leading-[45px] xl:text-[50px] lg:text-[50px] md:text-[40px] text-[40px] text-[#363636] font-semibold pt-16'>Our Team</h2>
                <Paragraph wrap="balance" padding="py4" color="primary" font="lg" >At Delivery Pigeon, we have a diligent team of professionals who are all dedicated to the procedure of delivering the orders placed by our customers. We are always looking out to accept delivery agents who would like to be a part of our team at Delivery Pigeon. The ideal qualities we look for in our agents is diligence and a never-say-die attitude. To sign up as a Provider on Delivery Pigeon, kindly get in touch with us at support@deliverypigeon.in or sign up and create an account on the Delivery Pigeon Provider app.</Paragraph>
                </GridBox.GridItem>
                <GridBox.GridItem columnMerge={1}>
                    <Image
                        className=''
                        src="/images/team-work.png"
                        alt=""
                        width={724}
                        height={581}
                    />
                </GridBox.GridItem>
            </GridBox>
        </div>
    )
}
