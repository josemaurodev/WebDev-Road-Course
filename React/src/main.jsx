import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import SecondPage from './Katakana.jsx';
import LearnHiragana from './LearnHiragana.jsx';
import LearnKatakana from './LearnKatakana.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/katakana" element={<SecondPage />} />
        <Route path="/learnHiragana" element={<LearnHiragana />} />
        <Route path="/learnKatakana" element={<LearnKatakana />} />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
