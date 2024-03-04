import { GridBox } from '@/components/GridBox'
import { Paragraph } from '@/components/Paragraph'
import Image from 'next/image'
import React from 'react'

export const App = () => {
    return (
        <div className='container xl:px-0 lg:px-0 md:px-6 px-6 pt-20 pb-20'>
            <GridBox columns={2} gap={10} tablet={2} className='items-center'>
                <GridBox.GridItem columnMerge={1}>
                    <h2 className='capitalize xl:leading-[60px] lg:leading-[60px] md:leading-[45px] leading-[45px] xl:text-[50px] lg:text-[50px] md:text-[40px] text-[40px] text-[#363636] font-semibold'>Download The App</h2>
                    <h4 className='text-2xl font-semibold capitalize leading-9 text-light-black pt-3.5'>Start placing orders right from the comfort of your home.</h4>
                    <Paragraph wrap="balance" padding="py4" color="primary" font="lg" >Our app interface is easy-to-use and secure, putting customer satisfaction above all else.</Paragraph>
                    <div className="flex">
                        <a href="https://apps.apple.com/us/app/delivery-pigeon/id1552237117" target="_blank" rel="noopener noreferrer" className="py-2 rounded-md flex items-center">
                            <Image
                                className='w-[200px] h-[57px]'
                                src="/images/app-store-icon1.png"
                                alt="Description of the image"
                                width={224}
                                height={78}
                            />
                        </a>
                        <a href="https://play.google.com/store/apps/details?id=com.pigeon.customer.app" target="_blank" rel="noopener noreferrer" className="py-2 rounded-md flex items-center responsive-store">
                            <Image
                                className='w-[200px] ml-5'
                                src="/images/app-store-icon2.png"
                                alt="Description of the image"
                                width={263}
                                height={79}
                            />
                        </a>
                    </div>
                </GridBox.GridItem>
                <GridBox.GridItem columnMerge={1} className='download-app-img'>
                    <Image
                        className='m-auto'
                        src="/images/get-app.png"
                        alt="Download App"
                        width={640}
                        height={424}
                    />
                </GridBox.GridItem>
            </GridBox>
        </div>
    )
}
