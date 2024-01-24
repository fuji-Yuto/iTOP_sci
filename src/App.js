import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AnotherPage from './pages/AnotherPage';
import NavigationBar from './components/Navigationbar/Navigationbar';

function App() {
  return (
    <Router>
      <div>
        <NavigationBar/>

        {/* ルートの設定 */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/another" element={<AnotherPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


