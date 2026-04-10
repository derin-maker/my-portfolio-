import React from "react";
import heroImage from "../assets/img.png";
import "./Home.css"

function Home(){
    return(
        <div className="home">
            <img src={heroImage} alt="Hero" style={{height:"200px" ,width:"200px", borderRadius:"50%", border:"2px solid white"}}/>
            <h2><span>Hello, I'm Derin</span></h2>
            <p>A passionate Web developer creating clean and functional design</p>
            <div className="home-button">
                <button className="btn" 
                onClick={()=> 
                    document.getElementById("projects").scrollIntoView({ behavior: "smooth" })
                }> 
                View Projects
                </button> 

                <button className="btn" 
                onClick={()=> 
                    document.getElementById("projects").scrollIntoView({ behavior: "smooth" })
                }> 
                Contact Me
                </button>                
            </div>
        </div>
    );
}

export default Home;