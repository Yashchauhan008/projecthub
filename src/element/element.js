import comingsoon from "../assets/samplebg1.png"
import "./element.css"
const Element = () =>{
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

export default Element;