import React from 'react'
import SimpleSlider from '../Slider/SimpleSlider';

export const Clients = () => {


  return (
    <section className="container px-6">
      <div className="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
        <h2 className="xl:leading-[60px] lg:leading-[60px] md:leading-[45px] leading-[45px] xl:text-[50px] lg:text-[50px] md:text-[40px] text-[40px] font-semibold text-white pb-8 text-center">Our Clients</h2>
        <SimpleSlider />
      </div>
    </section>
  )
}
