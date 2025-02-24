let darkMode = document.body.classList.contains("dark");

const toggleDarkMode = () => {
  darkMode = !darkMode;
  document.body.classList.toggle("dark");
};

export { darkMode, toggleDarkMode };
