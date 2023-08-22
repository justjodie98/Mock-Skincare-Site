import React from "react";
import { GiAvocado } from "react-icons/gi";
import { GiWorld } from "react-icons/gi";
import { MdCrueltyFree } from "react-icons/md";

export default function Banner() {
  return (
    <section className="banner">
      <div className="items">
        <GiAvocado size={"70px"} />
        <h3>Natural ingredients</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="items">
        <GiWorld size={"70px"} />
        <h3>Sustainability</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="items" style={{ border: "none" }}>
        <MdCrueltyFree size={"70px"} />
        <h3>100 % Cruelty Free</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </section>
  );
}
