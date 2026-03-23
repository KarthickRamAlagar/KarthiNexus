import { useRef, forwardRef } from "react";
import { motion, useInView } from "framer-motion";
import StatsCard from "./StatsCard.jsx";

const StatsSection = forwardRef((props, ref) => {
  const localRef = useRef(null);
  const isInView = useInView(localRef);

  const stats = [
    {
      value: "4+",
      label: "Freelance Projects",
      gradient: "bg-gradient-to-br from-pink-500 to-pink-100",
    },
    {
      value: "20+",
      label: "Students Trained",
      gradient: "bg-gradient-to-br from-green-500 to-green-100",
    },
  ];

  return (
    <section ref={ref} className="py-20 px-6">
      <div ref={localRef} className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ x: -100, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.3 }}
            >
              <StatsCard
                value={stat.value}
                label={stat.label}
                gradient={stat.gradient}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default StatsSection;
