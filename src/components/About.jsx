import React from "react";
import "./About.css";

function About() {
    return(
        <div className="About">
            <h2 style={{color:"yellow", fontSize:"10px"}}>
            I'm a self-taught developer skilled JavaScript, React and Backend Technologies like Express and MySQL. I enjoy buliding appps that make life easier.
            </h2>
            <ul style={{color:"yellow"}}>
                <li >Frontend: React, JavaScript, HTML, CSS </li>
                <li >Backend: Node.js, Express.js, MySQL </li>
                <li >Tools: Git, APIs, Authentication </li>   
            </ul>       
        </div>
    )
}
export default About;