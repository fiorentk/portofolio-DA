import { useNavigate } from "react-router-dom";

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
import awsLogo from "../assets/logo/aws-logo.png";
import reactLogo from "../assets/logo/react-logo.png";
import nextLogo from "../assets/logo/next-logo.png";
import nodeLogo from "../assets/logo/node-logo.png";
import linuxLogo from "../assets/logo/linux-command-logo.png";
import trelloLogo from "../assets/logo/trello-logo.png";
import microsoftLogo from "../assets/logo/microsoft-logo.png";
import airflowLogo from "../assets/logo/airflow-logo.png";

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
  title: string;
  img: string;
  img2?: string;
  img3?: string;
  points: string[];
}

interface OtherSkill {
  title: string;
  img: string;
  img2?: string;
  img3?: string;
  points: string[];
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
  const navigate = useNavigate();

  const cores: CorePoint[] = [
    {
      id: 1,
      name: "Programming & Analysis",
      skills: "Python, SQL, Excel",
    },
    {
      id: 2,
      name: "Dashboards & Visualization",
      skills: "Tableau, Power BI, Looker",
    },
    {
      id: 3,
      name: "Database Systems",
      skills: "MySQL, PostgreSQL, SQL Server, Redshift, MongoDB",
    },
  ];
  const skills: Skill[] = [
    {
      title: "Programming & Analysis",
      img: pythonLogo,
      img2: sqlLogo,
      img3: microsoftLogo,
      points: [
        "Python: perform data cleaning, analysis, and visualization using NumPy, Pandas, Matplotlib, and Seaborn; build basic ML models with scikit-learn",
        "SQL: write queries with joins and aggregations to extract data for analysis",
        "Office: analyze data in Excel (Pivot Tables, XLOOKUP, SUMIFS, charts) and create reports using PowerPoint and Word",
      ],
    },
    {
      title: "Data Visualization",
      img: tableauLogo,
      img2: powerbiLogo,
      img3: lookerLogo,
      points: [
        "Design and build interactive dashboards and analytical reports using Tableau, Power BI, and Looker",
      ],
    },
    {
      title: "Databases",
      img: mysqlLogo,
      img2: postgresqlLogo,
      img3: mongodbLogo,
      points: [
        "Manage and query relational databases such as MySQL, PostgreSQL, Amazon Redshift, and SQL Server",
        "Handle NoSQL databases using MongoDB",
      ],
    },
  ];

  const additionalSkills: OtherSkill[] = [
    {
      title: "Web Development",
      img: nextLogo,
      img2: nodeLogo,
      img3: reactLogo,
      points: [
        "Build responsive web interfaces using React.js and Next.js",
        "Develop and maintain APIs using FastAPI and Node.js",
      ],
    },
    {
      title: "ETL / Data Pipelines",
      img: airflowLogo,
      points: [
        "Design, maintain, and schedule ETL pipelines using Apache Airflow for data workflows",
      ],
    },
    {
      title: "AWS",
      img: awsLogo,
      points: [
        "Manage cloud storage and data migration using Amazon S3 and DMS",
        "Set up IAM roles and permissions for secure access control",
      ],
    },
    {
      title: "Git/GitHub",
      img: githubLogo,
      points: [
        "Use Git for version control, branching, and pull request workflows",
      ],
    },
    {
      title: "Linux & Shell Scripting",
      img: linuxLogo,
      points: [
        "Use basic Linux commands and write shell scripts for automation",
      ],
    },
    {
      title: "Trello (Project Management)",
      img: trelloLogo,
      points: ["Manage tasks and track project progress using Trello boards"],
    },
  ];
  const experience: Experience[] = [
    {
      id: 1,
      name: "Airlangga University",
      duration: "Aug 2018 – Nov 2022 | GPA 3.42 / 4.00",
      jobtitle: "Bachelor's Degree in Statistics",
      desc: [
        "Learned core statistical methods such as hypothesis testing, regression (linear & logistic), ANOVA, and time series analysis.",
        "Applied R, C++, Excel, Minitab, SPSS, Tableau, and ArcView GIS for academic projects and data analysis tasks.",
      ],
    },
    {
      id: 2,
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
      id: 3,
      name: "PT Pos Indonesia – Reporting Data Analytics",
      duration: "Aug 2024 – Nov 2025",
      jobtitle: "Data Analyst",
      desc: [
        "Performed end-to-end data analysis using Python, SQL, and Excel, and produced analytical reports with actionable insights.",
        "Built interactive Tableau dashboards with calculated fields and custom measures.",
      ],
    },
    {
      id: 4,
      name: "PT Pos Indonesia – Reporting Data Analytics",
      duration: "Dec 2025 – present",
      jobtitle: "Data Engineer",
      desc: [
        "Built and maintained ETL pipelines using Apache Airflow with Python and SQL.",
        "Monitored workflows and troubleshot failures to ensure reliable data processing.",
        "Processed and transformed data to deliver analytics-ready datasets.",
        "Developed and documented REST APIs using FastAPI and Pydantic.",
      ],
    },
  ];

