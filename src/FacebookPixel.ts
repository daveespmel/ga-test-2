
import ReactPixel from 'react-facebook-pixel';

const pixelId = '479903220541109'; // Replace with your own Facebook Pixel ID

export const initFacebookPixel = () => {
  ReactPixel.init(pixelId);
};

export const trackFacebookEvent = (eventName: string, eventData?: object) => {
  ReactPixel.track(eventName, eventData);
};

export{};