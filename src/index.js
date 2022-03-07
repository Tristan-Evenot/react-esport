import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Accueil from './Accueil';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Ligues from './Ligues';
import Equipes from './Equipes';
import Matchs from './Matchs';
import PageNonExistante from './PageNonExistante';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Accueil />} />
      <Route path="/ligues" element={<Ligues />} />
      <Route path="/equipes" element={<Equipes />} />
      <Route path="/matchs" element={<Matchs />} />
      <Route path="*" element={<PageNonExistante />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
