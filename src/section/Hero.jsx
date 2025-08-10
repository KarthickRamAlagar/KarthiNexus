import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import HackerRoom from "../components/HackerRoom";
import { Suspense, use } from "react";
import CanvasLoader from "../components/CanvasLoader";
import { PerspectiveCamera } from "@react-three/drei";
// import { Leva, useControls } from "leva";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../constants/index.js";
import { Typewriter } from "react-simple-typewriter";
import Target from "../components/Target.jsx";
import ReactLogo from "../components/RactLogo.jsx";
import Cube from "../components/Cube.jsx";
import Rings from "../components/Rings.jsx";
import HeroCamera from "../components/HeroCamera.jsx";
import Button from "../components/Button.jsx";
import { Leva } from "leva";
import { useProgress } from "@react-three/drei";
const Hero = () => {
  const { progress } = useProgress();
  const isLoaded = progress === 100;
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  const isLaptop = useMediaQuery({ minWidth: 1025, maxWidth: 1440 });
  const isDesktop = useMediaQuery({ minWidth: 1441 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);
  const [typingFinished, setTypingFinished] = useState(false);

  return (
    <section
      className="min-h-screen w-full flex flex-col relative"
      id="home"
      style={{
        opacity: isLoaded ? 1 : 0,
        transition: "opacity 1s ease-in-out",
      }}
    >
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <h4 className="sm:text-5xl sm:text-bold  text-2xl ml-5 font-medium text-white text-center font-generalsans">
          Hi, I am KarthiKeyan <span className="waving-hand">👋</span>
        </h4>
        <p className="hero_tag text-gray_gradient ">
          {!typingFinished ? (
            <Typewriter
              words={[
                "Frontend Architect",
                "Animation-Rich UI Developer",
                " React Enthusiast",
              ]}
              loop={2}
              typeSpeed={100}
              deleteSpeed={80}
              delaySpeed={1000}
              onLoopDone={() => setTypingFinished(true)}
            />
          ) : (
            "Frontend Architect"
          )}
        </p>
      </div>
      <div className="w-full h-full absolute inset-0">
        {/* <Leva /> */}
        <Canvas className="h-full w-full">
          <Leva hidden />
          <PerspectiveCamera makeDefault position={[0, 0, 30]} />
          <CanvasLoader />
          <Suspense fallback={null}>
            <HeroCamera
              isMobile={isMobile}
              isTablet={isTablet}
              isDesktop={isDesktop}
              isLaptop={isLaptop}
            >
              <HackerRoom
                position={sizes.deskPosition}
                rotation={[0.1, -Math.PI, 0]}
                scale={sizes.deskScale}
              />
            </HeroCamera>

            <group>
              <Target position={sizes.targetPosition} />
              <ReactLogo position={sizes.reactLogoPosition} />
              <Cube position={sizes.cubePosition} />
              <Rings position={sizes.ringPosition} />
            </group>
          </Suspense>

          <ambientLight intensity={1} />
          <directionalLight position={[10, 10, 10]} intensity={0.5} />
        </Canvas>
      </div>
      <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
        <a href="#contact" className="w-fit">
          <Button
            name="Let's work together"
            isBeam
            containerClass="sm:w-fit w-full sm:min-w-96"
          />
        </a>
      </div>
    </section>
  );
};

export default Hero;
