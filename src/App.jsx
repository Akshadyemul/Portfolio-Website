import NavBar from "./components/NavBar";
import Education from "./pages/Education";
import Home from "./pages/Home";
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
      </div>
    </>
  );
}

export default App;
