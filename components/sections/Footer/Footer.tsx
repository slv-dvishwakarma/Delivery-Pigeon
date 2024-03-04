"use client"
import { GridBox } from '@/components/GridBox'
import Image from 'next/image'
import React from 'react'
import { FaFacebookF, FaInstagram, FaArrowRight } from "react-icons/fa";
import { FaXTwitter, FaLinkedinIn } from "react-icons/fa6";
import ScrollToTopButton from '../ScrollToTopButton/ScrollToTopButton';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Footer = () => {

  const pathName = usePathname();

  const menuItems = [
    { title: 'Home', href: '/', },
    { title: 'About Us', href: '/about' },
    { title: 'Become a Business Partner', href: '/business-partner' },
    { title: 'Media', href: '/media' },
    { title: 'Contacts', href: '/contacts' },
];

  const additionalMenuItems = [
    { title: 'Cookie Statement', href: '/cookie-statement', },
    { title: 'Privacy Policy', href: '/privacy-policy' },
    { title: 'Terms Of Service', href: '/terms-of-service' },
    { title: 'Refund Policy', href: '/refund-policy' },
    { title: 'FAQs', href: '/faqs' },
  ];


  const socialIcon = [
    {
      url: "https://www.facebook.com/deliverypigeon",
      icon: FaFacebookF,
    },
    {
      url: "https://www.instagram.com/deliverypigeon/",
      icon: FaInstagram,
    },
    {
      url: "https://twitter.com/DeliveryPigeon1",
      icon: FaXTwitter,
    },
    {
      url: "https://www.linkedin.com/company/delivery-pigeon/",
      icon: FaLinkedinIn,
    },
  ]
  const currentYear = new Date().getFullYear();

  return (
    <section className="bg-[#1c1b1b] footer-in-mobile-view footer-in-tablet-view footer z-40">
      <div className='container xl:px-0 lg:px-0 md:px-6 px-6 border-bottom-style pt-28 pb-10 sm-pt-10'>
        <div className='sm:grid grid-cols-4 gap-5 md:grid-cols-1 lg:grid-cols-4 xl:grid-cols-4 footer-flex'>
          <GridBox.GridItem columnMerge={1} colMargeTablet={1} className='footer-w-100 colmerge-05 w-9/12'>
            <Image
              className='w-9/12 md:w-6/12'
              src="/images/footer-logo.png"
              alt="Description of the image"
              width={210}
              height={114}
            />
          </GridBox.GridItem>
          <GridBox.GridItem columnMerge={1} className='footer-menu-1 footer-in-mobileview  xl:ml-[-6rem] lg:ml-[-6rem]'>
            <GridBox columns={2} tablet={2} desktop={2} laptop={2} className='mobile-flex'>
              <GridBox.GridItem columnMerge={1} className=''>
                <h4 className='text-xl font-bold capitalize text-paragraph-color'>Menu</h4>
                <div className='pt-3.5'>
                  {menuItems.map((item, index) => (
                    <div key={index} className='my-[19px]'>
                      <Link className={`justify-between flex text-normal-light text-sm hover:text-theme-primary items-center ${pathName === item.href ? 'text-theme-primary' : ''}`} href={item.href}>
                        {item.title}
                        <FaArrowRight className={`text-normal-light mr-5 ${pathName === item.href ? 'text-theme-primary' : ''}`} />
                      </Link>
                    </div>
                  ))}
                </div>
              </GridBox.GridItem>
              <GridBox.GridItem columnMerge={1}>
                <h4 className='text-xl font-bold capitalize text-paragraph-color'>Links</h4>
                <div className='pt-3.5'>
                  {additionalMenuItems.map((item, index) => (
                    <div key={index} className='my-[19px]'>
                      <Link className={`justify-between flex text-normal-light text-sm hover:text-theme-primary items-center ${pathName === item.href ? 'text-theme-primary' : ''}`} href={item.href}>
                        {item.title}
                        <FaArrowRight className={`text-normal-light mr-5 ${pathName === item.href ? 'text-theme-primary' : ''}`} />
                      </Link>
                    </div>
                  ))}
                </div>
              </GridBox.GridItem>
            </GridBox>
          </GridBox.GridItem>
          <GridBox.GridItem columnMerge={2}>
            <GridBox columns={2} gap={5}>
              <GridBox.GridItem columnMerge={1} className='footer-in-mobileview'>
                <h4 className='text-xl font-bold capitalize text-paragraph-color'>Download Provider App</h4>
                <p className='text-normal-light text-balance text-[13px] mt-5'>Delivery Pigeon Provider App is for delivery partner who are willing to sign up to our organization to be a part of the team that helps make the high-quality deliveries possible. Free job opportunity, no agent and no payment, just download the app and fill in your details.</p>
                <a href="https://apps.apple.com/us/app/delivery-pigeon/id1552237117" target="_blank" rel="noopener noreferrer">
                  <Image
                    className='app-store w-6/12 mt-2.5 sm:mt-5 md:w-4/12 lg:w-6/12'
                    src="/images/app-store-icon1.png"
                    alt="Description of the image"
                    width={224}
                    height={78}
                  />
                </a>
              </GridBox.GridItem>
              <GridBox.GridItem columnMerge={1} className='footer-menu-1 footer-menu-icon-style footer-in-mobileview'>
                <h4 className='text-xl font-bold capitalize text-paragraph-color'>Download Customer App</h4>
                <p className='text-normal-light text-balance text-[13px] mt-5'>Delivery Pigeon Customer App is for customers who are looking to place orders for seamless deliveries. The procedure for delivery is made easy and secure, without going through any hassles.</p>
                <a href="https://play.google.com/store/apps/details?id=com.pigeon.customer.app" target="_blank" rel="noopener noreferrer">
                  <Image
                    className='app-store w-6/12 mt-2.5 sm:mt-5 md:w-4/12 lg:w-6/12'
                    src="/images/app-store-icon2.png"
                    alt="Description of the image"
                    width={263}
                    height={79}
                  />
                </a>
              </GridBox.GridItem>
            </GridBox>
          </GridBox.GridItem>
        </div>
      </div>
      <div className='container px-6'>
        <GridBox columns={2} className='items-center copyright-section'>
          <GridBox.GridItem columnMerge={1} className='py-3 font-medium text-paragraph-color'>
            <p className='text-balance'>Copyright © {currentYear}. Delivery Pigeon. All rights reserved.</p>
          </GridBox.GridItem>
          <GridBox.GridItem columnMerge={1} className='py-3 font-medium text-paragraph-color'>
            <div className='social-icons flex-md flex xl:float-right lg:float-right '>
              {socialIcon.map((items, index) => (
                <div key={index} className='w-[35px] h-[35px] border mx-[7px] my-0 rounded-[50%] border-solid border-[#787878] p-[9px] hover:bg-[#005AAB]'>
                <a href={items.url} target="_blank"><span className='text-center my-2 mx-auto text-white'>{<items.icon />}</span></a>
              </div>
              ))}
            </div>
          </GridBox.GridItem>
        </GridBox>
      </div>
      <ScrollToTopButton />
    </section>
  )
}