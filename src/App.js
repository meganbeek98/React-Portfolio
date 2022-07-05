import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
//import Resume from "./components/Resume";


export default function App() {
  return (
    <div>
      <Navbar />
      <main className="text-gray-400 bg-gray-900 body-font">
        <About />
        <Projects />
        <Contact />
        {/*<Resume /> */}
    </main>
    </div>
    
  );
}

