import React from 'react'
import { CheckoutForm } from './CheckoutForm'
import { OrderBanner } from './OrderBanner'

const page = () => {
  return (
    <>
    <OrderBanner />
    <CheckoutForm />
    </>
  )
}

export default page