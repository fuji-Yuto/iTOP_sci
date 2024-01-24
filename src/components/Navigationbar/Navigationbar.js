import React from 'react';
import { Link } from 'react-router-dom';
import './Navigationbar.css'; // CSSファイルのインポート


function NavigationBar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/another">Another Page</Link></li>
      </ul>
    </nav>
  );
}

export default NavigationBar;
