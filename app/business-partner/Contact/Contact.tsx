import { GridBox } from '@/components/GridBox'
import Image from 'next/image'
import React from 'react'
import { ContactForm } from '../ContactForm'

export const Contact = () => {
  return (
    <div className='font-poppins pt-20 pb-10 container xl:px-0 lg:px-0 md:px-6 px-6' id='contact'>
            <GridBox columns={2} gap={10} tablet={1} desktop={2} laptop={2} className='items-center'>
                <GridBox.GridItem columnMerge={1} colMargeTablet={1} colMargeDesktop={1} colMargeLaptop={1} className=''>
                    <div className=''>
                        <Image
                            className='xl:m-[unset] lg:m-[unset]  md:m-auto '
                            src="/images/contact-banner.jpg"
                            alt="Download App"
                            width={640}
                            height={424}
                        />
                    </div>
                </GridBox.GridItem>
                <GridBox.GridItem columnMerge={1} colMargeTablet={1} colMargeDesktop={1} colMargeLaptop={1} className='shadow-[rgba(149,157,165,0.2)_0px_8px_24px] p-10 rounded-[30px]'>
                    <h2 className='xl:leading-[60px] lg:leading-[60px] md:leading-[45px] leading-[45px] xl:text-[50px] lg:text-[50px] md:text-[40px] text-[40px] text-[#363636] font-semibold capitalize'>Contact Us</h2>
                    <ContactForm />
                </GridBox.GridItem>
            </GridBox>
        </div>
  )
}
