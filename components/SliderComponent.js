import React from "react";
import Slider from "react-slick";
import Card from "./Card";
import NextArrow from "./NextArrow";
import PreviousArrow from "./PreviousArrow";

const imagesArray = [
  { src: "/1.png", alt: "Real Estate " },
  { src: "/2.png", alt: " Cars " },
  { src: "/3.png", alt: "Yachts" },
  { src: "/4.png", alt: "Watches " },
  { src: "/5.png", alt: "Jets " },
  { src: "/6.png", alt: "Private Islands" },
  { src: "/7.png", alt: "Diamonds" },
  { src: "/8.png", alt: "Travel The World" },
];

const SliderComponent = () => {
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
