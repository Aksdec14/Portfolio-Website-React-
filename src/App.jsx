// src/App.jsx
import React from "react";
import HomePage from "./Components/HomePage";
import Experience from './Components/Experience';
import ContactForm from "./Components/Contact";
import Skills from "./Components/Skills";
import Certificates from "./Components/Certificates";

function App() {
  return (
    <div className="bg-background text-white">
      <HomePage />
      <Experience />
      <Skills />
      <Certificates />
      {/* Add more components as needed */}
      <ContactForm />
    </div>
  );
}

export default App;
