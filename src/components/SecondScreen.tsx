import React, { useEffect } from 'react';
import { initGA, trackPage, trackEvent } from '../GoogleAnalytics';
import './SecondScreen.css'; 

function SecondScreen() {
  useEffect(() => {
    initGA();
    trackPage(window.location.pathname + window.location.search);
  }, []);

  return (
    <div className="SecondScreen">
      <h1>This is the Second Screen</h1>
      <p>Welcome to the second screen! Here's some unique content to help visualize the change.</p>
    </div>
  );
}

export default SecondScreen;
export {};