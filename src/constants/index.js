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
  //zentry
  {
    title: " Zentry — The Web3 Landing Experience",
    desc: "Zentry is a futuristic landing page crafted to showcase the power of animation, scroll-based interactivity, and immersive sound. Perfect for Web3 platforms, portfolios, or experimental digital playgrounds.",
    subdesc:
      "With a focus on efficiency in  Web3-inspired immersive visuals Scroll-triggered animations using GSAP,Audio-enabled transitions for rich experience,Utility-first responsive styling with Tailwind,Organized code with reusable components,Ideal base for creative landing pages or experiments",
    href: "https://karthickramalagar.github.io/Zentry/",
    texture: "/textures/project/zentry.mp4",
    logo: "/assets/zentry.png",
    logoStyle: {
      backgroundColor: "#60f5a1",
      background:
        "linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)",
      border: "0.2px solid rgba(208, 213, 221, 1)",
      boxShadow: "0px 0px 60px 0px rgba(35, 131, 96, 0.3)",
    },
    spotlight: "/assets/spotlight3.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "GSAP",
        path: "/assets/GSAP.png",
      },
      {
        id: 4,
        name: "Fish Audio",
        path: "/assets/JavaScript.png",
      },
    ],
  },
  //hired
  {
    title: " Hired — Smart Job Portal for Job Seekers & Recruiters",
    desc: "Hired is a full-stack job board platform enabling seamless job discovery, application management, and recruiter interactions.",
    subdesc: `It includes
            Secure authentication via Clerk
            Realtime database integration with Supabase
            Tailored user dashboards for job seekers and employers
            Optimized for speed and accessibility using Vite and TailwindCSS`,

    href: "https://hirrdv1.vercel.app/",
    texture: "/textures/project/hirrd.mp4",
    logo: "/assets/Hirrd.png",
    logoStyle: {
      backgroundColor: "#2A1816",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "/assets/spotlight1.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "JavaScript",
        path: "/assets/JavaScript.png",
      },
      {
        id: 4,
        name: "Clerk Authentication",
        path: "/assets/clerk.png",
      },
      {
        id: 5,
        name: "Supabase",
        path: "/assets/supabase.png",
      },
    ],
  },
  //tourvisto
  {
    title: "TrourVisto — AI Powered Travel Experience",
    desc: "TrourVisto is an AI-powered, full-stack travel application designed to eliminate the need for traditional travel agencies by connecting users directly to AI-driven itineraries, recommendations, and real-time travel assistance.",
    subdesc:
      "The application is built with a modern full-stack JavaScript architecture leveraging the React Router v7 SSR framework for isomorphic rendering, SEO optimization, and fast client-server hydration.",
    href: "https://tourvisto-ai.vercel.app/#",
    texture: "/textures/project/tourvisto.mp4",
    logo: "/assets/tourvisto.svg",
    logoStyle: {
      backgroundColor: "#13202F",
      border: "0.2px solid #17293E",
      boxShadow: "0px 0px 60px 0px #2F6DB54D",
    },
    spotlight: "/assets/spotlight2.png",
    tags: [
      {
        id: 1,
        name: "React Router V7",
        path: "/assets/ReactRouterV7.webp",
      },
      {
        id: 2,
        name: "Google Generative AI",
        path: "assets/GGAI.webp",
      },
      {
        id: 3,
        name: "Appwrite",
        path: "/assets/appwrite.png",
      },
      {
        id: 4,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
      {
        id: 5,
        name: "Sentry",
        path: "/assets/sentry.jpeg",
      },
    ],
  },
  //fluxcart
  {
    title: " FluxCart — Modern E-Commerce Platform",
    desc: "FluxCart follows a headless e-commerce architecture. Product data is managed in Sanity CMS, fetched dynamically into Next.js pages for SEO and SSR optimization. Checkout is powered by Stripe, integrated with a custom API route for session creation.",
    subdesc:
      "Built and designed for performance, scalability, and seamless user experience. Built with Next.js 15 using Turbopack for blazing-fast dev performance, TailwindCSS for a modern UI, Sanity CMS for dynamic content management, and Stripe for secure checkout.",
    href: "https://fluxcart-xi.vercel.app/",
    texture: "/textures/project/fluxcart.mp4",
    logo: "/assets/fluxkart.png",
    logoStyle: {
      backgroundColor: "#0E1F38",
      border: "0.2px solid #0E2D58",
      boxShadow: "0px 0px 60px 0px #2F67B64D",
    },
    spotlight: "/assets/spotlight4.png",
    tags: [
      {
        id: 1,
        name: "Next.js",
        path: "/assets/nextjs.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "Sanity CMS",
        path: "/assets/sanity.png",
      },
      {
        id: 4,
        name: "Stripe Checkout",
        path: "/assets/stripe.png",
      },
    ],
  },
  //klimate
  {
    title: "Klimate - Weather Intelligence Dashboard",
    desc: "Klimate is a responsive weather application that provides live conditions, 5-day forecasts, and localized weather data using OpenWeatherMap APIs. ",
    subdesc:
      "A dynamic, multi-language weather dashboard built with React 19, Tailwind CSS, Radix UI, and React Query. Delivers live weather analytics with interactive UI, charts, themes, and localization.",
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
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
      {
        id: 4,
        name: "React Query",
        path: "/assets/rtk.png",
      },
    ],
  },
  //crytohunter
  {
    title: "CryptoHunter — Real-time Crypto Dashboard",
    desc: "A modern and responsive cryptocurrency tracking dashboard built with React 19, MUI, and Chart.js. Displays real-time market stats and charts from CoinGecko API. ",
    subdesc:
      "A full-featured crypto tracker that uses the CoinGecko API to display market data. The app supports responsive design, chart visualizations, dynamic coin detail pages, and more..",
    href: "https://cryptohuntershub.netlify.app/",
    texture: "/textures/project/cryptoHunter.mp4",
    logo: "/assets/cryptohunter.png",
    logoStyle: {
      backgroundColor: "#1C1A43",
      border: "0.2px solid #252262",
      boxShadow: "0px 0px 60px 0px #635BFF4D",
    },
    spotlight: "/assets/spotlight5.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "Material UI",
        path: "assets/mui.png",
      },
      {
        id: 3,
        name: "Vite",
        path: "/assets/vite.png",
      },
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
      ? [5, 4,0]
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
