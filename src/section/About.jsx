import { useRef, useState, useEffect } from "react";
import Globe from "react-globe.gl";
import Button from "../components/Button";
import Alert from "../components/Alert.jsx";
import useAlert from "../hooks/useAlert.js";
import { TechCarousel } from "../components/TechCarousel";

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null);
  const globeRef = useRef();

  const handleCopy = () => {
    navigator.clipboard.writeText("karthickramalagar@gmail.com");
    setHasCopied(true);
    setTimeout(() => setHasCopied(false), 2000);
  };

  const { alert, showAlert, hideAlert } = useAlert();

  useEffect(() => {
    if (globeRef.current) {
      // Set initial camera POV
      globeRef.current.pointOfView(
        {
          lat: 9.9252,
          lng: 78.1198,
          altitude: 1.3,
        },
        1000,
      );

      // Enable auto-rotation
      const controls = globeRef.current.controls();
      controls.autoRotate = true;
      controls.autoRotateSpeed = 0.8;
    }
  }, []);

  // // Play audio exactly 3 times, support pause & resume from same timestamp
  // useEffect(() => {
  //   audioRef.current = new Audio("/audio/audio2.mp4");
  //   audioRef.current.volume = 0.1;

  //   let playCount = 0;

  //   const handleEnded = () => {
  //     playCount++;
  //     if (playCount < 3) {
  //       audioRef.current.play(); // play again
  //     }
  //   };

  //   audioRef.current.addEventListener("ended", handleEnded);

  //   // Start playing
  //   audioRef.current.play().catch(() => {});

  //   return () => {
  //     audioRef.current.removeEventListener("ended", handleEnded);
  //     audioRef.current.pause();
  //     audioRef.current = null;
  //   };
  // }, []);

  // const toggleMute = () => {
  //   setIsMuted((prev) => !prev);

  //   if (!audioRef.current) return;

  //   if (isMuted) {
  //     audioRef.current.play(); // resume
  //   } else {
  //     audioRef.current.pause(); // pause but keep position
  //   }
  // };
  const techData = {
    languages: [
      { name: "JavaScript", icon: "./tech/Languages/js.png" },
      { name: "TypeScript", icon: "/tech/Languages/ts.png" },
      { name: "Node js", icon: "/tech/Languages/Nodejs.png" },
      { name: "SQL", icon: "/tech/Languages/sql.png" },
      { name: "HTML5", icon: "/tech/Languages/html5.png" },
      { name: "CSS3", icon: "/tech/Languages/css3.png" },
      { name: "SQL", icon: "/tech/Languages/sql.png" },
    ],

    frameworks: [
      { name: "React", icon: "/tech/Libraries_Frameworks/reactjs.png" },
      { name: "Redux js", icon: "/tech/Libraries_Frameworks/reduxjs.png" },
      {
        name: "Express js",
        icon: "/tech/Libraries_Frameworks/expressjs.png",
      },
      {
        name: "Tailwind CSS",
        icon: "/tech/Libraries_Frameworks/tailwindcss.png",
      },
      { name: "GSAP", icon: "/tech/Libraries_Frameworks/gsap.png" },
      {
        name: "React Hook Form",
        icon: "/tech/Libraries_Frameworks/rhf.png",
      },
      {
        name: "Router DOM",
        icon: "/tech/Libraries_Frameworks/Router_Dom.png",
      },
      {
        name: "ShadCN",
        icon: "/tech/Libraries_Frameworks/ShadcnUI.png",
      },
    ],

    tools: [
      { name: "PostgreSQL", icon: "/tech/Languages/pgsql.png" },
      { name: "Drizzle ORM", icon: "/tech/tools/drizzle_orm.png" },
      { name: "GitHub", icon: "/tech/tools/github.png" },
      { name: "Postman", icon: "/tech/tools/postman.png" },
      { name: "Vite", icon: "/tech/tools/Vite.png" },
      { name: "VS Code", icon: "/tech/tools/vscode.png" },
      { name: "Clerk", icon: "/tech/tools/clerk.png" },
      { name: "Supabse", icon: "/tech/tools/supabse.png" },
    ],
  };
  return (
    <section className="c-space my-20" id="about">
      {alert.show && <Alert {...alert} />}
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-col-1 gap-5 h-full">
        {/* GRID 1 */}
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/g1.png"
              alt="grid-1"
              className="w-full sm:h-[276px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">Hi, I'm Karthikeyan</p>
              <p className="grid-subtext ">
                With a Bachelor’s degree in Electrical and Electronics
                Engineering (8.9 CGPA),
                I specialize in building modern web
                applications using React,JavaScript/TypeScript, and scalable
                backend services with Node.js, Express.js, and PostgreSQL.
              </p>
            </div>
          </div>
        </div>

        {/* GRID 2 */}
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid21.png"
              alt="grid-2"
              className="w-full sm:w-[276px] h-fit object-contain mx-auto"
            />
            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                React & TypeScript developer building modern web applications
                with Node.js, Express, and PostgreSQL for full-stack solutions.
              </p>
            </div>
          </div>
        </div>

        {/* GRID 3 — Globe */}
        <div className="col-span-1 xl:row-span-4 relative">
          <div className="grid-container relative">
            {/* Sound Toggle Button */}
            {/* <button
              onClick={toggleMute}
              className="absolute top-4 right-4 z-50 bg-black/50 p-2 rounded-full hover:bg-black/70 transition text-white text-sm"
            >
              {isMuted ? "🔇" : "🔊"}
            </button> */}

            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                ref={globeRef}
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[
                  {
                    lat: 9.9252,
                    lng: 78.1198,
                    text: "Madurai, India",
                    color: "red",
                    size: 2.5,
                    labelSize: 1.5,
                  },
                ]}
                labelDotRadius={0.5}
                labelColor={() => "red"}
                labelTextColor={() => "white"}
                labelResolution={2}
                onLabelClick={(label) => {
                  showAlert({
                    text: `📍 I'm from ${label.text}`,
                    type: "info",
                  });
                  setTimeout(() => hideAlert(), 3000);
                }}
              />
            </div>

            <div>
              <p className="grid-headtext">
                I work remotely across most time zones.
              </p>
              <p className="grid-subtext">
                I'm based in India, with remote work availability.
              </p>
              <a href="#contact" className="w-full mt-10 block">
                <Button name="Contact Me" isBeam containerClass="w-full" />
              </a>
            </div>
          </div>
        </div>

        {/* GRID 4 */}
        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid3.png"
              alt="grid-3"
              className="w-full sm:h-[266px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">My Passion for WebApps</p>
              <p className="grid-subtext">
                I love building 3D websites & applications powered by modern
                frontend ecosystems. Coding isn't just a skill — it's my
                passion.
              </p>
            </div>
          </div>
        </div>

        {/* GRID 5 */}
        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="/assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />
            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact Me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img
                  src={hasCopied ? "assets/tick.svg" : "assets/copy.svg"}
                  alt="copy"
                />
                <p className="lg:text-xl md:text-lg font-medium text-gray_gradient text-white">
                  karthickramalagar@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* TECH CAROUSEL */}
      <div className="lg:col-span-3 glass rounded-lg p-4">
        <TechCarousel techData={techData} />
      </div>
    </section>
  );
};

export default About;
