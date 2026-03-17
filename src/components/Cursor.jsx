import { useEffect, useRef } from "react";
import "../index.css";
import gsap from "gsap";

const Cursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    let hover = false;

    const mousePos = { x: 0, y: 0 };
    const cursorPos = { x: 0, y: 0 };

    // 🔥 Track mouse
    const handleMouseMove = (e) => {
      mousePos.x = e.clientX;
      mousePos.y = e.clientY;
    };

    document.addEventListener("mousemove", handleMouseMove);

    // 🚀 SUPER SMOOTH GSAP setters
    const xSet = gsap.quickSetter(cursor, "x", "px");
    const ySet = gsap.quickSetter(cursor, "y", "px");

    //  Animation loop
    const loop = () => {
      if (!hover) {
        const delay = 3; 

        cursorPos.x += (mousePos.x - cursorPos.x) / delay;
        cursorPos.y += (mousePos.y - cursorPos.y) / delay;

        xSet(cursorPos.x);
        ySet(cursorPos.y);
      }

      requestAnimationFrame(loop);
    };

    requestAnimationFrame(loop);

    // 🎯 Hover interactions
    const elements = document.querySelectorAll("[data-cursor]");

    elements.forEach((element) => {
      element.addEventListener("mouseover", (e) => {
        const target = e.currentTarget;
        const rect = target.getBoundingClientRect();

        const type = element.dataset.cursor;

        if (type === "icons") {
          cursor.classList.add("cursor-icons");

          xSet(rect.left);
          ySet(rect.top);

          cursor.style.setProperty("--cursorH", `${rect.height}px`);
          hover = true;
        }

        if (type === "disable") {
          cursor.classList.add("cursor-disable");
        }
      });

      element.addEventListener("mouseout", () => {
        cursor.classList.remove("cursor-disable", "cursor-icons");
        hover = false;
      });
    });

    // 🧹 Cleanup
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return <div className="cursor-main" ref={cursorRef}></div>;
};

export default Cursor;
