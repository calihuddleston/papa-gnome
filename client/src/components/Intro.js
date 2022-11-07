import React from "react";
import papaGnome from "../assets/papaGnome.png";

const Intro = () => {
  return (
    <div>
      <header>
        <div className="flex justify-center m-20">
          <img src={papaGnome} className="h-40 w-40"></img>
        </div>
        <div className="flex justify-center text-xl flex-col">
          <h1>Hello there!</h1>
          <p>
            My name is Papa Gnome. I'm here to make your life easier and put a
            smile on your face while doing so!{" "}
          </p>
        </div>
      </header>
    </div>
  );
};

export default Intro;
