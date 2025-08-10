import { useState } from "react";
import { navLinks } from "../constants/index.js";
import ClerkAuthentication from "../components/ClerkAuthentication.jsx";
const NavItems = ({ closeMenu }) => {
  return (
    <ul className="nav-ul">
      {navLinks.map((item) => (
        <li key={item.id} className="nav-li">
          <a
            href={item.href}
            className="nav-li_a"
            onClick={() => closeMenu?.()}
          >
            {item.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 ">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-5 mx-auto c-space">
          <a
            href="/renderGate"
            className="text-neutral-400 font-bold text-xl hover:text-white transition-colors"
          >
            <img
              src="/KR.png"
              alt="toggle"
              className="w-15 h-12 animate-pulse"
            />
          </a>
          <button
            onClick={toggleMenu}
            className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex"
            aria-label="Toggle menu"
          >
            <img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              alt="toggle"
              className="w-6 h-6"
            />
          </button>
          <nav className="sm:flex hidden items-center">
            <NavItems />
            <div className="ml-6 flex">
              <ClerkAuthentication />
            </div>
          </nav>
        </div>
      </div>
      <div
        className={`overflow-hidden transition-all duration-500 ${
          isOpen ? "h-auto py-4" : "h-0"
        }`}
      >
        <nav className="p-5 flex flex-col gap-2 justify-center items-center">
          <NavItems closeMenu={() => setIsOpen(false)} />
          <div className="mt-4 mr-4">
            <ClerkAuthentication />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
