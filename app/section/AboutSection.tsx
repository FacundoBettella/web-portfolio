"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "../components/tab/TabButton";
import TAB_DATA from "./about-data";

export const AboutSection = () => {
  const [tab, setTab] = useState<string>("skills");
  const [_, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="rounded-full bg-customGrey w-[350px] h-[350px] relative">
          <Image
            src="/images/green-fire.gif"
            alt="about"
            width={300}
            height={300}
            className="rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
          />
        </div>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About me</h2>
          <p className="text-base lg:text-lg">
            I am a software developer with 3 years of experience in frontend and
            backend with more focus on frontend. I am mentally restless and I am
            always incorporating useful knowledge in my work. My training as a
            psychologist provides me with useful tools for better communication
            with my team and business areas. I enjoy reading, playing soccer and
            playing guitar.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab)!.content}
          </div>
        </div>
      </div>
    </section>
  );
};
