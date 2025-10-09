import { useState } from "react";

// Import images
import sentimentAPIImg from "../assets/real-API/sentiment-analyze-api.png";
import predictrouteAPIImg from "../assets/real-API/predict-route-api.jpg";
import itms from "../assets/Bootcamp-Digital-Talent-II-PROJECT/itms.png";
import sipendi from "../assets/Bootcamp-Digital-Talent-II-PROJECT/sipendi.png";
import bpjsImg from "../assets/dashboard/bpjs.png";
import deliveryPerformanceImg from "../assets/dashboard/delivery-performance.png";
import foodMarketImg from "../assets/dashboard/food-market.png";
import fraudCaseCiCoImg from "../assets/dashboard/fraud-case-ci-co.png";
import plnImg from "../assets/dashboard/pln.png";
import posajaEngagementImg from "../assets/dashboard/posaja-engagement.png";
import posajaPerformanceImg from "../assets/dashboard/posaja-performance.png";
import remittanceFraudImg from "../assets/dashboard/remittance-fraud.png";
import revenueDeclineImg from "../assets/dashboard/revenue-decline.png";
import rocketImg from "../assets/study-case/rockethome.png";
import rocket1 from "../assets/study-case/rocket1.png";
import rocket2 from "../assets/study-case/rocket2.png";
import rocket3 from "../assets/study-case/rocket3.png";
import rocket4 from "../assets/study-case/rocket4.png";
import churnImg from "../assets/study-case/churnhome.png";
import churn1 from "../assets/study-case/churn1.png";
import churn2 from "../assets/study-case/churn2.png";
import churn3 from "../assets/study-case/churn3.png";
import churn4 from "../assets/study-case/churn4.png";
import creditImg from "../assets/study-case/credithome.png";
import credit1 from "../assets/study-case/credit1.png";
import credit2 from "../assets/study-case/credit2.png";
import credit3 from "../assets/study-case/credit3.png";
import credit4 from "../assets/study-case/credit4.png";
import housepriceImg from "../assets/study-case/housepricehome.png";
import houseprice1 from "../assets/study-case/houseprice1.png";
import houseprice2 from "../assets/study-case/houseprice2.png";
import houseprice3 from "../assets/study-case/houseprice3.png";
import houseprice4 from "../assets/study-case/houseprice4.png";

interface Screenshot {
  title?: string;
  img: string;
}

