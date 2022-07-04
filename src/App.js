import React from "react";
import About from "./Layout/About";
import Contact from "./Layout/Contact";
import Navbar from "./Layout/Navbar";
import Projects from "./Layout/Projects";

export default function App() {
  return (
    <main>
      <Navbar />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}
