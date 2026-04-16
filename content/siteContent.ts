export interface SiteLink { label: string; href: string; external?: boolean }
export interface Experience {
  company: string; role: string; date: string; location: string;
  type?: string; bullets: string[]; stack: string[];
}
export interface Project {
  num: string; name: string; desc: string; stack: string[];
  meta: string; github: string; live?: string; liveLabel?: string;
}

const siteContent = {
  links: [
    { label: "email", href: "mailto:ishaanchoubey3@gmail.com" },
    { label: "github", href: "https://github.com/1sh22", external: true },
    { label: "linkedin", href: "https://www.linkedin.com/in/ishaanchoubey/", external: true },
    { label: "x", href: "https://x.com/ishaanchoubeyy", external: true },
  ] as SiteLink[],
  aboutParagraphs: [
    "hey, i'm ishaan. i build full-stack products with a focus on clean architecture, fast iteration, and real user impact.",
    "currently building, breaking, and figuring things out. based in bengaluru.",
  ],
  aboutStack: [
    { label: "Languages",   items: ["TypeScript", "JavaScript", "Python", "C++", "SQL"] },
    { label: "Frameworks",  items: ["Next.js", "React", "Node.js", "Express.js", "FastAPI", "Flask", "LangChain", "Scikit-learn", "PyTorch"] },
    { label: "Databases",   items: ["PostgreSQL", "Supabase", "Drizzle ORM", "MongoDB"] },
    { label: "Tools",       items: ["Vercel", "GitHub", "HuggingFace", "Docker", "GCP"] },
  ],
  experience: [
    {
      company: "ThinklyLabs",
      role: "Founding Engineer",
      date: "Sept 2025 – Present",
      location: "Remote",
      type: "Full-time",
      bullets: [
        "Built [authr ai](https://www.authr-ai.com/) from 0 to $2K+ MRR in 3 months.",
        "Delivered 5+ client projects and MVPs",
        "Architected a multi-agent content system by building a RAG system for long term context.",
        "Automated LinkedIn outreach managing 50+ conversations monthly, cut manual prospecting by 60%.",
        "Shipped a full B2B SaaS from scratch with 10+ paid users",
        "Implemented RAG based assistant that cut document lookup time by 70% across 400+ page documents.",
      ],
      stack: ["TypeScript", "Next.js", "Node.js", "Supabase"],
    },
    {
      company: "Mythics",
      role: "Software Engineer",
      date: "Feb 2025 – Aug 2025",
      location: "Bengaluru, IN",
      type: "Internship",
      bullets: [
        "Engineered an AI analytics agent using DeepSeek that processed raw company data into dashboards.",
        "Designed a workflow to filter datasets before model ingestion, improving dashboard accuracy by ~30%.",
        "Built AI agents using the OpenAI API to parse PDFs and interact with spreadsheets across 500+ documents.",
      ],
      stack: ["TypeScript", "Python", "Pandas", "DeepSeek API"],
    },
    {
      company: "Novus",
      role: "Software Engineer",
      date: "Jul 2024 – Nov 2024",
      location: "Mysore, IN",
      type: "Internship",
      bullets: [
        "Worked on a Django REST monolith powering a hyperlocal commerce platform.",
        "Improved delivery fulfillment and transit flows by ~20%, resolving bugs across the order lifecycle.",
        "Refactored cart creation and state transition logic, improving order lifecycle reliability.",
      ],
      stack: ["Python", "Django", "PostgreSQL", "Docker"],
    },
    {
      company: "Ramaiah University",
      role: "Research Intern",
      date: "Apr 2024 – Jul 2024",
      location: "Bengaluru, IN",
      type: "Internship",
      bullets: [
        "Annotated and preprocessed live infant video data from Ramaiah Hospital for pain/no-pain classification.",
        "Trained an object detection model on neonatal facial expressions for real-time clinical monitoring.",
        "Built a system to run the trained model on live video feeds for clinical use.",
      ],
      stack: ["Python", "PyTorch", "OpenCV", "YOLOv8"],
    },
    {
      company: "Doodle Health",
      role: "Research Intern",
      date: "Apr 2023 – Jun 2023",
      location: "Mysore, IN",
      type: "Internship",
      bullets: [
        "Designed data models and dashboards to visualize mental health indicators across patient cohorts.",
        "Built an AI system to detect and classify mental health distress signals from user-generated content.",
        "Analyzed patient data to surface trends and patterns across clinical segments.",
      ],
      stack: ["Python", "FastAPI", "Pandas", "OpenAI API"],
    },
  ] as Experience[],
  projects: [
    {
      num: "01",
      name: "MediMitra",
      desc: "doctor appointment platform — credit-based scheduling, role-based access for patients, doctors and admins, real-time video.",
      stack: ["Next.js", "Neon", "Vonage"],
      meta: "Appointments · Video calls · Role-based access",
      github: "https://github.com/1sh22/medimitra",
      live: "https://getmedimitra.vercel.app",
    },
    {
      num: "02",
      name: "Pretex",
      desc: "typographic ASCII playground with three modes — generative shapes, live camera to ASCII, and editorial text that reflows on canvas.",
      stack: ["Next.js", "TypeScript"],
      meta: "ASCII art · Canvas · Typographic playground",
      github: "https://github.com/1sh22/pretex",
      live: "https://pretex.vercel.app",
    },
    {
      num: "03",
      name: "Droply",
      desc: "file storage app with drag and drop uploads, folder organization, starring, trash management, file previews, and bulk operations.",
      stack: ["Next.js", "Supabase", "ImageKit"],
      meta: "File storage · Drag and drop · Bulk operations",
      github: "https://github.com/1sh22/droply",
      live: "https://usedroply.vercel.app",
    },
    {
      num: "04",
      name: "Emotion Classifier",
      desc: "text-based emotion classifier using TF-IDF, traditional ML, and an LSTM. random forest ~85%, LSTM crossed 97% accuracy.",
      stack: ["Python", "Keras", "Scikit-learn"],
      meta: "NLP · LSTM · Emotion detection",
      github: "https://github.com/1sh22/emotional-intelligence-nlp",
    },
  ] as Project[],
  footerLinks: [
    { label: "email", href: "mailto:ishaanchoubey3@gmail.com" },
    { label: "github", href: "https://github.com/1sh22" },
    { label: "linkedin", href: "https://www.linkedin.com/in/ishaanchoubey/" },
    { label: "x", href: "https://x.com/ishaanchoubeyy" },
  ] as SiteLink[],
}

export default siteContent
