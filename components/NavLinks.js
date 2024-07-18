


import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import LanguageSwitcher from "../components/LanguageSwitcher ";
import i18n from "./I18n";


const initialNavObjs = { opacity: 0, x: 100 };
const animateNavObjs = { opacity: 1, x: 0 };

const NavLinks = () => {
  
  const [data, setData] = useState(null);
  const [currentTime, setCurrentTime] = useState("00:00");
  const [countryData, setCountryData] = useState({
    name: "UNITED KINGDOM",
    flag: "https://flagcdn.com/gb.svg",
  });
  const [formattedDate, setFormattedDate] = useState("");


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://ipinfo.io/json`
        );
        const data = await response.json();
        setData(data);

        const apiUrl = `https://geolocation-db.com/json/`;
        const fetchCountry = await fetch(apiUrl);
        const countryData = await fetchCountry.json();
        const countryName = countryData.country_name;
        setCountryData({
          name: countryName,
          flag: `https://flagcdn.com/${countryData?.country_code.toLowerCase()}.svg`,
        });
      } catch (error) {
        console.error("Error fetching IP address:", error);
      }
    };

    fetchData();

    const updateDateTime = () => {
      const now = new Date();
      const options = {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      };
      const formattedDate = now.toLocaleDateString("en-UK", options);
      const formattedTime = now.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });

      setFormattedDate(formattedDate);
      setCurrentTime(formattedTime);
    };

    updateDateTime();
    const intervalId = setInterval(updateDateTime, 60000);

    return () => clearInterval(intervalId);
  }, []);



  

 
  return (
    <>
      <div className="relative flex flex-row items-center order-1 space-x-2 text-right">
        <div className="relative hidden lg:flex flex-col w-auto text-white order-1 text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[14px]">
          <div className="flex flex-row w-auto space-x-2 justify-end tracking-[0.5px]">
            <motion.p
              initial={{ opacity: 0, x: 15 }}
              animate={animateNavObjs}
              transition={{ duration: 0.5, ease: "easeOut", delay: 3.2 }}
            >
              {currentTime}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: 15 }}
              animate={animateNavObjs}
              transition={{ duration: 0.5, ease: "easeOut", delay: 2.7 }}
              className="uppercase"
            >
              {data?.city || "PindiGheb"}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: 15 }}
              animate={animateNavObjs}
              transition={{ duration: 0.5, ease: "easeOut", delay: 2.2 }}
              className="uppercase "
            >
              {countryData?.name}
            </motion.p>
          </div>
          <motion.p
            initial={{ opacity: 0, x: 15 }}
            animate={animateNavObjs}
            transition={{ duration: 0.5, ease: "easeOut", delay: 2.2 }}
            className="text-[#BE9F56] uppercase tracking-[0.5px] "
          >
            {formattedDate}
          </motion.p>
        </div>
        <motion.div
          initial={initialNavObjs}
          animate={animateNavObjs}
          transition={{ duration: 1, ease: "easeOut", delay: 1.2 }}
          className="relative order-2 mb-0 pointer-events-none select-none"
        >
          {/* <Image
            src={countryData.flag}
            alt="Flag Image"
            width={37.31}
            height={25}
            className="w-[33px] 2xl:w-[35px] 3xl:w-[37.31px]"
          /> */}
          <LanguageSwitcher />
        </motion.div>
      </div>
      <motion.div
        initial={initialNavObjs}
        animate={animateNavObjs}
        transition={{ duration: 1, ease: "easeOut", delay: 0.7 }}
        className="relative order-2 py-0"
      >
        <Image
          src="/bag.png"
          alt="Bag icon Image"
          width={20.89}
          height={25}
          className="w-[18px] 2xl:w-[19px] 3xl:w-[20.89px]"
        />
      </motion.div>
      <motion.div
        initial={initialNavObjs}
        animate={animateNavObjs}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        className="relative order-3 py-0"
      >
        <Image
          src="/user.png"
          alt="User Avatar Image"
          width={20.59}
          height={25}
          className="w-[18px] 2xl:w-[19px] 3xl:w-[20.59px]"
        />
      </motion.div>
    </>
  );
};

export default NavLinks;

















