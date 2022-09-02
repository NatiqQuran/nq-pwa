import React from "react";
import { Link } from "react-router-dom";

function Quran() {
  return (
    <div>
      <h1>Quran</h1>
      <Link to="/">
        <button>Go to Intro</button>
      </Link>
      <Link to="/pwa">
        <button>Go to PWA</button>
      </Link>
    </div>
  );
}

export default Quran;
