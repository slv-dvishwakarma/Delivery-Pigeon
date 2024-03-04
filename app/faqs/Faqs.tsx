"use client"
import { Article } from '@/components/Article';
import { GridBox } from '@/components/GridBox'
import Link from 'next/link'
import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";


export const Faqs = () => {
    return (
        <div>
            <div className='bg-[url(https://bslthemes.com/html/quickeat/assets/img/background-1.png)] bg-center bg-no-repeat bg-cover overflow-hidden relative font-poppins py-10'>
                <GridBox columns={1} gap={5} className='container pt-[100px] xl:px-0 lg:px-0 md:px-6 px-6'>
                    <GridBox.GridItem columnMerge={1} className=''>
                        <div className="about-text">
                            <div className="crumbs flex">
                                <div><Link className='text-[#023462]' href="/">Home</Link></div>
                                <div><Link href="/faqs" className="flex items-center text-light-black"><span className='px-2 text-theme-primary' ><FaLongArrowAltRight /></span>FAQs</Link></div>
                            </div>
                            <h1 className='xl:leading-[60px] lg:leading-[60px] md:leading-[45px] leading-[45px] xl:text-[42px] lg:text-[42px] md:text-[40px] text-[40px] text-[#005aabb5] font-normal capitalize pt-10'>FAQs</h1>
                        </div>
                    </GridBox.GridItem>
                </GridBox>
            </div>
            <Article>
                
                    <h3>How can I place an order for delivery?</h3>
                
                <p>Placing an order is very simple. You just need to enter a valid phone number, put in your delivery information and place the order. Immediately after the order has been placed, we will assign a delivery partner who will be delivering your order according to the address stated on your account.</p>
                
                    <h3>Is there a minimum order value for placing an order?</h3>
                
                    <p>No, we do not have a minimum order value and as such our customers are free to choose order items without worrying too much about meeting the order value for placing an order.</p>
                
                    <h3>Within how much time can I expect the delivery to reach?</h3>
                
                    <p>The minimum time for delivery varies according to the distance between your location and the location of the ordered item you would like to be delivered at your place. Our algorithms work on artificial intelligence and as such, we are able to provide our customers the exact time needed for the order to reach based on the order placed as soon as the delivery order has been confirmed.</p>
                
                    <h3>How can I change or cancel an order I have already placed?</h3>
                
                    <p>If you would like to change the order placed or cancel an order before delivery, you can do the same by visiting our platform Delivery Pigeon and logging into your account and viewing the My Orders section.</p>
                
                    <h3>Do you offer Multipoint delivery?</h3>
                
                    <p>Yes, we do. We collect your item from one point and deliver the same to multiple delivery points.</p>
                
                    <h3>How can I get in touch with the delivery agent?</h3>
                
                    <p>As soon as the delivery agent has been assigned for your order, we will be providing you with the contact details of the respective delivery agent, with whom you can get in touch to know more about your order and the delivery process.</p>
                
                    <h3>Whom do i get in touch with if there is a problem with the order that i have received?</h3>
                
                    <p>In such a case, kindly get in touch with our team at <a href="mailto:contact@deliverypigeon.com">support@deliverypigeon.in</a>. We will be immediately handling the issue based on the problem that you might have encountered with the order placed.</p>
            </Article>
        </div>
    )
}
