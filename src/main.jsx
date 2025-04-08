import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';

import App from './App.jsx';
import ReflexionLandingPage from './ReflexionLandingPage.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* 🧠 Landing Page 當首頁 */}
        <Route path="/" element={<ReflexionLandingPage />} />

        {/* 💻 分析工具頁面 */}
        <Route path="/app" element={<App />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);