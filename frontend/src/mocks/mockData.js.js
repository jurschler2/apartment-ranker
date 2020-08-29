/**
 * File for holding mock data to use in the frontend of the application. This is done to mock and build functionality without making incessant API calls.
 */

import examplePic0 from "./example-pics/example-pic-0.jpg";
import examplePic1 from "./example-pics/example-pic-1.jpg";
import examplePic2 from "./example-pics/example-pic-2.jpg";
import examplePic3 from "./example-pics/example-pic-3.jpg";

let apt1 = {

  address: "Masonic near Fell",
  url: "craigslist.org/example-apartment",
  price: "$1300",
  pics: [examplePic0, examplePic1, examplePic2, examplePic3
  ]
   
}

export {apt1};