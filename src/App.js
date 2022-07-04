import React from "react";
import About from "./Layout/About";
import Contact from "./Layout/Contact";
import Navbar from "./Layout/Navbar";
import Projects from "./Layout/Projects";

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <Projects />
      <Contact />
      <Resume />
    </main>
  );
}
