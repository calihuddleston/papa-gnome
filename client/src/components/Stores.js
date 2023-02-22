import React from "react";
import storefront1 from "../assets/storefront-1.png";
import storefront2 from "../assets/storefront-2.jpeg";
import storefront3 from "../assets/storefront-3.jpeg";
import storefront4 from "../assets/storefront-4.png";
import storefront5 from "../assets/storefront-5.jpeg";
import storefront6 from "../assets/storefront-6.jpeg";

export default function Stores() {
  return (
    <div id="store-section">
      <div id="column">
        <div id="row">
          <img src={storefront1} className="w-70 h-60 m-4 storeImg"></img>
          <img src={storefront2} className="w-70 h-60 m-4 storeImg"></img>
          <img src={storefront3} className="w-68 h-60 m-4 storeImg"></img>
        </div>
        <div id="row">
          <img src={storefront4} className="dg m-4 storeImg"></img>
          <img src={storefront5} className="w-70 h-60 m-4 storeImg"></img>
          <img src={storefront6} className="w-70 h-60 m-4 storeImg"></img>
        </div>
      </div>
    </div>
  );
}
