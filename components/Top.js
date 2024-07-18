import React,{useState,useEffect} from 'react'
import {motion} from 'framer-motion';
// import LanguageSwitcher from './LanguageSwitcher ';
import i18n from './I18n';
const initialNavObjs = { opacity: 0, x: -100 };
const animateNavObjs = { opacity: 1, x: 0 };

export const Top = () => {
    const [data, setData] = useState(null);
  const [currentTime, setCurrentTime] = useState("00:00");
  const [countryData, setCountryData] = useState({
    name: "UNITED KINGDOM",
    flag: "https://flagcdn.com/gb.svg",
  });
  const [formattedDate, setFormattedDate] = useState("");
  const [locale, setLocale] = useState(i18n.language);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://ipinfo.io/json?token=${process.env.NEXT_PUBLIC_IP_TOKEN}`
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
      setLoading(false);
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

  useEffect(() => {
    i18n.on('languageChanged', (lang) => setLocale(lang));
  }, []);

  const handleChange = (event) => {
    i18n.changeLanguage(event.target.value);
  };
  return (
    <div className="absolute  flex justify-between w-full pt-[30px] lg:pt-[40px] 2xl:pt-[50px] 3xl:pt-[68px] px-4 md:px-[40px] 2xl:px-[60px]">
    <div className="relative flex flex-row items-baseline justify-start w-1/2 space-x-3 lg:items-end lg:space-x-7 lg:w-1/3">
      <motion.div
        initial={initialNavObjs}
        animate={animateNavObjs}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        className="relative pointer-events-none select-none"
      >
        <img
          src="/navLogo.png"
          alt="Left Logo 1 img"
          width={65.96}
          height={50}
          className="w-[35px] xl:w-[35px] 2xl:w-[45px] 3xl:w-[65px]"
        />
      </motion.div>
      <motion.div
        initial={initialNavObjs}
        animate={animateNavObjs}
        transition={{ duration: 1, ease: "easeOut", delay: 0.7 }}
        className="relative pointer-events-none select-none"
      >
        <img
          src="/Group 3385.png"
          alt="Left Logo 2 img"
          width={184.9}
          height={50}
          className="w-[100px] xl:w-[120px] 2xl:w-[120px] 3xl:w-[182px]"
        />
      </motion.div>
      <motion.h1
        initial={initialNavObjs}
        animate={animateNavObjs}
        transition={{ duration: 1, ease: "easeOut", delay: 1.2 }}
        className=" text-white text-[9px] lg:text-[11px] xl:text-[13px] 2xl:text-[14px] 3xl:text-[14.66px] tracking-[2.5px] lg:tracking-[4px]"
      >
        ABOUT
      </motion.h1>
    </div>
    <div className="relative justify-center hidden w-1/3 pointer-events-none select-none lg:flex">
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
      >
        <img
          src="/Group 3005.png"
          alt="Center Logo img"
          width={204.38}
          height={50}
          className="w-[128px] xl:w-[140px] 2xl:w-[150px] 3xl:w-[204.38px] h-auto"
        />
      </motion.div>
    </div>
    <div className="flex flex-row items-center justify-end w-1/2 lg:w-1/3 space-x-7 md:space-x-10 lg:space-x-14 2xl:space-x-20">
      <div className="relative flex flex-row items-center order-1 space-x-2 text-right">
        <div className="relative hidden lg:flex flex-col w-auto text-white order-1 text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[14px]">
          <div className="flex flex-row w-auto space-x-2 justify-end tracking-[0.5px]">
            <motion.p
              initial={{ opacity: 0, x: 15 }}
              animate={animateNavObjs}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 3.2 }}
            >
              {currentTime}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: 15 }}
              animate={animateNavObjs}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 2.7 }}
              className="uppercase"
            >
              {data?.city || 'PindiGheb'}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: 15 }}
              animate={animateNavObjs}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 2.2 }}
              className="uppercase "
            >
              {countryData?.name}
            </motion.p>
          </div>
          <motion.p
            initial={{ opacity: 0, x: 15 }}
            animate={animateNavObjs}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 2.2 }}
            className="text-[#BE9F56] uppercase tracking-[0.5px] "
          >
            {formattedDate}
          </motion.p>
        </div>
        <motion.div
          initial={initialNavObjs}
          animate={animateNavObjs}
          transition={{ duration: 1, ease: 'easeOut', delay: 1.2 }}
          className="relative order-2 mb-0"
        >
      <select value={locale} onChange={handleChange}> 
            <option value="en">English</option>
            <option value="ur">Urdu</option>
          </select> 
          {/* <LanguageSwitcher /> */}
        </motion.div>
      </div>
      <motion.div
        initial={initialNavObjs}
        animate={animateNavObjs}
        transition={{ duration: 1, ease: 'easeOut', delay: 0.7 }}
        className="relative order-2 py-0"
      >
        <img
          src="/bag.png"
          alt="Bag icon img"
          width={20.89}
          height={25}
          className="w-[18px] 2xl:w-[19px] 3xl:w-[20.89px]"
        />
      </motion.div>
      <motion.div
        initial={initialNavObjs}
        animate={animateNavObjs}
        transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
        className="relative order-3 py-0"
      >
        <img
          src="/user.png"
          alt="User Avatar img"
          width={20.59}
          height={25}
          className="w-[18px] 2xl:w-[19px] 3xl:w-[20.59px]"
        />
      </motion.div>
    </div>
  </div>
  )
}
