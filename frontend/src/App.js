import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";

import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Expertise from "./components/Expertise";
import Methodology from "./components/Methodology";
import MidCTA from "./components/MidCTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function CoremorePage() {
  return (
    <div className="App relative">
      <Navigation />
      <main>
        <Hero />
        <Expertise />
        <Methodology />
        <MidCTA />
        <Contact />
      </main>
      <Footer />
      <Toaster
        theme="dark"
        position="bottom-right"
        toastOptions={{
          style: {
            background: "#0F172A",
            color: "#F8FAFC",
            border: "1px solid rgba(148,163,184,0.2)",
            borderRadius: 0,
            fontFamily: "Cabinet Grotesk, sans-serif",
          },
        }}
      />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CoremorePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
