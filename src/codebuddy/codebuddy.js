import comingsoon from "../assets/comingsoon.jpg"
import "./codebuddy.css"
const CodeBuddy = () =>{
    return(
        <>
            <div className="container">
                <img src={comingsoon} alt="Coming Soon"/>
            </div>
            <div className="mask">
                coming soon...
            </div>
        </>
    );
}

export default CodeBuddy;