interface Project {
  id: number;
  title: string;
  homeImg: string;
  repoLink?: string;
  shortDesc: string;
  longDesc?: string;
  tools?: string;
  screenshots: Screenshot[];
  skills: string[];
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "PosAja! Customer Engagement Dashboard",
    homeImg: posajaEngagementImg,
    shortDesc:
      "Dashboard tracking customer engagement metrics like access, active users, and registrations.",
    longDesc:
      "Displays number of accesses, active users, and new registrations, visualized with pie charts, bar charts, timelines, and tables (DoD, WoW, MoM, YoY). Equipped with multiple filters.",
    tools: "Tableau",
    screenshots: [{ img: posajaEngagementImg }],
    skills: ["Tableau"],
  },
  {
    id: 2,
    title: "PosAja! Digital Business Performance Dashboard",
    homeImg: posajaPerformanceImg,
    shortDesc:
      "Dashboard tracking PosAja! digital business KPIs like users, transactions, and revenue.",
    longDesc:
      "Displays active users, transactions, and revenue trends using pie charts, bar charts, timelines, and tables (DoD, WoW, MoM, YoY). Equipped with multiple filters.",
    tools: "Tableau",
    screenshots: [{ img: posajaPerformanceImg }],
    skills: ["Tableau"],
  },
  {
    id: 3,
    title: "Remittance Fraud Risk Dashboard",
    homeImg: remittanceFraudImg,
    shortDesc:
      "Dashboard highlighting potential fraud risks in remittance services.",
    longDesc:
      "This dashboard helps identify and monitor fraud risks in remittance services by detecting unusual activities and displaying the date, office location details, and the name of potential suspects.",
    tools: "Tableau",
    screenshots: [{ img: remittanceFraudImg }],
    skills: ["Tableau"],
  },
  {
    id: 4,
    title: "Cheap Food Market Operation Dashboard",
    homeImg: foodMarketImg,
    shortDesc:
      "Dashboard monitoring cheap food market operations and activities.",
    longDesc:
      "Display transaction, revenue, distribution, and stock using pie charts, bar charts, and timelines. Equipped with multiple filters.",
    tools: "Tableau",
    screenshots: [{ img: foodMarketImg }],
    skills: ["Tableau"],
  },
  {
    id: 5,
    title: "PLN Transaction Dashboard",
    homeImg: plnImg,
    shortDesc: "Dashboard tracking PLN transaction activities and performance.",
    longDesc:
      "Display PLN's transaction, revenue, and admin fee using pie charts, bar charts, and timelines. Equipped with multiple filters.",
    tools: "Tableau",
    screenshots: [{ img: plnImg }],
    skills: ["Tableau"],
  },
  {
    id: 6,
    title: "Sentiment Analysis API",
    homeImg: sentimentAPIImg,
    repoLink:
      "https://github.com/fiorentk/sentiment-analysis-google-maps-review",
    shortDesc:
      "API for automatic sentiment classification of Indonesian text reviews.",
    longDesc:
      "FastAPI + Docker backend for sentiment analysis of Indonesian text reviews. Uses HuggingFace transformer models to classify sentiment (positive, neutral, negative). Features text cleaning, typo correction, and ensemble outputs for higher accuracy.",
    tools: "Python, FastAPI, Docker",
    screenshots: [
      { title: "Sentiment Analysis API (Postman)", img: sentimentAPIImg },
    ],
    skills: ["Python", "FastAPI", "Docker"],
  },
  {
    id: 7,
    title: "Route Optimization API",
    homeImg: predictrouteAPIImg,
    repoLink: "https://github.com/fiorentk/Route-Optimization-Project",
    shortDesc: "API for delivery route optimization and planning.",
    longDesc:
      "Backend service built with Python FastAPI and Docker for delivery route optimization. Implements Google OR-Tools for TSP variants, OSRM & Geopy for distance calculations, and Pandas/Requests for data processing. Outputs efficient routes with fuel and cost estimates.",
    tools: "Python, FastAPI, Docker",
    screenshots: [
      { title: "Route Optimization API (Postman)", img: predictrouteAPIImg },
    ],
    skills: ["Python", "FastAPI", "Docker"],
  },
  {
    id: 8,
    title:
      "Analysis of Suspected Fraud Cases in Cash-In and Cash-Out Activities at Counters",
    homeImg: fraudCaseCiCoImg,
    shortDesc:
      "Analysis of suspected fraud in cash-in and cash-out activities.",
    longDesc:
      "Detailed fraud case analysis at counters focusing on cash-in and cash-out activities. Conducted with Python for data processing and Tableau for visualization to detect irregularities and patterns.",
    tools: "Python, Jupyter Notebook, Pandas, Matplotlib, Seaborn, Tableau",
    screenshots: [{ img: fraudCaseCiCoImg }],
    skills: ["Python", "Tableau"],
  },
  {
    id: 9,
    title: "Analysis Report of the Revenue Decline in PosAja!",
    homeImg: revenueDeclineImg,
    shortDesc: "Investigation of revenue decline patterns in PosAja! services.",
    longDesc:
      "Analysis of PosAja! revenue decline using Python and Tableau. Identified patterns, trends, and contributing factors to support business recovery strategies.",
    tools: "Python, Jupyter Notebook, Pandas, Matplotlib, Seaborn, Tableau",
    screenshots: [{ img: revenueDeclineImg }],
    skills: ["Python", "Tableau"],
  },
  {
    id: 10,
    title: "Analysis Report of BPJS Employment Contribution Payment Retention",
    homeImg: bpjsImg,
    shortDesc: "Retention analysis of BPJS Employment contribution payments.",
    longDesc:
      "Analytical report on BPJS Employment contribution payment retention. Used Python for data processing and Tableau for visualization to identify retention rates and improvement opportunities.",
    tools: "Python, Jupyter Notebook, Pandas, Matplotlib, Seaborn, Tableau",
    screenshots: [{ img: bpjsImg }],
    skills: ["Python", "Tableau"],
  },
  {
    id: 11,
    title: "Analysis Report of Delivery Performance Semester 1 2024",
    homeImg: deliveryPerformanceImg,
    shortDesc:
      "Performance analysis of delivery operations for Semester 1 2024.",
    longDesc:
      "Data analysis and visualization report on delivery performance for the first semester of 2024. Provided insights into delivery times, success rates, and operational challenges using Python and Tableau.",
    tools: "Python, Jupyter Notebook, Pandas, Matplotlib, Seaborn, Tableau",
    screenshots: [{ img: deliveryPerformanceImg }],
    skills: ["Python", "Tableau"],
  },
  {
    id: 12,
    title: "Bootcamp Digital Talent II Project",
    homeImg: itms,
    shortDesc:
      "Developed ITMS NOVA and SiPenDi applications as part of Digital Talent Bootcamp.",
    longDesc:
      "Contributed to the development of ITMS NOVA and SiPenDi applications during the Digital Talent Bootcamp. Responsibilities included preparing Business and System Requirement Specifications, designing business processes, creating app prototypes with Figma, and structuring MySQL databases.",
    tools: "Figma, MySQL",
    screenshots: [
      { title: "ITMS NOVA", img: itms },
      { title: "SiPenDi", img: sipendi },
    ],
    skills: ["Figma", "MySQL"],
  },
  {
    id: 13,
    title: "Predicting House Prices – Python (Study Case)",
    homeImg: housepriceImg,
    repoLink:
      "https://github.com/fiorentk/Predicting-House-Prices-in-King-County-USA-Using-Linear-Polynomial-and-Ridge-Regression",
    shortDesc:
      "Built a regression model to predict house prices based on key features using Python.",
    longDesc:
      "Developed a machine learning model to predict house prices using datasets containing property features such as area, number of rooms, and location. The workflow included data cleaning, exploratory data analysis (EDA), feature engineering, model training with Linear Regression and Random Forest, and performance evaluation using RMSE and R² metrics.",
    tools:
      "Python, Jupyter Notebook, Pandas, Matplotlib, Seaborn, Scikit-learn",
    screenshots: [
      { img: houseprice1 },
      { img: houseprice2 },
      { img: houseprice3 },
      { img: houseprice4 },
    ],
    skills: ["Python", "Machine Learning"],
  },
  {
    id: 14,
    title: "Rocket Landing Predictions – Python (Study Case)",
    homeImg: rocketImg,
    repoLink:
      "https://github.com/fiorentk/Data-Science-Odyssey-in-Rocket-Landing-Prediction-Capstone-Project",
    shortDesc:
      "Predicted SpaceX rocket landing success using classification models in Python.",
    longDesc:
      "Analyzed SpaceX Falcon 9 launch data to predict whether a rocket’s first stage would land successfully. The project covered data preprocessing, EDA, feature encoding, model training (Logistic Regression, Decision Tree, SVM), and model evaluation with accuracy and confusion matrix metrics.",
    tools:
      "Python, Jupyter Notebook, Pandas, Matplotlib, Seaborn, Scikit-learn",
    screenshots: [
      { img: rocket1 },
      { img: rocket2 },
      { img: rocket3 },
      { img: rocket4 },
    ],
    skills: ["Python", "Machine Learning"],
  },
  {
    id: 15,
    title: "Credit Score Classification – Python (Study Case)",
    homeImg: creditImg,
    repoLink:
      "https://github.com/fiorentk/Credit-Score-Classification-Using-Decision-Tree-KNN-and-Random-Forest",
    shortDesc:
      "Built a classification model to categorize customer credit scores as good, standard, or poor.",
    longDesc:
      "Performed data preprocessing and analysis on financial datasets to classify customer credit scores. Trained and compared multiple models (Logistic Regression, Random Forest, XGBoost) to find the best-performing algorithm. Evaluated results using precision, recall, and F1-score metrics.",
    tools: "Python, Scikit-learn, Pandas, Matplotlib, Seaborn",
    screenshots: [
      { img: credit1 },
      { img: credit2 },
      { img: credit3 },
      { img: credit4 },
    ],
    skills: ["Python", "Machine Learning"],
  },
  {
    id: 16,
    title: "Customer Churn Prediction – Python (Study Case)",
    homeImg: churnImg,
    repoLink:
      "https://github.com/fiorentk/Predicting-Customers-Churn-Using-Decision-Tree-and-Random-Forest-Project-from-HabisKerja",
    shortDesc:
      "Predicted customer churn using machine learning to identify at-risk users.",
    longDesc:
      "Built a churn prediction model using a telecom dataset. Processed data through cleaning, feature selection, and encoding. Trained multiple models (Logistic Regression, Random Forest, Gradient Boosting) to predict churn and analyzed feature importance to identify key churn drivers.",
    tools:
      "Python, Jupyter Notebook, Pandas, Matplotlib, Seaborn, Scikit-learn",
    screenshots: [
      { img: churn1 },
      { img: churn2 },
      { img: churn3 },
      { img: churn4 },
    ],
    skills: ["Python", "Machine Learning"],
  },
];

