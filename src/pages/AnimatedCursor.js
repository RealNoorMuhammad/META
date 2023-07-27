import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import "./AnimatedCursor.css";
const AnimatedCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const dot = cursor.querySelector(".animated-cursor-dot");

    const onMouseMove = (e) => {
      gsap.to(cursor, {
        duration: 0.2,
        x: e.clientX,
        y: e.clientY,
      });

      gsap.to(dot, {
        duration: 0.4,
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <div className="animated-cursor" ref={cursorRef}>
      <div className="animated-cursor-dot" />
    </div>
  );
};

export default AnimatedCursor;
