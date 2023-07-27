import React, { useState, useEffect } from "react";
import "./do.css";
const ProgressIndicator = () => {
  const [pathLength, setPathLength] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const progressPath = document.querySelector(".progress-wrap path");
    const pathLen = progressPath.getTotalLength();
    setPathLength(pathLen);

    progressPath.style.transition = progressPath.style.WebkitTransition =
      "none";
    progressPath.style.strokeDasharray = pathLen + " " + pathLen;
    progressPath.style.strokeDashoffset = pathLen;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.WebkitTransition =
      "stroke-dashoffset 10ms linear";

    const handleScroll = () => {
      const scroll = window.pageYOffset;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const newProgress = pathLen - (scroll * pathLen) / height;
      setProgress(newProgress);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathLength]);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="progress-wrap">
      <svg
        className="progress-circle svg-content"
        width="100%"
        height="100%"
        viewBox="-1 -1 102 102"
      >
        <path
          d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
          strokeDashoffset={progress}
          strokeDasharray={pathLength}
        />
      </svg>
      <button className="btn-scroll-top" onClick={handleClick}>
        <i className="uil uil-arrow-up"></i>
      </button>
    </div>
  );
};

const App = () => {
  const [isLight, setIsLight] = useState(false);

  const handleSwitchClick = () => {
    setIsLight(!isLight);
  };

  return (
    <>
      <div className="section">
        <div className="center-wrap">
          <h1 className="text-center">Scroll</h1>
          <p className="text-center mb-0">
            Look at the right bottom corner
            <span className="color-gradient-red-yellow">
              <i className="uil uil-chart-down size-22 ml-2"></i>
            </span>
          </p>
        </div>
      </div>

      <div className="section"></div>

      <div className="section"></div>

      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <a
          className="navbar-brand"
          href="https://front.codes"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://assets.codepen.io/1462889/fcy.png"
            alt="FrontCodes Logo"
          />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <button className="switch" onClick={handleSwitchClick}>
                <div className="circle"></div>
              </button>
            </li>
          </ul>
        </div>
      </nav>

      <ProgressIndicator />
    </>
  );
};

export default App;
