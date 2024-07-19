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
import HeroSectionNav from "../components/HeroSectionNav";
import { useTranslation } from "next-i18next";
import dynamic from "next/dynamic";

const inter = Inter({ subsets: ["latin"] });
const initialBodyText = { opacity: 0, x: -100 };
const animateBodyText = { opacity: 1, x: 0 };

function Home() {
  const { t } = useTranslation();
  const handleScroll = () => {
    window.scrollBy({
      top: 640,
      behavior: "smooth",
    });
  };

  return (
    <>
      <main className="overflow-x-hidden">
        <section className="h-screen">
          <HeroSectionNav />
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

export default dynamic(() => Promise.resolve(Home), { ssr: false });
