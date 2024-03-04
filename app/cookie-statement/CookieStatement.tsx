"use client"
import { Article } from '@/components/Article';
import { GridBox } from '@/components/GridBox'
import Link from 'next/link'
import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";


export const CookieStatement = () => {
  return (
    <div>
    <div className='bg-[url(https://bslthemes.com/html/quickeat/assets/img/background-1.png)] bg-center bg-no-repeat bg-cover overflow-hidden relative font-poppins py-10'>
            <GridBox columns={1} gap={5} className='container pt-[100px] xl:px-0 lg:px-0 md:px-6 px-6'>
                <GridBox.GridItem columnMerge={1} className=''>
                    <div className="about-text">
                        <div className="crumbs flex">
                            <div><Link className='text-[#023462]' href="/">Home</Link></div>
                            <div><Link href="/privacy-policy" className="flex items-center text-light-black"><span className='px-2 text-theme-primary' ><FaLongArrowAltRight /></span>Cookie Statement</Link></div>
                        </div>
                        <h1 className='xl:leading-[60px] lg:leading-[60px] md:leading-[45px] leading-[45px] xl:text-[42px] lg:text-[42px] md:text-[40px] text-[40px] text-[#005aabb5] font-normal capitalize pt-10 '>Cookie Statement</h1>
                    </div>
                </GridBox.GridItem>
            </GridBox>
        </div>
        <Article>
        <p >When you access our site, we use cookies and other identification technologies in order to ensure that we provide the best possible service to our site visitors. Users have a choice to Accept the Site Cookies when visiting our website or downloading our application for use. Some of the reasons why cookies are an important part of how we handle our delivery website are the ease in authenticating the users visiting our site, remembering the preferences set by each user, identifying the popularity of a particular type of content on the site and the effectiveness of our marketing and advertising campaigns.</p>
        <p >Cookies refer to the small text files that are stored on your used site browser or the device in use by the websites, apps, online media accessed. There are a variety of cookies and the functioning of cookies on different websites varies according to the organization’s goals for the implementation of the cookies. In order to better understand the way these cookies function and what information you are giving access to, it is always important to go through the Privacy Policy and Cookie Statement of each website before accepting all of the site cookies.</p>
        <p >We always believe in giving our users the choice to decide whether they would like to give us access to the cookies and our Privacy Policy is clearly stated about the manner in which we store and access the user information given to us by our site visitors. However, given that Cookies are an important part of how we aim to provide the best quality of experience on our site, not accepting the site cookies might affect some of the functionalities on the Delivery Pigeon platform. The overall functioning of the site will remain the same, nevertheless.</p>
        </Article>
        </div>
  )
}