import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import App from "./App.jsx";
import ReflexionLandingPage from "./ReflexionLandingPage.jsx";
import About from "./pages/About.jsx";
import Navbar from "./components/Navbar.jsx";
import { Analytics } from "@vercel/analytics/react"
 

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
    <Analytics />
      <Navbar />
      <Routes>
        {/* 🧠 Landing Page 當首頁 */}
        <Route path="/" element={<ReflexionLandingPage />} />
        <Route path="/about" element={<About />} />

        {/* 💻 分析工具頁面 */}
        <Route path="/app" element={<App />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
