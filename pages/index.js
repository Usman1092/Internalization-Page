import Image from "next/image";
import { Inter } from "next/font/google";
import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
import Card from "@/components/Card";
import ThirdSection from "@/components/ThirdSection";

import { Link } from "react-scroll";
import { BsChevronRight } from "react-icons/bs";
import { BsChevronLeft } from "react-icons/bs";
import SecondSection from "@/components/SecondSection";
import FourthSection from "@/components/forthSection";
import FifthSection from "@/components/FifthSection";
import SixthSection from "@/components/SixthSection";
import SeventhSection from "@/components/SeventhSection";
import EighthSection from "@/components/EighthSection";
import HeroSection from "@/components/HeroSection";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const handleScroll = () => {
    window.scrollBy({
      top: 800,
      behavior: "smooth",
    });
  };

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
