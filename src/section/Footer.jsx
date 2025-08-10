import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

const Footer = () => {
  return (
    <footer className="pt-7 pb-5 border-t border-black-300 flex flex-col gap-5 text-center">
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

        {/* Floating AI Button with Tooltip */}
        <div className="pr-10 mt-4 sm:mt-0">
          <a
            href="https://karthickaiagent.vercel.app/"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full overflow-hidden shadow-md transition-transform duration-300 hover:scale-110 block animate-[float_2.5s_ease-in-out_infinite]"
            data-tooltip-id="ai-tooltip"
            data-tooltip-content="Ask Me Anything"
            data-tooltip-place="top"
            aria-label="AI Assistant"
          >
            <img
              src="/assets/AIA.png"
              alt="Ask Me Anything"
              className="w-full h-full object-cover"
            />
          </a>

          <Tooltip
            id="ai-tooltip"
            className="!bg-white !text-black !border !border-black !shadow-lg !px-3 !py-1.5 !text-sm"
            style={{
              background: "linear-gradient(to bottom right, white, #fbcfe8)",
              zIndex: 100,
            }}
          />
        </div>
      </div>

      {/* Footer Text */}
      <p className="text-gray-400 text-lg mt-4 text-center">
        © {new Date().getFullYear()} Karthikeyan. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
