// // import { useEffect } from "react";
// // import { useUser } from "@clerk/clerk-react";
// // import { useSearchParams, useNavigate } from "react-router-dom";
// // import Navbar from "../section/Navbar";
// // import Hero from "../section/Hero";
// // import About from "../section/About";
// // import Projects from "../section/Projects";
// // import Contact from "../section/Contact";
// // import Footer from "../section/Footer";
// // import Experience from "../section/Experience";

// // const MainPage = () => {
// //   const { isSignedIn } = useUser();
// //   const [, setSearchParams] = useSearchParams();
// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     const handleScroll = () => {
// //       if (!isSignedIn) {
// //         setSearchParams({ "sign-in": "true" });
// //       }
// //     };

// //     window.addEventListener("scroll", handleScroll);
// //     return () => window.removeEventListener("scroll", handleScroll);
// //   }, [isSignedIn, setSearchParams]);

// //   return (
// //     <main className="max-w-7xl mx-auto">
// //       <Navbar />
// //       <Hero />
// //       <About />
// //       <Projects />
// //       <Contact />
// //       <Experience />
// //       <Footer />
// //     </main>
// //   );
// // };

// // export default MainPage;

// // import React, { useEffect } from "react";
// // import { useUser } from "@clerk/clerk-react";
// // import { useSearchParams } from "react-router-dom";
// // import Navbar from "../section/Navbar";
// // import Hero from "../section/Hero";
// // import About from "../section/About";
// // import Projects from "../section/Projects";
// // import Contact from "../section/Contact";
// // import Footer from "../section/Footer";
// // import Experience from "../section/Experience";

// // const MainPage = () => {
// //   const { isSignedIn } = useUser();
// //   const [, setSearchParams] = useSearchParams();

// //   useEffect(() => {
// //     const handleScroll = () => {
// //       if (!isSignedIn) {
// //         setSearchParams({ "sign-in": "true" });
// //       }
// //     };

// //     window.addEventListener("scroll", handleScroll);
// //     return () => window.removeEventListener("scroll", handleScroll);
// //   }, [isSignedIn, setSearchParams]);

// //   return (
// //     <main className="max-w-7xl mx-auto">
// //       <Navbar />
// //       <Hero />
// //       <About />
// //       <Projects />
// //       <Experience />
// //       <Contact />
// //       <Footer />
// //     </main>
// //   );
// // };

// // export default MainPage;

import React from "react";
import Navbar from "../section/Navbar";
import Hero from "../section/Hero";
import About from "../section/About";
import Projects from "../section/Projects";
import Experience from "../section/Experience";
import Contact from "../section/Contact";
import Footer from "../section/Footer";
import Cursor from "../components/Cursor";

const MainPage = () => {
  return (
    <main className="max-w-7xl mx-auto">
      <Cursor />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
};

export default MainPage;
