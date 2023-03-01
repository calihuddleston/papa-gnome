import React from "react";
import meijer from "../assets/meijer.png"
import walmart from "../assets/walmart.png"
import aldi from "../assets/aldi.png"
import dollarGen from "../assets/dollargeneral.png"
import dailyDeals from "../assets/dailydeals.png"
import dollarTree from "../assets/dollartree.png"


export default function Stores() {
  return (
    <section id="store-section">
      <div id="column">
        <div id="row">
          <div className="bg-white store">
           <a href="https://www.meijer.com/" target="_blank" rel=
           "noreferrer noopener"> <img src={meijer} className="storeImg" alt="meijer logo"></img></a>
            </div>
            <div className="bg-white store">
          <img src={walmart} className="storeImg" alt="walmart logo"></img>
          </div>
          <div className="bg-white store">
          <img src={aldi} className="storeImg" alt="aldi logo"></img>
          </div>
        </div>
        <div id="row">
          <div className="bg-white store">
        <img src={dollarGen} className="storeImg" alt="dollar general logo"></img>
        </div>
        <div className="bg-white store">
          <img src={dailyDeals} className="storeImg" alt="daily deals logo"></img>
          </div>
          <div className="bg-white store">
          <img src={dollarTree} className="storeImg" alt="dollar tree logo"></img>
          </div>
        </div>
      </div>
    </section>
  );
}
