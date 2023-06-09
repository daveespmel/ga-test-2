// src/GoogleAnalytics.ts
import ReactGA from 'react-ga';

const trackingId = 'UA-259134268-1'; // Replace with your Google Analytics tracking ID

export const initGA = () => {
  ReactGA.initialize(trackingId, { testMode: process.env.NODE_ENV === 'test' });
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