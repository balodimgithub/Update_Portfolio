

export type Certificate = {
  id: string;
  title: string;
  issuer: string;
  date: string;
  image: string;
  credentialUrl?: string;
};

export type Activity = {
  id: string;
  title: string;
  organization: string;
  date: string;
  image: string;
  description: string;
};

export type Project = {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  githubUrl: string;
  liveUrl?: string;
  stack: string[];
  role?: string;
  status ?: string;
  year ?: string
};

export type LearningItem = {
  id: string;
  title: string;
  image?: string;
  note: string;
};

export const certificates: Certificate[] = [
  {
    id: "cert-1",
    title: "Foundations of Software Engineering",
    issuer: "Axia Africa",
    date: "2023",
    image:"/images/CertAxia.jpeg",
    credentialUrl: "#",
  },

  {
    id: "cert-3",
    title: "Internship at a digital payment company - Telecoms, Flow of funds and User data management",
    issuer: "AremxyPlug",
    date: "2023",
    image: "/images/internship.jpg",
    credentialUrl: "#",
  },
];

export const activities: Activity[] = [
  {
    id: "act-1",
    title: "Tutor at TECHNOVA 2024 - University of Lagos",
    organization: "Finance Students' Association",
    date: "June 2024",
    image: "/images/Technova.jpeg",
    description:
      "Mentoring and enlightening students in the Field of Frontend Development",
  },
   {
    id: "act-2",
    title: "Frontend Development Workshop 2024 - Summer Edition",
    organization: "WebDevConstruct",
    date: "August 2024",
    image: "/images/Announcement.png",
    description:
      "Created, managed, coordinated and facilitated a 2-week workshop on frontend development, covering HTML, CSS, JavaScript. It treated the fundamentals of frontend development to secondary school students and undergraduates, with a focus on practical skills and real-world applications.",
  },
  {
    id: "act-3",
    title: "A first class CGPA of 4.74 in my first year at the University of Lagos",
    organization: "University of Lagos",
    date: "2025",
    image: "/images/ResultOverview.png",
    description:
      "Achieved a first class CGPA in my first year at the University of Lagos, demonstrating strong academic performance in Finance.",
  },
  {
    id: "act-4",
    title: "Actuarial Science Research and Case study - 3rd position with over 30 teams participating",
    organization: "University of Lagos",
    date: "2025",
    image: "/images/CaseStudy.jpeg",
    description:
      "Joined a team to give a report on Pricing, Reserving and Recommendation by analysing a company's claims and premium datasets which required thorough research into some concepts and understanding of Risks Analysis",
  },

   {
    id: "act-5",
    title: "Senior role of Frontend Development at AremxyPlug",
    organization: "AremxyPlug",
    date: "2026",
    image: "/images/AremxyMotto.jpeg",
    description:
      `Successfully deployed the AremxyPlug V2.0, Leading frontend development for a fintech startup, building user interfaces for payment systems and financial dashboards, while organizing meetings for the Frontend team and maintaining the distributed version control(GitHub) history and pull requests and
       collaborating closely with backend engineers to integrate APIs and ensure seamless user experiences.`,
  },
   {
    id: "act-6",
    title: "Technical writer and Researcher at WebDevConstruct",
    organization: "WebDevConstruct",
    date: "2026",
    image: "/images/Announcement.png",
    description:  
      `Writing Technical articles and research papers on emerging technologies, software development best practices, and industry trends. Conducting in-depth research to provide valuable insights and recommendations for the tech community.`,
  },
];

