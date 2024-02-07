import { ThemeProvider } from "./components/theme-provider";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Project from "./components/Project/Project";
import Skill from "./components/Skill/Skill";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <Router>
          <Navbar />
          <Hero />
          <About />
          <Skill />
          <Project />
          <Contact />
          <Footer />
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
