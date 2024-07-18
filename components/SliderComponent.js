import React from "react";
import Slider from "react-slick";
import Card from "./Card";
import NextArrow from "./NextArrow";
import PreviousArrow from "./PreviousArrow";
import { useTranslation } from "next-i18next";



const SliderComponent = () => {
  const { t } = useTranslation();
  const imagesArray = [
    { src: "/1.png", alt: t(' RealEstate') },
    { src: "/2.png", alt: t(' Cars') },
    { src: "/3.png", alt: t(' Yachts') },
    { src: "/4.png", alt: t(' Watches') },
    { src: "/5.png", alt: t(' Jets') },
    { src: "/6.png", alt: t('PrivateIslands') },
    { src: "/7.png", alt: t(' Diamonds') },
    { src: "/8.png", alt: t('TravelTheWorld') },
  ];
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <NextArrow />,
    prevArrow: <PreviousArrow />,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          
        },
      },
    ],
  };

  return (
    <div className="relative px-4 md:px-[40px] 2xl:px-[60px]">
      <Slider {...settings}>
        {imagesArray.map((img, index) => (
          <div key={index} className="px-6 max-w-[466px]">
            <Card key={index} img={img} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderComponent;