// import { useNavigate } from "react-router-dom";

// Import images
import emailLogo from "../assets/logo/email-logo.png";
import waLogo from "../assets/logo/wa-logo.png";
import telegramLogo from "../assets/logo/telegram-logo.png";
import linkedinLogo from "../assets/logo/linkedin-logo.png";
import myPhoto from "../assets/my-photo.jpeg";
import cvFile from "../assets/Fiorentika-Devasha-Ramadhina-CV-DA.pdf";
import pythonLogo from "../assets/logo/python-logo.png";
import sqlLogo from "../assets/logo/sql-logo.png";
import powerbiLogo from "../assets/logo/powerbi-logo.png";
import tableauLogo from "../assets/logo/tableau-logo.png";
import lookerLogo from "../assets/logo/looker-logo.png";
import mysqlLogo from "../assets/logo/mysql-logo.png";
import postgresqlLogo from "../assets/logo/postgresql-logo.png";
import mongodbLogo from "../assets/logo/mongodb-logo.png";
import githubLogo from "../assets/logo/github.png";
import awss3Logo from "../assets/logo/aws-s3-logo.png";
import awsdmsLogo from "../assets/logo/aws-dms-logo.png";
import awsathenaLogo from "../assets/logo/aws-athena-logo.png";
import awsredshiftLogo from "../assets/logo/redshift-logo.png";
import awsiamLogo from "../assets/logo/aws-iam-logo.png";
import reactLogo from "../assets/logo/react-logo.png";
import nextLogo from "../assets/logo/next-logo.png";
import nodeLogo from "../assets/logo/node-logo.png";
import linuxLogo from "../assets/logo/linux-command-logo.png";
import trelloLogo from "../assets/logo/trello-logo.png";
import mssql from "../assets/logo/mssql-logo.png";
import airflowLogo from "../assets/logo/airflow-logo.png";
import fastapiLogo from "../assets/logo/fastapi-logo.png";
import dockerLogo from "../assets/logo/docker-logo.png";

interface Contact {
  name: string;
  img: string;
  link: string;
  desc: string;
}
interface Experience {
  id: number;
  name: string;
  duration: string;
  jobtitle: string;
  desc: string[];
}
interface CorePoint {
  id: number;
  name: string;
  skills: string;
}

interface Skill {
  name: string;
  img: string;
}

interface Project {
  id: number;
  title: string;
  skills: string[];
}

interface Course {
  title: string;
  link: string;
}

