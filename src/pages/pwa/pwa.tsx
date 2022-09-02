import React from "react";
import { Link } from "react-router-dom";

const pwaIntroPagePassed = () => {
  localStorage.setItem("pwaIntroPassed", "true");
};

function Pwa() {
  return (
    <div>
      <h1>Pwa Intro Page</h1>
      <Link to="/quran">
        <button onClick={pwaIntroPagePassed}>Go to Quran</button>
      </Link>
    </div>
  );
}

export default Pwa;
