import React from "react";
import { ClipboardListIcon } from "@heroicons/react/solid";

const Resume = () => {
  return (
    <div
      id="Resume"
      className="lg:w-1/2 mt-64 mb-4 text-justify mx-12 lg:mr-60 lg:ml-auto"
    >
      <div>
        <div className="table">
          <ClipboardListIcon className="h-5 w-5 mr-4 text-yellow_vs" />{" "}
          <code className="table-cell text-[#e6f1ff] text-3xl mt-5 whitespace-nowrap">
            Resume
          </code>
          <div className="table-cell border-b border-b-[#e6f1ff] border-opacity-25 w-full"></div>
        </div>
      </div>
      <div className="text-[#a2aabc] text-lg mt-5">
        <div className="flex flex-row">
          <div className="w-1/4">
            <code className="text-yellow_vs">Education</code>
          </div>
          <div className="w-3/4">
            <code className="text-blue_vs">McMaster University</code>
            <br />
            <code className="italic text-sm text-lightblue_vs">
              Bachelor's of Software Engineering Coop
            </code>
            <br />
            <code className="text-xs text-brown_vs">
              • Sept 2021 - April 2026
            </code>
            <br />
            <code className="text-xs text-blue_vs">Relevant Courses: </code>
            <code className="text-xs text-white_vs">
              {" "}
              Software Design, Concurrent System Design, Object-Oriented
              Programming, Data Structures and Algorithms, Computer
              Architecture, Databases
            </code>
          </div>
        </div>
        <div className="flex flex-row pt-10">
          <div className="w-1/4">
            <code className="text-yellow_vs">Experience</code>
          </div>
          <div className="w-3/4">
            <code className="text-blue_vs">Software Developer Intern</code>
            <br />
            <code className="italic text-sm text-lightblue_vs">
              SOTI Inc - Missisauga, Canada{" "}
            </code>
            <br />
            <code className="text-xs text-brown_vs">
              • May 2024 - December 2024
            </code>
            <br />
            <code className="text-sm">
              <br />• Contributed to the development and optimization of user
              interfaces and frontend features using Angular, HTML, CSS, and
              TypeScript, enhancing the functionality and user experience of
              SOTI Internet of Things (IoT) platform.
              <br />• Participated in Agile development processes, including
              daily stand-ups and three-week sprints, utilizing Jira for issue
              tracking and Git for version control, ensuring effective project
              management and team collaboration
              <br />• Implemented continuous integration and deployment (CI/CD)
              pipelines with Jenkins, maintaining a stable and reliable codebase
              through automated testing and regular updates.
              <br />• Collaborated with QA teams to develop and execute test
              plans, leveraging testing tools to ensure the quality and
              reliability of the software. Assisted in identifying and fixing
              bugs to improve overall performance.
              <br />• Collaborated with a team of developers, gaining exposure
              to a wide range of tasks from fixing bugs to developing new
              features, providing hands-on experience in a dynamic work
              environment
            </code>
          </div>
        </div>
        <div className="flex flex-row pt-10">
          <div className="w-1/4">
            <code className="text-yellow_vs"></code>
          </div>
          <div className="w-3/4">
            <code className="text-blue_vs">Web Developer</code>
            <br />
            <code className="italic text-sm text-lightblue_vs">
              McMaster Sumobot - Hamilton, Canada{" "}
            </code>
            <br />
            <code className="text-xs text-brown_vs">
              • May 2024 - December 2024
            </code>
            <br />
            <code className="text-sm">
              <br />• Managed and maintained a highly dynamic website, employing
              a versatile tech stack including Vue.js, HTML, Javascript, CSS,
              and Node.js. Presented a seamless user experience, consistently
              meeting user expectations.
              <br />• Collaborated with a diverse team to ensure timely updates
              based on client feedback. Streamlined development processes with
              Git, Yarn, and Node.js, and enhanced interactivity using
              innovative JavaScript techniques.
            </code>
          </div>
        </div>

        {/* <div className="flex flex-row pt-10 flex-wrap">
          <div className="w-1/4">
            <code className="text-yellow_vs">Skills</code>
          </div>
          <div className="w-3/4">
            <code className="text-sm">
              <br />• Nulla tristique luctus lacinia. Nullam ut tortor arcu.
              <br />• Aenean in mi non leo placerat suscipit a eget odio.
              <br />• Vivamus et dolor odio.
              <br />• Suspendisse tempus interdum eros, et bibendum massa tempus
              vitae.
              <br />• Sed in aliquam ligula. Sed eget orci tortor.
              <br />• Pellentesque laoreet laoreet justo, sed efficitur sapien
              tincidunt eu.
              <br />• Nulla tempor nunc eu molestie volutpat. Nunc a accumsan
              dolor.
              <br />• Duis ut congue dui.
            </code>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Resume;
