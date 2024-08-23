import React, { useRef, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance, { isAuthenticated } from "../middeleware/auth.js";
import gsap from "gsap";
import './searchbar.css'


const Searchbar = () => {

  const searchBarRef = useRef(null);

  const navigate = useNavigate();

  const isUserSignedIn = !!localStorage.getItem("token");



  useEffect(()=>{
        const searchBar = searchBarRef.current;

    gsap.from(searchBar.children, {
      opacity: 0,
      rotate: 5,
      y: 50,
      duration: 1,
      ease: "power3.inOut",
      delay: 0.5,
      stagger: 0.3, // Adjust the stagger value as needed
    });
  },[])

  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted with data:", formData);
    // Perform any other actions with the form data as needed
  };


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


  return (
    <>
    <div className="searchbar" ref={searchBarRef}>
          <div className="btnset1">
            <div className="logo">project media</div>
            <div className="search">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="search something"
              />
            </div>
          </div>
          <div className="btnset2">
            <div className="intrection"></div>
            <div className="btn1">
              <button
                className="btn1"
                onClick={() => {
                  // Check if the user is authenticated
                  if (!isAuthenticated()) {
                    // If not authenticated, redirect to the login page
                    window.location.href = "/login";
                  } else {
                    // If authenticated, redirect to the upload page
                    window.location.href = "/upload";
                  }
                }}
              >
                Upload Project
              </button>
            </div>

            {isUserSignedIn ? (
              <>
                <div className="btn2">
                  <button className="btn2" onClick={handleSignOut}>
                    sign out
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="btn2">
                  <button
                    type="button"
                    className="btn2"
                    onClick={() => {
                      // navigate("/login");
                      if (!isAuthenticated()) {
                        // Redirect to the login page or perform any other necessary actions
                        window.location.href = "/login";
                      }
                    }}
                  >
                    Sign In
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
    </>
  )
}

export default Searchbar