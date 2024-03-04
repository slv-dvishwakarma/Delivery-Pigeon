import React from 'react'
import { GridBox } from '@/components/GridBox'
import { Clients } from '../Clients'
import Image from "next/image";
import { Paragraph } from '@/components/Paragraph';

export const Service = () => {
    return (
        <div>
            <div className='bg-[url("https://bslthemes.com/html/quickeat/assets/img/background-1.png")] bg-center bg-cover bg-no-repeat'>
                <div className='container xl:px-0 lg:px-0 md:px-6 px-6 pt-20 pb-20'>
                <h2 className='xl:leading-[60px] lg:leading-[60px] md:leading-[45px] leading-[45px] xl:text-[50px] lg:text-[50px] md:text-[40px] text-[40px] text-[#363636] font-semibold text-center'>Delivery Pigeon at your service!</h2>
                <Paragraph wrap="balance" padding="py4" color="primary" font="lg" align='center' className='xl:w-[90%] lg:w-[90%] xl:m-auto lg:m-auto' >Our team at Delivery Pigeon is committed to revolutionsing the logistics industry by providing fast and precision level service to one and all.</Paragraph>
                    <GridBox columns={2} gap={2} tablet={1} laptop={2} desktop={2} className='items-center'>
                        <GridBox.GridItem columnMerge={1}>
                            <Image
                                className='app-store'
                                src="/images/delivery-pigeon.png"
                                alt="Description of the image"
                                width={2000}
                                height={2000}
                            />
                        </GridBox.GridItem>
                        <GridBox.GridItem columnMerge={1}>  
                        <Paragraph wrap="balance" color="primary" font='lg' className='text-[15px]' >We believe in using tech to better serve humanity and make it easy to deliver couriers and packages from one place to another.</Paragraph>
                        <Paragraph wrap="balance" color="primary" font='lg' className='text-[15px] mt-4' >Apart from being committed to improving delivery services, we also believe in helping create an economy where jobs are easily available and appropriate pay is at easy reach for one and all. We employ delivery agents who are highly trained and equipped with the right skills when working on the road. Apart from our delivery agents, we also employ the services of experienced professionals who make it easy for customers and agents to appropriately order and deliver packages as and when an order is placed.</Paragraph>
                        <Paragraph wrap="balance" color="primary" font='lg' className='text-[15px] mt-4' >For businesses that are looking to hire professionals for the delivery of their business packages, we offer special services to organizations. These services are customized in order to suit the needs of the business organization and their delivery standards.</Paragraph>
                        <Paragraph wrap="balance" color="primary" font='lg' className='text-[15px] mt-4' >Delivery Pigeon has a dedicated app for customers looking to place an order for delivery and a separate app for the delivery agents and providers. Both of the apps are monitored for bugs and issues by trained staff members, who help in providing a seamless service to browsers. Our apps are highly secure and adheres to the security norms in the country.</Paragraph>
                        </GridBox.GridItem>
                    </GridBox>
                </div>
            </div>
            <div className='bg-[url(/images/business-people-shaking-hands-together.jpg)] bg-cover bg-fixed bg-center bg-no-repeat'>
                <Clients />
            </div>
        </div>
    )
}

export default Service