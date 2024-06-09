/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/pic5.jpg";

const imageAltText = "laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Basic Project of Excel - Data Analytics",
    description:
      "Includes dashboard which describes Sales by month, Percentage of Sales by Category, Total Sales by Person, Sales by Salesperson, and Sale Profit by City.",
    url: "https://github.com/vaibhavi-y/BasicProject-Of-Excel",
  },
  {
    title: "Word Guessing Game Using Python",
    description:
      "The Word Guessing Game is a simple and interactive game where players attempt to guess a hidden word by suggesting individual letters within a limited number of attempts.",
    url: " https://github.com/vaibhavi-y/Python-Games.git ",
  },
  {
    title: "My Resume",
    description:
      "Highlighting my academic journey, my resume section showcases a solid foundation in data analytics and relevant coursework, complemented by hands-on experience and a passion for continuous learning.",
    url: "https://drive.google.com/file/d/1aNfWpl4KHx1i_qEcSjzX5vQjYOxBZ7Ii/view?usp=sharing",
  },
  {
    title: "KBC",
    description:
      "Kaun Banega Crorepati (KBC) game is a quiz-style program where players are asked multiple choice questions to test their general knowledge.",
    url: "https://github.com/vaibhavi-y/Kbc_game.git",
  },
  {
    title: "Stock Analysis",
    description:
      "Amazon stock analysis report providing a comprehensive view of stock performance. It includes overall analysis of trends, high, low, close, and open prices, and in-depth volume analysis. The report identifies price fluctuations, average trading volumes, and significant volume spikes, offering insights into market sentiment and liquidity. A data-driven approach to evaluate Amazon's stock trends and market dynamics.",
    url: "https://github.com/vaibhavi-y/Amazon-stock-analysis",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
