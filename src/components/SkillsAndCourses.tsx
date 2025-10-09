// Import images
import pythonLogo from "../assets/logo/python-logo.png";
import pandasLogo from "../assets/logo/pandas-logo.png";
import jupyterLogo from "../assets/logo/jupyter-logo.png";
import powerbiLogo from "../assets/logo/powerbi-logo.png";
import tableauLogo from "../assets/logo/tableau-logo.png";
import lookerLogo from "../assets/logo/looker-logo.png";
import mysqlLogo from "../assets/logo/mysql-logo.png";
import postgresqlLogo from "../assets/logo/postgresql-logo.png";
import mongodbLogo from "../assets/logo/mongodb-logo.png";
import githubLogo from "../assets/logo/github.png";
import awsLogo from "../assets/logo/aws-logo.png";
import reactLogo from "../assets/logo/react-logo.png";
import jsLogo from "../assets/logo/js-logo.png";
import tsLogo from "../assets/logo/ts-logo.png";
import linuxLogo from "../assets/logo/linux-command-logo.png";
import trelloLogo from "../assets/logo/trello-logo.png";
import microsoftLogo from "../assets/logo/microsoft-logo.png";

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
}

interface Course {
  title: string;
  link: string;
}

function SkillsAndCourses() {
  const skills: Skill[] = [
    {
      title: "Python",
      img: pythonLogo,
      img2: jupyterLogo,
      img3: pandasLogo,
      points: [
        "Data analysis (Jupyter Notebook, NumPy, Pandas)",
        "Visualization (Matplotlib, Seaborn)",
        "ML (Scikit-learn)",
        "API development (FastAPI, Pydantic)",
      ],
    },
    {
      title: "Databases",
      img: mysqlLogo,
      img2: postgresqlLogo,
      img3: mongodbLogo,
      points: [
        "Relational: MySQL, PostgreSQL, Amazon Redshift, Microsoft SQL Server",
        "NoSQL: MongoDB",
      ],
    },
    {
      title: "Data Visualization",
      img: tableauLogo,
      img2: powerbiLogo,
      img3: lookerLogo,
      points: [
        "Design dashboards in Tableau, Power BI, and Looker",
        "Integrate multiple data sources for reporting",
      ],
    },
  ];

  const otherSkills: OtherSkill[] = [
    {
      title: "AWS (EC2, S3, IAM, RDS)",
      img: awsLogo,
    },
    {
      title: "Microsoft Office (Excel, PowerPoint, Word)",
      img: microsoftLogo,
    },
    {
      title: "Git/GitHub (repos, commits, branches, PRs)",
      img: githubLogo,
    },
    {
      title: "Linux basics & shell scripting",
      img: linuxLogo,
    },
    {
      title: "JavaScript, TypeScript, React.js",
      img: jsLogo,
      img2: tsLogo,
      img3: reactLogo,
    },
    {
      title: "Trello (Project management tools)",
      img: trelloLogo,
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
      title: "Getting Started with Git and GitHub",
      link: "https://drive.google.com/file/d/1Wm27hXAswvRA_F52Vtkb7f1ay_L3ZlBk/view?usp=drive_link",
    },
  ];

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">Skills</h2>
      <div className="flex flex-wrap justify-center gap-6 mb-16">
        {skills.map((skill) => (
          <div
            key={skill.title}
            className="bg-white border border-gray-200 rounded-xl shadow-md p-5 w-64 text-center hover:shadow-lg hover:border-sky-500 hover:scale-105 transition-all duration-200"
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
            <h3 className="text-lg font-semibold mb-2">{skill.title}</h3>
            <ul className="text-gray-800 text-sm text-left list-disc pl-5 space-y-1">
              {skill.points.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <h3 className="text-xl font-bold mb-6 text-center">Other Tools</h3>
      <div className="flex flex-wrap justify-center gap-6 mb-16">
        {otherSkills.map((otherSkill) => (
          <div
            key={otherSkill.title}
            className="bg-white border border-gray-200 rounded-xl shadow-md p-5 w-64 text-center hover:shadow-lg hover:border-sky-500 hover:scale-105 transition-all duration-200"
          >
            <div className="flex justify-center gap-2 mb-3">
              <img
                src={otherSkill.img}
                alt={otherSkill.title}
                className="h-12 object-contain"
              />
              {otherSkill.img2 && (
                <img
                  src={otherSkill.img2}
                  alt=""
                  className="h-12 object-contain"
                />
              )}
              {otherSkill.img3 && (
                <img
                  src={otherSkill.img3}
                  alt=""
                  className="h-12 object-contain"
                />
              )}
            </div>
            <h3 className="text-lg font-semibold mb-2">{otherSkill.title}</h3>
          </div>
        ))}
      </div>

      <hr className="my-12 border-gray-300" />

      <h2 className="text-3xl font-bold mb-6 text-center">
        Course Certificates
      </h2>
      <ul className="space-y-3 max-w-xl mx-auto">
        {courses.map((course, idx) => (
          <li
            key={idx}
            className="flex items-center justify-between bg-white border border-gray-200 rounded-xl shadow-md px-4 py-3 hover:shadow-lg hover:border-sky-500 transition-all duration-200"
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
      </ul>
    </div>
  );
}

export default SkillsAndCourses;
