
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
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
 

  return (
    <>
       <main className="overflow-x-hidden">
      <section className="h-screen">
        <HeroSection />
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
      <section className="h-screen">
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
