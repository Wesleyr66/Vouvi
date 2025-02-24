import Top from "./Top";
import Low from "./Low";
import HeaderWhite from "../../components/Header/HeaderWhite";
import Footer from "../../components/Footer/Footer";
import { useState } from "react";

function About() {
  const [darkMode, setDarkMode] = useState(
    document.body.classList.contains("dark"),
  );
  return (
    <>
      <HeaderWhite darkMode={darkMode} setDarkMode={setDarkMode} />
      <Top />
      <Low />
      <Footer darkMode={darkMode} />
    </>
  );
}

export default About;
