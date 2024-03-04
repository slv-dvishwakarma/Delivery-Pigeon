"use client"
import { Article } from '@/components/Article';
import { GridBox } from '@/components/GridBox'
import Link from 'next/link'
import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";

export const RefundPolicy = () => {
    return (
        <div>
            <div className='bg-[url(https://bslthemes.com/html/quickeat/assets/img/background-1.png)] bg-center bg-no-repeat bg-cover overflow-hidden relative font-poppins py-10'>
                <GridBox columns={1} gap={5} className='container pt-[100px] xl:px-0 lg:px-0 md:px-6 px-6'>
                    <GridBox.GridItem columnMerge={1} className=''>
                        <div className="about-text">
                            <div className="crumbs flex">
                                <div><Link className='text-[#023462]' href="/">Home</Link></div>
                                <div><Link href="/refund-policy" className="flex items-center text-light-black"><span className='px-2 text-theme-primary' ><FaLongArrowAltRight /></span>Refund Policy</Link></div>
                            </div>
                            <h1 className='xl:leading-[60px] lg:leading-[60px] md:leading-[45px] leading-[45px] xl:text-[42px] lg:text-[42px] md:text-[40px] text-[40px] text-[#005aabb5] font-normal capitalize pt-10'>Refund Policy</h1>
                        </div>
                    </GridBox.GridItem>
                </GridBox>
            </div>

            <Article>
                <h3>Cancellation By Customer:</h3>
                <p>As a general rule you shall not be entitled to cancel your order once you confirm the order and have received confirmation of the same from the Delivery Agent.If you cancel your order after it has been confirmed, Delivery Pigeon shall have a right to charge you cancellation fee of a minimum INR 20 upto the order value.</p>
                <h3>Cancellation By Delivery Pigeon:</h3>
                <p>Delivery Pigeon may cancel the transaction initiated by you on the Platform, if :</p>
                <ul>
                    <li>The designated address to avail the Delivery Pigeon Services provided by You is outside the service zone of Delivery Pigeon.</li>
                    <li>Failure to get your response via phone or any other communication channel at the time of confirmation of the order booking.</li>
                    <li>The transaction involves supply/delivery/purchase of any material good that is illegal, offensive or violative of the Terms of Use.</li>
                    <li>If the transaction involves the purchase of medicines for which a medical prescription prescribed by a medical practitioner is required and for which You have not provided such medical prescription or provided an invalid medical prescription.</li>
                    <li>Information, instructions and authorisations provided by You is not complete or sufficient to execute the transaction initiated by You on the Platform.</li>
                    <li>If a Delivery Partner is not available to perform the services, as may be requested.</li>
                    <li>If the transaction cannot be completed for reasons not in control of Delivery Pigeon.</li>
                </ul>
                <h3>Refund Policy:</h3>
                <p>You shall only be able to claim refunds for transactions initiated by You only if You have already pre-paid the fees with respect to such transaction. You shall be eligible to get the refund in the following circumstances :</p>
                <ul>
                    <li>Your package has been tampered or damaged at the time of delivery, as determined by Delivery Pigeon basis the parameters established by Delivery Pigeon in its sole discretion.</li>
                    <li>If the wrong Item has been delivered to You, which does not match with the Item for which You had initiated a transaction on the Platform.</li>
                    <li>Delivery Pigeon has cancelled the order because of any reason mentioned above.</li>
                </ul>
                <p>All decisions with respect to refunds will be at the sole discretion of Delivery Pigeon and in accordance with Delivery Pigeon’s internal refund policy and the same shall be final and binding. All refunds initiated by Delivery Pigeon shall be refunded to the financial source account from which, You have initiated the transaction on the Platform.</p>
            </Article>
        </div>
    )
}
