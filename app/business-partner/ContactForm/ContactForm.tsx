"use client"
import { GridBox } from '@/components/GridBox';
import React, { useState } from 'react';

export const ContactForm = () => {
    const initialFormData = {
        name: '',
        email: '',
        phone: '',
        delivery: '',
        message: '',
    };

    const [formData, setFormData] = useState(initialFormData);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData);
        setFormData(initialFormData);
    };

    return (
        <form onSubmit={handleSubmit} className="">
            <GridBox columns={2} gap={3}>
                <GridBox.GridItem>
            <div className="mb-4">
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder='Full Name'
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full text-sm leading-normal text-[#495057] bg-white bg-clip-padding border rounded px-3 py-1.5 border-solid border-[#ced4da] h-[50px] rounded-[10px] placeholder:text-[15px] mt-2.5"
                    required
                />
            </div>
            </GridBox.GridItem>
            <GridBox.GridItem>
            <div className="mb-4">
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder='Email'
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full text-sm leading-normal text-[#495057] bg-white bg-clip-padding border rounded px-3 py-1.5 border-solid border-[#ced4da] h-[50px] rounded-[10px] placeholder:text-[15px] mt-2.5"
                    required
                />
            </div>
            </GridBox.GridItem>
            </GridBox>
            <div className="mb-4">
                <input
                    type="text"
                    id="phone"
                    name="phone"
                    placeholder='Phone'
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full text-sm leading-normal text-[#495057] bg-white bg-clip-padding border rounded px-3 py-1.5 border-solid border-[#ced4da] h-[50px] rounded-[10px] placeholder:text-[15px] mt-2.5"
                    required
                />
            </div>
            <div className="mb-4">
                <select
                    id="delivery"
                    name="delivery"
                    value={formData.delivery}
                    onChange={handleChange}
                    className="form-control w-full h-[calc(46px_+_2px)] text-base leading-normal text-[#495057] bg-white bg-clip-padding border px-3 py-1.5 rounded-lg border-solid border-[#ced4da]"
                >
                    <option value="">Select approximate deliveries / month</option>
                    <option value="Upto 15 deliveries / month">Upto 15 deliveries / month</option>
                    <option value="15-30 deliveries / month">15-30 deliveries / month</option>
                    <option value="31-60 deliveries / month">31-60 deliveries / month</option>
                    <option value="61-100 deliveries / month">61-100 deliveries / month</option>
                    <option value="101-150 deliveries / month">101-150 deliveries / month</option>
                    <option value="151-200 deliveries / month">151-200 deliveries / month</option>
                    <option value="More than 200 deliveries / month">More than 200 deliveries / month</option>
                </select>
            </div>
            <div className="mb-4">
                <textarea
                    id="message"
                    name="message"
                    placeholder='Message'
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full text-sm leading-normal text-[#495057] bg-white bg-clip-padding border rounded px-3 py-1.5 border-solid border-[#ced4da] h-[100px] rounded-[10px] placeholder:text-[15px] mt-2.5 h-[250px]"
                    rows={4}
                    required
                />
            </div>
            <button type="submit" className="w-full dark:text-white font-medium rounded-lg text-sm lg:px-5 py-2 lg:py-2.5 focus:outline-none button-1 bg-[#005AAB]">
                Submit Application
            </button>
        </form>
    );
};
