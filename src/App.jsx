import NavBar from "./components/NavBar";
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
      </div>
    </>
  );
}

export default App;
