import React from "react";
import Image from "next/image";

const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "React.js" },
  { skill: "Next.js" },
  { skill: "REST" },
  { skill: "Bootstrap" },
  { skill: "Tailwind CSS" },
  { skill: "Postman" },
  { skill: "Git" },
  { skill: "GitHub" },
  { skill: "Jira" },
];

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-red-900 dark:bg-teal-500  border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
           
            <p>
              Hi, I'm Pranav Pandey, a{" "}
              <span className="font-bold">{` highly ambitious`}</span>, and
              <span className="font-bold">{` self-motivated `}</span>
              Web Developer based in Delhi, India. Since graduating with a B.Tech in Information Technology from the Institute of Technology and Management, Gorakhpur, Uttar Pradesh, in 2022, I've been actively contributing to the field.
            </p>
            <br />
            <p>
              I thrive on challenges and constantly push my boundaries to achieve excellence. My professional journey reflects a commitment to self-improvement and a passion for staying at the forefront of technological advancements.
            </p>
            <br />
            <p>
              Beyond my work, I am a multifaceted individual with diverse interests. Whether I'm immersed in reading, playing musical instruments, exploring new destinations, or delving into the latest technologies, I am always seeking opportunities to broaden my horizons and acquire new skills.
            </p>
            <br />
            <p>
              I firmly believe in the philosophy of <span className="font-bold  text-red-700">continuous growth</span>{" "}  and strive to embody it in both my personal and professional life. My enthusiasm for technology is matched only by my determination to explore uncharted territories and redefine what is achievable.
            </p>
            <br />
            <p>
              As I look ahead, I am excited about the prospects my career holds and remain open to new and exciting opportunities.
            </p>

          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-red-900   transition duration-900 cursor-pointer dark:bg-teal-600  rounded shadow transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 dark:hover:bg-red-900 duration-300 px-4 py-2 mr-2 mt-2 text-white font-semibold"
                  >
                    {item.skill}
                  </p>
                );
              })}
            </div>
            <Image
              src="/Boy-wave.png"
              alt=""
              width={325}
              height={325}
              className="hidden md:block md:relative md:left-13 md:z-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
