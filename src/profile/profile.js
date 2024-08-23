import avtr from "../assets/avtr.jpg";
import projectimg from "../assets/project.png";
import likeimg from "../assets/like.png";
import elementimg from "../assets/elements.png";
import contribution from "../assets/contribution.png";
import { useEffect, useRef, useState } from "react";
import "./profile.css";
import Searchbar from "../searchbar/searchbar";
import proj1 from "../assets/proj1.jpg";
import proj2 from "../assets/proj2.jpg";
import proj3 from "../assets/proj3.jpg";
import proj4 from "../assets/proj4.jpg";
import proj5 from "../assets/proj5.jpg";
import proj6 from "../assets/proj6.jpg";
import proj7 from "../assets/proj7.jpg";
import proj8 from "../assets/proj8.jpg";
import like1 from "../assets/like(1).png";
import like2 from "../assets/like(2).png";
import { gsap, ScrollTrigger } from "gsap";
import axios from "axios";
import img from "../uploads/Free Smart Home Dashboard Ui Template (Sketch).jpeg";

import axiosInstance, {
  isAuthenticated,
  getUsername,
  getIsAdmin,
} from "../middeleware/auth";
import { Navigate, useNavigate } from "react-router-dom";

const flashsvg =
  "https://viens-la.com/wp-content/themes/front/assets/svgs/icons/flash.svg";
// const name = "yash chauhan";
// const email = "yourmail@gmail.com";
// const cntry = "india";
// const workAt = "school/collage/compney";

// const bioText = `Adventurous soul 🌍 |
// Coffee enthusiast ☕ |
// Creative mind 🎨 |
// Explorer of life's wonders ✨ |
// Making memories one day at a time |
// [morbi] 📍 |
// [he he he he he ] |
// #Dreamer #LifeLover`;
const Profile = () => {
  // gsap.registerPlugin(ScrollTrigger) ;

  const [userText, setUserText] = useState("");
  const [user, setUser] = useState({});
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [projects, setProjects] = useState([]);
  const [userid, setuserid] = useState("");
  const adminstatus = getIsAdmin();
  console.log(adminstatus);

  const addAnimation = () => {
    const scrollers = document.querySelectorAll(".scroller");
    scrollers.forEach((scroller) => {
      if (!scroller.getAttribute("data-animated")) {
        scroller.setAttribute("data-animated", true);

        const scrollerInner = scroller.querySelector(".scroller__inner");
        const scrollerContent = Array.from(scrollerInner.children);

        // Check if clones are already added
        if (scrollerContent.length === 1) {
          scrollerContent.forEach((item) => {
            const duplicatedItem = item.cloneNode(true);
            duplicatedItem.setAttribute("aria-hidden", true);
            scrollerInner.appendChild(duplicatedItem);
          });

          // Add a class to trigger the animation
          scrollerInner.classList.add("animate");
        }
      }
    });
  };

  const navigate = useNavigate();

  useEffect(() => {
    addAnimation();
    // displayText()
    auth();
    const username = getUsername();
    fetchUserByUsername(username);
  }, []);

  const fetchUserByUsername = async (username) => {
    try {
      const response = await fetch(`http://localhost:5000/user/${username}`);
      if (!response.ok) {
        throw new Error("Failed to fetch user data");
      }
      const userData = await response.json();
      console.log(userData._id);
      setuserid(userData._id);
      setUserData(userData);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching user data:", error);
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    const username = getUsername();

    // Function to fetch projects by username
    const fetchProjectsByUsername = async (username) => {
      try {
        const response = await fetch(
          `http://localhost:5000/project/projects/${username}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch projects");
        }
        const projects = await response.json();
        setProjects(projects);
        console.log(projects);
      } catch {}
      // try {
      //   const response = await axios.get(`http://localhost:5000/project/projects/${userid}`);
      //   setProjects(response.data.projects); // Update state with projects data
      //   console.log(projects)
      // } catch (error) {
      //   setError(error.message); // Set error state if request fails
      // }
    };

    // Fetch projects when component mounts or username changes
    // if (username) {
    fetchProjectsByUsername(username);
    // }
  }, []);

  const auth = () => {
    if (!isAuthenticated()) {
      // Redirect to the login page or perform any other necessary actions
      window.location.href = "/login";
    }
  };

  // setUserText(userData.bio);
  // const displayText = () => {
  //   const formattedText = userData.bio;
  //   setUserText(formattedText);
  // };
  // displayText()

  console.log(userData.profilePic);
  return (
    <>
      <div className="profile">
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
        <Searchbar />
        <div className="profile-container">
          <div className="lprofile">
            <div className="profile-img">
              <img src={userData.profilePic} />
              {/* <img src={img} /> */}
              {/* <img src="../uploads/Free Smart Home Dashboard Ui Template (Sketch).jpeg" /> */}
            </div>
            <div className="name">{userData.username}</div>
            <div className="cntry">{userData.country}</div>
            <span className="profile-span"></span>
            <div className="work">{userData.workPlace}</div>
            <div className="mail">{userData.email}</div>
            <span className="profile-span"></span>
          </div>
          <div className="rprofile">
            <div className="profile-bio">
              <div className="bio-name">{userData.username}</div>
              <div className="like-count">
                {/* <div className="like-img"><img src={like2}/></div>
                <h3>{totallike}</h3> */}

                {adminstatus ? (
                  <div className="adminbtn">
                    <button
                      className="cbtn"
                      onClick={() => {
                        navigate("/admin");
                      }}
                    >
                      admin
                    </button>
                  </div>
                ) : (
                  <div></div>
                )}
              </div>
              <div className="bio">
                <h2>{userData.bio}</h2>
                {/* <h2 dangerouslySetInnerHTML={{ __html: userText }} /> */}
              </div>
            </div>
            <div className="profile-project">
              <div className="project-nav">
                <h3>projects</h3>
              </div>
              <div className="project-cnt">
                {projects.map((project, index) => (
                  <div key={index} className="user-project">
                    <img
                      src={project.projectImg}
                      alt={`project ${index + 1}`}
                    />
                    <div className="project-data">
                      <h3>{project.projectName}</h3>
                    </div>
                    <div className="project-mask"></div>
                  </div>
                ))}
                {/* {projects.map(project => (
          <div key={project._id}>
            <h2>{project.projectName}</h2>
            <p>{project.projectDesc}</p>
            <img src={project.projectImg} alt={project.projectName} />
            <p>Owner: {project.owner}</p>
          </div>
        ))} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
