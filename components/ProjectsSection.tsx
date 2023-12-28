import React from "react";
import Image from "next/image";
import Link from "next/link";
import SlideUp from "./SlideUp";
import { BsGithub } from "react-icons/bs";

const projects = [
  {
    name: "NewsWave (News App)",
    description:
      "NewsWave is a cutting-edge news application built using the powerful React.js technology , integrated with the reliable News API and designed with the responsive framework Bootstrap 5.  NewsHub offers a seamless and intuitive platform to stay informed and updated on the latest news and events from around the world.",
    image: "/newsappReact.jpg",
    github: "https://github.com/PranavPandey14/NEWS-App-using-Reactjs",
  },
  {
    name: "TaskMaster - Your Ultimate Todo List App",
    description:
      "TaskMaster is a powerful and intuitive todo list application developed using React.js and designed with the responsive framework Bootstrap 5. With TaskMaster, you can efficiently manage your tasks, stay organized, and boost your productivity like never before.",
    image: "/todo.png",
    github: "https://github.com/PranavPandey14/TaskMaster_App_REACT.js",
  },
  {
    name: "TextUtils App",
    description:
      "TextUtils is a versatile and free character counter tool developed using React.js and designed with Bootstrap 5. It empowers users to instantly count characters, analyze word statistics, and manipulate text for enhanced readability and formatting. With TextUtils, you can effortlessly optimize your written content with a range of powerful features.",
    image: "/textutils.png",
    github: "https://github.com/PranavPandey14/TextUtils-using-Reactjs",
  },
];
const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 dark:bg-teal-500 bg-red-900 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Image
                      src={project.image}
                      alt=""
                      width={1000}
                      height={1000}
                      className="rounded-xl shadow-xl hover:opacity-70"
                    />
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;
