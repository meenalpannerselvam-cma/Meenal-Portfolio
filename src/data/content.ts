export interface QuickFact {
  label: string;
  value: string;
  iconName: string;
}

export interface ToolkitItem {
  id: string;
  name: string;
  category: string;
  description: string;
  iconName: string;
  color: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
  tags: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  period?: string;
  tag: string;
  color: string;
  comingSoon?: boolean;
  problem: string;
  whatIDid: string;
  whatIFound: string;
  todoNote?: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  score: string;
  isMilestone?: boolean;
}

export interface CmaMilestone {
  stage: string;
  status: 'cleared' | 'in_progress' | 'upcoming';
  statusLabel: string;
  year?: string;
  todoNote?: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  score?: string;
  iconName: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Meenal P",
    initials: "MP",
    tagline: "I turn costing and financial data into clear decisions.",
    heroTag: "CMA Foundation cleared · Chennai · Open to relocation and remote",
    location: "Chennai, Tamil Nadu, India",
    email: "meenalpannerselvam@gmail.com",
    photoUrl: "/assets/meenal-photo.jpg",
    // TODO: Replace with your actual LinkedIn profile URL once available
    linkedinUrl: "https://www.linkedin.com/in/TODO-meenal",
    resumeUrl: "/resume.pdf",
    statusBadge: "Open to opportunities",
    contactIntro: "Hiring for a cost accounting, financial analysis or audit role, or want to talk about a project? I'd love to hear from you, and I'll get back to you as soon as I can.",
    footerTagline: "Cost accounting and financial analysis, made clear",
    copyright: "© 2026 Meenal P.",
  },

  hero: {
    greeting: "Hi, I'm Meenal!",
    factChips: [
      "CMA Foundation cleared (2023)",
      "3 internships in audit, costing and finance",
      "5 reporting periods of financial statements analysed"
    ],
    tickerItems: [
      "Cost Accounting",
      "Variance Analysis",
      "Budgeting",
      "Financial Reporting",
      "Internal Audit",
      "Advanced Excel",
      "Power BI",
      "Tally Prime"
    ],
    scrollHint: "✦ SCROLL DOWN ✦ AND KNOW ME BETTER"
  },

  about: {
    heading: "About Me",
    paragraphs: [
      "Hello! I'm Meenal, a CMA India aspirant from Chennai who enjoys finding the story hiding inside a set of numbers.",
      "I finished my B.Com in Cost & Management Accounting in 2025 and cleared the CMA Foundation in 2023. Along the way I worked on audit and tax documentation at Thiagarajan & Co, analysed financial statements and break-even points at TANFAC Industrial Limited, and rotated through five departments at Larsen & Toubro's Formwork Factory.",
      "Most recently I worked as an Information Specialist at Tata Consultancy Services, keeping structured product datasets consistent and supporting reporting and market research. That role sharpened my eye for clean, reliable data, which I now bring back to finance work.",
      "My toolkit is Advanced Excel, Power BI and Tally Prime, backed by a solid grounding in costing, variance analysis, budgeting and internal audit. I'm looking for roles in cost and management accounting, financial analysis and audit, and I'm open to relocation and remote work."
    ],
    buttonText: "Read my resume",
    quickFacts: [
      { label: "Based in", value: "Chennai, Tamil Nadu", iconName: "MapPin" },
      { label: "Studying", value: "CMA India (Foundation cleared)", iconName: "Award" },
      { label: "B.Com Cost & Mgmt Acct", value: "CGPA 7.96/10", iconName: "GraduationCap" },
      { label: "Availability", value: "Open to relocation and remote", iconName: "CheckCircle" }
    ] as QuickFact[]
  },

  toolkit: {
    heading: "My Toolkit",
    subheading: "Hover on desktop or tap on touch to reveal practical application details.",
    items: [
      {
        id: "excel",
        name: "Advanced Excel",
        category: "Financial Modeling",
        description: "Pivot tables, VLOOKUP, HLOOKUP and macros for MIS reports and budget-versus-actual work.",
        iconName: "FileSpreadsheet",
        color: "#0F766E"
      },
      {
        id: "power-bi",
        name: "Power BI",
        category: "BI & Visualisation",
        description: "Turning financial data into KPI and profitability views that decision makers can scan quickly.",
        iconName: "BarChart3",
        color: "#F59E0B"
      },
      {
        id: "tally-prime",
        name: "Tally Prime",
        category: "ERP & Accounting",
        description: "Ledgers, journal entries, payables and receivables in an ERP environment.",
        iconName: "Database",
        color: "#F26B4E"
      },
      {
        id: "cost-accounting",
        name: "Cost Accounting",
        category: "Core Discipline",
        description: "Standard costing, activity-based costing, product costing and cost drivers.",
        iconName: "Calculator",
        color: "#14213D"
      },
      {
        id: "variance-budgeting",
        name: "Variance & Budgeting",
        category: "Planning & Control",
        description: "Budget versus actual, forecasting, contribution margin and KPI tracking.",
        iconName: "TrendingUp",
        color: "#0F766E"
      },
      {
        id: "financial-reporting",
        name: "Financial Reporting",
        category: "Financial Statements",
        description: "Statement preparation, general ledger reconciliation, month-end close and Ind AS awareness.",
        iconName: "FileText",
        color: "#F59E0B"
      },
      {
        id: "audit-compliance",
        name: "Audit & Compliance",
        category: "Assurance",
        description: "Internal audit, risk assessment, documentation, internal controls and substantive testing.",
        iconName: "ShieldCheck",
        color: "#16A34A"
      },
      {
        id: "ai-assisted-accounting",
        name: "AI-Assisted Accounting",
        category: "Modern Tooling",
        description: "Completed Accounting Using Google Gemini (Great Learning Academy) to speed up routine analysis.",
        iconName: "Sparkles",
        color: "#F26B4E"
      }
    ] as ToolkitItem[]
  },

  experience: {
    heading: "Where I've Worked",
    subheading: "Proven track record across multinational IT services, chemical manufacturing, engineering, and statutory tax audit.",
    items: [
      {
        id: "tcs",
        role: "Information Specialist",
        company: "Tata Consultancy Services",
        location: "Chennai",
        period: "Aug 2025 to Feb 2026",
        bullets: [
          "Documented and standardised product information templates so data stayed consistent across product market lines.",
          "Maintained structured datasets and templates that supported product data management and reporting.",
          "Researched the market to help identify product demand and trends.",
          "Worked with cross-functional teams to turn business requirements into structured documentation."
        ],
        tags: ["Data quality", "Reporting support", "Market research", "Documentation"]
      },
      {
        id: "thiagarajan",
        role: "Audit & Taxation Intern",
        company: "Thiagarajan & Co",
        location: "Cuddalore",
        period: "Dec 2024",
        bullets: [
          "Worked on income tax filing and documentation for clients across different industries.",
          "Processed PAN applications with full regulatory compliance.",
          "Reviewed account types and ledgers and supported preliminary audit documentation and internal control assessments."
        ],
        tags: ["Income tax", "Audit documentation", "Internal controls", "Compliance"]
      },
      {
        id: "tanfac",
        role: "Accounts & Financial Analysis Intern",
        company: "TANFAC Industrial Limited",
        location: "Cuddalore",
        period: "Jul 2024",
        bullets: [
          "Analysed financial statements across 5 reporting periods and wrote structured summaries for management review.",
          "Carried out cost-volume-profit and break-even analysis across product lines to assess efficiency and profitability.",
          "Studied product costing and manufacturing processes to understand cost structures and cost drivers."
        ],
        tags: ["Financial analysis", "CVP", "Break-even", "Product costing"]
      },
      {
        id: "lt",
        role: "Finance Intern (Rotational Training)",
        company: "Larsen & Toubro, Formwork Factory",
        location: "Puducherry",
        period: "Dec 2023 to Jan 2024",
        bullets: [
          "Completed a 2-week rotation across 5 departments: HR, Production, Procurement, Stores and Finance.",
          "Learned how departments coordinate in an integrated business.",
          "Helped with data compilation, reporting support and documentation in Finance."
        ],
        tags: ["Business operations", "Cross-functional work", "Reporting support"]
      }
    ] as ExperienceItem[]
  },

  projects: {
    heading: "Selected Projects",
    subheading: "Deep dives into cost-volume-profit dynamics, non-profit statutory audits, and management dashboards.",
    items: [
      {
        id: "tanfac-cvp",
        title: "CVP Analysis on TANFAC Industries Ltd",
        period: "Jul 2024",
        tag: "Financial analysis",
        color: "teal",
        problem: "Understand which product lines cover their costs and how profitable different volume scenarios are.",
        whatIDid: "Ran cost-volume-profit and break-even analysis across product lines and examined contribution margin.",
        whatIFound: "The break-even point and what it says about operating efficiency.",
        todoNote: "TODO: add real figures or a chart if allowed"
      },
      {
        id: "non-profit-audit",
        title: "A Comparative Study on Audit of Different Non-Profit Organizations",
        period: "Dec 2024",
        tag: "Audit and compliance",
        color: "amber",
        problem: "See how audits differ between non-profit organizations.",
        whatIDid: "Compared the financial and operational audits of 4 non-profits, covering statutory audit compliance, funding sources, internal audit mechanisms and governance structures.",
        whatIFound: "Key structural variations in donor compliance verification and internal audit frequency across varying organizational scales.",
        todoNote: "TODO: add two or three conclusions."
      },
      {
        id: "power-bi-variance",
        title: "Variance Dashboard in Power BI",
        tag: "Power BI and Excel",
        color: "coral",
        comingSoon: true,
        problem: "Executives need real-time visualization of monthly budget versus actual variance across operational expense lines.",
        whatIDid: "Building an automated data model linking Excel workbooks into dynamic Power BI cards and waterfall charts.",
        whatIFound: "Enables instant root-cause identification for unfavorable material price and usage variances.",
        todoNote: "Coming soon - dashboard preview will be published shortly."
      }
    ] as ProjectItem[]
  },

  slimBanner: {
    title: "Like what you see? Let's talk.",
    subtext: "I'm available for full-time cost accounting, financial analysis, and audit roles.",
    buttonText: "Send me an email"
  },

  playground: {
    heading: "Play with the Numbers",
    subline: "Change the inputs and watch the break-even point move.",
    disclaimer: "Sample data for demonstration. Not company figures.",
    defaultValues: {
      sellingPrice: 500,
      variableCost: 300,
      fixedCost: 100000,
      unitsSold: 750
    }
  },

  education: {
    heading: "Learning Journey",
    subheading: "Academic credentials, professional CMA milestones, and verified certifications.",
    timeline: [
      {
        id: "bcom",
        degree: "B.Com Cost & Management Accounting",
        institution: "Sri Manakula Vinayagar Engineering College",
        location: "Puducherry",
        period: "2022 to 2025",
        score: "CGPA 7.96/10"
      },
      {
        id: "cma-foundation",
        degree: "CMA India Foundation",
        institution: "Institute of Cost and Management Accounting of India",
        location: "India",
        period: "2023",
        score: "Cleared",
        isMilestone: true
      },
      {
        id: "hsc",
        degree: "HSC Commerce",
        institution: "ARLM Matriculation Higher Secondary School",
        location: "Cuddalore",
        period: "2021 to 2022",
        score: "92.83%"
      },
      {
        id: "sslc",
        degree: "SSLC",
        institution: "ARLM Matriculation Higher Secondary School",
        location: "Cuddalore",
        period: "2019 to 2020",
        score: "67.6%"
      }
    ] as EducationItem[],
    
    cmaTracker: [
      {
        stage: "Foundation",
        status: "cleared",
        statusLabel: "Cleared",
        year: "2023"
      },
      {
        stage: "Intermediate",
        status: "in_progress",
        statusLabel: "In Progress",
        todoNote: "TODO: I will set my real status"
      },
      {
        stage: "Final",
        status: "upcoming",
        statusLabel: "Upcoming",
        todoNote: "TODO: I will set my real status"
      }
    ] as CmaMilestone[],

    certifications: [
      {
        id: "nptel-costing",
        title: "Fundamentals of Costing",
        issuer: "NPTEL",
        score: "Score: 76%",
        iconName: "Award"
      },
      {
        id: "gemini-accounting",
        title: "Accounting Using Google Gemini",
        issuer: "Great Learning Academy",
        score: "Completed",
        iconName: "Sparkles"
      }
    ] as CertificationItem[]
  },

  contact: {
    heading: "Let's Work Together",
    formTitle: "Send a Direct Message",
    formSuccess: "Thanks for reaching out! I'll reply soon."
  }
};
