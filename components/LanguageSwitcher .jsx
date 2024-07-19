import { useState, useEffect } from "react";
import { Select, MenuItem } from "@mui/material";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const router = useRouter();
  const { i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [isContentVisible, setIsContentVisible] = useState(false);

  useEffect(() => {
    const language = localStorage.getItem("language");
    if (language) {
      setSelectedLanguage(language);
      i18n.changeLanguage(language);
    }
  }, []);

  const handleChangeLanguage = (event) => {
    const language = event.target.value;
    setSelectedLanguage(language);
    localStorage.setItem("language", language);
    i18n.changeLanguage(language);
  };

  return (
    <div className="flex justify-center">
      <Select
        className="bg-white mt-3 w-[120px] text-left h-10"
        value={i18n.language}
        onChange={handleChangeLanguage}
      >
        <MenuItem value="en">
          <div className="flex items-center">
            <img
              src="/flags/en.jpeg"
              alt="English Flag"
              className="w-5 h-5 mr-2"
            />
            English
          </div>
        </MenuItem>
        <MenuItem value="ar">
          <div className="flex items-center">
            <img
              src="/flags/ar.png"
              alt="Arabic Flag"
              className="w-5 h-5 mr-2"
            />
            Arabic
          </div>
        </MenuItem>
        <MenuItem value="ur">
          <div className="flex items-center">
            <img
              src="/flags/ur.avif"
              alt="Urdu Flag"
              className="w-5 h-5 mr-2"
            />
            Urdu
          </div>
        </MenuItem>
        <MenuItem value="zh_Hant">
          <div className="flex items-center">
            <img
              src="/flags/zh_Hant.png"
              alt="Chinese Flag"
              className="w-5 h-5 mr-2"
            />
            China
          </div>
        </MenuItem>
      </Select>
    </div>
  );
};

export default LanguageSwitcher;
