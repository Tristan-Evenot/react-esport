import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Accueil from './pages/Accueil';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Ligues from './pages/Ligues';
import Equipes from './pages/Equipes';
import Matchs from './pages/Matchs';
import PageNonExistante from './pages/PageNonExistante';
import Joueurs from './pages/Joueurs';
import Connexion from './pages/Connexion';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Accueil />} />
      <Route path="/ligues" element={<Ligues />} />
      <Route path="/equipes" element={<Equipes />} />
      <Route path="/joueurs" element={<Joueurs />} />
      <Route path="/matchs" element={<Matchs />} />
      <Route path="/connexion" element={<Connexion />} />
      <Route path="*" element={<PageNonExistante />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
