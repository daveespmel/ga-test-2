// GoogleAnalytics.ts
import ReactGA from 'react-ga';

const trackingId = 'G-5XCQ699W1J'; // Replace with your Google Analytics tracking ID

export const initGA = () => {
  ReactGA.initialize(trackingId);
};

export const trackPage = (page: string) => {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};

export {};