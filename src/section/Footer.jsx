import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

const Footer = () => {
  return (
    <footer className="pt-7 pb-5 border-t border-black-300 flex flex-col gap-5 text-center mb-5">
      {/* Top Row: Social Icons Left, Button Right */}
      <div className="w-full flex justify-between items-center flex-wrap">
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
            href="https://www.linkedin.com/in/karthickeyan-ramalagar"
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
    </footer>
  );
};

export default Footer;
