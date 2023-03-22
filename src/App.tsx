import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import { initGA, trackPage, trackEvent } from './GoogleAnalytics';
import { initFacebookPixel, trackFacebookEvent } from './FacebookPixel'; // Import Facebook Pixel functions
import SecondScreen from './components/SecondScreen';
import ThirdScreen from './components/ThirdScreen';

function App() {
  useEffect(() => {
    initGA();
    trackPage(window.location.pathname + window.location.search);
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.offsetHeight;
      const scrollPosition = scrollTop + windowHeight;
      if (scrollPosition >= docHeight) {
        trackEvent('Scroll', 'Reach Bottom', 'User reached the bottom of the page');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  
  }, []);

  const handleLinkClick = () => {
    trackEvent('Link', 'Click', 'Learn React');
    trackFacebookEvent('LinkClick', { linkText: 'Learn React' });
  };

  

  const handleCustomButtonClick = () => {
    trackEvent('Custom', 'Button Click', 'User clicked the custom event button');
    trackFacebookEvent('CustomButtonClick', { buttonText: 'Trigger Custom Event' });
  };

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/second">Second Screen</Link>
              </li>
              <li>
                <Link to="/third">Third Screen</Link>
              </li>
            </ul>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<div className="App-content">
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleLinkClick}
              >
                Learn React
              </a>
              <button onClick={handleCustomButtonClick}>Trigger Custom Event</button>
            </div>} />
          <Route path="/second" element={<SecondScreen />} />
          <Route path="/third" element={<ThirdScreen />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;