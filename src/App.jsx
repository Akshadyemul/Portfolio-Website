import NavBar from "./components/NavBar";
import Contact from "./pages/Contact";
import Education from "./pages/Education";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import WhatIDo from "./pages/WhatIDo";

function App() {
  return (
    <>
      <div className="px-3">
        <NavBar />
        <Home />
        <WhatIDo />
        <Skills />
        <Education />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default App;
