"use client"
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

export default function SimpleSlider() {

  const logos = [
    "/logos/1.png",
    "/logos/2.png",
    "/logos/3.png",
    "/logos/4.png",
    "/logos/5.png",
    "/logos/6.png",
    "/logos/7.png"
  ];

  var settings = {
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true
        }
      }
    ]
  };
  return (
    <Slider className="custom-slick-slider" {...settings}>
          {logos.map((logo, index) => ( 
            <div key={index} className="h-[150px] p-5">
              <div key={index} className='bg-white rounded-xl'>
              <Image
                className='m-auto h-[130px] object-contain object-center p-5'
                src={logo} 
                alt={`Client ${index + 1}`}
                width={150 * 2}
                height={154 * 2}
              />
              </div>
              </div>
          ))}
    </Slider>
  );
}