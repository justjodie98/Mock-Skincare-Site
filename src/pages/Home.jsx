import { Component } from "react";
import Blog from "src/components/blog.js";
import Banner from "src/components/banner.js";
import Media from "src/components/media.js";
import "../App.css";

export default function Home() {
  return (
    <>
    <Title/>
      <MainContent />
      <Blog />
      <Banner />
      <Media />
    </>
  );
}

const Title = () => {
  return (
    <section>
      <h1 className="title">
        Because there is
        <span> perfection </span>
        in imperfection<span>.</span>
      </h1>
    </section>
  );
};

const MainContent = () => {
  return (
    <article>
      <Title />
      <div className="content">
        <img
          src="https://images.pexels.com/photos/8131574/pexels-photo-8131574.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="A woman wearing a black headscarf and coat"
        ></img>
        <div className="center-img">
          <img
            src="https://images.pexels.com/photos/8131576/pexels-photo-8131576.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="A glass brown bottle on a wooden stand"
          ></img>
          <button className="btn">View Collection</button>
        </div>
        <img
          src="https://images.pexels.com/photos/8131577/pexels-photo-8131577.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="A woman wearing a long sleeved black top"
        ></img>
      </div>
    </article>
  );
};
