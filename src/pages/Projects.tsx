import React from "react";
import { MailIcon } from "@heroicons/react/solid";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const a1 = require("../assets/images/1a.png");
const a2 = require("../assets/images/a5.png");
const b1 = require("../assets/images/b1.png");
const b2 = require("../assets/images/b2.png");
const c1 = require("../assets/images/c1.png");
const c2 = require("../assets/images/c2.png");
const c3 = require("../assets/images/c3.png");
const c4 = require("../assets/images/c4.png");
const d1 = require("../assets/images/d1.png");
const d2 = require("../assets/images/d2.png");
const wrodl = require("../assets/images/Wordle-Emblem.png");

const projectsData = [
  {
    title: "SecureLink",
    description:
      "Developed a secure chat application with end-to-end encryption using Java, React Native, TypeScript, and Android Studio. Utilized Firebase for database management, user authentication, and encrypted message transmission. Implemented MVC architectural pattern for structured, scalable codebase, with comprehensive documentation for maintenance and future enhancements. ",
    technologies: [
      "React Native",
      "Typescript",
      "Node.js",
      "Firebase",
      "Android Studio",
    ],
    imageUrls: [a2, a1],
  },
  {
    title: "Habit Spark: Habit Tracker",
    description:
      "Created a Habit Tracking Chrome extension using React, TypeScript, CSS, and JavaScript. The extension aids users in monitoring and improving their habits. Utilized Google Chrome storage for secure data storage, ensuring persistence across sessions, and implemented an intuitive and visually appealing UI.",
    technologies: ["React", "Typescript", "CSS", "Google Storage"],
    imageUrls: [b1, b2],
  },
  {
    title: "Mesh and Island Generator",
    description:
      "Created a Java-based software suite leveraging Apache Maven to generate and visualize 2D meshes for 3D graphics, including randomized islands and biomes. Integrated pathfinding algorithms such as Dijkstra’s, DFS, and BFS. Employed an incremental development approach aligned with the software development lifecycle, managing technical debt effectively. Ensured quality with Junit for comprehensive unit testing, addressing defects promptly to maintain robustness.",
    technologies: ["Java", "Apache Maven", "JUnit"],
    imageUrls: [c1, c2, c3, c4],
  },
  {
    title: "Sorting Visualizer",
    description:
      "Created a Sorting Visualizer web application using JavaScript, HTML, and CSS to demonstrate sorting algorithms such as bubble sort, merge sort, and quicksort dynamically. Users can add random bars, select an algorithm, and visually track the sorting process in real-time through an interactive interface. Designed for clarity and educational value, the project provides a hands-on experience to enhance understanding of sorting principles.",
    technologies: ["Javascript", "HTML", "CSS"],
    imageUrls: [d1, d2],
  },
  {
    title: "Wordle Solver",
    description:
      "Developed a Python-based Wordle solver software that analyzes letter patterns and generates solutions through iterative guessing and feedback. Implemented using object-oriented programming principles for clarity and maintainability, with an incremental development approach ensuring scalability and performance. This approach facilitated feature additions and optimizations, resulting in a reliable solver for solving Wordle puzzles effectively.",
    technologies: ["Python"],
    imageUrls: [wrodl],
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <div id="Projects" className="pb-72 mt-36">
      <div className="mx-12 lg:mx-60">
        <MailIcon className="h-5 w-5 mr-4 text-yellow_vs" />
        <code className="text-[#e6f1ff] text-3xl mt-5 whitespace-nowrap block">
          MY PROJECTS
        </code>
        <div className="border-b border-[#e6f1ff] border-opacity-25 w-full mt-5 mb-10"></div>
      </div>
      <div className="mx-12 lg:mx-60">
        {projectsData.map((project, index) => (
          <div key={index} className="flex flex-col lg:flex-row mb-12">
            <div className="lg:w-1/2 lg:pr-8">
              <h2 className="text-2xl text-[#e6f1ff] mb-2">{project.title}</h2>
              <p className="text-[#a2aabc] mb-4">{project.description}</p>
              <h3 className="text-xl text-[#e6f1ff] mb-2">
                Technologies Used:
              </h3>
              <ul className="list-disc list-inside mb-4">
                {project.technologies.map((tech, idx) => (
                  <li key={idx} className="text-[#a2aabc]">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:w-1/2 mt-4 lg:mt-0">
              <Carousel
                showArrows={true}
                dynamicHeight={true}
                infiniteLoop={true}
                showThumbs={false} // Hides thumbnail navigation
              >
                {project.imageUrls.map((imageUrl, idx) => (
                  <div key={idx}>
                    <img
                      src={imageUrl}
                      alt={`${project.title} ${idx + 1}`}
                      style={{
                        maxHeight: "500px",
                        objectFit: "cover",
                        maxWidth: "600px",
                      }}
                    />
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