export const projects: Project[] = [
  {
    id: "proj-1",
    title: "AremxyPlug — Digital Payments",
    description:
      "Being Able to establish internal transfer flow of funds, between wallet accounts.",
    thumbnail: "/images/AremxyMotto.jpeg",
    githubUrl: "https://github.com/AremxyPlug-Business-Enterprises/aremxyplug-fe",
    liveUrl: "https://aremxyplug.com",
    stack: ["ReactJs", "RestAPI", "Context API", "Node.js", "Tailwind"],
    role: "Lead Developer",
    status : "Live",
    year : "June 2026"
  },
  {
    id: "proj-2",
    title: "WDC_FORMATT",
    description:
      "An Research AI-powered application that helps students with searching for the most pressing topics with models that are best-equivalent for features like letter generation, quick research with the assignment features and more to come.",
    thumbnail: "/images/ProfileFormatt.png",
    githubUrl: "https://github.com/WebDevConstruct/WDC_Formatt",
    liveUrl: "https://formatt.webdevconstruct.tech",
    stack: ["Clerk for authentication", "Edge Functions for latency in requests", "vercel to track logs",  "NeonPostgres for accurate and necessary information", "NEXTJS",  "Node.js", "Tailwind", "VsCode for development"],
    role: "Lead Developer",
  },
  {
    id: "proj-3",
    title: "FINSA — Media Admin Management System",
    description:
      `Built a dynamic media website for the Finance Student Association of the University of Lagos, Nigeria, 
      to help students and members of the association access information about events, news, and other resources related to finance and business.`,
    thumbnail: "/images/FinsaWebsitePic.png",
    githubUrl: "https://github.com/FINSA-TECH-ORG/FINSA-FRONTEND",
    liveUrl: "https://finsa-unilag.com",
    stack: ["NextJs", "Directus", "Render", "CronJob", "Typescript", "Railway", "NameCheap"],
    role: "Frontend Engineer - Collaboration project.",
  },
  //You can exempt the liveUrl, The code structure understands that some projects may not have a  liveUrl..
  {
    id: "proj-4",
    title: "Refine — KafKan, Team Management, Task Management Dashboard",
    description: "The use of Refine framework to build a dashboard, charts and kanban that helps organisation assign and track employees tasks progress across departments including companies in collaborations within a timeframe.",
    thumbnail: "/images/DashRefineImage.jpeg",
    liveUrl: "https://dashrefine.netlify.app/",
    githubUrl: "https://github.com/balodimgithub/Dashboard_with_Refine",
    stack: ["React", "Refine Framework", "TypeScipt", "GraphQL", "Node.js", "eslint", "netlify", "vite"],
    role: "Solo Developer",
  },
 
{
     id: "proj-5",
    title: "WebDevConstruct — Your Tech Consultant",
    description: "We Build Custom applications for businesses and associations, create solution oriented WDC application for the community and carry out tech research",
    thumbnail: "/images/WDC_Websites.png",
    liveUrl: "https://webdevconstruct.tech/",
    githubUrl: "https://github.com/WebDevConstruct/WDC_Official",
    stack: ["Services", "Custom Applications for Businesses", "Solution-oriented WDC applications", "Research", "Consultancy"],
    role: "Software Engineer, Writer, Researcher, Designer, Sponsorship",
    status : "live",
    year : "2026"
  },
  {
     id: "proj-5",
    title: "MarketPadi - An AI-Powered Market empowered and enhanced platform",
    description: "Ideas are confidential for now because the project is still in development",
    thumbnail: "/images/MarketPadi.jpeg",
   // liveUrl: "https://webdevconstruct.tech/",
    githubUrl: "https://github.com/balodimgithub/MarketPadiOrg",
    stack: ["Vercel", "NextJs", "Typescript", "javascript", "System Architecture", "Error Management"],
    role: "Software Engineer",
    status : "wip",
    year : "Dec 2025 - Present"
  },
  {
     id: "proj-6",
    title: "BrainWave",
    description: " - A Heuristic, modern and highly interactive AI Landing Page.",
    thumbnail: "/images/BrainWave.png",
    liveUrl: "https://modern-ai-user-interface.netlify.app/",
    githubUrl: "https://github.com/balodimgithub/MODERN_AI_APP",
    stack: ["Vite", "Tailwind", "Javascript", "Node", "Netlify"],
    role: "Frontend Engineer",
    status : "live",
    year : "2024"
  },
   
    {
     id: "proj-7",
    title: "Aora",
    description: "A multimedia sharing platform with friends and Family, where you can like, bookmark and update your profile Page.",
    thumbnail: "/images/AoraReact.jpeg",
    //liveUrl: "https://modern-ai-user-interface.netlify.app/",
    githubUrl: "https://github.com/balodimgithub/Flair-React-Native-Application",
    stack: ["React Native", "Tailwind", "Typescript", "Javascript", "Node", "Netlify"],
    role: "Frontend Engineer",
    status : "live",
    year : "2024"
  },
   {
     id: "proj-8",
    title: "NFT MarketPlace",
    description: "A Web3 NFT Marketplace that allows users to buy, sell, and trade non-fungible tokens (NFTs) on the blockchain. It provides a user-friendly interface for browsing and discovering digital assets, as well as tools for managing and tracking NFT collections.",
    thumbnail: "/images/nft03.jpeg",
    //liveUrl: "https://modern-ai-user-interface.netlify.app/",
    githubUrl: "https://github.com/balodimgithub/NFT_APP",
    stack: ["React Native", "Tailwind", "Typescript", "Javascript", "Node", "Netlify"],
    role: "Frontend Engineer",
    status : "live",
    year : "2024"
  },
    {
     id: "proj-9",
    title: "Onye ji Cashie Trucking Management system",
    description: "A Trucking Management system that helps trucking companies manage their fleet, drivers, and cargo. It provides features for tracking shipments, managing invoices, and generating reports.",
    thumbnail: "/images/TruckingMgt.jpeg",
    liveUrl: "https://baloonyejicashie.netlify.app/",
    githubUrl: "https://github.com/balodimgithub/Onye_ji_cashie",
    stack: ["Javascript", "Css", "Html", "Netlify"],
    role: "Frontend Engineer",
    status : "live",
    year : "2023"
  },
  {
     id: "proj-10",
    title: "ChatGPT instance - Parody",
    description: "A Simple ChatGPT-copy Landing Page flow",
    thumbnail: "/images/ChatGPTLandingPage.png",
    liveUrl: "https://chat-gpt-instance.netlify.app/",
    githubUrl: "https://github.com/balodimgithub/ChatGPt-instance",
    stack: ["Javascript", "Css", "Html", "Netlify"],
    role: "Frontend Engineer",
    status : "live",
    year : "2023"
  },
   {
     id: "proj-11",
    title: "Quotient Rent Furniture Landing Page",
    description: "A Landing Page showcasong Furnitures",
    thumbnail: "/images/QuotientRent.jpeg",
    liveUrl: "https://quotient-rent.netlify.app/",
    githubUrl: "https://github.com/balodimgithub/Apartment-rent-landingPage",
    stack: ["Javascript", "Css", "Html", "Netlify"],
    role: "Frontend Engineer",
    status : "live",
    year : "2023"
  },
];


export const MaxFourprojects: Project[] = projects?.slice(0, 4) || [];
export const extraProjects: Project[] = projects?.slice(4) || [];
export const projectLimit = 4;
export const learning: LearningItem[] = [
  {
    id: "learn-1",
    title: "Machine Learning Specialization",
  //  image: "https://placehold.co/400x300/0A2A21/F6F3EC?text=ML",
    note: "Working through supervised and unsupervised learning fundamentals, with a focus on fraud-detection use cases in payments.",
  },
  {
    id: "learn-2",
    title: "Deep Research Methods",
    note: "Exploring structured research workflows for evaluating financial systems and emerging technology.",
  },
  {
    id: "learn-3",
    title: "Finance, Banks and Payment Systems",
 //   image: "https://placehold.co/400x300/1F7A4D/F6F3EC?text=Systems",
    note: "Consistently learning and understanding the mental framework of a financial analyst, Risk Management, how banks work, and how money is controlled",
  },
];
