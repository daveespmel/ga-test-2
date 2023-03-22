// src/GoogleAnalytics.ts
import ReactGA from 'react-ga';

const trackingId = 'YOUR_TRACKING_ID'; // Replace with your Google Analytics tracking ID

export const initGA = () => {
  ReactGA.initialize(trackingId);
};

export const trackPage = (page: string) => {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};

export const trackEvent = (category: string, action: string, label?: string, value?: number) => {
  ReactGA.event({
    category,
    action,
    label,
    value,
  });
};

export {};