import React, { useRef, useEffect, useState } from "react";
import SplitType from "split-type";
import { gsap } from "gsap";
import "./explore.css";
import proj1 from "../assets/proj1.jpg";
import proj2 from "../assets/proj2.jpg";
import proj3 from "../assets/proj3.jpg";
import proj4 from "../assets/proj4.jpg";
import proj5 from "../assets/proj5.jpg";
import proj6 from "../assets/proj6.jpg";
import proj7 from "../assets/proj7.jpg";
import proj8 from "../assets/proj8.jpg";
import bg from "../assets/samplebg1.png";
import Searchbar from "../searchbar/searchbar";

const flashsvg =
  "https://viens-la.com/wp-content/themes/front/assets/svgs/icons/flash.svg";
const Explore = () => {
  const addAnimation = () => {
    const scrollers = document.querySelectorAll(".scroller");

    scrollers.forEach((scroller) => {
      scroller.setAttribute("data-animated", true);

      const scrollerInner = scroller.querySelector(".scroller__inner");
      const scrollerContent = Array.from(scrollerInner.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        duplicatedItem.setAttribute("aria-hidden", true);
        scrollerInner.appendChild(duplicatedItem);
      });

      // Add a class to trigger the animation
      scrollerInner.classList.add("animate");
    });
  };


  useEffect(() => {
    const textreveal = () => {
      const revealElements = document.querySelectorAll(".reveal");

      revealElements.forEach((element) => {
        element.style.display = "block";
      });

      const letters = new SplitType(revealElements).chars;

      gsap.from(letters, {
        y: 150,
        rotation: 10,
        duration: 2,
        stagger: 0.1,
        ease: "power3.inOut",
      });
    };


    // gsap.to(".explore #top-bar", {
    //   translateY: "0px",
    //   duration: 3,
    //   scrollTrigger: {
    //     trigger: "#top-bar",
    //   },
    // });

    textreveal();
    addAnimation();
  }, []);
  const projectsArray = [
    {
      img: proj1,
      text: "project 1",
      description: "Description for project 1",
    },
    {
      img: proj2,
      text: "project 2",
      description: "Description for project 1",
    },
    {
      img: proj3,
      text: "project 3",
      description: "Description for project 1",
    },
    {
      img: proj4,
      text: "project 4",
      description: "Description for project 1",
    },
    {
      img: proj5,
      text: "project 5",
      description: "Description for project 1",
    },
    {
      img: proj6,
      text: "project 6",
      description: "Description for project 1",
    },
    {
      img: proj7,
      text: "project 7",
      description: "Description for project 1",
    },
    {
      img: proj8,
      text: "project 8",
      description: "Description for project 1",
    },
    {
      img: proj5,
      text: "project 5",
      description: "Description for project 1",
    },
    {
      img: proj6,
      text: "project 6",
      description: "Description for project 1",
    },
    {
      img: proj7,
      text: "project 7",
      description: "Description for project 1",
    },
    {
      img: proj8,
      text: "project 8",
      description: "Description for project 1",
    },
  ];

  return (
    <>
      <div className="explore">
        <div id="top-bar" class="scroller" data-speed="slow">
          <div class="tag-list scroller__inner">
            <div className="elem">
              <h1>Explore visionary projects from creative publishers</h1>
            </div>
            <div className="elem">
              <div className="photu">
                <img src={flashsvg} alt="power" />
              </div>
            </div>
            <div className="elem">
              <h1>Discover innovation through curated projects</h1>
            </div>
            <div className="elem">
              <div className="photu">
                <img src={flashsvg} alt="power" />
              </div>
            </div>
            <div className="elem">
              <h1>Brilliance in every project, crafted by our publishers</h1>
            </div>
            <div className="elem">
              <div className="photu">
                <img src={flashsvg} alt="power" />
              </div>
            </div>
            <div className="elem">
              <h1>Journey into creativity with our project publishers</h1>
            </div>
            <div className="elem">
              <div className="photu">
                <img src={flashsvg} alt="power" />
              </div>
            </div>
            <div className="elem">
              <h1>Celebrating artistry and ingenuity in every project.</h1>
            </div>
            <div className="elem">
              <div className="photu">
                <img src={flashsvg} alt="power" />
              </div>
            </div>
          </div>
        </div>
        <Searchbar/>
        <div className="nomi-hadder">
          <h1 className="reveal">projects</h1>
        </div>
        <div className="display-projects">
          {projectsArray.map((project, index) => (
            <div key={index} className="project">
              <div className="project-top">
                <h3>{project.text}</h3>
                <p>{project.description}</p>
              </div>
              <img src={project.img} alt={`project ${index + 1}`} />
              <div className="project-owner">
                <img src={project.img} />
                <h4>{project.text}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Explore;
