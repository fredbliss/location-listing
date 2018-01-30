// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

import 'zone.js/dist/zone';

export const environment = {
  production: false,
  domain: 'http://localhost:4200',
  apiUrl: 'https://vo.intelligentspark.com/assets/location-manager-api/public',
  assetsUrl: '/assets',
  apiVer: 1
};


export const googleMapsConfig = {
    apiKey: 'AIzaSyBjno8dTZAZbn7G29-1ls3XLhTANzh1fu4'
};

export const generalSettings = {
    placeholderImage: 'assets/location-manager/assets/small/placeholder.jpg'
};

