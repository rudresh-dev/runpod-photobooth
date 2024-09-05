import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PromptPage from './pages/PromptPage';
import ImagePage from './pages/ImagePage';
import ResultPage from './pages/ResultPage';
import HomePage from './pages/HomePage';
import PresetPage from './pages/PresetPage';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<HomePage />} />
        <Route path="/prompt" element={<PromptPage />} />
        <Route path="/preset" element={<PresetPage />} />
        <Route path="/image" element={<ImagePage />} />
        <Route path="/result" element={<ResultPage />} />
      </Routes>
    </Router>
  );
}

export default App;
