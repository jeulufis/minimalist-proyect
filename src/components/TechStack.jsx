import React from "react";
import Title from "./Title";

export default function TechStack() {
  const languages = [
    "React",
    "Next",
    "NodeJS",
    "Express",
    "JavaScript",
    "TypeScript",
    "HTML / CSS",
    "CSS Modules",
    "Sass",
    "MongoDB",
    "Mongoose",
    "Github / Git",
    "Tailwind",
    "Bootstrap CSS",
    "Java",
    "Spring Boot",
    "SQL",
    "Postman",
    "Styled Components",
    "+ Dependency",
  ];

  const googleSearchUrl = "https://www.google.com/search?q=";

  return (
    <div
      className="pt-[4rem] md:pt-20"
      data-aos="fade-up"
      data-aos-duration="2300"
    >
      <div className="flex flex-col">
        <div className="flex justify-center items-center">
          <div className="flex flex-col w-full md:w-8/12">
            <div>
              <Title>TechStack</Title>
              <ul className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {languages.map((language, index) => (
                  <li
                    className="bg-yellow-400 rounded px-2 py-3 text-black font-semibold hover:text-slate-100 hover:bg-yellow-500"
                    key={index}
                  >
                    <a
                      href={googleSearchUrl + encodeURIComponent(language)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {language}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
