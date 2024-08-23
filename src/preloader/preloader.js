import { useEffect } from "react";
import gsap from "gsap";
import '../preloader/preloader.css'
const Preloader = () => {
    useEffect(() => {
      // const tl = gsap.timeline();
  
      // Animation to fade out the preloader
      gsap.to("#pretext", {
        delay: 0,
        fontWeight:'100',
        transform: "translatex(-120vw)",
        duration: 4,
        // delay:5,
      });
      gsap.to(".preloader5", {
        transform: "translatex(-100vw)",
        duration: 0.4,
        delay:3,
      });
      gsap.to(".preloader4", {
        transform: "translatex(-100vw)",
        duration: 0.3,
        delay:3.5,
      });
      gsap.to(".preloader3", {
        transform: "translatex(-100vw)",
        duration: 0.3,
        delay:3.9,
      });
      gsap.to(".preloader2", {
        transform: "translatex(-100vw)",
        duration: 0.2,
        delay:4.2,
      });
      gsap.to(".preloader1", {
        transform: "translatex(-100vw)",
        duration: 0.1,
        delay:4.3,
        onComplete: hidePreloader,
      });
      function hidePreloader() {
        // You can perform additional actions here if needed
        document.getElementById("preloader1").style.display = "none";
      }
    }, []);
  
    return (
      <div id="preloader1" className="preloader1">
        <div id="preloader2" className="preloader2">
        </div>
        <div id="preloader3" className="preloader3">
        </div>
        <div id="preloader4" className="preloader4">
        </div>
        <div id="preloader5" className="preloader5">
        </div>
        <h2 id="pretext">MEET THE MASTERPIECE</h2>
      </div>
    );
  };
  
  export default Preloader;