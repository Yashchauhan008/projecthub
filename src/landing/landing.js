import "./landing.css";
import Searchbar from "../searchbar/searchbar.js";
import "../media-query.css";
import Preloader from "../preloader/preloader.js";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useRef, useEffect, useState } from "react";
import SplitType from "split-type";
import bg from "../assets/samplebg1.png";
import avatar from "../assets/avtr.jpg";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance, { isAuthenticated } from "../middeleware/auth.js";
import Swal from "sweetalert2";



const dimondsvg =
  "https://viens-la.com/wp-content/themes/front/assets/svgs/icons/diamond.svg";
const flashsvg =
  "https://viens-la.com/wp-content/themes/front/assets/svgs/icons/flash.svg";
const flasksvg =
  "https://viens-la.com/wp-content/themes/front/assets/svgs/icons/flask.svg";

const Landing = () => {
  //bg images functions
  gsap.registerPlugin(ScrollTrigger);

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

  const navigate = useNavigate();

  const isUserSignedIn = !!localStorage.getItem("token");

  const handleSignOut = () => {
    localStorage.removeItem("token");
    navigate("/");
    Swal.fire({
      icon: "success",
      title: "Sign out successful",
      showConfirmButton: false,
      timer: 3000,
    });
  };

  
  const [selectedCard, setSelectedCard] = useState(null);
  const handleCardHover = (index) => {
    setSelectedCard(index);
  };
  const handleCardLeave = () => {
    setSelectedCard(null);
  };

  // const searchBarRef = useRef(null);

  useEffect(() => {
    // const searchBar = searchBarRef.current;

    // gsap.from(searchBar.children, {
    //   opacity: 0,
    //   rotate: 5,
    //   y: 50,
    //   duration: 1,
    //   ease: "power3.inOut",
    //   delay: 0.5,
    //   stagger: 0.3, // Adjust the stagger value as needed
    // });

    addAnimation();
    const revealAnimation = () => {
      const revealElements = document.querySelectorAll(".reveal");

      revealElements.forEach((element) => {
        element.style.display = "block";
      });

      const letters = new SplitType(revealElements).chars;

      gsap.from(letters, {
        y: 100,
        rotation: 10,
        duration: 2,
        stagger: 0.1,
        ease: "power3.inOut",
      });
    };

    // Run addAnimation once on component mount
    revealAnimation();

    // gsap.to("#top-bar", {
    //   translateY: "0px", // Corrected property name to 'translateY'
    //   duration: 3,
    //   scrollTrigger: {
    //     trigger: "#top-bar",
    //   },
    // });
    gsap.from(".top-site-box", {
      translateX: "-400px", // Corrected property name to 'translateY'
      duration: 3,
      scrollTrigger: {
        trigger: ".top-site-box",
      },
    });
    gsap.to(".ProfilePic", {
      y: "20%",
      x: "-47vw",
      height: "50vh",
      width: "50vh",
      borderRadius: "1vh",
      scrollTrigger: {
        trigger: ".ProfilePic",
        scroller: "body",
        scrub: 2,
        // markers: true,
        start: "0vh 0vh",
        end: "350vh -100vh",
      },
    });
    gsap.to(".top-site-box", {
      y: "80vh",
      scale: 0.9,
      scrollTrigger: {
        trigger: ".top-site-box",
        scroller: "body",
        scrub: 1,
        // markers: true,
        start: "0vh 20vh",
        end: "100vh -500vh",
        // pin:true,
      },
    });
    gsap.to(".top-mask", {
      opacity: 0.9,
      scrollTrigger: {
        trigger: ".top-mask",
        scroller: "body",
        scrub: 1,
        // markers: true,
        start: "100vh 500vh",
        end: "100vh -200vh",
        // pin:true,
      },
    });
    gsap.to("#mrq1", {
      transform: "rotate(-1deg) translatex(0vh)",
      scrollTrigger: {
        trigger: "#mrq1",
        scroller: "body",
        scrub: 1,
        // markers: true,
        start: "0% 80%",
        end: "100% 70%",
        // pin:true,
      },
    });
    gsap.to("#mrq2", {
      transform: "rotate(1deg) translatex(0vh)",
      scrollTrigger: {
        trigger: "#mrq2",
        scroller: "body",
        scrub: 1,
        // markers: true,
        start: "0% 90%",
        end: "100% 100%",
        // pin:true,
      },
    });
    gsap.to("#mrq3", {
      transform: "rotate(-1deg) translatex(0vh)",
      scrollTrigger: {
        trigger: "#mrq3",
        scroller: "body",
        scrub: 1,
        // markers: true,
        start: "0% 100%",
        end: "100% 100%",
        // pin:true,
      },
    });
    gsap.to(".profile-info", {
      transform: "translatex(0vw)",
      opacity: 1,
      fontWeight: 500,
      scrollTrigger: {
        trigger: ".profile-info",
        scroller: "body",
        scrub: 2,
        // markers: true,
        start: "0% 0%",
        end: "10% -30%",
      },
    });
  }, []);

  return (
    <>
      {/* <Preloader />  */}
      <div id="page1">
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
        <div className="page1-text">
          <h1 className="reveal">trending project</h1>
        </div>
        <div className="top-site-box">
          <img src={bg} />
          <div className="top-mask"></div>
          <div className="ProfilePic">
            <img src={avatar} alt="ProfilePic" />
          </div>
          <div className="profile-info">
            <h2>yash chauhan</h2>
            <h4>
              A centralized dashboard for a quick overview of ongoing tasks,
              deadlines, and team progress.{" "}
            </h4>
            <h5>project description</h5>
            <p>
              QuantumTask Manager is an innovative task management platform
              designed to streamline workflow efficiency and collaboration
              within teams. This intuitive application provides a seamless
              experience for organizing tasks, enhancing{" "}
            </p>
          </div>
          <div class="top-overlay" id="top-overlay">
            <h2>let's go</h2>
          </div>
          <div className="overlay">
            <h4>project title</h4>
            <br />
            <h2>Expense Tracker</h2>
          </div>
        </div>
      </div>

      <div id="page2"></div>

      <div id="page3">
        <div id="mrq1" class="scroller" data-speed="slow">
          <div class="tag-list scroller__inner">
            <div className="elem">
              <h1>quality</h1>
            </div>
            <div className="elem">
              <div className="photu">
                <img src={dimondsvg} alt="power" />
              </div>
            </div>
            <div className="elem">
              <h1>quality</h1>
            </div>
            <div className="elem">
              <div className="photu">
                <img src={dimondsvg} alt="power" />
              </div>
            </div>
            <div className="elem">
              <h1>quality</h1>
            </div>
            <div className="elem">
              <div className="photu">
                <img src={dimondsvg} alt="power" />
              </div>
            </div>
            <div className="elem">
              <h1>quality</h1>
            </div>
            <div className="elem">
              <div className="photu">
                <img src={dimondsvg} alt="power" />
              </div>
            </div>
            <div className="elem">
              <h1>quality</h1>
            </div>
            <div className="elem">
              <div className="photu">
                <img src={dimondsvg} alt="power" />
              </div>
            </div>
          </div>
        </div>
        <div
          id="mrq2"
          class="scroller"
          data-speed="slow"
          data-direction="right"
        >
          <div class="tag-list scroller__inner">
            <div className="elem">
              <h1>reactivity</h1>
            </div>
            <div className="elem">
              <div className="photu">
                <img src={flashsvg} alt="power" />
              </div>
            </div>
            <div className="elem">
              <h1>reactivity</h1>
            </div>
            <div className="elem">
              <div className="photu">
                <img src={flashsvg} alt="power" />
              </div>
            </div>
            <div className="elem">
              <h1>reactivity</h1>
            </div>
            <div className="elem">
              <div className="photu">
                <img src={flashsvg} alt="power" />
              </div>
            </div>
            <div className="elem">
              <h1>reactivity</h1>
            </div>
            <div className="elem">
              <div className="photu">
                <img src={flashsvg} alt="power" />
              </div>
            </div>
            <div className="elem">
              <h1>reactivity</h1>
            </div>
            <div className="elem">
              <div className="photu">
                <img src={flashsvg} alt="power" />
              </div>
            </div>
          </div>
        </div>
        <div id="mrq3" class="scroller" data-speed="slow">
          <div class="tag-list scroller__inner">
            <div className="elem">
              <h1>creativity</h1>
            </div>
            <div className="elem">
              <div className="photu">
                <img src={flasksvg} alt="power" />
              </div>
            </div>
            <div className="elem">
              <h1>creativity</h1>
            </div>
            <div className="elem">
              <div className="photu">
                <img src={flasksvg} alt="power" />
              </div>
            </div>
            <div className="elem">
              <h1>creativity</h1>
            </div>
            <div className="elem">
              <div className="photu">
                <img src={flasksvg} alt="power" />
              </div>
            </div>
            <div className="elem">
              <h1>creativity</h1>
            </div>
            <div className="elem">
              <div className="photu">
                <img src={flasksvg} alt="power" />
              </div>
            </div>
            <div className="elem">
              <h1>creativity</h1>
            </div>
            <div className="elem">
              <div className="photu">
                <img src={flasksvg} alt="power" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="page4">
        <div className="contentline">
          <h1>
            <span>Elevating</span> code creativity, connecting developers,
            <br />
            and <span>showcasing</span>innovation - where <span>projects</span>
            <br />
            shine and skills thrive <span>together</span>.
          </h1>
        </div>
      </div>
      <div id="page5">
        <h1>nominee</h1>
        <div className="nomineebox">
          <div
            className={`nominee ${selectedCard === 0 ? "selected" : ""}`}
            onMouseEnter={() => handleCardHover(0)}
            onMouseLeave={handleCardLeave}
          >
            <div className="nomi-img">
              <img src={bg} />
            </div>
            <div className="nomi-proj-detail">
              <div className="nomi-profile">
                <img src={avatar} />
              </div>
              <h2>project title</h2>
              <p>
                project description is written here description is written he
                description is written he
              </p>
            </div>
          </div>

          <div
            className={`nominee ${selectedCard === 1 ? "selected" : ""}`}
            onMouseEnter={() => handleCardHover(1)}
            onMouseLeave={handleCardLeave}
          >
            <div className="nomi-img">
              <img src={bg} />
            </div>
            <div className="nomi-proj-detail">
              <div className="nomi-profile">
                <img src={avatar} />
              </div>
              <h2>project title</h2>
              <p>
                project description is written here description is written he
                description is written he
              </p>
            </div>
          </div>

          <div
            className={`nominee ${selectedCard === 2 ? "selected" : ""}`}
            onMouseEnter={() => handleCardHover(2)}
            onMouseLeave={handleCardLeave}
          >
            <div className="nomi-img">
              <img src={bg} />
            </div>
            <div className="nomi-proj-detail">
              <div className="nomi-profile">
                <img src={avatar} />
              </div>
              <h2>project title</h2>
              <p>
                project description is written here description is written he
                description is written he
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* this top user part will be here in future
      <div id="page6"></div>
      <div id="page7"></div> */}
      <div id="footer"></div>
    </>
  );
};
export default Landing;
