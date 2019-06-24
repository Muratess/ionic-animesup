// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.



//import { config } from "../config/firebase-config";

//export const environment = {
//  production: false,
//  firebase: config
//};



export const environment = {
  production: false,
  firebase: {
      apiKey: "AIzaSyBa-5yZCzNnWHDLioAmpXXVvkfrDvog6wo",
      authDomain: "animesup-3cbb7.firebaseapp.com",
      databaseURL: "https://animesup-3cbb7.firebaseio.com",
      projectId: "animesup-3cbb7",
      storageBucket: "animesup-3cbb7.appspot.com",
      messagingSenderId: "494364725656"
  }
};







/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
