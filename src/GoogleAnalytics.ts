// GoogleAnalytics.ts
import ReactGA from "react-ga";

// Replace with your Google Analytics tracking ID
const trackingId = "G-17DZZGEJJ3";

export const initGA = () => {
  ReactGA.initialize(trackingId);
};

export const trackPage = (page: string) => {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};

export {};