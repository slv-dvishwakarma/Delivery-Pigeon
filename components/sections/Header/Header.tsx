"use client"
import React, { useState, FormEvent, useEffect } from 'react';
import "./Header.css"
import { usePathname } from 'next/navigation';
import { FaRegUser } from "react-icons/fa6";
import { Dropdown } from '@/components/DropDown';
import Link from 'next/link';
import { Login } from '../Login';
import Image from 'next/image';

export const Header = () => {

    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        const loggedInSession = sessionStorage.getItem('loggedIn');
        if (loggedInSession === 'true') {
            setLoggedIn(true);
        }
    }, []);


    
    const options = ['Kolkata', 'Hydrabad', 'Chennai', 'Delhi'];

    const pathName = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleMenuItemClick = () => {
        setIsMobileMenuOpen(false);
    };

    const menuItems = [
        { title: 'Home', href: '/', },
        { title: 'About Us', href: '/about' },
        { title: 'Become a Business Partner', href: '/business-partner' },
        { title: 'Media', href: '/media' },
        { title: 'Contacts', href: '/contacts' },
    ];

    const Popuptoggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className='absolute w-full z-[1] pt-[15px] pb-[30px] px-0'>
            <div className="container mx-auto xl:px-0 lg:px-0 md:px-6 px-6">
                <nav className="border-gray-200 py-2.5">
                    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                        <Link href="/" className="flex items-center main-logo">
                            <Image
                                className='h-8 xl:h-14 lg:h-14 md:h-9 w-[96%]'
                                src="/logos/logo.png"
                                alt="Delivery Pieon"
                                width={210}
                                height={114}
                            />
                        </Link>
                        <div className="flex items-center lg:order-2">
                            <div className="button-icon-styling">
                                <div className='flex items-center'>
                                    {loggedIn ? (
                                        <Link href="/profile">
                                        <span className="bg-primary-700 hover:bg-primary-800 font-medium rounded-lg text-sm lg:px-5 lg:py-2.5 dark:bg-primary-600 dark:hover:bg-primary-700 flex ui-styling text-theme-primary py-1.5 px-2.5 items-center cursor-pointer">
                                            <span className='mr-3'><FaRegUser /></span>Profile
                                        </span>
                                        </Link>
                                    ) : (
                                        <span className="bg-primary-700 hover:bg-primary-800 font-medium rounded-lg text-sm lg:px-5 lg:py-2.5 dark:bg-primary-600 dark:hover:bg-primary-700 flex ui-styling text-theme-primary py-1.5 px-2.5 items-center cursor-pointer" onClick={Popuptoggle}>
                                            <span className='mr-3'><FaRegUser /></span>Login
                                        </span>
                                    )}

                                    <span className=' font-medium rounded-lg text-sm mr-2 flex ui-styling hidden-button text-theme-primary items-center p-0-remove'>
                                        <Dropdown options={options}></Dropdown>
                                    </span>
                                    {loggedIn ? (
                                    <Link href="/order" className="dark:text-white font-medium rounded-lg text-sm lg:px-5 py-2 lg:py-2.5 focus:outline-none button-1 uppercase special-case">Book An Order</Link>
                                    ) : (
                                        <span className="dark:text-white font-medium rounded-lg text-sm lg:px-5 py-2 lg:py-2.5 focus:outline-none button-1 uppercase special-case cursor-pointer" onClick={Popuptoggle}>
                                            Book An Order
                                        </span>
                                        )}
                                    </div>
                            </div>
                            <button
                                onClick={toggleMobileMenu}
                                className="inline-flex items-center p-2 ml-1 text-sm text-gray-500  lg:hidden hover:bg-gray-100 focus:outline-none dark:text-gray-400 dark:focus:ring-gray-600"
                                aria-controls="mobile-menu-2"
                                aria-expanded="false"
                            >
                                <svg
                                    className={`w-6 h-6 text-black ${isMobileMenuOpen ? 'hidden' : ''}`}
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                            </button>
                        </div>
                        <div className={`lg:flex lg:w-auto lg:order-1 z-50 ${isMobileMenuOpen ? 'open-menu' : 'closed-menu'}`} id="mobile-menu-2">
                            <Link href="/" className="show-button-mobile  md:block lg:hidden xl:hidden">
                                <Image
                                    className='w-4/12 mt-16 pl-5'
                                    src="/logos/logo.png"
                                    alt="Delivery Pieon"
                                    width={210}
                                    height={114}
                                />
                            </Link>
                            <nav className='mobile-navigation'>
                                <button
                                    onClick={toggleMobileMenu}
                                    className="inline-flex items-center p-2 ml-1 text-sm text-gray-500  lg:hidden hover:bg-gray-100 focus:outline-none dark:text-gray-400 dark:focus:ring-gray-600 absolute border rounded-[50%] border-solid border-[black] right-5 top-[25px]"
                                    aria-controls="mobile-menu-2"
                                    aria-expanded="false"
                                >
                                    <svg
                                        className="text-black w-6 h-6"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        ></path>
                                    </svg>
                                </button>
                                <div className="flex mobile-padding">
                                    {menuItems.map((menuItem, index) => (
                                        <div key={index} className={`main-menu  relative leading-[45px] xl:border-b-[transparent] lg:border-b-[transparent] md:border-b-[#00000030] border-b-[#00000030]  border-b border-solid ${pathName === menuItem.href ? 'active text-[#C22727]' : ''}`}>
                                            <Link className={`pt-3 pb-3 pl-5 pr-3 after:content-[''] after:absolute after:h-0.5 after:w-auto after:transition-[0.4s] after:duration-[all] after:left-[18px] after:right-2.5 after:bottom-[-4px] xl:text-[19px] lg:text-[15px] md:text-[15px] text-[15px] ${pathName === menuItem.href ? 'font-medium after:bg-[#c22727]' : 'font-normal'}`} href={menuItem.href} onClick={handleMenuItemClick}>{menuItem.title}</Link>
                                        </div>
                                    ))}
                                </div>
                            </nav>
                        </div>
                    </div>
                </nav>
                <span className='font-medium rounded-lg text-sm py-2 mr-2 show-button-mobile z-0'>
                    <Dropdown options={options}></Dropdown>
                </span>
            </div>
            {isOpen && (
                <Login togglePopup={Popuptoggle} />
            )}
        </header>
    )
}


