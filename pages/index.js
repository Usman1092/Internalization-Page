
import { Inter } from "next/font/google";
import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ThirdSection from "../components/ThirdSection";
import SecondSection from "../components/SecondSection";
import FourthSection from "../components/ForthSection";
import FifthSection from "../components/FifthSection";
import SixthSection from "../components/SixthSection";
import SeventhSection from "../components/SeventhSection";
import EighthSection from "../components/EighthSection";
import HeroSection from "../components/HeroSection";
import HeroSectionNav from "../components/HeroSectionNav";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { useTranslation } from "next-i18next";

import LanguageSwitcher from "@/components/LanguageSwitcher ";
import dynamic from "next/dynamic";

const inter = Inter({ subsets: ["latin"] });
const initialBodyText = { opacity: 0, x: -100 };
const animateBodyText = { opacity: 1, x: 0 };


 function Home() {
  const { t } = useTranslation();
  const handleScroll = () => {
    window.scrollBy({
      top: 640,
      behavior: 'smooth'
    });
  };
 

  return (
    <>
       <main className="overflow-x-hidden">
      <section className="h-screen">
     <LanguageSwitcher  />
        {/* <HeroSection /> */}
        <div className="relative w-full h-[100vh] flex overflow-hidden">
     
      <div className="absolute w-full h-full pointer-events-none select-none bg-scroll">
        <img
          src="/Grey-bg.png"
          alt="Hero img"
          fill
          style={{ objectFit: "cover" }}
          quality={100}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
        />
      </div>
      <HeroSectionNav /> 
       

      {/* BODY SECTION  */}

      <div className="absolute  flex-row  justify-start items-center hidden w-full px-4 md:px-[40px] 2xl:px-[60px] space-x-3 lg:top-[115px] 2xl:top-[135px] 3xl:top-[177px] lg:flex">
      
         <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={animateBodyText}
          transition={{ duration: 0.5, ease: "easeOut", delay: 1.2 }}
          whileHover={{cursor: "pointer"}}
          className="relative  block w-[14px] h-[10px]   select-none"
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
          className="lg:text-[12px] xl:text-base 3xl:text-[22px] text-white"
        >
          <button className="cursor-pointer">{t('BACK')}</button>
         
        </motion.div> 
        
      </div>





      <div className="relative flex flex-col items-start justify-center w-full px-4 md:px-[40px] 2xl:px-[60px] text-white space-y-3 2xl:space-y-4">
        <div className="3xl:space-y-[-10px]">
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
          className="text-[10px] md:text-[12px] xl:text-[15px] 3xl:text-[20px] tracking-[2.2px] text-[#737373]"
        >
          {t('wish')}
        </motion.p>
      </div>

    
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
          <Link
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
          </Link>
        </motion.div>
      </div>
       </div>
      </section>
      <section name="SecondSection" className="h-screen">
        <SecondSection />
      </section>
      <section name="ThirdSection" className="h-screen">
        <ThirdSection />
      </section>
      <section className="h-screen md:h-[110vh] lg:h-screen">
        <FourthSection />
      </section>
      <section className="h-screen mt-60">
        <FifthSection />
      </section>
      <section className="h-screen">
        <SixthSection />
      </section>
      <section className="h-screen">
        <SeventhSection />
      </section>
      <section className="h-[150vh]">
        <EighthSection />
      </section>
    </main>
    </>
  );
}

export default dynamic (() => Promise.resolve(Home), {ssr: false})
