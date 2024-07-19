import Image from "next/image";
import React, { useEffect, useState } from "react";
import NavLinks from "./NavLinks";
import { motion } from "framer-motion";
import { useTranslation } from "next-i18next";
import Link from "next/link";

const initialNavObjs = { opacity: 0, x: -100 };
const animateNavObjs = { opacity: 1, x: 0 };

const initialBodyText = { opacity: 0, x: -100 };
const animateBodyText = { opacity: 1, x: 0 };

const HeroSectionNav = () => {
  const { t } = useTranslation();
  const handleScroll = () => {
    window.scrollBy({
      top: 640,
      behavior: 'smooth'
    });
  };
  return (


    <>
    <div className="flex flex-col flex-nowrap bg-grey bg-cover bg-center  bg-scroll ">
    {/* navbar */}
    <div className="flex flex-row flex-nowrap justify-between text-white pt-4 pb-4 ">
      <div className="flex  flex-nowwrap items-baseline justify-start ml-4 order-1 w-1/2 space-x-3 lg:items-end lg:space-x-7 lg:w-1/3">
      <motion.div
          initial={initialNavObjs}
          animate={animateNavObjs}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="ml-4"
        >
          <Image
            src="/navLogo.png"
            alt="Left Logo 1 Image"
            width={65.96}
            height={50}
            className=" space-x-4 w-[35px] xl:w-[35px] 2xl:w-[45px] 3xl:w-[65px]"
          />
        </motion.div>

        <motion.div
          initial={initialNavObjs}
          animate={animateNavObjs}
          transition={{ duration: 1, ease: "easeOut", delay: 0.7 }}
          className="space-x-4  select-none"
        >
          <Image
            src="/Group 3385.png"
            alt="Left Logo 2 Image"
            width={184.9}
            height={50}
            className="w-[100px] xl:w-[120px] 2xl:w-[120px] 3xl:w-[182px]"
          />
        </motion.div>
        <motion.h1
          initial={initialNavObjs}
          animate={animateNavObjs}
          transition={{ duration: 1, ease: "easeOut", delay: 1.2 }}
          className=" space-x-4 pt-4 text-white text-[9px] lg:text-[11px] xl:text-[13px] 2xl:text-[14px] 3xl:text-[14.66px] tracking-[2.5px] lg:tracking-[4px]"
        >
          ABOUT
        </motion.h1>
           
        </div>
      <div className="flex  flex-nowwrap order-2  hidden lg:flex"> 
      <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          <Image
            src="/Group 3005.png"
            alt="Center Logo Image"
            width={204.38}
            height={50}
            className="w-[128px] xl:w-[140px] 2xl:w-[150px] 3xl:w-[204.38px] h-auto"
          />
          
         </motion.div>
        </div>
      <div className="flex flex-nowwrap order-3 ">
        <NavLinks />
      </div>

      </div>

  
       <div className="flex flex-col w-full h-screen ">
        <div className="flex flex-row justify-start items-center hidden w-full px-4 py-5  space-x-3  lg:flex ">
        <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={animateBodyText}
        transition={{ duration: 0.5, ease: "easeOut", delay: 1.2 }}
        className="  block w-[14px] h-[10px]   select-none"
      >
       
        <img
          src="/back_arrow.png"
          alt="Left Logo 1 img"
          fill
        />
      
  
      </motion.div>
      <motion.div
        initial={initialBodyText}
        animate={animateBodyText}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        whileHover={{cursor: "pointer"}}
        className="text-base lg:text-[12px] xl:text-[18px] 3xl:text-[22px] text-white"
      >
        <button className="cursor-pointer">{t('BACK')}</button>
       
      </motion.div> 
        </div>

        <div className="flex flex-col flex-nowrap items-start justify-center w-full px-4 md:px-[40px] 2xl:px-[60px] text-white space-y-3 2xl:space-y-4 pb-[0px] ">
        <div className="pt-60 md:pt-40 xl:pt-20 ">
        <motion.p
          initial={initialBodyText}
          animate={animateBodyText}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="text-[20px] md:text-[25px] xl:text-[30px] 3xl:text-[40px] tracking-[5px]"
        >
          {t('DISCOVER')}
        </motion.p>
        <motion.p
          initial={initialBodyText}
          animate={animateBodyText}
          transition={{ duration: 1, ease: "easeOut", delay: 0.7 }}
          className="text-[30px] md:text-[40px] xl:text-[50px] 3xl:text-[60px] tracking-[5px]"
        >
          {t('WORLD')}
        </motion.p>
      </div>
      <motion.p
        initial={initialBodyText}
        animate={animateBodyText}
        transition={{ duration: 1, ease: "easeOut", delay: 1.2 }}
        className="text-[10px] md:text-[12px] xl:text-[15px] 3xl:text-[20px] tracking-[2.2px] text-[#737373] "
      >
        {t('wish')}
      </motion.p>
        </div>

       
         {/* <div className=" flex flex-col justify-end items-center w-full px-4 md:px-[40px] 2xl:px-[60px] pb-[520px] md:pb-[80px] lg:pb-[100px] pb-4 sm:pt-[700px] md:pt-[500px] lg:pt-[120px]  ">
    <motion.p
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
      className="text-[10px] md:text-[12px] 2xl:text-[20px] tracking-[2.2px] text-[#737373]"
    >
      {t('last_t')}
    </motion.p>
    <motion.div className="pt-5 cursor-pointer animate-bounce">
        <a
          activeClass="active"
          to="SecondSection"
          spy={true}
          smooth={true}
          duration={500}
          // onClick={handleScroll}
        >
          <img
            src="/dropdown.png"
            alt="Scroll Down Arrow img"
            width={83}
            height={0}
            className="w-[20px] md:w-[30px] 2xl:w-[40px]"
          />
        </a>
      </motion.div>
        </div> */}
        <div className="absolute flex flex-col items-center w-full px-4 md:px-[40px] 2xl:px-[60px] space-y-8 md:space-y-7 3xl:space-y-14 bottom-5">
      <motion.p
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        className="text-[10px] md:text-[12px] 2xl:text-[20px] tracking-[2.2px] text-[#737373]"
      >
        {t('last_t')}
      </motion.p>
      <motion.div className="relative cursor-pointer animate-bounce">
        <a
          activeClass="active"
          to="SecondSection"
          spy={true}
          smooth={true}
          duration={500}
          onClick={handleScroll}
        >
          <img
            src="/dropdown.png"
            alt="Scroll Down Arrow img"
            width={83}
            height={0}
            className="w-[20px] md:w-[30px] 2xl:w-[40px]"
          />
        </a>
      </motion.div>
    </div>
       </div>
</div>
    </>
  );
};

export default HeroSectionNav;