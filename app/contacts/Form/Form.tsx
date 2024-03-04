import React, { useState } from 'react';
import { FaRegUser, FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";


export const Form = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log(formData);

        setFormData({ name: '', email: '', phone: '', address: '', message: '' });
    };

    return (
        <form className="contact-form" onSubmit={handleSubmit}>
            <div className='flex items-center bg-white border w-full text-[#cfcfcf] mx-0 my-[15px] rounded-[10px]'>
                <span className='pl-5 text-base'>
                    <FaRegUser />
                </span>
                <span className='w-full'>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className='text-[#cfcfcf] w-full h-[50px] pl-[12px] rounded-[10px] placeholder:text-[15px]'
                        placeholder='Full Name'
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </span>
            </div>
            <div className='flex items-center bg-white border w-full text-[#cfcfcf] mx-0 my-[15px] rounded-[10px]'>
                <span className='pl-5 text-base'>
                    <MdOutlineMail />
                </span>
                <span className='w-full'>
                    <input
                        type="email"
                        id="email"
                        placeholder='Email'
                        className='text-[#cfcfcf] w-full h-[50px] pl-[12px] rounded-[10px] placeholder:text-[15px]'
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </span>
            </div>
            <div className='flex items-center bg-white border w-full text-[#cfcfcf] mx-0 my-[15px] rounded-[10px]'>
                <span className='pl-5 text-base'>
                    <FaPhoneAlt />
                </span>
                <span className='w-full'>
                    <input
                        type="text"
                        id="phone"
                        placeholder='Phone'
                        className='text-[#cfcfcf] w-full h-[50px] pl-[12px] rounded-[10px] placeholder:text-[15px]'
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                </span>
            </div>
            <div className='flex items-center bg-white border w-full text-[#cfcfcf] mx-0 my-[15px] rounded-[10px]'>
                <span className='pl-5 text-2xl'>
                <IoLocationOutline />
                </span>
                <span className='w-full'>
                    <input
                        type="text"
                        id="address"
                        placeholder='Address'
                        className='text-[#cfcfcf] w-full h-[50px] pl-[12px] rounded-[10px] placeholder:text-[15px]'
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                    />
                </span>
            </div>
            <div className='flex items-center bg-white border w-full text-[#cfcfcf] mx-0 my-[15px] rounded-[10px]'>
                <textarea
                    id="message"
                    name="message"
                    className='w-full p-5 outline-none placeholder:text-[15px] placeholder:text-[#cfcfcf]'
                    placeholder='How can we serve you?'
                    value={formData.message}
                    onChange={handleChange}
                />
            </div>
            <button  className="submit-btn" type="submit">Submit</button>
        </form>
    );
};
