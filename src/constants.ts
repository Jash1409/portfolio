import { ProjectType } from "./types/project";

export const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const linksInfo = [
  { title: "About", path: "#about" },
  { title: "Skills", path: "#skills" },
  { title: "Projects", path: "#projects" },
  { title: "Contact", path: "#contact" }
];

export const projectsData: ProjectType[] = [
  {
    imgSrc: "src/assets/ukrify.png",
    imgAlt: "Ola Ride Analytics Dashboard preview",
    number: 1,
    title: "Ola Ride Analytics Dashboard",
    description:
      "This project focuses on cleaning and analyzing ride data to uncover demand patterns, trip trends, and service efficiency across different time periods and locations. Using Power BI and Excel, I turned raw operational data into a dashboard that highlights key insights such as peak demand, cancellations, and driver utilization.",
    demo: "https://ola-data-analytics-dashboard.vercel.app/",
    github: "https://github.com/IntToLong/UKRIFY",
    technologies: [
      "Python (Pandas)",
      "Power BI"
    ],
    ariaLabel: {
      demo: "View Ola Ride Analytics Dashboard live demo",
      github: "View Ola Ride Analytics Dashboard project source code on GitHub"
    }
  },
  {
    imgSrc: "src/assets/quickquiz1.png",
    imgAlt: "Google Ads Campaign Simulator preview",
    number: 2,
    title: "Google Ads Campaign Simulator",
    description:
      "This project models campaign performance around CTR, CPC, conversion rate, and ROI to evaluate how different marketing choices affect total results. I focused on metrics analysis, forecasting, and communicating what drives performance so the business can make faster, more confident decisions.",
    demo: "https://google-campaign-simulator.vercel.app/",
    github: "https://github.com/IntToLong/QuickQuiz",
    technologies: [
      "React.js",
      "Python"
    ],
    ariaLabel: {
      demo: "View Google Ads Campaign Simulator live demo",
      github: "View Google Ads Campaign Simulator project source code on GitHub"
    }
  },
  {
    imgSrc: "src/assets/resumeLight.png",
    imgAlt: "Work From Cafe preview",
    number: 3,
    title: "Work From Cafe",
    description:
      "This project takes a lightweight analytical approach to understanding how café environments influence productivity, comfort, and work routines. It is a smaller, practical example of data collection and trend observation, focused on extracting useful insights from everyday behavior.",
    demo: "https://inttolong.github.io/Resume/",
    github: "https://github.com/IntToLong/Resume",
    technologies: ["React.js", "Node.js", "Supabase", "Google Maps API", "Ookla Speedtest API"],
    ariaLabel: {
      demo: "View Work From Cafe live demo",
      github: "View Work From Cafe project source code on GitHub"
    }
  },
  {
    imgSrc: "src/assets/portfolio.png",
    imgAlt: "Portfolio data storytelling preview",
    number: 4,
    title: "Portfolio - Data Storytelling",
    description:
      "This portfolio is a data-driven story about my analytical skills, project work, and decision-making process. It presents my work as a narrative of problem solving, dashboard creation, and insight generation, helping visitors quickly understand how I approach data and business questions.",
    demo: "https://inttolong.github.io/portfolio/",
    github: "https://github.com/IntToLong/portfolio",
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    ariaLabel: {
      demo: "View Portfolio live demo",
      github: "View Portfolio project source code on GitHub"
    }
  }
];
