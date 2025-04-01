import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import App from './App.tsx'
import Personas from './Persona.tsx';
import Redesign from './pages/redesign.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className = "mx-60 my-10">
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path = "/personas" element={<Personas/>}/>
            <Route path = "/redesign" element={<Redesign/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </StrictMode>
)
