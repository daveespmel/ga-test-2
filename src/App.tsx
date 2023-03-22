
import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { initGA, trackPage, trackEvent } from './GoogleAnalytics';

function App() {
  useEffect(() => {
    initGA();
    trackPage(window.location.pathname + window.location.search);
  }, []);

  const handleLinkClick = () => {
    trackEvent('Link', 'Click', 'Learn React');
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleLinkClick}
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;