import HeaderWhite from "../../components/Header/HeaderWhite";
import Footer from "../../components/Footer/Footer";
import HomeAnimation from "../../components/Rive/HomeAnimation";
import Top from "./Top";
import Mid from "./Mid";
import Low from "./Low";

import backgroundV from "../../assets/videos/video-background.mp4";
import backgroundVdark from "../../assets/videos/video-background-dark.mp4";

import { useState } from "react";

function Home() {
  const [darkMode, setDarkMode] = useState(
    document.body.classList.contains("dark"),
  );

  return (
    <main className="overflow-x-hidden">
      <HeaderWhite darkMode={darkMode} setDarkMode={setDarkMode} />
      <Top background={darkMode ? backgroundVdark : backgroundV} />
      <Mid />
      <Low />
      <Footer darkMode={darkMode} />
    </main>
  );
}

export default Home;
