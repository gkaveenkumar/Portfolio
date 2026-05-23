// ============================================================
// PORTFOLIO DATA — Edit this file to update your portfolio
// ============================================================

export const personal = {
  name: "Kaveen Kumar G",
  title: "Data Analyst",
  subtitle: "Machine Learning Engineer",
  tagline: "Building end-to-end ML pipelines from raw data to production-ready insights.",
  email: "kaveenkumarg29@gmail.com",
  phone: "+91 9494507979",
  linkedin: "https://linkedin.com/in/kaveenkumarg",   // update with real URL
  github: "https://github.com/gkaveenkumar",
  resumeFile: "/resume.pdf",   // place your resume PDF in /public/resume.pdf
};

export const stats = [
  { value: "8.28", label: "CGPA" },
  { value: "3+", label: "Projects" },
  { value: "3×", label: "Tennis Champ" },
];

export const about = `I'm a B.Tech Computer Science graduate from SRM Institute of Science and Technology, Chennai. I specialize in building end-to-end machine learning pipelines — from raw data to production-ready insights.

During my internship at GradTwin Technology, I built a Medical Cost Estimation model working with real-world datasets using Python, Scikit-learn, and statistical analysis. I'm passionate about using data to solve meaningful problems and have a background in competitive tennis — 3× District Champion.

Currently seeking roles in Data Science, ML Engineering, or Data Analytics where I can bring analytical rigor and technical depth.`;

export const timeline = [
  {
    date: "Oct 2024 – Jan 2025",
    role: "Data Scientist Intern",
    company: "GradTwin Technology, Chennai",
    description: "Built a Medical Cost Estimation predictive model. Performed end-to-end pipeline: data cleaning, feature selection, model training, and performance validation. Identified key cost drivers through EDA.",
  },
  {
    date: "2021 – 2025",
    role: "B.Tech, Computer Science & Engineering",
    company: "SRM Institute of Science and Technology",
    description: "Specialized in machine learning, data science, and software engineering. CGPA: 8.28",
  },
  {
    date: "Jan – Feb 2024",
    role: "NPTEL Elite Certification",
    company: "IIT Madras — Python for Data Science",
    description: "Scored 71% with a perfect 25/25 on assignments. Ranked among 11,953 certified candidates.",
  },
];

export const skills = [
  {
    category: "Languages",
    items: ["Python", "SQL", "HTML", "CSS"],
  },
  {
    category: "ML & Algorithms",
    items: ["SVM", "XGBoost", "Random Forest", "Logistic Regression", "Linear Regression"],
  },
  {
    category: "Libraries",
    items: ["Pandas", "NumPy", "Scikit-learn", "Seaborn", "Matplotlib"],
  },
  {
    category: "Tools & Platforms",
    items: ["Power BI", "Streamlit", "Jupyter Notebook", "Microsoft Excel"],
  },
  {
    category: "Core Concepts",
    items: ["Feature Engineering", "Model Evaluation (AUC-ROC)", "Cross-Validation", "Regularization", "EDA"],
  },
];

export const projects = [
  {
    id: "ipl",
    badge: "Data Analysis",
    badgeType: "data",
    title: "IPL Insight Engine",
    description:
      "An interactive analytics platform for IPL cricket data, enabling deep exploration of match statistics, player performance trends, and team comparisons through rich visualizations.",
    tech: ["Python", "Streamlit", "Pandas", "Plotly", "NumPy"],
    github: "https://github.com/gkaveenkumar/IPL-Insight-Engine",
    demo: "https://ipl-insight-engine-7jr7gwkbea4zljgkvnnhsp.streamlit.app/dataset",
  },
  {
    id: "disease",
    badge: "Machine Learning",
    badgeType: "ml",
    title: "Multiple Disease Prediction System",
    description:
      "A web app to predict Diabetes, Heart Disease, and Parkinson's Disease from health parameters using SVM and Logistic Regression. Designed for real-time, low-latency prediction use cases.",
    tech: ["Python", "Scikit-learn", "Streamlit", "Pandas", "NumPy"],
    github: "https://github.com/gkaveenkumar/Machine-learning-project",
    demo: "https://machine-learning-project-jaqvcukg8jbnluzamuzjjj.streamlit.app/",
  },
  {
    id: "blinkit",
    badge: "Data Analysis",
    badgeType: "data",
    title: "Blinkit Sales Dashboard Analysis",
    description:
      "Analysed large-scale retail sales data (item type, outlet type, customer ratings) to derive actionable business insights. Built an interactive Power BI dashboard for inventory optimisation and sales trend analysis.",
    tech: ["Python", "Pandas", "NumPy", "Seaborn", "Power BI"],
    github: "https://github.com/gkaveenkumar/Blinkit-Sales-Dashboard-Analysis-",
    demo: null, // no live demo for this project
  },
];

export const certifications = [
  {
    title: "Python for Data Science",
    issuer: "IIT Madras (NPTEL) — Elite",
    date: "Jan–Feb 2024",
    score: "71% | Assignments: 25/25",
  },
];

export const achievements = [
  "3× District-Level Tennis Champion (2016, 2017, 2018)",
  "NPTEL Elite certification among 11,953 certified candidates",
  "Perfect assignment score (25/25) in NPTEL Python for Data Science",
];
