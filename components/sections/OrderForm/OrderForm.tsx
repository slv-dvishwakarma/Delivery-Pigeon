"use client"
import React, { useState } from 'react';
import { Formik, Form, Field, FormikValues } from 'formik';
import { CiLocationOn } from "react-icons/ci";

export const OrderForm = () => {
  const [pickupAddress, setPickupAddress] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [pickupSuggestions, setPickupSuggestions] = useState<string[]>([]);
  const [deliverySuggestions, setDeliverySuggestions] = useState<string[]>([]);

  const handlePickupAddressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setPickupAddress(value);

    if (value.length >= 1) {

      const filteredSuggestions = cityNames.filter(city =>
        city.toLowerCase().startsWith(value.toLowerCase())
      );
      setPickupSuggestions(filteredSuggestions);
    } else {
      setPickupSuggestions([]);
    }
  };

  const handleDeliveryAddressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setDeliveryAddress(value);

    if (value.length >= 1) {
  
      const filteredSuggestions = cityNames.filter(city =>
        city.toLowerCase().startsWith(value.toLowerCase())
      );
      setDeliverySuggestions(filteredSuggestions);
    } else {
      setDeliverySuggestions([]);
    }
  };

  const handleSubmit = (values: any) => {
    console.log(values);
  };

  const handlePickupSuggestionClick = (suggestion: string) => {
    setPickupAddress(suggestion);
    setPickupSuggestions([]);
  };

  const handleDeliverySuggestionClick = (suggestion: string) => {
    setDeliveryAddress(suggestion);
    setDeliverySuggestions([]); 
  };

  return (
    <div className='bg-[#FCFCFC] px-0 py-10'>
      <div className='container xl:px-0 lg:px-0 md:px-6 px-6'>
        <h2 className='text-center text-2xl font-normal text-[#363636] leading-[40px] mb-6 w-full'>Place hassle-free orders for grocery or parcel delivery without sign-up and extra charges</h2>
        <Formik initialValues={{ pickupAddress: '', deliveryAddress: '' }} onSubmit={handleSubmit}>
          <Form className="bookForm flex md-flex">
            <div className="form-group sm:my-0 md:my-0 xl:my-0 lg:my-0 md:mx-0 lg:mx-0 xl:mx-o sm:mx-2.5 w-11/12 relative">
              <span className='input-border flex items-center  px-2.5 py-0 rounded-xl'>
                <CiLocationOn className='text-theme-primary text-2xl' />
                <Field
                  type="text"
                  name="pickupAddress"
                  className="form-control pac-target-input py-4 px-2.5 w-full focus:outline-none"
                  placeholder="Pick up Address"
                  required
                  autoComplete="off"
                  value={pickupAddress}
                  onChange={handlePickupAddressChange}
                />
              </span>
          
              {pickupSuggestions.length > 0 && (
                <ul className='absolute w-full bg-[white] p-2.5'>
                  {pickupSuggestions.map((suggestion, index) => (
                    <li key={index} onClick={() => handlePickupSuggestionClick(suggestion)}>
                      {suggestion}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="form-group md:my-0 xl:my-0 lg:my-0 md:mx-3 lg:mx-3 xl:mx-3 my-2.5 w-11/12 relative">
              <span className='input-border flex items-center rounded-xl py-0 px-2.5'>
                <CiLocationOn className='text-theme-primary text-2xl' />
                <Field
                  type="text"
                  name="deliveryAddress"
                  className="form-control pac-target-input py-4 px-2.5 w-full focus:outline-none"
                  placeholder="Delivery Address"
                  required
                  autoComplete="off"
                  value={deliveryAddress}
                  onChange={handleDeliveryAddressChange}
                />
              </span>
             
              {deliverySuggestions.length > 0 && (
                <ul className='absolute w-full bg-[white] p-2.5'>
                  {deliverySuggestions.map((suggestion, index) => (
                    <li key={index} onClick={() => handleDeliverySuggestionClick(suggestion)}>
                      {suggestion}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <button type="submit" className="btn bookBtn button-2 md:text-sm lg:text-xl xl:text-xl font-semibold bg-theme-primary">Book an Order</button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

const cityNames = ["Argari","Amodghata","Andul","Ankurhati","Babanpur","Balarampota","Balarampur","Balibhara","Bamunari","Bandipur","Bankra","Banupur","Bara Khejuria","Barrackpur Cantonment(CB)","Bhandardaha","Bipra Noapara","Budge Budge","Chak Banshberia","Chak Srikrishna (OG) (Ward No. 29)","Chak Srikrishna (OG) (Ward No. 30)","Chakapara","Chakla","Chamrail","Chandpur","Chata Kalikapur","Dakshin Jhapardaha","Dakshin Rajyadharpur","Dharmapur","Dhuilya","Domjur","Eksara","Garshyamnagar","Garulia","Gayespur","Hatgachha","Ichhapur Defence Estate","Jafarpur","Jagadishpur","Jaypur Bil","Jetia","Jhorhat","Joka","Kamranga","Kanaipur","Kantlia","Kaugachhi","Keota (P)","Khalia","Khalisani","Khantora","Kodalia","Konnagar","Kulihanda","Mahiari","Makardaha","Manikpur","Muragachha","Nabadiganta Industrial Township","Nabagram Colony","Naldanga","Nalpur","Nanna","New Barrackpur","Nibra","Nischintapur","Noapara (P)","Panchpara","Panpur","Patulia","Podara","Pujali","Raghudebbati","Raghunathpur (PS-Dankuni)","Raigachhi","Ramchandrapur","Rishra","Ruiya","Salap","Sankrail","Santoshpur","Sarenga","Shankhanagar","Simla","Srotribati","Talbandha","Teghari","Tentulkuli","Uttar Pirpur","Uttar Raypur"];
