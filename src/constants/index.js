export const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "#home",
  },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 3,
    name: "Work",
    href: "#work",
  },
  {
    id: 4,
    name: "Products",
    href: "#products",
  },

  {
    id: 5,
    name: "Contact",
    href: "#contact",
  },
];

export const myProjects = [
  //  SERVD
  {
    title: "Servd — AI Powered Recipe Platform",
    desc: "Servd is an AI-powered recipe platform that enables intelligent cooking with personalized recipe generation, pantry scanning, and smart ingredient matching.",
    subdesc:
      "Built with React 19 and Next.js 16, Servd integrates Google Generative AI to generate personalized recipes. It includes Clerk authentication, Arcjet bot protection, subscription-based rate limiting, and Strapi CMS integration for managing recipe data.",
    href: "https://servd-three.vercel.app/",
    texture: "/textures/project/servd.mp4",
    logo: "/assets/servd.png",
    logoStyle: {
      backgroundColor: "#0F172A",
      border: "0.2px solid #1E293B",
      boxShadow: "0px 0px 60px 0px rgba(59,130,246,0.4)",
    },
    spotlight: "/assets/spotlight2.png",
    tags: [
      { id: 1, name: "Next.js", path: "/assets/nextjs.svg" },
      { id: 2, name: "React 19", path: "/assets/react.svg" },
      { id: 3, name: "TailwindCSS", path: "/assets/tailwindcss.png" },
      { id: 4, name: "Clerk Auth", path: "/assets/clerk.png" },
      { id: 5, name: "Arcjet Security", path: "/assets/JavaScript.png" },
      { id: 6, name: "Generative AI", path: "/assets/GGAI.webp" },
    ],
  },

  //  SHOPZONE (UNCHANGED)
  {
    title: "Shop Zone — Modern E-Commerce Platform",
    desc: "Shop Zone follows a headless e-commerce architecture. Product data is managed in Sanity CMS, fetched dynamically into Next.js pages for SEO and SSR optimization. Checkout is powered by Stripe.",
    subdesc:
      "Built with React.js 19 using Turbopack for blazing-fast performance, TailwindCSS for UI, Sanity CMS for product management, and Stripe for secure checkout.",
    href: "https://fluxcart-xi.vercel.app/",
    texture: "/textures/project/shopZone.mp4",
    logo: "/assets/fluxkart.png",
    logoStyle: {
      backgroundColor: "#0E1F38",
      border: "0.2px solid #0E2D58",
      boxShadow: "0px 0px 60px 0px #2F67B64D",
    },
    spotlight: "/assets/spotlight4.png",
    tags: [
      { id: 1, name: "Next.js", path: "/assets/nextjs.svg" },
      { id: 2, name: "TailwindCSS", path: "/assets/tailwindcss.png" },
      { id: 3, name: "Sanity CMS", path: "/assets/sanity.png" },
      { id: 4, name: "Stripe Checkout", path: "/assets/stripe.png" },
    ],
  },

  //  CLASSROOM MANAGEMENT
  {
    title: "ClassRoom Management — Smart Academic Admin Dashboard",
    desc: "A modern classroom management system designed to streamline academic administration, student tracking, and course management with a scalable dashboard architecture.",
    subdesc:
      "Built using React 19, Refine framework, Radix UI, and Tailwind CSS. Features include advanced data tables, form management with React Hook Form and Zod validation, Cloudinary media handling, analytics dashboards, and modular REST API integration.",
    href: "https://classroom-management-demo.vercel.app/",
    texture: "/textures/project/edumanager.mp4",
    logo: "/assets/classroom.png",
    logoStyle: {
      backgroundColor: "#1F2937",
      border: "0.2px solid #374151",
      boxShadow: "0px 0px 60px 0px rgba(99,102,241,0.35)",
    },
    spotlight: "/assets/spotlight3.png",
    tags: [
      { id: 1, name: "React 19", path: "/assets/react.svg" },
      { id: 2, name: "Refine Framework", path: "/assets/refine.png" },
      { id: 3, name: "TailwindCSS", path: "/assets/tailwindcss.png" },
      { id: 4, name: "Shadcn UI", path: "/assets/shadcnUI.png" },
      { id: 5, name: "React Hook Form", path: "/assets/rhf.png" },
    ],
  },

  //  ZENTRY (UNCHANGED)
  {
    title: "Zentry — The Web3 Landing Experience",
    desc: "Zentry is a futuristic landing page crafted to showcase the power of animation, scroll-based interactivity, and immersive sound.",
    subdesc:
      "Scroll-triggered animations using GSAP, audio-enabled transitions, and responsive UI powered by TailwindCSS. Ideal base for creative landing pages.",
    href: "https://karthickramalagar.github.io/Zentry/",
    texture: "/textures/project/zentry.mp4",
    logo: "/assets/zentry.png",
    logoStyle: {
      backgroundColor: "#60f5a1",
      background:
        "linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255,255,255,0.9) 0%, rgba(208,213,221,0.8) 100%)",
      border: "0.2px solid rgba(208,213,221,1)",
      boxShadow: "0px 0px 60px 0px rgba(35,131,96,0.3)",
    },
    spotlight: "/assets/spotlight3.png",
    tags: [
      { id: 1, name: "React.js", path: "/assets/react.svg" },
      { id: 2, name: "TailwindCSS", path: "/assets/tailwindcss.png" },
      { id: 3, name: "GSAP", path: "/assets/GSAP.png" },
      { id: 4, name: "JavaScript", path: "/assets/JavaScript.png" },
    ],
  },

  //  KLIMATE
  {
    title: "Klimate — Weather Intelligence Dashboard",
    desc: "A dynamic, multi-language weather dashboard providing live conditions and weather analytics with interactive charts.",
    subdesc:
      "Built with React 19, Vite, Tailwind CSS, Radix UI, Recharts, and React Query. Includes real-time weather data, localization with i18next, responsive UI, and interactive analytics visualizations.",
    href: "https://karthickramalagar.github.io/klimate/",
    texture: "/textures/project/klimate.mp4",
    logo: "/assets/Klimate.png",
    logoStyle: {
      backgroundColor: "#1C1A43",
      border: "0.2px solid #252262",
      boxShadow: "0px 0px 60px 0px #635BFF4D",
    },
    spotlight: "/assets/spotlight5.png",
    tags: [
      { id: 1, name: "React 19", path: "/assets/react.svg" },
      { id: 2, name: "Vite", path: "/assets/vite.png" },
      { id: 3, name: "TailwindCSS", path: "/assets/tailwindcss.png" },
      { id: 4, name: "Shadcn UI", path: "/assets/shadcnUI.png" },
      { id: 5, name: "React Query", path: "/assets/rtk.png" },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -5.5, 0] : [0.25, -6.5, 0],
    cubePosition: isSmall
      ? [4, -5, 2]
      : isMobile
        ? [5, -5, 0]
        : isTablet
          ? [5, -5, 0]
          : [9, -5.5, 0],
    reactLogoPosition: isSmall
      ? [3, 0, 0]
      : isMobile
        ? [5, 4, 0]
        : isTablet
          ? [5, 4, 0]
          : [12, 3, 0],
    ringPosition: isSmall
      ? [-6, 5, -1]
      : isMobile
        ? [-9, 10, -1]
        : isTablet
          ? [-12, 10, 0]
          : [-24, 10, 0],
    targetPosition: isSmall
      ? [-7, -9, -14]
      : isMobile
        ? [-9, -10, -11]
        : isTablet
          ? [-11, -7, -10]
          : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: "Aastra Technologies - India",
    pos: "Software Developer Intern - Frontend Developer",
    duration: "Jan 2025 - April 2025",
    title:
      "Aastra Technologies, kindly provide a clear and concise overview of the Information Technology (IT) industry, along with professional insights on how to develop scalable web applications.",
    icon: "/assets/Aastra.png",
    animation: "victory",
  },
  {
    id: 2,
    name: "EDUIOT Technologies- Canada",
    pos: "React Developer Intern - Remote",
    duration: "May 2024 - July 2024",
    title:
      "EDUIOT is my second remote internship, referred by a senior from my college. I develop and maintain user interfaces for electrical equipment. My work involves visualizing real-time readings and parameters to ensure intuitive monitoring and control..",
    icon: "/assets/Ed.png",
    animation: "clapping",
  },
  {
    id: 3,
    name: "Phoenix Softech - India",
    pos: "Junior React Developer",
    duration: "Sep 2023 - Dec 2023",
    title:
      "My internship at Phonix Infotech marked my first step into the Information Technology field. During this experience, I began learning React from scratch, gaining a solid foundation in frontend development as a beginner",
    icon: "/assets/PhoenixSoftech.png",
    animation: "salute",
  },
];

