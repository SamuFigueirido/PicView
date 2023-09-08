import { unsplash } from './unsplash.environment';

export const environment = {
  production: false,
  api: 'https://api.unsplash.com/',
  accessKey: unsplash.accessKey,

  /** Uncomment this line to import the unsplash environment */
  // ...unsplash,
};
