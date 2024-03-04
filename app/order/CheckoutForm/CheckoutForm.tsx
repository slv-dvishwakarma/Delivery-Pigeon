"use client"
import { GridBox } from '@/components/GridBox'
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { FiGift } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import PickupForm from './PickupForm';
import ProductSelection from './ProductSelection';
import { MdOutlinePayment } from "react-icons/md";
import Tabs from '../Payment/Tabs';

export const CheckoutForm = () => {

    const [formData, setFormData] = useState({});

    const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(formData);
    };

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <div className='container xl:px-0 lg:px-0 md:px-6 px-6 mb-10'>
            <form className="checkout-form" onSubmit={handleFormSubmit}>
                <GridBox columns={3} tablet={1}  gap={6} desktop={3} laptop={3} className='pt-[40px] md:gap-0 lg:gap-6 xl:gap-10'>
                    <GridBox.GridItem columnMerge={2}>
                        <GridBox columns={1} gap={1} className='shadow-[rgba(17,17,26,0.05)_0px_1px_0px,rgba(17,17,26,0.1)_0px_0px_8px] rounded-t-3xl rounded-b-3xl p-[30px]'>
                            <GridBox.GridItem columnMerge={1}>
                                <div className='flex items-center text-xl text-[#005aab] font-semibold mb-0 pt-1'><span className='pr-2'><FiGift /></span><h3>Pickup Point</h3></div>
                                <GridBox columns={2} gap={5}>
                                    <GridBox.GridItem columnMerge={1} className="form-group">
                                        <input
                                            type="text"
                                            className="w-full text-sm leading-normal text-[#495057] bg-white bg-clip-padding border  px-3 py-1.5 border-solid border-[#ced4da] h-[50px] rounded-[10px] placeholder:text-[15px] mt-2.5"
                                            placeholder="Address"
                                            autoComplete="off"
                                            onChange={handleInputChange}
                                        />
                                    </GridBox.GridItem>
                                    <GridBox.GridItem columnMerge={1} className="form-group">
                                        <input
                                            type="text"
                                            className="w-full text-sm leading-normal text-[#495057] bg-white bg-clip-padding border  px-3 py-1.5 border-solid border-[#ced4da] h-[50px] rounded-[10px] placeholder:text-[15px] mt-2.5"
                                            placeholder="Flat, Floor, Building Name"
                                            name="pickup_flatname"
                                            onChange={handleInputChange}
                                        />
                                    </GridBox.GridItem>
                                    <GridBox.GridItem className="form-group">
                                        <input
                                            type="text"
                                            className="w-full text-sm leading-normal text-[#495057] bg-white bg-clip-padding border  px-3 py-1.5 border-solid border-[#ced4da] h-[50px] rounded-[10px] placeholder:text-[15px] mt-2.5"
                                            placeholder="Note: apartment, office, shop, etc (Optional)"
                                            name="pickup_note"
                                            onChange={handleInputChange}
                                        />
                                    </GridBox.GridItem>
                                    <GridBox.GridItem className="form-group">
                                        <input
                                            type="text"
                                            className="w-full text-sm leading-normal text-[#495057] bg-white bg-clip-padding border  px-3 py-1.5 border-solid border-[#ced4da] h-[50px] rounded-[10px] placeholder:text-[15px] mt-2.5"
                                            placeholder="How to reach (Optional)"
                                            name="pickup_reachaddress_note"
                                            onChange={handleInputChange}
                                        />
                                    </GridBox.GridItem>
                                </GridBox>
                                <div className="form-group mt-2 mb-2">
                                    <label className='text-md'>Phone</label>
                                    <div className="flex items-center text-sm leading-normal text-[#495057] bg-white bg-clip-padding border px-3 border-solid border-[#ced4da] h-[50px] rounded-[10px] placeholder:text-[15px] mt-2.5">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text pl-2 pr-4 border-r-[#ced4da] border-r border-solid">+91</span>
                                        </div>
                                        <input
                                            type="text"
                                            className="w-full h-[48px] border-solid border-[#ced4da]"
                                            placeholder=""
                                            id="pickup_phone"
                                            name="pickup_phone"
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </div>
                                <div className="form-group mt-3">
                                    <label className='text-md'>When to arrive at this place</label>
                                    <PickupForm />
                                </div>
                            </GridBox.GridItem>
                        </GridBox>
                        <GridBox columns={1} gap={1} className='shadow-[rgba(17,17,26,0.05)_0px_1px_0px,rgba(17,17,26,0.1)_0px_0px_8px] rounded-t-3xl rounded-b-3xl p-[30px] mt-10'>
                            <GridBox.GridItem columnMerge={1}>
                                <div className='flex items-center text-xl text-[#005aab] font-semibold mb-0 pt-1'><span className='pr-2'><IoLocationOutline /></span><h3>Delivery Point</h3></div>
                                <GridBox columns={2} gap={5}>
                                    <GridBox.GridItem columnMerge={1} className="form-group">
                                        <input
                                            type="text"
                                            className="w-full text-sm leading-normal text-[#495057] bg-white bg-clip-padding border px-3 py-1.5 border-solid border-[#ced4da] h-[50px] rounded-[10px] placeholder:text-[15px] mt-2.5"
                                            placeholder="Address-2"
                                            autoComplete="off"
                                            onChange={handleInputChange}
                                        />
                                    </GridBox.GridItem>
                                    <GridBox.GridItem columnMerge={1} className="form-group">
                                        <input
                                            type="text"
                                            className="w-full text-sm leading-normal text-[#495057] bg-white bg-clip-padding border px-3 py-1.5 border-solid border-[#ced4da] h-[50px] rounded-[10px] placeholder:text-[15px] mt-2.5"
                                            placeholder="Flat, Floor, Building Name"
                                            name="pickup_flatname-2"
                                            onChange={handleInputChange}
                                        />
                                    </GridBox.GridItem>
                                    <GridBox.GridItem className="form-group">
                                        <input
                                            type="text"
                                            className="w-full text-sm leading-normal text-[#495057] bg-white bg-clip-padding border px-3 py-1.5 border-solid border-[#ced4da] h-[50px] rounded-[10px] placeholder:text-[15px] mt-2.5"
                                            placeholder="Note: apartment, office, shop, etc (Optional)"
                                            name="pickup_note-2"
                                            onChange={handleInputChange}
                                        />
                                    </GridBox.GridItem>
                                    <GridBox.GridItem className="form-group">
                                        <input
                                            type="text"
                                            className="w-full text-sm leading-normal text-[#495057] bg-white bg-clip-padding border px-3 py-1.5 border-solid border-[#ced4da] h-[50px] rounded-[10px] placeholder:text-[15px] mt-2.5"
                                            placeholder="How to reach (Optional)"
                                            name="pickup_reachaddress_note-2"
                                            onChange={handleInputChange}
                                        />
                                    </GridBox.GridItem>
                                </GridBox>
                                <div className="form-group mt-2 mb-2">
                                    <label className='text-md'>Phone</label>
                                    <div className="flex items-center text-sm leading-normal text-[#495057] bg-white bg-clip-padding border px-3 border-solid border-[#ced4da] h-[50px] rounded-[10px] placeholder:text-[15px] mt-2.5">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text pl-2 pr-4 border-r-[#ced4da] border-r border-solid">+91</span>
                                        </div>
                                        <input
                                            type="text"
                                            className="w-full h-[48px] border-solid border-[#ced4da]"
                                            placeholder=""
                                            id="pickup_phone-2"
                                            name="pickup_phone"
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </div>
                            </GridBox.GridItem>
                        </GridBox>
                        <GridBox columns={1} gap={1} className='shadow-[rgba(17,17,26,0.05)_0px_1px_0px,rgba(17,17,26,0.1)_0px_0px_8px] rounded-t-3xl rounded-b-3xl p-[30px] mt-10'>
                            <GridBox.GridItem columnMerge={1}>
                                <ProductSelection />
                            </GridBox.GridItem>
                        </GridBox>

                    </GridBox.GridItem>
                    <GridBox.GridItem columnMerge={1} className='md:mt-8 margin-md lg:mt-0 xl:mt-0'>
                        <GridBox columns={1} className='shadow-[rgba(17,17,26,0.05)_0px_1px_0px,rgba(17,17,26,0.1)_0px_0px_8px] rounded-t-3xl rounded-b-3xl p-[30px] sticky top-4'>
                            <GridBox.GridItem columnMerge={1} className='promocode'>
                                <label className='text-md'>Promo Code</label>
                                <div className=''>
                                    <input
                                        type="text"
                                        className="w-full text-sm leading-normal text-[#495057] bg-white bg-clip-padding border px-3 py-1.5 border-solid border-[#ced4da] h-[50px] rounded-[10px] placeholder:text-[15px] mt-2.5"
                                        placeholder="Code"
                                        autoComplete="off"
                                        name="code"
                                        onChange={handleInputChange}
                                    />
                                    <button type='button' className='bg-[#005AAB] text-[white] w-full mx-0 my-5 p-2.5 rounded-[10px]'>Apply</button>
                                </div>
                            </GridBox.GridItem>
                            <GridBox.GridItem columnMerge={1}>
                                <div className='instruction'>
                                    <label className='text-md'>Add special instruction</label>
                                    <textarea placeholder='Add instruction' id="w3review" name="w3review" className='w-full text-sm leading-normal text-[#495057] bg-white bg-clip-padding border px-3 py-1.5 border-solid border-[#ced4da] rounded-[10px] placeholder:text-[15px] h-[100px] mt-2'>
                                    </textarea>
                                </div>
                                <div className='total-price mt-5 mb-5 flex border items-center p-[11px] border-solid border-[#005AAB]'>
                                    <label className='text-xl text-[#005aab] font-semibold mb-0 pt-1 w-9/12'>Total Amount </label>
                                    <span className='text-xl text-[#C43435] font-semibold mb-0 pt-1 w-3/12 text-right'> $50</span>
                                </div>
                                <div className='payment-type mt-5'>
                                    <div className='flex items-center text-xl text-[#005aab] font-semibold mb-0 pt-1'><span className='pr-2'><MdOutlinePayment /></span><h3>Payment Method</h3></div>
                                    <Tabs />
                                </div>
                                <button type='submit' className='border-2 border-solid border-[#005AAB] bg-[#005AAB] text-[white] w-full mx-0 my-5 p-2.5 rounded-[10px] hover:bg-transparent hover:text-[#005AAB] mt-10'>Confirm Order</button>
                            </GridBox.GridItem>
                        </GridBox>
                    </GridBox.GridItem>
                </GridBox>
            </form>
        </div>
    )
}