import React from 'react';
import axios from 'axios';
import { SiRazorpay } from "react-icons/si";
import Image from 'next/image';

export const Payment = () => {
  const handlePayment = async () => {
    try {
      const response = await axios.post('YOUR_RAZORPAY_ORDER_API_ENDPOINT', {
        amount: 50000,
        currency: 'INR',
        receipt: 'receipt#1',
        payment_capture: 1,
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Basic ' + btoa('YOUR_KEY_ID' + ':' + 'YOUR_KEY_SECRET'),
        }
      });

      console.log(response.data);


      window.location = response.data.notes.redirect_url;
    } catch (error) {
      console.error('Razorpay Error:', error);
    }
  };

  return (
    <div>
      <button onClick={handlePayment}>
        <Image
          className='w-[150px]'
          src="/images/Razorpay_logo.png"
          alt="Razorpay"
          width={300}
          height={200}
        />
      </button>
    </div>
  );
};

