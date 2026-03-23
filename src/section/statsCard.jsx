import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import CountUp from "react-countup";

const StatsCard = ({ value, label, gradient }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // detect mobile
  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  // extract number safely
  const numericValue =
    typeof value === "string" ? parseInt(value.replace(/\D/g, "")) || 0 : value;

  const hasPlus = typeof value === "string" && value.includes("+");

  const triggerFlip = () => {
    setIsFlipped((prev) => !prev);
  };

  const handleHoverStart = () => {
    if (!isMobile) triggerFlip();
  };

  const handleHoverEnd = () => {
    if (!isMobile) setIsFlipped(false);
  };

  const handleClick = () => {
    if (isMobile) triggerFlip();
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="perspective-1000"
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
      onClick={handleClick}
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        className="relative w-full h-64 preserve-3d cursor-pointer"
      >
        {/* FRONT */}
        <div
          className={`absolute inset-0 rounded-2xl border-2 border-white/20 shadow-xl ${gradient} flex items-center justify-center backface-hidden`}
        >
          <p className="text-3xl lg:text-5xl font-bold text-white text-center">
            <Typewriter
              words={[label]}
              loop={false}
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </p>
        </div>

        {/* BACK */}
        <div
          className={`absolute inset-0 rounded-2xl border-2 border-white/20 shadow-xl ${gradient} flex flex-col items-center justify-center backface-hidden`}
          style={{ transform: "rotateY(180deg)" }}
        >
          <motion.p
            className="text-6xl font-bold text-white flex"
            initial={{ scale: 0.6 }}
            animate={{ scale: isFlipped ? 1 : 0.6 }}
            transition={{ duration: 0.4 }}
          >
            {isFlipped && (
              <>
                <CountUp end={numericValue} duration={2} />
                {hasPlus && "+"}
              </>
            )}
          </motion.p>

          <p className="text-4xl font-semibold text-white mt-2">{label}</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default StatsCard;
