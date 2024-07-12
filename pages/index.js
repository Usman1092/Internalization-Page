
import { Inter } from "next/font/google";
import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ThirdSection from "@/components/ThirdSection";


import SecondSection from "@/components/SecondSection";
import FourthSection from "@/components/forthSection";
import FifthSection from "@/components/FifthSection";
import SixthSection from "@/components/SixthSection";
import SeventhSection from "@/components/SeventhSection";
import EighthSection from "@/components/EighthSection";
import HeroSection from "@/components/HeroSection";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
 

  return (
    <>
      <section>
        <HeroSection />
      </section>

      <section>
        <SecondSection />
      </section>

      <section>
        <ThirdSection />
      </section>

      <section>
        <FourthSection />
      </section>
      <section>
        <FifthSection />
      </section>

      <section>
        <SixthSection />
      </section>

      <section>
        <SeventhSection />
      </section>

      <section>
        <EighthSection />
      </section>
    </>
  );
}
