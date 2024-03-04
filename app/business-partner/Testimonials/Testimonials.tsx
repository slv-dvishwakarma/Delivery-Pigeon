"use client"
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaQuoteLeft } from "react-icons/fa";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { Paragraph } from "@/components/Paragraph";


const PrevArrow: React.FC<any> = (props) => {
    const { className, style, onClick } = props;
    return (
      <div className={className} style={{ ...style, left: "-50px", zIndex: 1, display: "block", position: "absolute", top: "50%", transform: "translateY(-50%)", cursor: "pointer" }} onClick={onClick}>
        <IoIosArrowBack style={{ fontSize: "24px", color: "black" }} />
      </div>
    );
  };


  const NextArrow: React.FC<any> = (props) => {
    const { className, style, onClick } = props;
    return (
      <div className={className} style={{ ...style, right: "-50px", zIndex: 1, display: "block", position: "absolute", top: "50%", transform: "translateY(-50%)", cursor: "pointer" }} onClick={onClick}>
        <IoIosArrowForward style={{ fontSize: "24px", color: "black" }} />
      </div>
    );
  };

export default function Testimonials() {
    const logos = [
        {
            image: "/images/speaker-1.jpg",
            name: "Mr. Mukul Debnath",
            position: "Operational Manager",
            description: "Delivery Pigeon is a crucial part of our daily operations. Our products and supplies are critical to healthcare and medical facilities throughout the city. We have a full spectrum of needs in a delivery service – daily, weekly, monthly and special medical deliveries. They have been successfully managing our delivery services as a partner for the last few months. They have a great customer support system and we rely heavily on them. We have no problem recommending them to anyone.",
        },
        {
            image: "/images/speaker-2.jpg",
            name: "Mr. Sundar Bulsara",
            position: "Production Supervisor",
            description: "Delivery Pigeon move mail and eCommerce parcels for us 24/7. All our deliveries are time-sensitive and urgent status, and they have been successfully managing these for us. Their delivery network is very good, and the costs are affordable.",
        },
        {
            image: "/images/speaker-3.jpg",
            name: "Mr. N. Shetty",
            position: "Chief Executive Officer",
            description: "Delivery Pigeon has helped us a lot. They run our daily shipments, which are vital to our business - 365 days a year with no day-offs. These shipments, plus other daily hauls of materials, are essential in order for our operations to function. Their daily coordination and communication system is very good. They are very dedicated to their job. It's really a pleasure for us to bring their service in-house and they have truly been a trusted and reliable partner to us over the years.",
        },
    ];

    var settings = {
        infinite: true,
        speed: 500,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        responsive: [
            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 2,
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
        <Slider className="custom-slick-slider-testimonials" {...settings}>
            {logos.map((logo, index) => (
                <div key={index} className="p-3">
                    <div className="p-5 text-center bg-white h-[410px]">
                        <div className="mt-5">
                            <h5 className="text-lg font-semibold">{logo.name}</h5>
                            <h6 className="text-[13px] text-[#363636]">{logo.position}</h6>
                            <span className="text-[25px] w-[40px] h-[40px] flex justify-center bg-[#005AAB] text-[white] items-center mx-auto my-[9px] rounded-[50%]"><FaQuoteLeft /></span>
                            <Paragraph wrap="balance" color="primary" font='xs' className="leading-5 pb-5" >{logo.description}</Paragraph>
                        </div>
                    </div>
                </div>
            ))}
        </Slider>
    );
}
