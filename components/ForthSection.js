import { useInView, motion } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";
import { useTranslation } from "next-i18next";
const textInitial = { opacity: 0, y: -100 };
const textAnimation = { opacity: [0, 1], y: [-100, 0] };

const FourthSection = () => {
  const { t } = useTranslation();
  const containerRef = useRef();
  const containerIsInView = useInView(containerRef, {
    amount: 0.5,
    once: false,
  });

  return (
    <>
  
    <div
      ref={containerRef}
      className="relative w-full h-[140vh] flex overflow-visible"
    >
     
       {/* <div className="sm:absolute  flex flex-col  justify-center ml-60    top-[0%] sm:top-[0%] lg:top-[0%] 2xl:top-[0%] space-y-4 text-center px-4 md:px-[40px] 2xl:px-[60px]">
        <motion.p
          initial={textInitial}
          animate={containerIsInView ? textAnimation : textInitial}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="text-sm sm:text-base pt-0 md:text-xl lg:text-2xl 2xl:text-3xl 3xl:text-5xl tracking-[5px] font-semibold lg:font-medium"
        >
          ONE PLATFORM FOR ALL PREMIUM LISTINGS
        </motion.p>
        <motion.p
          initial={textInitial}
          animate={containerIsInView ? textAnimation : textInitial}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
          className="text-xs sm:text-sm  md:text-lg lg:text-xl 2xl:text-2xl 3xl:text-4xl tracking-[5px]"
        >
          UNLIMITED POTENTIAL
        </motion.p>
      </div>  */}
      
      <div className="absolute h-full flex flex-col items-center pt-0 gap-x-10 lg:gap-x-0 justify-center lg:justify-between w-full lg:space-x-10 space-y-10 lg:space-y-0 lg:flex-row px-4 md:px-[40px] 2xl:px-[60px]">
     
        <div className="flex flex-col justify-start lg:items-start">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={
                containerIsInView
                  ? { opacity: [0, 1], x: [-100, 0] }
                  : { opacity: 0, x: -100 }
              }
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            >
              <Image
                src={"/Zmo.png"}
                alt="logo"
                width={565.7}
                height={377}
                className="w-auto sm:w-[300px] lg:w-[400px] 2xl:w-[440px] 3xl:w-[550px]"
              />
            </motion.div>
          </div>

          <div className="leading-[25px]  md:leading-[30px] lg:leading-[50px] 3xl:leading-[70px] mt-4 md:mt-8">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={
                containerIsInView
                  ? { opacity: [0, 1], x: [-100, 0] }
                  : { opacity: 0, x: -100 }
              }
              transition={{ duration: 1, ease: "easeOut", delay: 0.7 }}
            >
              <span className="text-lg sm:text-lg lg:text-[20px] 2xl:text-[30px] 3xl:text-[40px] tracking-[5px] pt-7 text-left">
               {t('SOURCE')} 
                <br />
              </span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={
                containerIsInView
                  ? { opacity: [0, 1], x: [-100, 0] }
                  : { opacity: 0, x: -100 }
              }
              transition={{ duration: 1, ease: "easeOut", delay: 1.2 }}
            >
              <span className="text-2xl sm:text-3xl lg:text-[34px] 2xl:text-[40px] 3xl:text-[60px] font-thin 2xl:tracking-[7px] tracking-[5px] pt-2 text-center lg:text-left">
              {t('ENTRY')} 
                <br />
              </span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={
                containerIsInView
                  ? { opacity: [0, 1], x: [-100, 0] }
                  : { opacity: 0, x: -100 }
              }
              transition={{ duration: 1, ease: "easeOut", delay: 1.7 }}
            >
              <span className="text-xs sm:text-sm lg:text-[15px] 2xl:text-[15px] 3xl:text-[20px] tracking-[3px] pt-2 text-gray-500 text-center lg:text-left">
              {t('PREMIUM')} 
              </span>
            </motion.div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={
                containerIsInView
                  ? { opacity: [0, 1], x: [100, 0] }
                  : { opacity: 0, x: 100 }
              }
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            >
              <Image
                src={"/group.png"}
                alt="House"
                width={1083}
                height={718}
                className="w-[500px] sm:w-[600px] lg:w-[650px] 2xl:w-[800px] 3xl:w-[1083px]"
              />
            </motion.div>
          </div>
          <div>
            <motion.p
              initial={{ opacity: 0, y: -50 }}
              animate={
                containerIsInView
                  ? { opacity: [0, 1], y: [-50, 0] }
                  : { opacity: 0, y: -50 }
              }
              transition={{ duration: 1, ease: "easeOut", delay: 0.7 }}
              className="text-[10px] sm:text-[15px] md:text-[20px] lg:text-[15px] 2xl:text-[24px] 3xl:text-[30px] tracking-[3px] pt-7 text-center"
            >
             {t('DREAMS')} 
            </motion.p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default FourthSection;