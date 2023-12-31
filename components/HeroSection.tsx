"use client"; // this is a client component
import React from "react";
import Image from "next/image";
import { Link } from "react-scroll/modules";
import { HiArrowDown } from "react-icons/hi";

const HeroSection = () => {
  return (
    <section id="home">
      <div className="   flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
        <div className="md:mt-2 md:w-1/2">
          <Image
            src="/Pranav-Pandey-img.png"
            alt=""
            width={325}
            height={325}
            className="rounded-full shadow-2xl"
          />
        </div>
        <div className="md:mt-2 md:w-3/5">
          <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl">
            Hi, I&#39;m Pranav!
          </h1>
          <p className="text-lg mt-4 mb-6 md:text-2xl">
            I&#39;m a{" "}
            <span className="font-semibold text-red-900 dark:text-teal-600">Software Developer </span>
            based in Delhi, India. Working towards creating software that makes
            life easier and more meaningful.
          </p>
          <a
            href="/Pranav_Pandey_RESUME.pdf"
            download={true}
            className="text-neutral-100 font-semibold px-6 py-3  bg-red-900 dark:bg-teal-600 rounded shadow transition ease-in-out delay-50  dark:hover:bg-red-900 duration-300 ..."
          >
            Download Resume
          </a>
        </div>
      </div>
      <div className="flex flex-row items-center text-center justify-center ">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          hello
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
