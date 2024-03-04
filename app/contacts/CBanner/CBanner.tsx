import { GridBox } from '@/components/GridBox'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaLongArrowAltRight, FaPhoneAlt } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { FaRegEnvelope } from "react-icons/fa6";
import { Paragraph } from '@/components/Paragraph';

export const CBanner = () => {

const contactInfo = [
    {
        icon: FaRegEnvelope,
        cntinfo: "support@deliverypigeon.in",
        href: "mailto:support@deliverypigeon.in",
    },
    {
        icon: FaPhoneAlt,
        cntinfo: "+91 74396 68132",
        href: "tel:74396 68132",
    },
]

    return (
        <div className='bg-[url(https://bslthemes.com/html/quickeat/assets/img/background-1.png)] bg-center bg-no-repeat bg-cover overflow-hidden relative font-poppins py-10'>
            <GridBox columns={2} gap={10} className='items-center container pt-[100px] xl:px-0 lg:px-0 md:px-6 px-6'>
                <GridBox.GridItem columnMerge={1}>
                    <div className="about-text">
                        <div className="crumbs flex">
                            <div><Link className='text-[#023462]' href="/">Home</Link></div>
                            <div><Link href="/contacts" className="flex items-center text-light-black"><span className='px-2 text-theme-primary' ><FaLongArrowAltRight /></span>Contacts</Link></div>
                        </div>
                        <h1 className='leading-[60px] capitalize leading-65px sm-leading-52px xl:text-[42px] lg:text-[42px] md:text-[40px] text-[40px] text-[#005aabb5] font-normal pt-10'>Contact us</h1>
                        <Paragraph wrap="balance" padding="py4" color="primary" font="lg" >Welcome to Delivery Pigeons! Were delighted to hear from you. Whether you have questions, feedback, or inquiries, our team is here to assist.</Paragraph>
                        <GridBox columns={3} gap={5} className='text-center'>
                            <GridBox.GridItem columnMerge={1} className='xl:p-4 lg:p-4 md:p-4 p-2 bg-white shadow-[rgba(149,157,165,0.2)_0px_8px_24px] contact-shadow-flex hover:bg-theme-primary hover:text-white rounded-xl duration-200 my-2.5'>
                                <span className='xl:text-5xl lg:text-5xl md:text-4xl text-[25px] text-theme-primary contact-icon justify-center flex'>
                                    <IoLocationOutline />
                                </span>
                                <h5 className='xl:pt-5 lg:pt-5 md:pt-5 pt-0 text-sm font-medium xl:ml-0 lg:ml-0 md:ml-0 ml-5'>2/3 J. C. Road , Kolkata - 700027</h5>
                            </GridBox.GridItem>
                            {contactInfo.map((items, index) => (
                                <GridBox.GridItem key={index} columnMerge={1} className='xl:p-4 lg:p-4 md:p-4 p-2 bg-white shadow-[rgba(149,157,165,0.2)_0px_8px_24px] contact-shadow-flex hover:bg-theme-primary hover:text-white rounded-xl duration-200 my-2.5 items-center'>
                                <span className='xl:text-5xl lg:text-5xl md:text-4xl text-[25px] text-theme-primary contact-icon justify-center flex'>
                                    {<items.icon />}
                                </span>
                                <h5 className='xl:pt-5 lg:pt-5 md:pt-5 pt-0 text-xs font-medium text-balance break-words xl:ml-0 lg:ml-0 md:ml-0 ml-5'><a href={items.href}>{items.cntinfo}</a></h5>
                            </GridBox.GridItem>
                            ))}
                        </GridBox>
                    </div>
                </GridBox.GridItem>
                <GridBox.GridItem columnMerge={1}>
                    <div className="about-img">
                        <Image
                            className='m-auto relative rounded-l'
                            src="/images/contact-us.png"
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
