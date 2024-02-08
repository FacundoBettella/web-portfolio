/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import DownloadButton from "../components/button/DownloadButton";

const HeroSection = () => {
  return (
    <section className="mt-24">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 my-3 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-customGreen via-customTeal to-customLightGreen">
              Hi, I'm{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={["Facu", 2000, "web developer", 2000]}
              wrapper="span"
              speed={5}
              repeat={Infinity}
            />
          </h1>
          <div>
            <Link href="#contact">
              <button className="px-7 py-1 mr-6 w-full sm:w-fit rounded bg-gradient-to-br from-customGreen via-customTeal to-customLightGreen hover:bg-slate-200 text-white font-bold hover:shadow-1">
                Let's talk
              </button>
            </Link>
            <DownloadButton file="../../files/CV-BettellaFacundo-EN.pdf" />
          </div>
        </div>

        <div className="col-span-5 place-self-center mt-5 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[350px] h-[350px] relative">
            <Image
              src="/images/hero-img.png"
              alt="hero image"
              width={300}
              height={200}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
