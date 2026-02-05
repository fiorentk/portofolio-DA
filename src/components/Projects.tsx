import { useNavigate } from "react-router-dom";

// Images
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
  desc: string;
  screenshots: Screenshot[];
  skills: string[];
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "PosAja! Customer Engagement Dashboard",
    homeImg: posajaEngagementImg,
    desc: "PosAja! customer engagement dashboard showing accesses, active users, and new registrations, visualized via various charts and tables (DoD, WoW, MoM, YoY), with multiple filters.",
    screenshots: [{ img: posajaEngagementImg }],
    skills: ["Tableau"],
  },
  {
    id: 2,
    title: "PosAja! Digital Business Performance Dashboard",
    homeImg: posajaPerformanceImg,
    desc: "PosAja! digital business dashboard tracking users, transactions, and revenue, visualized with various charts and tables (DoD, WoW, MoM, YoY), with multiple filters.",
    screenshots: [{ img: posajaPerformanceImg }],
    skills: ["Tableau"],
  },
  {
    id: 3,
    title: "Remittance Fraud Risk Dashboard",
    homeImg: remittanceFraudImg,
    desc: "Dashboard highlighting potential fraud risks. Helps identify unusual activities and suspected fraud based on transaction behavior.",
    screenshots: [{ img: remittanceFraudImg }],
    skills: ["Tableau"],
  },
  {
    id: 4,
    title: "Cheap Food Market Operation Dashboard",
    homeImg: foodMarketImg,
    desc: "Dashboard monitoring cheap food market operations. Displays transaction, revenue, stock, and distribution with multiple filters.",
    screenshots: [{ img: foodMarketImg }],
    skills: ["Tableau"],
  },
  {
    id: 5,
    title: "PLN Transaction Dashboard",
    homeImg: plnImg,
    desc: "Dashboard tracking PLN transaction performance. Shows transaction volume, revenue, and admin fee trends.",
    screenshots: [{ img: plnImg }],
    skills: ["Tableau"],
  },
  {
    id: 6,
    title: "Sentiment Analysis API",
    homeImg: sentimentAPIImg,
    repoLink:
      "https://github.com/fiorentk/sentiment-analysis-google-maps-review",
    desc: "API for sentiment classification of Indonesian reviews using FastAPI + Docker and transformer models.",
    screenshots: [{ title: "Postman", img: sentimentAPIImg }],
    skills: ["Python", "FastAPI"],
  },
  {
    id: 7,
    title: "Route Optimization API",
    homeImg: predictrouteAPIImg,
    repoLink: "https://github.com/fiorentk/Route-Optimization-Project",
    desc: "API for delivery route optimization using OR-Tools, OSRM, and Geopy to generate efficient routes.",
    screenshots: [{ title: "Postman", img: predictrouteAPIImg }],
    skills: ["Python", "FastAPI"],
  },
  {
    id: 8,
    title: "Fraud Case Analysis (Cash-In & Cash-Out)",
    homeImg: fraudCaseCiCoImg,
    desc: "Python-based analysis with Tableau visualization to detect irregular transaction patterns in cash-in & cash-out.",
    screenshots: [{ img: fraudCaseCiCoImg }],
    skills: ["Python", "Tableau"],
  },
  {
    id: 9,
    title: "Revenue Decline Analysis (PosAja!)",
    homeImg: revenueDeclineImg,
    desc: "Python-based analysis with Tableau visualization to identified trends and business factors contributing to PosAja!'s revenue decline.",
    screenshots: [{ img: revenueDeclineImg }],
    skills: ["Python", "Tableau"],
  },
  {
    id: 10,
    title: "BPJS Payment Retention Analysis",
    homeImg: bpjsImg,
    desc: "Python-based analysis with Tableau visualization that provided insight on BPJS employment contribution payment to identify retention rates and improvement opportunities.",
    screenshots: [{ img: bpjsImg }],
    skills: ["Python", "Tableau"],
  },
  {
    id: 11,
    title: "Pos Delivery Performance Analysis",
    homeImg: deliveryPerformanceImg,
    desc: "Python-based analysis with Tableau visualization that provided insight on Pos delivery performance such as delivery's success rates, and operational challenges.",
    screenshots: [{ img: deliveryPerformanceImg }],
    skills: ["Python", "Tableau"],
  },
  {
    id: 12,
    title: "Bootcamp Digital Talent II Project",
    homeImg: itms,
    desc: "Developed ITMS NOVA and SiPenDi apps including SRS, business process design, Figma prototype, and MySQL schema.",
    screenshots: [
      { title: "ITMS NOVA", img: itms },
      { title: "SiPenDi", img: sipendi },
    ],
    skills: ["MySQL", "Figma"],
  },
  {
    id: 13,
    title: "House Price Prediction",
    homeImg: housepriceImg,
    repoLink:
      "https://github.com/fiorentk/Predicting-House-Prices-in-King-County-USA-Using-Linear-Polynomial-and-Ridge-Regression",
    desc: "Built a machine learning model in Python to predict house prices from features like area, rooms, and location, including data cleaning, EDA, feature engineering, training (Linear Regression & Random Forest), and evaluation (RMSE, R²).",
    screenshots: [
      { img: houseprice1 },
      { img: houseprice2 },
      { img: houseprice3 },
      { img: houseprice4 },
    ],
    skills: ["Python"],
  },
  {
    id: 14,
    title: "Rocket Landing Prediction",
    homeImg: rocketImg,
    repoLink:
      "https://github.com/fiorentk/Data-Science-Odyssey-in-Rocket-Landing-Prediction-Capstone-Project",
    desc: "Predicted SpaceX Falcon 9 first-stage landing success using Python, covering data preprocessing, EDA, feature encoding, model training (Logistic Regression, Decision Tree, SVM), and evaluation (accuracy, confusion matrix).",
    screenshots: [
      { img: rocket1 },
      { img: rocket2 },
      { img: rocket3 },
      { img: rocket4 },
    ],
    skills: ["Python"],
  },
  {
    id: 15,
    title: "Credit Score Classification",
    homeImg: creditImg,
    repoLink:
      "https://github.com/fiorentk/Credit-Score-Classification-Using-Decision-Tree-KNN-and-Random-Forest",
    desc: "Built a classification model to categorize customer credit scores (good, standard, poor) using Logistic Regression, Random Forest, and XGBoost, with data preprocessing, analysis, and evaluation via precision, recall, and F1-score.",
    screenshots: [
      { img: credit1 },
      { img: credit2 },
      { img: credit3 },
      { img: credit4 },
    ],
    skills: ["Python"],
  },
  {
    id: 16,
    title: "Customer Churn Prediction",
    homeImg: churnImg,
    repoLink:
      "https://github.com/fiorentk/Predicting-Customers-Churn-Using-Decision-Tree-and-Random-Forest-Project-from-HabisKerja",
    desc: "Built a churn prediction model for customers using Logistic Regression, Random Forest, and Gradient Boosting, including data cleaning, feature selection, encoding, and analysis of key churn drivers.",
    screenshots: [
      { img: churn1 },
      { img: churn2 },
      { img: churn3 },
      { img: churn4 },
    ],
    skills: ["Python"],
  },
];

function SkillBadge({ skill }: { skill: string }) {
  return (
    <span className="bg-gray-100 px-3 py-1 rounded-lg text-sm shadow-sm">
      {skill}
    </span>
  );
}

export default function Projects() {
  const navigate = useNavigate();

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <button
        onClick={() => navigate("/")}
        className="mb-6 px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
      >
        ← Back
      </button>

      <h1 className="text-3xl font-bold text-center mb-6">My Projects</h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className="bg-white border rounded-xl shadow-md p-5"
          >
            <img
              src={project.homeImg}
              className="w-full h-48 object-cover rounded-lg mb-3"
            />

            <h2 className="font-semibold">{project.title}</h2>
            <p className="text-sm text-gray-600 mt-2">{project.desc}</p>

            <div className="flex flex-wrap gap-2 mt-3">
              {project.skills.map((skill) => (
                <SkillBadge key={skill} skill={skill} />
              ))}
            </div>

            {project.repoLink ? (
              <a
                href={project.repoLink}
                target="_blank"
                className="text-blue-600 underline text-sm mt-2 inline-block"
              >
                Go To Repository
              </a>
            ) : (
              <p className="italic text-gray-400 text-sm mt-2">
                Private Repository
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
