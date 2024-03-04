"use client"
import { Article } from '@/components/Article';
import { GridBox } from '@/components/GridBox'
import Link from 'next/link'
import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";


export const PrivacyPolicy = () => {
    return (
        <div>
            <div className='bg-[url(https://bslthemes.com/html/quickeat/assets/img/background-1.png)] bg-center bg-no-repeat bg-cover overflow-hidden relative font-poppins py-10'>
                <GridBox columns={1} gap={5} className='container pt-[100px] xl:px-0 lg:px-0 md:px-6 px-6'>
                    <GridBox.GridItem columnMerge={1} className=''>
                        <div className="about-text">
                            <div className="crumbs flex">
                                <div><Link className='text-[#023462]' href="/">Home</Link></div>
                                <div><Link href="/privacy-policy" className="flex items-center text-light-black"><span className='px-2 text-theme-primary' ><FaLongArrowAltRight /></span>Privacy Policy</Link></div>
                            </div>
                            <h1 className='xl:leading-[60px] lg:leading-[60px] md:leading-[45px] leading-[45px] xl:text-[42px] lg:text-[42px] md:text-[40px] text-[40px] text-[#005aabb5] font-normal capitalize pt-10'>Privacy Policy</h1>
                        </div>
                    </GridBox.GridItem>
                </GridBox>
            </div>
            <Article>
                <p>This page is used to inform visitors regarding our policies with the collection, use, and disclosure of Personal Information if anyone decided to use our Service.</p>
                <h3 >Information Collection and Use</h3>
                <p >We are fetching live location data from Google just to confirm the location as well as the status of the customers shipment. We will track the route through which our delivery partner is completing the order of our valuable customer. We will keep the data secure for our future use.</p>
                <p >When using the Delivery Pigeon application and website, we collect information about our users in order to better serve our clients and provide them with the best quality of service. We collect information pertaining to our site users when they create or edit their account information on our platform, place an order for delivery and contact our team for customer support of any kind. The information available with us include the details site users choose to disclose with us, such as their name, email id, postal code, profile photo as well as their delivery address.</p>
                <p >We believe in preserving the privacy of our users and as such, ensure that the data provided to us from our users’ end is stored in a secure and encrypted manner in order to avoid risks of a data breach. We take every possible measure to ensure that our customers and providers data is always safe and secure in our databases. We only use the information provided to improve our services and provide our clients with the ideal service when it comes to the delivery of packages.</p>
                <p >Based on orders placed, we also facilitate the communication process between a customer and a provider on our platform for the efficient delivery of packages. We will also provide the details of the respective Provider to the client, who can then communicate with the Provider to know more about the package to be delivered. For the customers who choose to opt in to receive promotional messages from our team, we will add them to our mailing list, where they will receive information about new offers, discounts and information about our offerings as a delivery service provider.</p>
                <p >We allow our users signing up to the Delivery Pigeon platform to make changes to their user information as and when they want. This can be done by logging in to one’s account accordingly. We also allow users to choose the options for which they would like to allow us access to their information. To opt-out of our promotional messages, users can personalize their account information provided with us accordingly.</p>
                <h3 >Log Data</h3>
                <p >We want to inform you that whenever you use our Service, in a case of an error in the app we collect data and information (through third party products) on your phone called Log Data. This Log Data may include information such as your device Internet Protocol (“IP”) address, device name, operating system version, the configuration of the app when utilizing our Service, the time and date of your use of the Service, and other statistics.</p>
                <h3 >Cookies</h3>
                <p >Cookies are files with a small amount of data that are commonly used as anonymous unique identifiers. These are sent to your browser from the websites that you visit and are stored on your device's internal memory.</p>
                <p >This Service does not use these “cookies” explicitly. However, the app may use third party code and libraries that use “cookies” to collect information and improve their services. You have the option to either accept or refuse these cookies and know when a cookie is being sent to your device. If you choose to refuse our cookies, you may not be able to use some portions of this Service.</p>
                <h3 >Service Providers</h3>
                <p >We may employ third-party companies and individuals due to the following reasons:</p>
                <ul >
                    <li>To facilitate our Service;</li>
                    <li>To provide the Service on our behalf;</li>
                    <li>To perform Service-related services; or</li>
                    <li>To assist us in analyzing how our Service is used.</li>
                </ul>
                <p >We want to inform users of this Service that these third parties have access to your Personal Information. The reason is to perform the tasks assigned to them on our behalf. However, they are obligated not to disclose or use the information for any other purpose.</p>
                <h3 >Security</h3>
                <p >We value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.</p>
                <h3 >Links to Other Sites</h3>
                <p >This Service may contain links to other sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by us. Therefore, we strongly advise you to review the Privacy Policy of these websites. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.</p>
                <h3 >Children’s Privacy</h3>
                <p >These Services do not address anyone under the age of 13. We do not knowingly collect personally identifiable information from children under 13. In the case we discover that a child under 13 has provided us with personal information, we immediately delete this from our servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us so that we will be able to do necessary actions.</p>
                <h3 >Unauthorized Use of the Site</h3>
                <p >Illegal and/or unauthorized uses of the Site and our mobile apps, including, but not limited to, unauthorized framing of or linking to the Site or unauthorized use of any robot, spider, or other automated device on the Site, will be investigated and subject to appropriate legal action, including, without limitation, civil, criminal, and injunctive redress.</p>
                <h3 >Payment Policy</h3>
                <p >The payment policy applies to all user payments. Cash on delivery and Credit/Debit cards are the only acceptable payment modes. We always accept bank transfer and Credit card & debit card payment through Razorpay Payment Gateway. Risk of credit & debit card is subjected to the Razorpay Payment Gateway that we use. Razorpay is one of the leading secured payment gateway in india</p>
                <h3>Changes to This Privacy Policy</h3>
                <p>We may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page.</p>
                </Article>
        </div>
    )
}