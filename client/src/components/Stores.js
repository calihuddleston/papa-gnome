import React from "react";
import { BsChevronCompactDown, BsHeart } from "react-icons/bs"
import meijer from "../assets/meijer.png"
import walmart from "../assets/walmart.png"
import aldi from "../assets/aldi.png"
import dollarGen from "../assets/dollargeneral.png"
import dailyDeals from "../assets/dailydeals.png"
import dollarTree from "../assets/dollartree.png"
import hobbyLob from "../assets/hobby-lobby.png"
import fiveBelow from "../assets/fivebelow.png"
import walgreens from "../assets/walgreens.png"


export default function Stores() {
  return (
    <section>
      <div  id="store-section">
        <h1>Select a Store</h1>
        <BsChevronCompactDown />
      </div>
      <div id="column">
        <div id="row">
          <div className="bg-white store">
           <a href="https://www.meijer.com/" target="_blank" rel=
           "noreferrer noopener"> <img src={meijer} className="storeImg" alt="meijer logo"></img></a>
          <button id="heart"><BsHeart /></button>
            </div>
            
            <div className="bg-white store">
          <img src={walmart} className="storeImg" alt="walmart logo"></img>
          <button id="heart"><BsHeart /></button>
          </div>
          <div className="bg-white store">
          <img src={aldi} className="storeImg" alt="aldi logo"></img>
          <button ><BsHeart id="heart"/></button>
        </div>
        <div id="row">
          <div className="bg-white store">
        <img src={dollarGen} className="storeImg" alt="dollar general logo"></img>
          <button ><BsHeart id="heart"/></button>
          </div>
        </div>
        <div className="bg-white store">
          <img src={dailyDeals} className="storeImg" alt="daily deals logo"></img>
          <button ><BsHeart id="heart"/></button>
          </div>
          <div className="bg-white store">
          <img src={dollarTree} className="storeImg" alt="dollar tree logo"></img>
          <button ><BsHeart id="heart"/></button>
          </div>
        </div>
        <div id="row">
        <div className="bg-white store">
          <img src={hobbyLob} className="storeImg" alt="dollar tree logo"></img>
          <button ><BsHeart id="heart"/></button>
          </div>
          <div className="bg-white store">
          <img src={fiveBelow} className="storeImg" alt="dollar tree logo"></img>
          <button ><BsHeart id="heart"/></button>
          </div>
          <div className="bg-white store">
          <img src={walgreens} className="storeImg" alt="dollar tree logo"></img>
          <button ><BsHeart id="heart"/></button>
          </div>
        </div>
        
      </div>
    </section>
  );
}