function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  if (selectedProject) {
    return (
      <div className="p-6 max-w-5xl mx-auto">
        <button
          className="mb-6 px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 flex items-center transition"
          onClick={() => setSelectedProject(null)}
        >
          <span className="mr-2">&#8592;</span> Back
        </button>

        <h1 className="text-3xl font-bold mb-4 text-gray-800">
          {selectedProject.title}
        </h1>

        <div className="mb-4 flex flex-wrap gap-2">
          {selectedProject.skills.map((skill) => (
            <div
              key={skill}
              className="bg-gray-100 px-3 py-1 rounded-lg text-sm shadow-sm"
            >
              {skill}
            </div>
          ))}
        </div>

        <div className="mb-4">
          {selectedProject.repoLink ? (
            <a
              href={selectedProject.repoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-800"
            >
              Repository
            </a>
          ) : (
            <p className="text-gray-500 italic">Private Repository</p>
          )}
        </div>

        <p className="mb-2">{selectedProject.shortDesc}</p>
        {selectedProject.longDesc && (
          <p className="mb-4 text-gray-700">{selectedProject.longDesc}</p>
        )}
        {selectedProject.tools && (
          <p className="mb-4">
            <strong>Tools:</strong> {selectedProject.tools}
          </p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {selectedProject.screenshots.map((shot) => (
            <div
              key={shot.title}
              className="bg-white border border-gray-200 rounded-xl shadow-md p-3 hover:shadow-lg transition"
            >
              <p className="font-semibold mb-2">{shot.title}</p>
              {shot.img ? (
                <img
                  src={shot.img}
                  alt={shot.title}
                  className="rounded-lg shadow-sm w-full object-contain hover:scale-105 transition-transform"
                />
              ) : (
                <div className="w-full h-40 bg-gray-100 flex items-center justify-center rounded-lg text-gray-400 italic">
                  No Image
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">My Projects</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className="bg-white border border-gray-200 rounded-xl shadow-md p-5 cursor-pointer hover:shadow-lg hover:border-sky-500 hover:scale-105 transition-all duration-200"
            onClick={() => setSelectedProject(project)}
          >
            {project.homeImg ? (
              <img
                src={project.homeImg}
                alt={project.title}
                className="w-full h-48 object-cover rounded-lg mb-3"
              />
            ) : (
              <div className="w-full h-48 bg-gray-100 flex items-center justify-center rounded-lg text-gray-400 italic mb-3">
                No Image
              </div>
            )}
            <h2 className="text-lg font-semibold mb-2">{project.title}</h2>
            <p className="text-gray-700 text-sm mb-3">{project.shortDesc}</p>
            <div className="flex flex-wrap gap-2">
              {project.skills.map((skill) => (
                <div
                  key={skill}
                  className="bg-gray-100 px-3 py-1 rounded-lg text-sm shadow-sm"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
