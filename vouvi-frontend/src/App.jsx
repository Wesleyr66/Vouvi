import { Routes, Route, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import CreateAccount from "./pages/CreateAccount/CreateAccount";
import Store from "./pages/Store/Store";
import About from "./pages/About/About";
import Profile from "./pages/Profile/Profile";
import Learn from "./pages/Learn/Learn";
import Avatar from "./pages/Avatar/Avatar";
import Ranking from "./pages/Rank/Ranking";
import UserReturn from "./pages/UserReturn/UserReturn";
import Planning from "./pages/Planning/Planning";
import Lesson1 from "./pages/Lessons/Lesson1";
import ScrollToTop from "./utils/scrollUp";
import Plans from "./pages/Plans/Plans";
import GoalsCreate from "./components/Modals/GoalsCreate";

function App() {
  const location = useLocation(); // Obtém a localização da página atual

  // Páginas sem animação
  const noAnimationPaths = ["/store", "/profile", "/learn", "/ranking", "/planning", "/lesson1"];

  // Verifica se a página atual deve ter animação
  const shouldAnimate = !noAnimationPaths.includes(location.pathname);

  // Configuração da animação de fade e desfoque
  const pageAnimation = {
    initial: { opacity: 0, scale: 0.95, filter: "blur(10px)" }, // Começa invisível e com desfoque
    animate: { opacity: 1, scale: 1, filter: "blur(0px)" }, // Fica visível e sem desfoque
    exit: { opacity: 0, scale: 1.05, filter: "blur(10px)" }, // Sai com desfoque
    transition: {
      duration: 0.6, // Duração da animação de transição
      ease: "easeInOut", // Aceleração suave para a transição
    },
  };

  return (
    <>
      <ScrollToTop />
      <Routes location={location} key={location.key}>
        <Route
          path="/home"
          element={
            shouldAnimate ? (
              <motion.div {...pageAnimation}>
                <Home />
              </motion.div>
            ) : (
              <Home />
            )
          }
        />
        <Route
          path="/"
          element={
            shouldAnimate ? (
              <motion.div {...pageAnimation}>
                <Home />
              </motion.div>
            ) : (
              <Home />
            )
          }
        />
        <Route
          path="/login"
          element={
            shouldAnimate ? (
              <motion.div {...pageAnimation}>
                <Login />
              </motion.div>
            ) : (
              <Login />
            )
          }
        />
        <Route
          path="/create-account"
          element={
            shouldAnimate ? (
              <motion.div {...pageAnimation}>
                <CreateAccount />
              </motion.div>
            ) : (
              <CreateAccount />
            )
          }
        />
        <Route
          path="/store"
          element={
            !shouldAnimate ? (
              <Store />
            ) : (
              <motion.div {...pageAnimation}>
                <Store />
              </motion.div>
            )
          }
        />
        <Route
          path="/about"
          element={
            shouldAnimate ? (
              <motion.div {...pageAnimation}>
                <About />
              </motion.div>
            ) : (
              <About />
            )
          }
        />
        <Route
          path="/profile"
          element={
            !shouldAnimate ? (
              <Profile />
            ) : (
              <motion.div {...pageAnimation}>
                <Profile />
              </motion.div>
            )
          }
        />
        <Route
          path="/learn"
          element={
            !shouldAnimate ? (
              <Learn />
            ) : (
              <motion.div {...pageAnimation}>
                <Learn />
              </motion.div>
            )
          }
        />
        <Route
          path="/avatar"
          element={
            shouldAnimate ? (
              <motion.div {...pageAnimation}>
                <Avatar />
              </motion.div>
            ) : (
              <Avatar />
            )
          }
        />
        <Route
          path="/ranking"
          element={
            !shouldAnimate ? (
              <Ranking />
            ) : (
              <motion.div {...pageAnimation}>
                <Ranking />
              </motion.div>
            )
          }
        />
        <Route
          path="/user-return"
          element={
            shouldAnimate ? (
              <motion.div {...pageAnimation}>
                <UserReturn />
              </motion.div>
            ) : (
              <UserReturn />
            )
          }
        />
        <Route
          path="/planning"
          element={
            !shouldAnimate ? (
              <Planning />
            ) : (
              <motion.div {...pageAnimation}>
                <Planning />
              </motion.div>
            )
          }
        />
        <Route
          path="/lesson-1"
          element={
            !shouldAnimate ? (
              <Lesson1 />
            ) : (
              <motion.div {...pageAnimation}>
                <Lesson1 />
              </motion.div>
            )
          }
        />
        <Route
          path="/plans"
          element={
            shouldAnimate ? (
              <motion.div {...pageAnimation}>
                <Plans />
              </motion.div>
            ) : (
              <Plans />
            )
          }
        />
        <Route
          path="/goals"
          element={
            shouldAnimate ? (
              <motion.div {...pageAnimation}>
                <GoalsCreate />
              </motion.div>
            ) : (
              <GoalsCreate />
            )
          }
        />
      </Routes>
    </>
  );
}

export default App;