function Home() {
  // const navigate = useNavigate();

  const cores: CorePoint[] = [
    {
      id: 1,
      name: "Data Engineering",
      skills:
        "Apache Airflow, ETL/ELT Pipelines, AWS S3, Redshift, Athena, DMS",
    },
    {
      id: 2,
      name: "Data Analysis & BI",
      skills: "Python, SQL, Tableau, Power BI, Looker, Excel",
    },
    {
      id: 3,
      name: "Database Systems",
      skills:
        "PostgreSQL, MySQL, Microsoft SQL Server, MongoDB, Amazon Redshift",
    },
  ];
  const skills: Skill[] = [
    { name: "Python", img: pythonLogo },
    { name: "SQL", img: sqlLogo },
    { name: "Apache Airflow", img: airflowLogo },

    { name: "Amazon S3", img: awss3Logo },
    { name: "AWS DMS", img: awsdmsLogo },
    { name: "AWS IAM", img: awsiamLogo },
    { name: "Amazon Redshift", img: awsredshiftLogo },
    { name: "AWS Athena", img: awsathenaLogo },

    { name: "Tableau", img: tableauLogo },
    { name: "Power BI", img: powerbiLogo },
    { name: "Looker", img: lookerLogo },

    { name: "PostgreSQL", img: postgresqlLogo },
    { name: "MySQL", img: mysqlLogo },
    { name: "Microsoft SQL Server", img: mssql },
    { name: "MongoDB", img: mongodbLogo },

    { name: "FastAPI", img: fastapiLogo },
    { name: "Docker", img: dockerLogo },

    { name: "React", img: reactLogo },
    { name: "Next.js", img: nextLogo },
    { name: "Node.js", img: nodeLogo },

    { name: "GitHub", img: githubLogo },
    { name: "Linux", img: linuxLogo },
    { name: "Trello", img: trelloLogo },
  ];
  const experience: Experience[] = [
    {
      id: 1,
      name: "PT Pos Indonesia – Bootcamp Digital Talent II",
      duration: "Jan 2024 – Jul 2024",
      jobtitle: "Bootcamp Program",
      desc: [
        "Developed internal systems (ITMS NOVA, SiPenDi) in a cross-functional team.",
        "Designed business processes, application workflows, and database schemas.",
        "Created and optimized entity relationship diagrams for relational data modeling.",
      ],
    },
    {
      id: 2,
      name: "PT Pos Indonesia",
      duration: "Aug 2024 – Present",
      jobtitle: "Reporting and Data Analytics",
      desc: [
        "Developed, maintained, and automated 20+ production ETL pipelines using Apache Airflow, Python, and SQL across databases and cloud storage.",
        "Monitored workflow execution, investigated failures, and resolved pipeline issues.",
        "Processed, transformed, and validated datasets to support reporting and analytics.",
        "Developed 10+ Tableau dashboards using calculated fields and custom measures.",
        "Performed end-to-end data analysis using Python, SQL, Excel, and Tableau.",
        "Delivered analytical reports and actionable business insights.",
      ],
    },
    {
      id: 3,
      name: "Additional Experience",
      duration: "2025",
      jobtitle: "Achievements & Software Engineering",
      desc: [
        "Awarded 2nd Place in PosIND Innovation Award 2025 for developing a digital shipment receipt solution using Next.js and Node.js.",
        "Developed and documented REST APIs using FastAPI, Pydantic, and Docker.",
      ],
    },
  ];
  const projectsData: Project[] = [
    {
      id: 1,
      title: "Enterprise ETL & Data Integration Pipelines (20+ Pipelines)",
      skills: [
        "Python",
        "SQL",
        "Apache Airflow",
        "AWS S3",
        "Redshift",
        "Athena",
      ],
    },
    // {
    //   id: 2,
    //   title: "Data Warehouse & Reporting Data Mart Development",
    //   skills: ["SQL", "Redshift", "Data Warehousing"],
    // },
    {
      id: 3,
      title: "Business Intelligence Dashboards (10+ Tableau Dashboards)",
      skills: ["Tableau", "SQL"],
    },
    {
      id: 4,
      title: "Sentiment Analysis API",
      skills: ["Python", "FastAPI", "Docker"],
    },
    {
      id: 5,
      title: "Route Optimization API",
      skills: ["Python", "FastAPI", "Docker"],
    },
    {
      id: 6,
      title: "Nusantara Journey Card - Digital Shipment Receipt Solution",
      skills: ["Next.js", "Node.js"],
    },
  ];
  // const projectsData: Project[] = [
  //   {
  //     id: 1,
  //     title: "PosAja! Customer Engagement Dashboard",
  //     skills: ["Tableau"],
  //   },
  //   {
  //     id: 2,
  //     title: "PosAja! Digital Business Performance Dashboard",
  //     skills: ["Tableau"],
  //   },
  //   {
  //     id: 3,
  //     title: "Remittance Fraud Risk Dashboard",
  //     skills: ["Tableau"],
  //   },
  //   {
  //     id: 4,
  //     title: "Cheap Food Market Operation Dashboard",
  //     skills: ["Tableau"],
  //   },
  //   {
  //     id: 5,
  //     title: "PLN Transaction Dashboard",
  //     skills: ["Tableau"],
  //   },
  //   {
  //     id: 6,
  //     title: "Sentiment Analysis API",
  //     skills: ["Python", "FastAPI", "Docker"],
  //   },
  //   {
  //     id: 7,
  //     title: "Route Optimization API",
  //     skills: ["Python", "FastAPI", "Docker"],
  //   },
  //   {
  //     id: 8,
  //     title:
  //       "Analysis of Suspected Fraud Cases in Cash-In and Cash-Out Activities at Counters",
  //     skills: ["Python", "Tableau"],
  //   },
  //   {
  //     id: 9,
  //     title: "Analysis Report of the Revenue Decline in PosAja!",
  //     skills: ["Python", "Tableau"],
  //   },
  //   {
  //     id: 10,
  //     title:
  //       "Analysis Report of BPJS Employment Contribution Payment Retention",
  //     skills: ["Python", "Tableau"],
  //   },
  //   {
  //     id: 11,
  //     title: "Analysis Report of Delivery Performance",
  //     skills: ["Python", "Tableau"],
  //   },
  //   {
  //     id: 12,
  //     title: "Bootcamp Digital Talent II Project",
  //     skills: ["Figma", "MySQL"],
  //   },
  //   {
  //     id: 13,
  //     title: "Predicting House Prices – Python (Study Case)",
  //     skills: ["Python", "Machine Learning"],
  //   },
  //   {
  //     id: 14,
  //     title: "Rocket Landing Predictions – Python (Study Case)",
  //     skills: ["Python", "Machine Learning"],
  //   },
  //   {
  //     id: 15,
  //     title: "Credit Score Classification – Python (Study Case)",
  //     skills: ["Python", "Machine Learning"],
  //   },
  //   {
  //     id: 16,
  //     title: "Customer Churn Prediction – Python (Study Case)",
  //     skills: ["Python", "Machine Learning"],
  //   },
  // ];
  const courses: Course[] = [
    {
      title: "IBM Data Science Professional Certificate (10 courses total)",
      link: "https://drive.google.com/drive/folders/1-M90IsxKI9EnTzd16UZQMAa-h__uRdWm?usp=drive_link",
    },
    {
      title: "IBM Data Analyst Specialization (9 courses total)",
      link: "https://drive.google.com/drive/folders/1rU-RCfQUUhXJJoGX2kkW8dIGHvsXANPc?usp=drive_link",
    },
    {
      title: "Data Visualization with Tableau Specialization (5 courses total)",
      link: "https://drive.google.com/drive/folders/1hAIuSXfB2Tp8fGBcX-pSeYfPJuznC9Ch?usp=drive_link",
    },
    {
      title: "The Ultimate MySQL Bootcamp",
      link: "https://drive.google.com/file/d/1sqJQcbSgrww1QLOOH0sFsqrKgvEzJsqL/view?usp=drive_link",
    },
    {
      title: "AWS Cloud Technical Essentials",
      link: "https://drive.google.com/file/d/1ZNg4bOtBFaCWqVPfwlyME5keFDJw8XLK/view?usp=drive_link",
    },
    {
      title: "Introduction to MongoDB",
      link: "https://drive.google.com/file/d/1ZLHfKJc3qX3eoszeHtvbIUHqinI81Iyl/view?usp=sharing",
    },
    {
      title: "Getting Started with Git and GitHub",
      link: "https://drive.google.com/file/d/1Wm27hXAswvRA_F52Vtkb7f1ay_L3ZlBk/view?usp=drive_link",
    },
  ];
  const contacts: Contact[] = [
    {
      name: "Email",
      img: emailLogo,
      link: "mailto:fiorentikadr@gmail.com",
      desc: "fiorentikadr@gmail.com",
    },
    {
      name: "WhatsApp",
      img: waLogo,
      link: "https://wa.me/+6281230192255",
      desc: "+62 812-3019-2255",
    },
    {
      name: "Telegram",
      img: telegramLogo,
      link: "https://t.me/fiorentkdr",
      desc: "@fiorentkdr",
    },
    {
      name: "LinkedIn",
      img: linkedinLogo,
      link: "https://www.linkedin.com/in/fiorentika-devasha-ramadhina-936788228/",
      desc: "Fiorentika Devasha Ramadhina",
    },
    {
      name: "GitHub",
      img: githubLogo,
      link: "https://github.com/fiorentk",
      desc: "fiorentk",
    },
  ];

  return (
    <div className="p-6 max-w-6xl mx-auto flex flex-col items-center gap-12">
      {/* About Me */}
      <div className="w-full flex flex-col md:flex-row items-center gap-8 bg-white border border-sky-200 rounded-xl shadow-md p-8 hover:border-sky-500 hover:shadow-lg hover:scale-105 transition-transform duration-200">
        <img
          src={myPhoto}
          alt="My Photo"
          className="w-40 h-40 md:w-48 md:h-48 rounded-full shadow-lg object-cover"
        />
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl font-bold mb-3 text-sky-600">
            Fiorentika Devasha Ramadhina
          </h1>
          <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-5">
            <span className="bg-sky-200 text-sky-700 px-4 py-2 rounded-full text-sm">
              Data Engineer
            </span>
            <span className="bg-sky-200 text-sky-700 px-4 py-2 rounded-full text-sm">
              Data Analyst
            </span>
            <span className="border border-sky-200 text-sky-700 px-4 py-2 rounded-full text-sm">
              ID Indonesia
            </span>
            <span className="border border-sky-200 text-sky-700 px-4 py-2 rounded-full text-sm">
              Remote/WFH Only
            </span>
          </div>
          <p className="text-gray-700 mb-6 text-base md:text-lg">
            Data Engineer and Data Analyst with 2+ years of experience building
            ETL pipelines, developing dashboards, and delivering insights for
            reporting and analytics. Proficient in Python, SQL, Apache Airflow,
            AWS, and Tableau. Familiar with software engineering concepts. Fast
            learner and adaptable.
          </p>
          <h2 className="text-sky-600 font-semibold mb-3 text-lg">
            Core Expertise:
          </h2>
          {cores.map((core) => (
            <ul key={core.id} className="space-y-2 text-left">
              <li className="mt-1">
                <span className="bg-sky-200 text-sky-700 px-3 py-1 rounded-full text-xs mr-2">
                  {core.name}
                </span>
                {core.skills}
              </li>
            </ul>
          ))}
        </div>
      </div>
      {/* Education & Work Experience */}
      <div className="w-full flex flex-col items-center gap-8">
        <h1 className="text-3xl font-bold text-center text-sky-600">
          Education & Work Experiences
        </h1>
        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center">
          {experience.map((exp) => (
            <div
              key={exp.id}
              className="bg-white border border-sky-200 rounded-xl shadow-md p-8 w-80 flex flex-col hover:shadow-lg hover:border-sky-500 hover:scale-105 transition-transform duration-200"
            >
              <h3 className="text-lg font-semibold text-sky-600 text-center mb-1">
                {exp.name}
              </h3>
              <p className="text-gray-700 text-center mb-1">{exp.duration}</p>
              <p className="text-gray-500 text-sm text-center mb-3">
                {exp.jobtitle}
              </p>
              {exp.desc.map((text, i) => (
                <ul
                  key={i}
                  className="text-gray-700 text-sm list-disc list-inside space-y-1"
                >
                  <li>{text}</li>
                </ul>
              ))}
            </div>
          ))}
        </div>
      </div>
      {/* Skills & Tools */}
      <div className="w-full flex flex-col gap-8">
        <h1 className="text-3xl font-bold text-center text-sky-600">
          Skills & Tools
        </h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="bg-white border border-sky-200 rounded-xl shadow-md p-5 flex flex-col items-center justify-center hover:shadow-lg hover:border-sky-500 hover:scale-105 transition-transform duration-200"
            >
              <img
                src={skill.img}
                alt={skill.name}
                className="h-14 object-contain mb-3"
              />

              <span className="text-sm font-medium text-gray-700 text-center">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
      {/* Projects */}
      <div className="w-full flex flex-col gap-6">
        <h1 className="text-3xl font-bold text-center text-sky-600">
          Projects
        </h1>
        {/* <button
          onClick={() => navigate("/projects")}
          className="mx-auto text-sky-600 font-semibold hover:underline transition-all duration-200"
        >
          See details here ➔
        </button> */}
        <div className="grid gap-4 grid-cols-1">
          {projectsData.map((project) => (
            <li
              key={project.id}
              className="flex items-center justify-between bg-white border border-sky-200 rounded-xl shadow-md px-4 py-3 hover:shadow-lg hover:border-sky-500 transition-transform duration-200"
            >
              <span className="text-sm font-medium">{project.title}</span>
              <div className="flex flex-wrap gap-2 mt-auto">
                {/* {project.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="bg-sky-100 text-sky-700 px-3 py-1 rounded-full text-xs font-semibold"
                  >
                    {skill}
                  </span>
                ))} */}
              </div>
            </li>
          ))}
        </div>
      </div>

      {/* Courses */}
      <div className="w-full flex flex-col gap-6">
        <h1 className="text-3xl font-bold text-center text-sky-600">Courses</h1>
        <div className="grid gap-4 grid-cols-1">
          {courses.map((course, idx) => (
            <li
              key={idx}
              className="flex items-center justify-between bg-white border border-sky-200 rounded-xl shadow-md px-4 py-3 hover:shadow-lg hover:border-sky-500 transition-transform duration-200"
            >
              <span className="text-sm font-medium">{course.title}</span>
              <a
                href={course.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-600 font-semibold hover:underline flex items-center gap-1"
              >
                View
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 3h7m0 0v7m0-7L10 14"
                  />
                </svg>
              </a>
            </li>
          ))}
        </div>
      </div>

      {/* Contact Me */}
      <div className="w-full flex flex-col items-center gap-6">
        <h1 className="text-3xl font-bold mb-6 text-center text-sky-600">
          Get in Touch
        </h1>
        <p className="mb-8 text-center max-w-md text-gray-700">
          Reach me via Email, WhatsApp, Telegram, or LinkedIn. Click the card
          below to contact me. You can also check out my projects on GitHub.
        </p>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-5 justify-center">
          {contacts.map((contact) => (
            <a
              key={contact.name}
              href="#"
              onClick={(e) => {
                e.preventDefault();
                if (contact.name === "Email") {
                  navigator.clipboard.writeText(contact.desc);
                  alert("Email copied to clipboard!");
                } else {
                  window.open(contact.link, "_blank");
                }
              }}
              className="bg-white border border-sky-200 rounded-xl shadow-md p-6 flex flex-col items-center hover:shadow-lg hover:border-sky-500 hover:scale-105 transition-transform duration-200"
            >
              <img
                src={contact.img}
                alt={`${contact.name} Logo`}
                className="w-20 h-20 sm:w-24 sm:h-24 mb-3"
              />
              <span className="text-lg font-semibold text-sky-600">
                {contact.name}
              </span>
              <span className="text-sm text-gray-500 mt-1 text-center">
                {contact.desc}
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* Download CV */}
      <div>
        <a
          href={cvFile}
          download
          className="bg-sky-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-sky-600 transition-colors duration-200"
        >
          Download My CV Here
        </a>
      </div>
    </div>
  );
}

export default Home;
