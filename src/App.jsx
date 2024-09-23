// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import PromptPage from "./pages/PromptPage";
// import ImagePage from "./pages/ImagePage";
// import ResultPage from "./pages/ResultPage";
// import HomePage from "./pages/HomePage";
// import PresetPage from "./pages/PresetPage";
// import PresetPageC from "./pages/PresetPageC";
// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/prompt" element={<PromptPage />} />
//         <Route path="/preset" element={<PresetPage />} />
//         <Route path="/image" element={<ImagePage />} />
//         <Route path="/result" element={<ResultPage />} />
//         <Route path="/female" element={<PresetPageC />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;





import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GenderSelectionPage from './components/GenderSelectionPage';
import PresetPage from './components/PresetPage';
import ImagePage from './components/ImagePage';
import LoadingPage from './components/LoadingPage';
import ResultPage from './components/ResultPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GenderSelectionPage />} />
        <Route path="/preset" element={<PresetPage />} />
        <Route path="/image" element={<ImagePage />} />
        <Route path="/loading" element={<LoadingPage />} />
        <Route path="/result" element={<ResultPage />} />
      </Routes>
    </Router>
  );
}

export default App;
