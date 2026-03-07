import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

const Footer = () => {
  return (
    <footer className="pt-7 pb-5 border-t border-black-300 flex flex-col gap-5 text-center mb-5">
      {/* Top Row: Social Icons Left, Button Right */}
      <div className="w-full  flex  flex-col md:flex-row justify-between items-center ">
        {/* Social Icons - Left */}
        <div className="flex gap-5 pl-4">
          <a
            href="https://github.com/KarthickRamAlagar"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon hover:opacity-80 transition-opacity"
            aria-label="GitHub"
          >
            <img src="/assets/github.svg" alt="GitHub" className="w-6 h-6" />
          </a>

          <a
            href="https://www.linkedin.com/in/karthi21903/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon hover:opacity-80 transition-opacity"
            aria-label="LinkedIn"
          >
            <img
              src="/assets/linkedin.svg"
              alt="LinkedIn"
              className="w-6 h-6"
            />
          </a>

          <a
            href="https://www.instagram.com/karthickramalagar?igsh=YXdiYnlvOWxjMzE4"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon hover:opacity-80 transition-opacity"
            aria-label="Instagram"
          >
            <img
              src="/assets/instagram.svg"
              alt="Instagram"
              className="w-6 h-6"
            />
          </a>
        </div>

        {/* Footer Text */}
        <p className="text-gray-400 text-lg mt-4 text-center">
          © {new Date().getFullYear()} Karthikeyan. All rights reserved.
        </p>
      </div>
      <h2 className="relative text-gray-600 text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold leading-snug max-w-4xl mx-auto glow-text mt-6">
        <span className="text-3xl sm:text-4xl lg:text-5xl text-white font-serif absolute -left-6 md:-left-6 lg:-left-10 top-0">
          “
        </span>
        Crafted for SDLC . Driven by Purpose
        <span className="text-3xl sm:text-4xl lg:text-5xl text-white font-serif absolute -right-6 md:-right-6 lg:-right-10 -bottom-5">
          ”
        </span>
      </h2>
    </footer>
  );
};

export default Footer;