  const projectsData: Project[] = [
    {
      id: 1,
      title: "PosAja! Customer Engagement Dashboard",
      skills: ["Tableau"],
    },
    {
      id: 2,
      title: "PosAja! Digital Business Performance Dashboard",
      skills: ["Tableau"],
    },
    {
      id: 3,
      title: "Remittance Fraud Risk Dashboard",
      skills: ["Tableau"],
    },
    {
      id: 4,
      title: "Cheap Food Market Operation Dashboard",
      skills: ["Tableau"],
    },
    {
      id: 5,
      title: "PLN Transaction Dashboard",
      skills: ["Tableau"],
    },
    {
      id: 6,
      title: "Sentiment Analysis API",
      skills: ["Python", "FastAPI", "Docker"],
    },
    {
      id: 7,
      title: "Route Optimization API",
      skills: ["Python", "FastAPI", "Docker"],
    },
    {
      id: 8,
      title:
        "Analysis of Suspected Fraud Cases in Cash-In and Cash-Out Activities at Counters",
      skills: ["Python", "Tableau"],
    },
    {
      id: 9,
      title: "Analysis Report of the Revenue Decline in PosAja!",
      skills: ["Python", "Tableau"],
    },
    {
      id: 10,
      title:
        "Analysis Report of BPJS Employment Contribution Payment Retention",
      skills: ["Python", "Tableau"],
    },
    {
      id: 11,
      title: "Analysis Report of Delivery Performance",
      skills: ["Python", "Tableau"],
    },
    {
      id: 12,
      title: "Bootcamp Digital Talent II Project",
      skills: ["Figma", "MySQL"],
    },
    {
      id: 13,
      title: "Predicting House Prices – Python (Study Case)",
      skills: ["Python", "Machine Learning"],
    },
    {
      id: 14,
      title: "Rocket Landing Predictions – Python (Study Case)",
      skills: ["Python", "Machine Learning"],
    },
    {
      id: 15,
      title: "Credit Score Classification – Python (Study Case)",
      skills: ["Python", "Machine Learning"],
    },
    {
      id: 16,
      title: "Customer Churn Prediction – Python (Study Case)",
      skills: ["Python", "Machine Learning"],
    },
  ];
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
            Data Analyst with 2+ years of experience using Python, SQL, Excel,
            and Tableau. Experienced in data querying, analysis, dashboard
            development, and reporting. Familiar with data engineering and
            software engineering concepts. Fast learner, adaptable, and
            results-oriented.
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

      {/* Skills */}
      <h1 className="text-3xl font-bold text-center text-sky-600">Skills</h1>
      <div className="flex flex-wrap justify-center gap-6 mb-4">
        {skills.map((skill) => (
          <div
            key={skill.title}
            className="bg-white border border-sky-200 rounded-xl shadow-md p-5 w-64 text-center hover:shadow-lg hover:border-sky-500 hover:scale-105 transition-transform duration-200"
          >
            <div className="flex justify-center gap-2 mb-3">
              <img
                src={skill.img}
                alt={skill.title}
                className="h-12 object-contain"
              />
              {skill.img2 && (
                <img src={skill.img2} alt="" className="h-12 object-contain" />
              )}
              {skill.img3 && (
                <img src={skill.img3} alt="" className="h-12 object-contain" />
              )}
            </div>
            <h3 className="text-lg font-semibold mb-2 text-sky-600">
              {skill.title}
            </h3>
            <ul className="text-gray-700 text-sm text-left list-disc pl-5 space-y-1">
              {skill.points.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Additional Skills */}
      <h1 className="text-3xl font-bold text-center text-sky-600">
        Additional Skills
      </h1>
      <div className="flex flex-wrap justify-center gap-6 mb-16">
        {additionalSkills.map((skill) => (
          <div
            key={skill.title}
            className="bg-white border border-sky-200 rounded-xl shadow-md p-5 w-64 text-center hover:shadow-lg hover:border-sky-500 hover:scale-105 transition-transform duration-200"
          >
            <div className="flex justify-center gap-2 mb-3">
              <img
                src={skill.img}
                alt={skill.title}
                className="h-12 object-contain"
              />
              {skill.img2 && (
                <img src={skill.img2} alt="" className="h-12 object-contain" />
              )}
              {skill.img3 && (
                <img src={skill.img3} alt="" className="h-12 object-contain" />
              )}
            </div>
            <h3 className="text-lg font-semibold mb-2 text-sky-600">
              {skill.title}
            </h3>
            <ul className="text-gray-700 text-sm text-left list-disc pl-5 space-y-1">
              {skill.points.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
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

      {/* Projects */}
      <div className="w-full flex flex-col gap-6">
        <h1 className="text-3xl font-bold text-center text-sky-600">
          Projects
        </h1>
        <button
          onClick={() => navigate("/projects")}
          className="mx-auto text-sky-600 font-semibold hover:underline transition-all duration-200"
        >
          See details here ➔
        </button>
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
