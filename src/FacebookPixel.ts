
declare global {
    interface Window {
      fbq: any;
    }
  }
  
  const pixelId = '479903220541109'; // Replace with your own Facebook Pixel ID
  
  export const initFacebookPixel = () => {
    window.fbq('init', pixelId);
  };
  
  export const trackFacebookEvent = (eventName: string, eventData?: object) => {
    window.fbq('track', eventName, eventData);
  };

  export{};