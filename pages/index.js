import Image from "next/image";
import { Inter } from "next/font/google";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Prevarrow from "../components/Prevarrow";
import Nextarrow from "../components/Nextarrow";
import { motion, useAnimation } from "framer-motion";
import { BsChevronRight } from "react-icons/bs";
import { BsChevronLeft } from "react-icons/bs";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  
  const settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <Nextarrow />,
    prevArrow: <Prevarrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  
  const handleScroll = () => {
    window.scrollBy({
      top: 800,
      behavior: 'smooth'
    });
  };

  
  return (
    <>
      <div className=" first  w-full   md:w-auto flex flex-1 bg-bg-bg1 bg-cover bg-norepeat  overflow-hidden   h-[600px]">
        <div className="First w-full flex-1 display:inline-block lg:display:flex  ">
          <div className=" nav flex justify-between text-white  pt-10">
            <div className="1">
              <div className="flex flex-row ml-6 space-x-4">
           
                   <motion.svg
      initial={{ x: -500 }}
      animate={{ x: 0 }}
      transition={{
        duration: 2,
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="60"
      height="35"
      viewBox="0 0 65.965 50"
      className="w-8 sm:w-16  h-8 sm:h-12 "
    >
      <g id="Group_3055" data-name="Group 3055" transform="translate(-448.5 -697.643)">
        <rect
          id="Rectangle_178"
          data-name="Rectangle 178"
          width="65.963"
          height="7.143"
          transform="translate(448.5 697.643)"
          fill="#fff"
        />
        <rect
          id="Rectangle_179"
          data-name="Rectangle 179"
          width="65.963"
          height="7.143"
          transform="translate(448.5 740.5)"
          fill="#fff"
        />
        <g id="Group_3054" data-name="Group 3054" transform="translate(448.5 714.258)">
          <path
            id="Path_7768"
            data-name="Path 7768"
            d="M468.894,717.088v-.352a5.613,5.613,0,0,0-.349-1.659,23.7,23.7,0,0,0-1.6-2.839c-1.028-1.788-2.188-3.849-3.221-5.649-.853-1.484-1.65-3.387-3.768-3.417-2.2-.03-2.936,1.914-3.735,3.32-2.536,4.459-7.723,13.438-7.723,13.438h2.392s4.949-8.756,7.407-13.183c.313-.568.938-1.31,1.659-1.31,1.1,0,1.647,1.307,2.139,2.2,1.319,2.4,2.59,4.7,3.831,7.022.388.73,1.178,1.692.637,2.68-.354.646-1.064.607-2.073.607,0,.018-9.769,0-9.769,0v1.98H463.6a20.86,20.86,0,0,0,2.936-.1A2.956,2.956,0,0,0,468.894,717.088Z"
            transform="translate(-448.5 -703.172)"
            fill="#fff"
          />
          <path
            id="Path_7769"
            data-name="Path 7769"
            d="M454.092,706.024v.352a5.54,5.54,0,0,0,.352,1.662,23.666,23.666,0,0,0,1.6,2.84c1.031,1.785,2.187,3.849,3.224,5.649.853,1.481,1.647,3.386,3.765,3.417,2.2.03,2.936-1.914,3.735-3.32,2.539-4.459,7.726-13.438,7.726-13.438h-2.395s-4.949,8.756-7.4,13.182c-.315.565-.938,1.31-1.662,1.31-1.1,0-1.644-1.307-2.136-2.2-1.322-2.4-2.593-4.7-3.831-7.022-.391-.73-1.181-1.692-.64-2.683.355-.646,1.067-.607,2.076-.607,0-.015,9.766,0,9.766,0v-1.977H459.39a20.893,20.893,0,0,0-2.936.1A2.956,2.956,0,0,0,454.092,706.024Z"
            transform="translate(-437.289 -703.172)"
            fill="#fff"
          />
          <path
            id="Path_7770"
            data-name="Path 7770"
            d="M478.466,717.088v-.352a5.517,5.517,0,0,0-.352-1.659,23.249,23.249,0,0,0-1.6-2.839c-1.028-1.788-2.188-3.849-3.224-5.649-.85-1.484-1.647-3.387-3.765-3.417-2.2-.03-2.936,1.914-3.735,3.32-2.536,4.459-7.723,13.438-7.723,13.438h2.392s4.949-8.756,7.407-13.183c.313-.568.934-1.31,1.659-1.31,1.1,0,1.647,1.307,2.139,2.2,1.319,2.4,2.59,4.7,3.828,7.022.391.73,1.181,1.692.64,2.68-.355.646-1.064.607-2.076.607,0,.018-9.766,0-9.766,0v1.98h8.873a20.858,20.858,0,0,0,2.936-.1A2.956,2.956,0,0,0,478.466,717.088Z"
            transform="translate(-429.309 -703.172)"
            fill="#fff"
          />
          <path
            id="Path_7771"
            data-name="Path 7771"
            d="M463.664,706.024v.352a5.536,5.536,0,0,0,.352,1.662,23.649,23.649,0,0,0,1.6,2.84c1.028,1.785,2.187,3.849,3.224,5.649.853,1.481,1.647,3.386,3.765,3.417,2.2.03,2.936-1.914,3.735-3.32,2.539-4.459,7.726-13.438,7.726-13.438h-2.395s-4.949,8.756-7.407,13.182c-.312.565-.934,1.31-1.659,1.31-1.1,0-1.647-1.307-2.14-2.2-1.319-2.4-2.59-4.7-3.828-7.022-.391-.73-1.181-1.692-.64-2.683.355-.646,1.064-.607,2.076-.607,0-.015,9.766,0,9.766,0v-1.977h-8.874a20.891,20.891,0,0,0-2.936.1A2.957,2.957,0,0,0,463.664,706.024Z"
            transform="translate(-418.098 -703.172)"
            fill="#fff"
          />
        </g>
      </g>
                  </motion.svg>

                <motion.svg
                  initial={{ x: -500 }}
                  animate={{ x: 0 }}
                  transition={{
                    duration: "2",
                  }}
                  id="Group_3385"
                  data-name="Group 3385"
                  xmlns="http://www.w3.org/2000/svg"
                  width="120"
                  height="35"
                  viewBox="0 0 184.896 50"
                   className="w-8 sm:w-16 md:w-32 lg:w-32 xl:w-32  h-8 sm:h-12  "
                >
                  <path
                    id="Path_7808"
                    data-name="Path 7808"
                    d="M231.6,160.265v-1.046a16.737,16.737,0,0,0-1.046-4.949c-1.155-2.888-3.1-5.6-4.758-8.47-3.069-5.325-6.523-11.478-9.612-16.844-2.543-4.418-4.914-10.1-11.229-10.183-6.567-.091-8.751,5.708-11.134,9.9-7.567,13.3-23.031,40.066-23.031,40.066h7.137s14.755-26.108,22.079-39.3c.936-1.688,2.793-3.9,4.949-3.9,3.27,0,4.906,3.893,6.376,6.567,3.935,7.163,7.727,14.018,11.42,20.936,1.161,2.177,3.517,5.04,1.9,7.994-1.053,1.927-3.174,1.81-6.186,1.81,0,.049-29.121,0-29.121,0v5.9H215.8a62.376,62.376,0,0,0,8.754-.285C228.735,167.665,231.006,164.424,231.6,160.265Z"
                    transform="translate(-46.703 -118.772)"
                    fill="#fff"
                  />
                  <g
                    id="Group_3285"
                    data-name="Group 3285"
                    transform="translate(0)"
                  >
                    <g id="Group_3282" data-name="Group 3282">
                      <path
                        id="Path_7809"
                        data-name="Path 7809"
                        d="M93.858,118.772v1.237a2.5,2.5,0,0,1-.494,1.448L61.632,165.768H93.576v3H56.826v-1.308a2.174,2.174,0,0,1,.425-1.272l31.8-44.418H57.745v-3Z"
                        transform="translate(-56.826 -118.772)"
                        fill="#fff"
                      />
                    </g>
                    <g
                      id="Group_3283"
                      data-name="Group 3283"
                      transform="translate(49.257)"
                    >
                      <path
                        id="Path_7810"
                        data-name="Path 7810"
                        d="M105.7,168.772h-3.64v-50h3.64Z"
                        transform="translate(-102.065 -118.772)"
                        fill="#fff"
                      />
                    </g>
                    <g
                      id="Group_3284"
                      data-name="Group 3284"
                      transform="translate(68.951)"
                    >
                      <path
                        id="Path_7811"
                        data-name="Path 7811"
                        d="M145.1,156.333c.142-.376.289-.748.442-1.113a9.271,9.271,0,0,1,.513-1.043L165.7,119.443a1.283,1.283,0,0,1,.566-.565,2.282,2.282,0,0,1,.777-.106h2.509v50h-3.18V126.156a18.937,18.937,0,0,1,.107-1.944L146.8,159.161a1.542,1.542,0,0,1-1.413.918h-.566a1.59,1.59,0,0,1-1.412-.918l-20.213-34.983a19.193,19.193,0,0,1,.106,1.978v42.616h-3.145v-50h2.474a2.443,2.443,0,0,1,.795.106,1.255,1.255,0,0,1,.584.565l20.176,34.771A14.409,14.409,0,0,1,145.1,156.333Z"
                        transform="translate(-120.152 -118.772)"
                        fill="#fff"
                      />
                    </g>
                  </g>
                </motion.svg>

                <motion.svg
                  initial={{ x: -500 }}
                  animate={{ x: 0 }}
                  transition={{
                    duration: "2",
                  }}
                  xmlns="http://www.w3.org/2000/svg"
                  width="60"
                  height="10"
                  viewBox="0 0 80.5 14.66"
                  className=" w-8 sm:w-16  h-8 sm:h-12 "
                >
                  <path
                    id="Path_27304"
                    data-name="Path 27304"
                    d="M13.53,0h-1.5a.645.645,0,0,1-.42-.13.8.8,0,0,1-.24-.33L10.03-3.92H3.6L2.26-.46a.781.781,0,0,1-.24.32A.639.639,0,0,1,1.6,0H.1L5.83-14.33H7.8ZM4.14-5.32H9.49L7.24-11.15a10.9,10.9,0,0,1-.43-1.35q-.11.41-.215.755t-.2.6ZM18.34,0V-14.33h4.57a8.737,8.737,0,0,1,2.275.26,4.406,4.406,0,0,1,1.57.74,2.919,2.919,0,0,1,.91,1.175,3.97,3.97,0,0,1,.3,1.565,3.175,3.175,0,0,1-.165,1.02,2.973,2.973,0,0,1-.5.91,3.535,3.535,0,0,1-.84.75,4.679,4.679,0,0,1-1.185.54,4.418,4.418,0,0,1,2.37,1.13,2.961,2.961,0,0,1,.8,2.16A4.025,4.025,0,0,1,28.1-2.42a3.556,3.556,0,0,1-.98,1.29,4.572,4.572,0,0,1-1.58.835A7.093,7.093,0,0,1,23.41,0Zm1.94-6.53v4.99h3.1A4.713,4.713,0,0,0,24.8-1.73a2.657,2.657,0,0,0,.98-.535,2.074,2.074,0,0,0,.565-.82,2.927,2.927,0,0,0,.18-1.045,2.151,2.151,0,0,0-.785-1.755A3.685,3.685,0,0,0,23.37-6.53Zm0-1.38h2.56a4.97,4.97,0,0,0,1.42-.18,2.874,2.874,0,0,0,1-.5,1.955,1.955,0,0,0,.585-.775,2.557,2.557,0,0,0,.19-.995,2.2,2.2,0,0,0-.76-1.85,3.84,3.84,0,0,0-2.36-.59H20.28Zm27.31.75A8.272,8.272,0,0,1,47.08-4.2,6.767,6.767,0,0,1,45.64-1.89,6.436,6.436,0,0,1,43.4-.385,7.537,7.537,0,0,1,40.52.15a7.5,7.5,0,0,1-2.88-.535A6.447,6.447,0,0,1,35.41-1.89,6.767,6.767,0,0,1,33.97-4.2a8.272,8.272,0,0,1-.51-2.955,8.272,8.272,0,0,1,.51-2.955,6.821,6.821,0,0,1,1.44-2.32,6.471,6.471,0,0,1,2.23-1.515,7.438,7.438,0,0,1,2.88-.54,7.475,7.475,0,0,1,2.885.54,6.46,6.46,0,0,1,2.235,1.515,6.821,6.821,0,0,1,1.44,2.32A8.272,8.272,0,0,1,47.59-7.16Zm-1.99,0a7.283,7.283,0,0,0-.36-2.37,5.013,5.013,0,0,0-1.02-1.775,4.426,4.426,0,0,0-1.6-1.115,5.432,5.432,0,0,0-2.1-.39,5.4,5.4,0,0,0-2.09.39,4.474,4.474,0,0,0-1.6,1.115A4.972,4.972,0,0,0,35.8-9.53a7.283,7.283,0,0,0-.36,2.37A7.237,7.237,0,0,0,35.8-4.8a4.979,4.979,0,0,0,1.025,1.77,4.421,4.421,0,0,0,1.6,1.11,5.466,5.466,0,0,0,2.09.385,5.494,5.494,0,0,0,2.1-.385,4.374,4.374,0,0,0,1.6-1.11A5.019,5.019,0,0,0,45.24-4.8,7.237,7.237,0,0,0,45.6-7.16ZM58.81-1.54a4,4,0,0,0,1.59-.3,3.335,3.335,0,0,0,1.185-.84,3.674,3.674,0,0,0,.74-1.29,5.1,5.1,0,0,0,.255-1.65v-8.71h1.93v8.71a6.536,6.536,0,0,1-.395,2.3,5.344,5.344,0,0,1-1.13,1.835A5.167,5.167,0,0,1,61.19-.27a6.155,6.155,0,0,1-2.38.44,6.155,6.155,0,0,1-2.38-.44,5.219,5.219,0,0,1-1.8-1.215A5.3,5.3,0,0,1,53.495-3.32a6.536,6.536,0,0,1-.4-2.3v-8.71h1.93v8.7a5.1,5.1,0,0,0,.255,1.65,3.674,3.674,0,0,0,.74,1.29,3.378,3.378,0,0,0,1.19.845A3.98,3.98,0,0,0,58.81-1.54ZM80.6-14.33v1.63H75.97V0H74.03V-12.7H69.38v-1.63Z"
                    transform="translate(-0.1 14.49)"
                    fill="#fff"
                  />
                </motion.svg>
              </div>
            </div>
            <div className="2    hidden lg:block  ">
              <motion.svg
                initial={{ y: -500 }}
                animate={{ y: 0 }}
                transition={{
                  duration: "2",
                }}
                xmlns="http://www.w3.org/2000/svg"
                width="180"
                height="40"
                viewBox="0 0 204.382 50"
              >
                <g
                  id="Group_3005"
                  data-name="Group 3005"
                  transform="translate(-56.415 -116.364)"
                >
                  <path
                    id="Path_1"
                    data-name="Path 1"
                    d="M119.612,157.857V156.81a16.219,16.219,0,0,0-1.087-4.949c-1.2-2.886-3.225-5.6-4.945-8.469-3.19-5.326-6.78-11.479-9.99-16.844-2.643-4.419-5.107-10.1-11.67-10.184-6.824-.09-9.094,5.709-11.571,9.9-7.864,13.3-23.934,40.064-23.934,40.064h7.418s15.332-26.108,22.944-39.3c.973-1.687,2.9-3.9,5.143-3.9,3.4,0,5.1,3.892,6.626,6.565,4.091,7.163,8.032,14.018,11.868,20.937,1.207,2.175,3.656,5.039,1.978,7.993-1.094,1.928-3.3,1.809-6.428,1.809,0,.05-30.263,0-30.263,0v5.9h27.493a67.12,67.12,0,0,0,9.1-.286C116.635,165.257,119,162.016,119.612,157.857Z"
                    transform="translate(0 0)"
                    fill="#fff"
                  />
                  <path
                    id="Path_2"
                    data-name="Path 2"
                    d="M99.743,124.871v1.048a16.212,16.212,0,0,0,1.088,4.948c1.2,2.887,3.225,5.6,4.945,8.47,3.19,5.325,6.779,11.479,9.988,16.844,2.644,4.418,5.107,10.095,11.671,10.182,6.824.091,9.094-5.708,11.571-9.9,7.864-13.3,23.934-40.064,23.934-40.064h-7.418s-15.332,26.107-22.945,39.3c-.972,1.687-2.9,3.9-5.142,3.9-3.4,0-5.1-3.892-6.626-6.567-4.091-7.162-8.032-14.017-11.868-20.936-1.206-2.176-3.656-5.039-1.978-7.994,1.094-1.928,3.3-1.81,6.428-1.81,0-.049,30.263,0,30.263,0v-5.9H116.16a67.256,67.256,0,0,0-9.1.284C102.72,117.472,100.359,120.713,99.743,124.871Z"
                    transform="translate(8.739 0)"
                    fill="#fff"
                  />
                  <path
                    id="Path_3"
                    data-name="Path 3"
                    d="M193.773,157.857V156.81a16.217,16.217,0,0,0-1.088-4.949c-1.2-2.886-3.225-5.6-4.945-8.469-3.19-5.326-6.779-11.479-9.988-16.844-2.644-4.419-5.107-10.1-11.671-10.184-6.824-.09-9.094,5.709-11.571,9.9-7.864,13.3-23.934,40.064-23.934,40.064h7.418s15.332-26.108,22.945-39.3c.973-1.687,2.9-3.9,5.142-3.9,3.4,0,5.1,3.892,6.626,6.565,4.091,7.163,8.032,14.018,11.868,20.937,1.208,2.175,3.655,5.039,1.978,7.993-1.094,1.928-3.3,1.809-6.428,1.809,0,.05-30.263,0-30.263,0v5.9h27.495a67.1,67.1,0,0,0,9.1-.286C190.8,165.257,193.156,162.016,193.773,157.857Z"
                    transform="translate(14.957 0)"
                    fill="#fff"
                  />
                  <path
                    id="Path_4"
                    data-name="Path 4"
                    d="M173.9,124.871v1.048a16.213,16.213,0,0,0,1.088,4.948c1.2,2.887,3.227,5.6,4.945,8.47,3.191,5.325,6.78,11.479,9.99,16.844,2.643,4.418,5.107,10.095,11.67,10.182,6.824.091,9.094-5.708,11.571-9.9,7.864-13.3,23.934-40.064,23.934-40.064h-7.418s-15.332,26.107-22.944,39.3c-.973,1.687-2.9,3.9-5.143,3.9-3.4,0-5.1-3.892-6.626-6.567-4.091-7.162-8.031-14.017-11.868-20.936-1.207-2.176-3.656-5.039-1.978-7.994,1.094-1.928,3.3-1.81,6.429-1.81,0-.049,30.262,0,30.262,0v-5.9H190.321a67.254,67.254,0,0,0-9.1.284C176.881,117.472,174.521,120.713,173.9,124.871Z"
                    transform="translate(23.696 0)"
                    fill="#fff"
                  />
                </g>
              </motion.svg>
            </div>
            <div className="3  flex overflow-hidden   ">


            
<motion.svg initial={{ x: 1000 }}  animate={{ x: 50 }}  transition={{ duration: 1 }} xmlns="http://www.w3.org/2000/svg" width="292" height="39" viewBox="0 0 292 39" className=" mr-5 hidden lg:block">
  <g id="Group_4560" data-name="Group 4560" transform="translate(-1294 -74)">
    <text id="SUNDAY_12_FEBRUARY_2023" data-name="SUNDAY, 12 FEBRUARY 2023" transform="translate(1586 109)" fill="#be9f56" font-size="14" font-family="SegoeUI, Segoe UI" letter-spacing="0.15em"><tspan x="-225.406" y="0">SUNDAY, 12 FEBRUARY 2023</tspan></text>
    <g id="Group_4559" data-name="Group 4559">
      <text id="LONDON" transform="translate(1351 89)" fill="#fff" font-size="14" font-family="SegoeUI, Segoe UI" letter-spacing="0.15em"><tspan x="0" y="0">PAKISTAN</tspan></text>
      <text id="_17:23" data-name="17:23" transform="translate(1294 89)" fill="#fff" font-size="14" font-family="SegoeUI, Segoe UI" letter-spacing="0.15em"><tspan x="0" y="0">17:23</tspan></text>
      <text id="UNITED_KINGDOM" data-name="UNITED KINGDOM" transform="translate(1586 89)" fill="#fff" font-size="14" font-family="SegoeUI, Segoe UI" letter-spacing="0.15em"><tspan x="-144.051" y="0">ISLAMABAD</tspan></text>
    </g>
  </g>
</motion.svg>

              <motion.div
                initial={{ x: 1000 }}
                animate={{ x: 50 }}
                transition={{ duration: 2 }}
              >
                <Image
                  src="/P.png"
                  width={40}
                  height={20}
                  alt=" pak"
                  className=" mr-5"
                />
              </motion.div>
              <motion.div
                initial={{ x: 1000 }}
                animate={{ x: 50 }}
                transition={{ duration: 3 }}
              >
                <Image
                  src="/bag.png"
                  width={20}
                  height={20}
                  alt="bag"
                  className="mr-5"
                />
              </motion.div>
              <motion.div
                initial={{ x: 1000 }}
                animate={{ x: 50 }}
                transition={{ duration: 4 }}
              >
                <Image
                  src="/user.png"
                  width={20}
                  height={20}
                  alt="bag"
                  className="mr-20"
                />
              </motion.div>
            </div>
          </div>
          <motion.div
            initial={{ x: -500 }}
            animate={{ x: 0 }}
            transition={{
              duration: "2",
            }}
            className=" Back  hidden lg:block  text-white mt-10 ml-8"
          >
            <h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="99"
                height="30"
                viewBox="0 0 99 30"
              >
                <g
                  id="Group_3215"
                  data-name="Group 3215"
                  transform="translate(-60 -175)"
                >
                  <g
                    id="Group_3214"
                    data-name="Group 3214"
                    transform="translate(6 -3)"
                  >
                    <text
                      id="Back"
                      transform="translate(90 202)"
                      fill="#fff"
                      font-size="22"
                      font-family="SegoeUI, Segoe UI"
                      letter-spacing="0.15em"
                    >
                      <tspan x="0" y="0">
                        BACK
                      </tspan>
                    </text>
                    <path
                      id="Path_7815"
                      data-name="Path 7815"
                      d="M345.325,118.121l1.253-1.254-5.842-5.837h18.558v-1.773H340.736l5.842-5.837-1.253-1.254-7.985,7.978Z"
                      transform="translate(-283.34 83.835)"
                      fill="#fff"
                    />
                  </g>
                </g>
              </svg>
            </h3>
          </motion.div>
          <div className="Heading ml-10 mt-10 flex flex-col   md:flex ">
            <motion.h1
              initial={{ x: -500 }}
              animate={{ x: 0 }}
              transition={{
                duration: "1",
              }}
              className="sm:text-2xl md:text-3xl lg:text-4xl font SegoeUI, Segoe UI text-white"
            >
              DISCOVER
            </motion.h1>
            <motion.h2
              initial={{ x: -500 }}
              animate={{ x: 0 }}
              transition={{
                duration: "2",
              }}
              className=" sm:text-4xl md:text-5xl lg:text-6xl mt-3 font SegoeUI, Segoe UI text-white "
            >
              A NEW WORLD
            </motion.h2>
            <motion.p
              initial={{ x: -500 }}
              animate={{ x: 0 }}
              transition={{
                duration: "3",
              }}
              className=" text-[#737373] mt-8 font SegoeUI, Segoe UI"
            >
              FOR THOSE WHO WISH FOR MORE...
            </motion.p>
          </div>
          {/* <div className="ml-6 mt-10 text-xl md:text-lg sm:text-base">
          <p className=" text-[#737373] font SegoeUI, Segoe UI">FOR THOSE WHO WISH FOR MORE...</p>
         
        </div> */}

          <div className="Last  md:mt-[120px] xs:mt-40 sm:mt-40 md:mt-40  text-sm md:text-lg lg:text-lg ">
            <motion.p
              initial={{ y: 500 }}
              animate={{ y: 0 }}
              transition={{
                duration: "2",
              }}
              className="  text-[#737373] flex justify-center font SegoeUI, Segoe UI"
            >
              BRINGING THE WORLD CLOSER TOGETHER
            </motion.p>

            {/* <div className="flex justify-center  mt-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="82.828"
                height="42.414"
                viewBox="0 0 82.828 42.414"
              >
                <path
                  id="Path_27315"
                  data-name="Path 27315"
                  d="M74.805,456.151l40-40-40-40"
                  transform="translate(457.565 -73.391) rotate(90)"
                  fill="none"
                  stroke="#fff"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
              </svg>
            </div> */}
            <div className="flex justify-center mt-5">
           
    <button onClick={handleScroll}>
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width="82.828"
        height="42.414"
        viewBox="0 0 82.828 42.414"
        whileHover={{ scale: 1.2 }}
        style={{ cursor: "pointer" }}
        initial={{ y: 0 }}
        whileInView={{ y: [0, -10, 0] }} // Move up and down
        transition={{
          y: { duration: 1, yoyo: Infinity, ease: "easeInOut" }
        }} // Continuous up and down movement
      >
        <path
          id="Path_27315"
          data-name="Path 27315"
          d="M74.805,456.151l40-40-40-40"
          transform="translate(457.565 -73.391) rotate(90)"
          fill="none"
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </motion.svg>
    </button>
            </div>
          </div>
        </div>
      </div>

      <div className="second w-full bg-white mx-auto h-auto">
  <div className="md:block">
    <motion.p
      initial={{ y: -100 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: "2" }}
      className="pt-10 text-center text-sm md:text-lg lg:text-lg"
    >
      A REAL ESTATE AND PROPERTY PLATFORM THAT IS CHANGING THE WORLD
    </motion.p>
    <motion.div
      initial={{ x: -500 }}
      whileInView={{ x: 0 }}
      transition={{ duration: "2" }}
      className="text flex flex-col mt-10 px-4 md:px-8"
    >
      <h1 className="text-lg flex justify-center md:justify-start xs:text-xl md:text-2xl lg:text-3xl text-black">
        A REVOLUTIONARY PLATFORM
      </h1>
      <h2 className="text-lg flex justify-center md:justify-start xs:text-xl md:text-3xl lg:text-5xl text-black">
        ENTRIES - SELLERS
      </h2>
      <h3 className="text-xl flex justify-center md:justify-start xs:text-3xl md:text-4xl lg:text-6xl text-black">
        WORLDWIDE
      </h3>
    </motion.div>

    <motion.div
      initial={{ x: 600 }}
      whileInView={{ x: 0 }}
      transition={{ duration: "2" }}
      className="text-center lg:text-left px-4 md:px-8"
    >
      <div className="logo flex justify-center md:justify-end pt-20 md:pt-10 mt-6 md:mt-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="280"
          height="80"
          viewBox="0 0 589.596 144.239"
          className="md:block lg:flex"
        >
          <g
            id="Group_4743"
            data-name="Group 4743"
            transform="translate(-56.415 -116.364)"
          >
            <path
              id="Path_1"
              data-name="Path 1"
              d="M238.724,236.061v-3.019a46.788,46.788,0,0,0-3.137-14.276c-3.463-8.326-9.3-16.152-14.265-24.431-9.2-15.364-19.559-33.113-28.818-48.591C184.88,133,177.77,116.621,158.839,116.367c-19.687-.26-26.235,16.468-33.38,28.554C102.774,183.284,56.415,260.5,56.415,260.5h21.4s44.23-75.316,66.188-113.38c2.808-4.867,8.375-11.254,14.837-11.254,9.8,0,14.709,11.228,19.115,18.94,11.8,20.664,23.171,40.439,34.236,60.4,3.48,6.274,10.545,14.537,5.706,23.059-3.155,5.561-9.516,5.217-18.543,5.217-.014.144-87.3,0-87.3,0V260.5h79.312s18.675.547,26.249-.824C230.137,257.409,236.945,248.06,238.724,236.061Z"
              transform="translate(0 0)"
            />
            <path
              id="Path_2"
              data-name="Path 2"
              d="M99.743,140.9v3.022A46.769,46.769,0,0,0,102.88,158.2c3.463,8.329,9.3,16.151,14.265,24.434,9.2,15.361,19.555,33.113,28.814,48.591,7.626,12.746,14.733,29.12,33.668,29.374,19.687.264,26.235-16.465,33.38-28.55,22.685-38.367,69.044-115.574,69.044-115.574h-21.4s-44.23,75.313-66.191,113.379c-2.8,4.867-8.372,11.255-14.833,11.255-9.807,0-14.712-11.228-19.115-18.943-11.8-20.661-23.171-40.435-34.236-60.4-3.48-6.278-10.545-14.537-5.706-23.06,3.155-5.561,9.512-5.22,18.543-5.22.01-.14,87.3,0,87.3,0V116.473H147.1s-18.674-.547-26.249.821C108.33,119.558,101.521,128.908,99.743,140.9Z"
              transform="translate(106.873 0.001)"
            />
            <path
              id="Path_3"
              data-name="Path 3"
              d="M312.885,236.061v-3.019a46.782,46.782,0,0,0-3.137-14.276c-3.463-8.326-9.3-16.152-14.265-24.431-9.2-15.364-19.555-33.113-28.814-48.591C259.042,133,251.935,116.621,233,116.367c-19.687-.26-26.235,16.468-33.38,28.554C176.935,183.284,130.576,260.5,130.576,260.5h21.4s44.231-75.316,66.191-113.38c2.808-4.867,8.372-11.254,14.834-11.254,9.807,0,14.712,11.228,19.115,18.94,11.8,20.664,23.171,40.439,34.236,60.4,3.484,6.274,10.545,14.537,5.706,23.059-3.155,5.561-9.512,5.217-18.543,5.217-.01.144-87.3,0-87.3,0V260.5h79.316s18.671.547,26.246-.824C304.3,257.409,311.106,248.06,312.885,236.061Z"
              transform="translate(182.926 0)"
            />
            <path
              id="Path_4"
              data-name="Path 4"
              d="M173.9,140.9v3.022a46.769,46.769,0,0,0,3.137,14.273c3.463,8.329,9.308,16.151,14.265,24.434,9.2,15.361,19.559,33.113,28.818,48.591,7.623,12.746,14.733,29.12,33.664,29.374,19.687.264,26.236-16.465,33.38-28.55,22.686-38.367,69.044-115.574,69.044-115.574h-21.4s-44.23,75.313-66.188,113.379c-2.808,4.867-8.375,11.255-14.837,11.255-9.8,0-14.709-11.228-19.115-18.943-11.8-20.661-23.167-40.435-34.236-60.4-3.481-6.278-10.546-14.537-5.706-23.06,3.155-5.561,9.516-5.22,18.546-5.22.01-.14,87.3,0,87.3,0V116.473H221.265s-18.675-.547-26.249.821C182.491,119.558,175.683,128.908,173.9,140.9Z"
              transform="translate(289.798 0.001)"
            />
          </g>
        </svg>
      </div>
      <div className="text-2 flex flex-col justify-center text-right md:justify-end mt-8 px-4 md:px-8">
        <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl">
          CONNECTING USERS FROM ACROSS THE GLOBE
        </h1>
        <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl">
          TO FACILITATE LIFE'S MOST IMPORTANT
        </h2>
        <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl">
          PERSONAL TRANSACTIONS
        </h3>
      </div>
    </motion.div>

    <div className="text-3 flex justify-center md:justify-start mt-10 px-4 md:px-8">
      <motion.div
        initial={{ x: -500 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 2 }}
      >
        <h1 className="text-2xl sm:text-3xl lg:text-4xl text-black">
          THE BEST OF THE BEST
        </h1>
        <h2 className="pt-4 sm:pt-6 lg:pt-10 text-base sm:text-lg md:text-xl lg:text-2xl">
          A COMBINATION OF AUTOMATION AND MANUAL CURATION. OUR PRO AGENTS
        </h2>
        <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl">
          AND MODERATION TEAMS SELECT THE HIGHEST QUALITY LISTINGS ON THE
          MARKET
        </h2>
        <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl">
          FROM ACROSS THE WORLD.
        </h2>
      </motion.div>
    </div>
    <div className="Scroll-icon flex justify-center mt-5">
      <button onClick={handleScroll}>
        <motion.svg
          whileHover={{ scale: 1.2 }}
          style={{ cursor: "pointer" }}
          initial={{ y: 0 }}
          animate={{ y: [0, -10, 0] }}
          viewport={{ once: false }}
          transition={{
            y: { duration: 1, yoyo: Infinity, ease: "easeInOut" },
          }}
          xmlns="http://www.w3.org/2000/svg"
          width="82.828"
          height="42.414"
          viewBox="0 0 82.828 42.414"
        >
          <path
            id="Path_27315"
            data-name="Path 27315"
            d="M74.805,456.151l40-40-40-40"
            transform="translate(457.565 -73.391) rotate(90)"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </motion.svg>
      </button>
    </div>
  </div>
</div>


      <div className=" third w-full bg-white w-full  mx-auto      h-[600px]">
        <div className="heading md:block pt-20 ">
          <motion.h1
            initial={{ x: -500 }}
            whileInView={{ x: 0 }}
            transition={{ duration: "2" }}
            className="text-3xl text-black ml-20"
          >
            OUR CATEGORIES
          </motion.h1>
        </div>
        <div className="slider-container pl-10   pt-20 space-x-4">
          <Slider {...settings}>
            <motion.div initial={{y:200}} transition={{type:"spring", stiffness:1000, rotate:270 }} whileInView={{y:0}}  className="ml-5">
              <Image src="/1.png" width={250} height={250} alt="image" />
            </motion.div>
            <motion.div initial={{y:200}} transition={{type:"spring", stiffness:1000, rotate:270 }} whileInView={{y:0}}  className="ml-5">
              <Image src="/2.png" width={250} height={250} alt="image" />
            </motion.div>
            <motion.div initial={{y:200}} transition={{type:"spring", stiffness:1000, rotate:270 }} whileInView={{y:0}}  className="ml-5">
              <Image src="/3.png" width={250} height={250} alt="image" />
            </motion.div>
            <motion.div initial={{y:200}} transition={{type:"spring", stiffness:1000, rotate:270 }} whileInView={{y:0}}  className="ml-5">
              <Image src="/4.png" width={250} height={250} alt="image" />
            </motion.div>
            <motion.div initial={{y:200}} transition={{type:"spring", stiffness:1000, rotate:270 }} whileInView={{y:0}}  className="ml-5">
              <Image src="/5.png" width={250} height={250} alt="image" />
            </motion.div>
            <motion.div initial={{y:200}} transition={{type:"spring", stiffness:1000, rotate:270 }} whileInView={{y:0}}   className="ml-5">
              <Image src="/6.png" width={250} height={250} alt="image" />
            </motion.div>
            <motion.div initial={{y:200}} transition={{type:"spring", stiffness:1000, rotate:270 }} whileInView={{y:0}}  className="ml-5">
              <Image src="/7.png" width={250} height={250} alt="image" />
            </motion.div>
            <motion.div initial={{y:200}} transition={{type:"spring", stiffness:1000, rotate:270  }} whileInView={{y:0}}  className="ml-5">
              <Image src="/8.png" width={250} height={250} alt="image" />
            </motion.div>
          </Slider>
        </div>
        
       
      </div>
      <div className="forth w-full bg-white h-[720px] sm:h-[820px] xs:h-[900px]">
        <motion.div
          initial={{ y: 50 ,opacity:0}}
          whileInView={{ y: 0,opacity:1 }}
          transition={{ duration: .5  }}
          className="heading"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl text-center">
            ONE PLATFORM FOR ALL PREMIUM LISTINGS
          </h1>
        </motion.div>
        <div className="sub-heading flex justify-center mt-10 md:display:block">
          <motion.h1    initial={{ y: 50 ,opacity:0}}
          whileInView={{ y: 0,opacity:1 }}
          transition={{ duration: .5  }}className="text-2xl sm:text-3xl lg:text-4xl text-black">
            UNLIMITED POTENTIAL
          </motion.h1>
        </div>

        <div className="main flex flex-col lg:flex-row justify-between mt-10 lg:mt-40 mx-5 lg:mx-20">
          <motion.div
             
            initial={{ x: -100 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 1 }}
            className="pt-10 lg:pt-14 flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            <Image
              src="/Zmo.png"
              alt="picture"
              className="dark:invert m-4 w-48 sm:w-64 md:w-72 lg:w-80"
               sizes="(max-width: 640px) 12rem, (max-width: 768px) 16rem, (max-width: 1024px) 18rem, 20rem"
              width={400}
              height={100}
            />
            <h1 className="text-xl sm:text-2xl lg:text-3xl text-black mt-4">
              ONE SOURCE
            </h1>
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-black mt-2">
              ENTRY TICKETS
            </h2>
            <p className="text-xs sm:text-sm lg:text-md text-black mt-2">
              FOR ALL PREMIUM LISTINGS
            </p>
          </motion.div>

          <motion.div 
          
            initial={{ x: 500}}
            whileInView={{ x: 0 }}
            transition={{dur: 1}}
            
            className="flex justify-center flex-col items-center lg:items-end pt-10 pb-20 mb-10 lg:mb-0"
          >
            <Image
              src="/pic.svg"
              alt="picture"
              className="dark:invert m-4 w-48 sm:w-72 md:w-80 lg:w-96"
              width={600}
              height={800}
              sizes="(max-width: 640px) 12rem, (max-width: 768px) 16rem, (max-width: 1024px) 18rem, 20rem"
            />

            <p className="text-start xs:ml-40  lg:text-right lg:ml-80 mr-20 text-black">
              LET YOUR DREAMS FIND YOU
            </p>
          </motion.div>
        </div>

        {/* <div className="flex justify-end mr-[60px] sm:justify-center   lg:justify-end mr-40  mt-[-45px] sm:mt-[-70px] lg:mt-[-70px]">
    <p className="text-center text-black">LET YOUR DREAMS FIND YOU</p>
  </div> */}
      </div>

      <div className="w-full flex-1 bg-boat bg-cover max-w-full h-[600px] mt-auto bg-center bg-no-repeat">
        <motion.div
          initial={{ y: -200 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center sm:justify-center md:justify-center lg:justify-end mr-4 lg:mr-20 pt-20"
        >
          <h1 className="text-white text-2xl lg:text-4xl text-center lg:text-right">
            PERSONALIZED FOR YOU
          </h1>
        </motion.div>
        <motion.div
          initial={{ x: 500 }}
          whileInView={{ x: 10 }}
          transition={{ duration: 1 }}
          className="text-white flex justify-center sm:justify-center md:justify-center lg:justify-end   md:text-left md:ml-[10%] lg:ml-[50%] lg:mr-4 mt-4 md:mt-0 lg:mt-8"
        >
          <h2 className="text-white  text-sm md:text-base ">
            DELIVERING THOUSANDS OF PERSONALIZED ALERTS EVERYDAY OUR USERS CAN
            BE FIRST IN LINE WHEN THAT OPPORTUNITY OF A LIFETIME IS HERE.
          </h2>
        </motion.div>
        <div className="mt-20 flex justify-start ml-5 md:justify-start ml-20 lg:justify-end lg:mr-20">
          <motion.svg
            initial={{ x: 10 }}
            whileInView={{ x: 50 }}
            transition={{ duration: 1 }}
            xmlns="http://www.w3.org/2000/svg"
            width="248.759"
            height="28"
            viewBox="0 0 248.759 28"
          >
            <g
              id="Group_4765"
              data-name="Group 4765"
              transform="translate(-164 -1645)"
            >
              <text
                id="CREATE_USER_ID"
                data-name="CREATE USER ID"
                transform="translate(356 1668)"
                fill="#fff"
                font-size="21"
                font-family="SegoeUI, Segoe UI"
                letter-spacing="0.15em"
              >
                <tspan x="-191.385" y="0">
                  CREATE USER ID
                </tspan>
              </text>
              <path
                id="Path_7815"
                data-name="Path 7815"
                d="M346.385,120.239l1.419-1.421-6.618-6.612h41.022V110.2H341.187l6.618-6.612-1.419-1.421L337.34,111.2Z"
                transform="translate(750.099 1770.239) rotate(180)"
                fill="#fff"
              />
            </g>
          </motion.svg>
        </div>
      </div>

      <div className="6 w-full  bg-dots bg-cover    h-[600px]">
        <div className="container bg-dots bg-cover  mx-auto"></div>
        <div className="flex flex-col text-center pt-60 ">
          <motion.h1
            initial={{ y: -100 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl text-black font SegoeUI, Segoe UI tracking-widest"
          >
            GLOBAL VISION
          </motion.h1>
          <motion.h5
            initial={{ x: 20, opacity: 0 }}
            whileInView={{ x: 40, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mt-10 text-xl tracking-widest"
          >
            WITH A REMOTE CULTURE , DIVERSITY IS NATURALLY IN OUR DNA.
          </motion.h5>
          <motion.h5
            initial={{ x: 40, opacity: 0 }}
            whileInView={{ x: 20, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mt-2 text-xl tracking-widest"
          >
            BASED ACROSSED THE GLOBE , MAKING UP 23 DIFFERENT NATIONALITIES.
          </motion.h5>
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            width="886"
            height="150"
            viewBox="0 0 886 177"
          >
            <g
              id="Group_4768"
              data-name="Group 4768"
              transform="translate(-517 -5474)"
            >
              <text
                id="GLOBAL_vision"
                data-name="GLOBAL vision"
                transform="translate(960 5517)"
                font-size="40"
                font-family="SegoeUI, Segoe UI"
                letter-spacing="0.15em"
              >
                <tspan x="-176.518" y="0">
                  GLOBAL VISION
                </tspan>
              </text>
              <text
                id="With_a_remote_culture_diversity_is_naturally_in_our_DNA._Based_across_THE_GLOBE_making_up_over_23_different_nationalities."
                data-name="With a remote culture, diversity is naturally in our DNA.
Based across THE GLOBE, making up over 23 different nationalities."
                transform="translate(960 5606)"
                font-size="20"
                font-family="SegoeUI, Segoe UI"
                letter-spacing="0.15em"
              >
                <tspan x="-378.839" y="0">
                  WITH A REMOTE CULTURE, DIVERSITY IS NATURALLY IN OUR DNA.
                </tspan>
                <tspan x="-442.012" y="40">
                  BASED ACROSS THE GLOBE, MAKING UP OVER 23 DIFFERENT
                  NATIONALITIES.
                </tspan>
              </text>
            </g>
          </svg> */}
        </div>
      </div>

      <div className=" 7 w-full flex-1 max-w-full h-[600px]">
        <div className="flex flex-col   items-center ">
          <div className="flex-col ">
            <motion.div
              initial={{ x: -500 }}
              whileInView={{ x: 0 }}
              transition={{ duration: .5}}
            >
              {" "}
              <Image
                src="/Zmo.png"
                width={250}
                height={250}
                alt="zimo logo"
                className="m-4 w-48 sm:w-64 md:w-72 lg:w-80"
              />
            </motion.div>

            <motion.div
              initial={{ x: 300 }}
              whileInView={{ x: 0 }}
              transition={{ duration: "2" }}
            >
              <Image
                src="/partners.png"
                width={250}
                height={250}
                alt=" partners"
                className="m-4 w-48 sm:w-64 md:w-72 lg:w-80"
              />
            </motion.div>
          </div>
          <div className="flex-col   ">
            <motion.div
              initial={{ y: -300 }}
              whileInView={{ y: 0 }}
              transition={{ duration: "2" }}
            >
              {" "}
              <Image
                src="/civica1.png"
                width={250}
                height={250}
                alt="civica logo"
                className="m-4 w-48 sm:w-64 md:w-72 lg:w-80"
              />
            </motion.div>
            <motion.div
              initial={{ y: 300 }}
              whileInView={{ y: 0 }}
              transition={{ duration: "2" }}
            >
              <Image
                src="/barclays.png"
                width={250}
                height={250}
                alt="civica logo"
                className="m-4 w-48 sm:w-64 md:w-72 lg:w-80"
              />
            </motion.div>
          </div>
        </div>
      </div>

      <div className="8 w-full bg-blue bg-cover bg-center bg-no-repeat  max-w-full h-[600px]">
        <div className="flex flex-row">
          <div className="pt-[450px] flex justify-center lg:ml-10">
           <motion.div  initial={{ x: -300 }}
              whileInView={{ x: 200 }}
              transition={{ duration: 2}} >
             <Image
              src="/car.png"
              alt="car"
              className="ml-10  w-48 sm:w-64 md:w-72 lg:w-80"
              width={300}
              height={600}
              
            />
            </motion.div>
          </div>
          <div className="logo-end flex  lg:justify-end pt-[800px] sm:pt-[1000px] md:pt-[1400px] text-center lg:pt-[470px] mr-auto ml-auto ">
            <motion.svg
            initial={{ x: 600 }}
            whileInView={{ x: 0 }}
            transition={{ duration: "2" }}
              xmlns="http://www.w3.org/2000/svg"
              width="500"
              height="223.48"
              viewBox="0 0 913.509 223.48"
            >
              <g
                id="Group_4770"
                data-name="Group 4770"
                transform="translate(-56.415 -116.364)"
                opacity="0.1"
              >
                <path
                  id="Path_1"
                  data-name="Path 1"
                  d="M338.88,301.821v-4.678a72.49,72.49,0,0,0-4.861-22.12c-5.366-12.9-14.416-25.025-22.1-37.852-14.26-23.8-30.3-51.3-44.65-75.286-11.811-19.753-22.827-45.124-52.159-45.517-30.5-.4-40.648,25.516-51.718,44.24C128.243,220.049,56.415,339.678,56.415,339.678H89.571S158.1,222.984,192.121,164.01c4.351-7.54,12.977-17.437,22.988-17.437,15.189,0,22.79,17.4,29.616,29.345,18.283,32.017,35.9,62.655,53.045,93.581,5.393,9.721,16.339,22.523,8.841,35.728-4.888,8.616-14.744,8.083-28.73,8.083-.022.222-135.265,0-135.265,0v26.369H265.5s28.934.848,40.67-1.276C325.576,334.9,336.125,320.411,338.88,301.821Z"
                  transform="translate(0 0)"
                />
                <path
                  id="Path_2"
                  data-name="Path 2"
                  d="M99.743,154.384v4.682a72.463,72.463,0,0,0,4.861,22.115c5.366,12.905,14.416,25.025,22.1,37.857,14.26,23.8,30.3,51.3,44.644,75.285,11.816,19.748,22.827,45.119,52.164,45.511,30.5.408,40.648-25.51,51.718-44.235,35.148-59.445,106.976-179.069,106.976-179.069H349.052S280.523,233.22,246.5,292.2c-4.345,7.54-12.971,17.438-22.983,17.438-15.195,0-22.795-17.4-29.616-29.35-18.283-32.012-35.9-62.649-53.045-93.576-5.393-9.727-16.339-22.523-8.841-35.728,4.888-8.615,14.738-8.088,28.73-8.088.016-.217,135.265,0,135.265,0V116.532H173.123s-28.934-.848-40.67,1.271C113.047,121.313,102.5,135.8,99.743,154.384Z"
                  transform="translate(189.39 0.002)"
                />
                <path
                  id="Path_3"
                  data-name="Path 3"
                  d="M413.042,301.821v-4.678a72.484,72.484,0,0,0-4.861-22.12c-5.366-12.9-14.416-25.025-22.1-37.852-14.26-23.8-30.3-51.3-44.644-75.286-11.816-19.753-22.827-45.124-52.164-45.517-30.5-.4-40.648,25.516-51.718,44.24C202.4,220.049,130.576,339.678,130.576,339.678h33.156s68.53-116.694,102.556-175.668c4.351-7.54,12.971-17.437,22.983-17.437,15.195,0,22.795,17.4,29.616,29.345,18.283,32.017,35.9,62.655,53.045,93.581,5.4,9.721,16.338,22.523,8.841,35.728-4.888,8.616-14.738,8.083-28.73,8.083-.016.222-135.265,0-135.265,0v26.369h122.89s28.929.848,40.664-1.276C399.738,334.9,410.286,320.411,413.042,301.821Z"
                  transform="translate(324.164 0)"
                />
                <path
                  id="Path_4"
                  data-name="Path 4"
                  d="M173.9,154.384v4.682a72.464,72.464,0,0,0,4.861,22.115c5.366,12.905,14.421,25.025,22.1,37.857,14.26,23.8,30.3,51.3,44.65,75.285,11.811,19.748,22.827,45.119,52.158,45.511,30.5.408,40.649-25.51,51.718-44.235C384.542,236.156,456.37,116.532,456.37,116.532H423.214S354.684,233.22,320.664,292.2c-4.351,7.54-12.976,17.438-22.988,17.438-15.189,0-22.79-17.4-29.616-29.35-18.283-32.012-35.895-62.649-53.045-93.576-5.393-9.727-16.339-22.523-8.841-35.728,4.888-8.615,14.744-8.088,28.735-8.088.016-.217,135.26,0,135.26,0V116.532H247.284s-28.934-.848-40.67,1.271C187.208,121.313,176.66,135.8,173.9,154.384Z"
                  transform="translate(513.554 0.002)"
                />
              </g>
            </motion.svg>
          </div>
        </div>
      </div>
    </>
  );
}
