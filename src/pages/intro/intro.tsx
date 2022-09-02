import React from "react";
import { Link } from "react-router-dom";

function Intro() {
  return (
    <div>
      <h1>Intro Page</h1>
      <Link to="/quran">
        <button>Go to Quran</button>
      </Link>
    </div>
  );
}

export default Intro;
