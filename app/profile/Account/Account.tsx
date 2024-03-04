"use client"
import { GridBox } from '@/components/GridBox'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { IoIosSpeedometer, IoMdHelpCircle } from "react-icons/io";
import { FaCartArrowDown, FaUser} from "react-icons/fa";
import { LuLogOut } from "react-icons/lu";
import { RxCross2 } from 'react-icons/rx';
import { useRouter } from 'next/navigation'
import { DasboardTab } from '../DasboardTab';
import { OrderTab } from '../OrderTab';
import { ProfileTab } from '../ProfileTab';
import { HelpTab } from '../HelpTab';

export const Account = () => {

  useEffect(() => {
    if (typeof window !== 'undefined' && !sessionStorage.getItem('loggedIn')) {
        router.push('/');
    }
}, []);

  const router = useRouter()
  const [activeTab, setActiveTab] = useState('Dashboard');
  const [isOpen, setIsOpen] = useState(false);

  const CrossPopup = () => {
    setIsOpen(!isOpen);
  };

  const logoutPopup = () => {
    setIsOpen(true);
  };

  const handleLogout = () => {
    sessionStorage.removeItem('loggedIn');
    router.push('/');
};
  const menuItems = [
    { label: "Dashboard", icon: IoIosSpeedometer, tab: "Dashboard", page: DasboardTab},
    { label: "My Order", icon: FaCartArrowDown, tab: "Order", page: OrderTab },
    { label: "Profile", icon: FaUser, tab: "Profile", page: ProfileTab },
    { label: "Help", icon: IoMdHelpCircle, tab: "Help", page: HelpTab }
  ];

  type Tab = string;

  const handleTabClick = (tab: Tab) => {
    setActiveTab(tab);
  };

  return (
    <div className='container xl:px-0 lg:px-0 md:px-6 px-6 pt-[40px] mb-20'>
      <GridBox columns={4} gap={8} tablet={5} desktop={4} laptop={4}>
        <GridBox.GridItem columnMerge={1} colMargeTablet={2} colMargeDesktop={1} colMargeLaptop={1} className="rounded-[10px] px-0 py-2.5 shadow-[rgba(17,17,26,0.05)_0px_1px_0px,rgba(17,17,26,0.1)_0px_0px_8px]">
          <GridBox columns={3} gap={3} className='items-center bg-white sm-md-flex border-b-[#00000021] border-b border-solid px-5 py-3'>
            <GridBox.GridItem columnMerge={1}>
              <Image
                className='m-auto w-[100px] xl:w-[150px] lg:w-[150px]'
                src="/images/user-profile.png"
                alt="Description of the image"
                width={150}
                height={151}
              />
            </GridBox.GridItem>
            <GridBox.GridItem columnMerge={2} >
              <h3 className='text-lg font-semibold'>John Doe</h3>
              <h6 className='text-[13px] font-normal text-[#333030]'>john@gmail.com</h6>
            </GridBox.GridItem>
          </GridBox>
          <div className='profile-menu-item'>
            <div className='block bg-white pt-2.5 pb-0 px-0'>
              {menuItems.map((item, index) => (
                  <div key={index} className={`focus:outline-none cursor-pointer  text-md font-[500] flex items-center border-b-[#00000021] border-b border-solid px-5 py-[14px] ${activeTab === item.tab ? 'text-[#005AAB]' : 'text-[#333030]'}`} onClick={() => handleTabClick(item.tab)}>
                  <span className={`pr-4 text-[20px] ${activeTab === item.tab ? 'text-[#005AAB]' : 'text-[#ADADAD]'}`}>{<item.icon />}</span>
                  <span>{item.label}</span>
                </div>
              ))}
              <div className='focus:outline-none cursor-pointer  text-md font-[500] flex items-center px-5 py-[14px] text-[#333030]' onClick={logoutPopup}><span className='pr-3 text-[20px] text-[#ADADAD]'><LuLogOut /></span><span>Logout</span></div>
            </div>
          </div>
        </GridBox.GridItem>
        <GridBox.GridItem columnMerge={3} colMargeTablet={3} colMargeDesktop={3} colMargeLaptop={3} className='md:ml-0 xl:ml-0 lg:ml-8 md:mt-[0px]  mt-[35px] xl:mt-[opx] lg:mt-[0px] shadow-[0px_0px_55px_rgba(0,0,0,0.03)] rounded-[10px] p-[30px]'>
        {menuItems.map((item, index) => (
          activeTab ===  item.tab && <div key={index}>{<item.page />}</div>
          ))}
        </GridBox.GridItem>
      </GridBox>
      {isOpen && (
        <div className="fixed inset-0 overflow-y-auto z-[999] bg-[#00000096]">
          <div className="flex items-center justify-center min-h-screen">
            <div className="relative bg-white w-100 mx-auto shadow-lg rounded-[20px]">
              <div className='p-6 items-center border-b-[#e9ecef] border-b border-solid flex justify-between'>
                <div>
                  <h2 className='font-medium text-xl'>Logout</h2>
                </div>
                <div >
                  <button className="p-2 text-xl" onClick={CrossPopup}>
                    <RxCross2 />
                  </button>
                </div>
              </div>
              <div className="pl-6 pr-6 pt-5 pb-6">
                <p>Are You Sure you want to logout</p>
                <button className='border-2 border-solid border-[#005AAB] bg-[#005AAB] text-[white] w-full mx-0 my-5 p-2.5 rounded-[10px] hover:bg-transparent hover:text-[#005AAB] mt-4' onClick={handleLogout}>Log Out</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div >
  )
}
