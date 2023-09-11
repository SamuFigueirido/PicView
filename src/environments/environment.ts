import { unsplash } from "./unsplash.environment";

export const environment = {
  production: true,
  api: 'https://api.unsplash.com/',
  accessKey: process.env['UNSPLASH_ACCESS_KEY'],

  /** Uncomment this line to import the unsplash environment */
  // ...unsplash,
};
