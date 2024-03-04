import React from 'react'
import { BusinessBanner } from './BusinessBanner'
import { Courier } from './Courier'
import { Steps } from './Steps'
import { WhyBusiness } from './WhyBusiness'
import { AboutDelivery } from './AboutDelivery'
import { Contact } from './Contact/Contact'
import { ClientSay } from './ClientSay'

const page = () => {
  return (
    <>
    <BusinessBanner />
    <WhyBusiness /> 
    <Steps />
    <AboutDelivery />
    <Courier />
  <Contact />
  <ClientSay />
    </>
  )
}

export default page