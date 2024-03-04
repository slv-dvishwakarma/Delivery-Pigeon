import { GridBox } from '@/components/GridBox'
import Link from 'next/link'
import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";

export const OrderBanner = () => {
    return (
        <div className=' bg-center bg-no-repeat bg-cover overflow-hidden relative font-poppins pt-10'>
            <GridBox columns={1} gap={5} className='items-center container pt-[80px] xl:px-0 lg:px-0 md:px-6 px-6'>
                <GridBox.GridItem columnMerge={1} className=''>
                    <div className="about-text">
                        <div className="crumbs flex">
                            <div><Link className='text-[#023462]' href="/">Home</Link></div>
                            <div><Link href="/order" className="flex items-center text-light-black"><span className='px-2 text-theme-primary' ><FaLongArrowAltRight /></span>Order</Link></div>
                        </div>
                    </div>
                </GridBox.GridItem>
            </GridBox>
        </div>
    )
}
