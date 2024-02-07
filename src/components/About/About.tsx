import {
  BsArrowRight,
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsTwitterX,
} from "react-icons/bs";
import { Button } from "../ui/button";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const links = [
  {
    name: <BsGithub />,
    title: "xbiwas",
    link: "https://github.com/xbiwas",
  },
  {
    name: <BsLinkedin />,
    title: "Biwas Bhandari",
    link: "https://github.com/xbiwas",
  },
  {
    name: <BsTwitterX />,
    title: "x_biwas",
    link: "https://github.com/xbiwas",
  },
  {
    name: <BsInstagram />,
    title: "_acesh__",
    link: "https://github.com/xbiwas",
  },
];
const stats = [
  { name: "Experience", value: "2 years+" },
  { name: "projects", value: "20+" },
  { name: "Design and code", value: "Best" },
  { name: "MERN", value: "Techstack" },
];

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("about");
      if (element) {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight - 100;
        setIsVisible(isVisible);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check on mount

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const revealClass = isVisible
    ? "opacity-100 translate-y-0 transition-opacity duration-700"
    : "opacity-0 translate-y-10";

  return (
    <div
      id="about"
      className={`relative isolate overflow-hidden py-24 sm:py-32 ${revealClass}`}
    >
      <div
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className={`mx-auto max-w-7xl px-6 lg:px-8   ${revealClass}`}>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight  sm:text-6xl">
            About Me
          </h2>
          <p className="mt-6 text-lg leading-8 ">
            As a frontend web developer, I specialize in leveraging React and
            TypeScript to build dynamic and scalable user interfaces. My
            expertise extends to integrating MongoDB for efficient data
            management. Additionally, I have a keen interest in UI/UX design,
            ensuring seamless and visually appealing user experiences.
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 sm:grid-cols-2 md:flex lg:gap-x-10">
            {links.map((link) => (
              <TooltipProvider key={link.title}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link to={link.link} target="_blank">
                      <Button variant="outline" className="flex gap-3">
                        {link.name}{" "}
                        <span>
                          {" "}
                          <BsArrowRight />
                        </span>{" "}
                      </Button>
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{link.title}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.name} className="flex flex-col-reverse">
                <dt className="text-base leading-7 ">{stat.name}</dt>
                <dd className="text-2xl font-bold leading-9 tracking-tight ">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}