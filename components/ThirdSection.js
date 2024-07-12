// import React from 'react'

// const ThirdSection = () => {
//     const imagesArray = [
//         { src: "/1.png", alt: "Diamonds" },
//         { src: "/2.png", alt: "Private Islands" },
//         { src: "/3.png", alt: "Real Estate" },
//         { src: "/4.png", alt:"Cars" },
//         { src: "/5.png", alt: "Yachts" },
//         { src: "/6.png", alt: "Watches" },
//         { src: "/7.png", alt:"Jets" },
//         { src: "/8.png", alt: "Travel The World" },
//       ];
      
//       const settings = {
//         dots:false,
//         arrows: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 4,
//         slidesToScroll: 1,
//         initialSlide: 0,
//         nextArrow: <Nextarrow />,
//         prevArrow: <Prevarrow />,
//         responsive: [
//           {
//             breakpoint: 1024,
//             settings: {
//               slidesToShow: 3,
//               slidesToScroll: 3,
//               infinite: true,
//               dots: true,
//             },
//           },
//           {
//             breakpoint: 768,
//             settings: {
//               slidesToShow: 2,
//               slidesToScroll: 1,
//               initialSlide: 1,
//             },
//           },
//           {
//             breakpoint: 480,
//             settings: {
//               slidesToShow: 1,
//               slidesToScroll: 1,
//             },
//           },
//         ],
//       };
//       const containerRef = useRef();

//       const { scrollYProgress } = useScroll({
//         target: containerRef,
//         offset: ["start end", "center"],
//       });
    
//       const objectOne = useTransform(scrollYProgress, [0, 1], ["-600%", "0%"]);
//       const objectOneOpacity = useTransform(
//         scrollYProgress,
//         [0.5, 1],
//         ["2%", "100%"]
//       );
//       const objectTwo = useTransform(scrollYProgress, [0, 1], ["-100%", "0%"]);
    
//       const objectThree = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);
//   return (
//    <>

//    </>
//   )
// }

// export default ThirdSection




import React, { useEffect, useRef } from "react";
import SliderComponent from "./SliderComponent";
import { useInView, motion } from "framer-motion";

const headerInitial = { opacity: 0, x: -100 };
const textInitial = { opacity: 0, y: 100 };
const textAnimation = { opacity: [0, 1], y: [100, 0] };

const ThirdSection = () => {
  const containerRef = useRef();
  const containerIsInView = useInView(containerRef, {
    amount: 0.5,
    once: false,
  });

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[100vh] flex flex-col items-center justify-around py-10 sm:py-0 sm:justify-center overflow-hidden"
    >
      <div className="sm:absolute md:left-0 px-4 md:px-[40px] 2xl:px-[60px] top-10 md:top-20 3xl:top-16">
        <motion.p
          initial={headerInitial}
          animate={
            containerIsInView
              ? { opacity: [0, 1], x: [-100, 0] }
              : headerInitial
          }
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="text-[20px] sm:text-[25px] 2xl:text-[30px] 3xl:text-[40px] tracking-[5px] mb-2"
        >
          OUR CATEGORIES
        </motion.p>
      </div>
      <div className="w-full sm:absolute top-28 sm:top-40 ">
        <SliderComponent />
      </div>
      <div className="sm:absolute top-[75%] sm:top-[70%] lg:top-[85%] 2xl:top-[65%] space-y-8 text-center px-4 md:px-[40px] 2xl:px-[60px]">
        <motion.p
          initial={textInitial}
          animate={containerIsInView ? textAnimation : textInitial}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="text-sm sm:text-base md:text-xl lg:text-2xl 2xl:text-3xl 3xl:text-5xl tracking-[5px] font-semibold lg:font-medium"
        >
          ONE PLATFORM FOR ALL PREMIUM LISTINGS
        </motion.p>
        <motion.p
          initial={textInitial}
          animate={containerIsInView ? textAnimation : textInitial}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
          className="text-xs sm:text-sm md:text-lg lg:text-xl 2xl:text-2xl 3xl:text-4xl tracking-[5px]"
        >
          UNLIMITED POTENTIAL
        </motion.p>
      </div>
    </div>
  );
};

export default ThirdSection;