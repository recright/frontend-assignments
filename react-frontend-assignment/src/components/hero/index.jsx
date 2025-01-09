import React from "react";
import "./style.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="heroGrid">
          <div className="heroText">
            <div>
              <h2>Hero area title</h2>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam auctor turpis in volutpat rhoncus. Nulla ut libero felis. Donec aliquam nisi vitae risus sagittis, sit amet porttitor magna gravida. In quis interdum lacus. Proin scelerisque tellus lectus, in vestibulum leo semper id. Sed ullamcorper tincidunt tincidunt. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent vitae orci sit amet mauris blandit euismod. Donec dictum vitae massa ut euismod.
              </p>
              <button>Just a button</button>
            </div>
          </div>
          <div className="heroImage">
            <img src="/hero_img.png" alt="hero" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
