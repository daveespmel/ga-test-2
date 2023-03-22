import React, { useEffect } from 'react';
import { initGA, trackPage, trackEvent } from '../GoogleAnalytics';
import './ThirdScreen.css'; // Import CSS for ThirdScreen

function ThirdScreen() {
  useEffect(() => {
    initGA();
    trackPage(window.location.pathname + window.location.search);
  }, []);

  return (
    <div className="ThirdScreen">
      <h1>This is the Third Screen</h1>
      <p>Welcome to the third screen! Here's some different content to help visualize the change.</p>
    </div>
  );
}

export default ThirdScreen;
export {};