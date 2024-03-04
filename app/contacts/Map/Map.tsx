"use client"
import { GridBox } from '@/components/GridBox'
import React from 'react'
import { Form } from '../Form'
import { Paragraph } from '@/components/Paragraph'

export const Map = () => {

    return (
        <div className='font-poppins py-10 container xl:px-0 lg:px-0 md:px-6 px-6'>
            <GridBox columns={2} tablet={1} desktop={2} laptop={2} gap={10} className='items-center shadow-[rgba(149,157,165,0.2)_0px_8px_24px] rounded-t-3xl rounded-b-3xl xl:p-10 lg:p-10 md:p-10 p-4'>
                <GridBox.GridItem columnMerge={1} className='my-5'>
                    <h2 className='xl:leading-[60px] lg:leading-[60px] md:leading-[45px] leading-[45px] xl:text-[50px] lg:text-[50px] md:text-[40px] text-[40px] text-[#363636] font-semibold'>Get in touch</h2>
                    <Paragraph wrap="balance" padding="py4" color="primary" font="lg" >In case of any queries about our courier delivery services and terms and conditions, kindly get in touch with our team at Delivery Pigeon at support@deliverypigeon.in</Paragraph>
                    <Form />
                </GridBox.GridItem>
                <GridBox.GridItem columnMerge={1} className='my-5'>
                    <iframe className='h-dvh'
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117925.21689582619!2d88.26494964376381!3d22.53556493830009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f882db4908f667%3A0x43e330e68f6c2cbc!2sKolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1708427975177!5m2!1sen!2sin"
                        width="100%"
                        style={{ border: 0 }}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </GridBox.GridItem>
            </GridBox>
        </div>
    )
}

