import {
    useAnimation,
    useInView,
    motion,
    useScroll,
    useTransform,
  } from "framer-motion";
  import Image from "next/image";
  import React, { useEffect, useRef } from "react";
  import { Link } from "react-scroll";
  import { useTranslation } from "next-i18next";
  
  const SecondSection = () => {
    const containerRef = useRef();
    const { t } = useTranslation();
  
    const handleScroll = () => {
      window.scrollBy({
        top: 640,
        behavior: 'smooth'
      });
    };
    const { scrollYProgress } = useScroll({
      target: containerRef,
      offset: ["start end", "center"],
    });
  
    const objectOne = useTransform(scrollYProgress, [0, 1], ["-600%", "0%"]);
    const objectOneOpacity = useTransform(
      scrollYProgress,
      [0.5, 1],
      ["2%", "100%"]
    );
    const objectTwo = useTransform(scrollYProgress, [0, 1], ["-100%", "0%"]);
  
    const objectThree = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);
  
    return (
      <div
        ref={containerRef}
        className="relative w-full h-[100vh] flex flex-col bg-white justify-between pt-10 pb-5 overflow-hidden"
      >
        <div className=" text-center font-medium w-full justify-center px-4 md:px-[40px] 2xl:px-[60px] top-10 md:top-[68px]">
          <motion.p
            style={{ translateY: objectOne, opacity: objectOneOpacity }}
            className="text-responsive-small tracking-[0.15em]"
          >
           {t('head')} 
          </motion.p>
        </div>
        <motion.div
          style={{ translateX: objectTwo, opacity: objectOneOpacity }}
          className="lg:absolute px-4 md:px-[40px] 2xl:px-[60px] top-32 md:top-28 2xl:top-36 flex w-full justify-center md:justify-start select-none"
        >
       
          

<div className="flex flex-col items-center tracking-widest leading-tight ">
  <p className="text-center text-[11px]   sm:text-[11px] md:text-[17px] lg:text-[18px] xl:text-[20px] 2xl:text-[20px] 3xl:text-[45px] font-medium">
  {t('ARP')}  
  </p>
  <p className="text-center text-[20px] sm:text-[20px] md:text-[24px] lg:text-[30px] xl:text-[35px] 2xl:text-[50px] 3xl:text-[76px] font-medium">
   {t('Entries')} 
  </p>
  <p className="text-center text-[29px]   sm:text-[29px] md:text-[40px] lg:text-[45px] xl:text-[50px] 2xl:text-[70px] 3xl:text-[75px] font-medium">
  {t('WorldWide')} 
  </p>
</div>


        </motion.div>
  
        <motion.div
          style={{ translateX: objectThree, opacity: objectOneOpacity }}
          className="lg:absolute justify-center space-y-4 2xl:space-y-8 flex flex-col inset-y-0 right-0 items-center md:items-end px-4 md:px-[40px] 2xl:px-[60px]"
        >
          <div className="pointer-events-none select-none">
            <Image
              src="/Group 4743.png"
              alt="Left Logo 1 Image"
              width={589.6}
              height={144.24}
              className="w-[200px] sm:w-[250px] md:w-[300px] lg:w-[320px] xl:w-[350px] 2xl:w-[500px] 3xl:w-[589.6px]"
            />
          </div>
          <p className="text-responsive-medium tracking-[0.16em] leading:[20px] sm:leading-[20px] lg:leading-[30px] 2xl:leading-[37px] text-center w-[200px] sm:w-[250px] md:w-[300px] lg:w-[320px] xl:w-[350px] 2xl:w-[500px] 3xl:w-[589.6px]">
          {t('connecting')} 
          </p>
        </motion.div>
        <motion.div
          style={{ translateX: objectTwo, opacity: objectOneOpacity }}
          className="lg:absolute lg:top-[60%] xl:top-[60%] 2xl:top-[60%] space-y-2 2xl:space-y-8 flex flex-col w-full items-start px-4 md:px-[40px] 2xl:px-[60px]"
        >
          {/* <p className="text-responsive-base 2xl:tracking-[0.15em] font-medium w-full text-left">
            THE BEST OF THE BEST
          </p> */}
          <p class="text-2xl  md:text-3xl lg:text-3xl   2xl:text-4xl  font-lato font-medium w-full text-left tracking-wide">
          {t('best')} 
</p>
          <p className="text-responsive text-small md:text-base lg:text-lg 2xl:text-lg tracking-[0.15em] leading-[20px] md:leading-[30px] 2xl:leading-[34px] md:w-1/2 2xl:w-[50%] text-left">
             {t('combination')} 
          </p>
        </motion.div>
        <div className="bottom-5 flex justify-center w-full px-4 md:px-[40px] 2xl:px-[60px]">
          <div className="relative cursor-pointer animate-bounce">
            <Link
              activeClass="active"
              to="ThirdSection"
              spy={true}
              smooth={true}
              duration={500}
              onClick={handleScroll}
            >
              <Image
                src="/black_arrow.png"
                alt="Scroll Down Arrow Image"
                quality={100}
                width={83}
                height={0}
                 className="w-[20px] md:w-[30px] 2xl:w-[40px]"
              />
            </Link>
          </div>
        </div>
      </div>
    );
  };
  
  export default SecondSection;
  