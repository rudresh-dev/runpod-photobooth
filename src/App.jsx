import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PromptPage from './pages/PromptPage';
import ImagePage from './pages/ImagePage';
import ResultPage from './pages/ResultPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PromptPage />} />
        <Route path="/image" element={<ImagePage />} />
        <Route path="/result" element={<ResultPage />} />
      </Routes>
    </Router>
  );
}

export default App;
