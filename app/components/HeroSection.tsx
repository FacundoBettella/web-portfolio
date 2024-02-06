"use client";
import Image from "next/image";
import React from "react";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 my-3 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500">
              Hola, soy{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Facundo",
                2000,
                "frontend developer",
                2000,
                "backend developer",
                2000,
                "and psychologist",
                2000,
              ]}
              wrapper="span"
              speed={5}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            error facere fuga earum!
          </p>
          <div>
            <button className="px-7 py-1 mr-6 w-full sm:w-fit rounded bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white font-bold">
              Contratame!
            </button>
            <button className="px-1 py-1 mr-6 w-full sm:w-fit rounded  bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white mt-4">
              <span className="px-6 block bg-[#121212] hover:bg-slate-800 rounded">
                Descargá mi CV
              </span>
            </button>
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
