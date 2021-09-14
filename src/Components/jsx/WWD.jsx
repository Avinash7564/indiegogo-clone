import React from "react"
import "../css/WWD.css"
import { Link } from "react-router-dom"
import Navbar from "./Navbar"
import Footer from "../../Components/Footer"

function Whatwedo() {
    return (
        <>
            <Navbar/>
            <div className="wwd-div1">
                <img src="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/v1/what_we_do/hero_desktop.png" alt="wwd-images" />
                <h1>Get the tech that gets people talking</h1>
              <div className="wwd-div1-div1"><h3>With both live crowdfunding campaigns and innovative products shipping now, there’s no better place to start the hunt for cool and clever innovations that surprise and delight. Indiegogo is where new launches.</h3></div>  
            </div>
            <div className="wwd-div2">
               <iframe width="100%" height="100%" src="https://www.youtube.com/embed/2Tz_C14M6z0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <h2 className="wwd-div3-h2">Fund the next big thing</h2>
            <div className="wwd-p-div"><p>Indiegogo's crowdfunding campaigns are where new and groundbreaking products take flight, sometimes long before they hit mainstream availability. With thousands of campaigns launching every week, there's great tech, design, and much more around every corner — often with limited-time perks and pricing for the earliest backers. Before it's everywhere, it's on Indiegogo.</p></div>

            <hr></hr>
            <div className="wwd-div6">
                <h1>Join the journey from idea to market</h1>
                <div className="wwd-div6-img"><img src="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/v1/what_we_do/timeline_desktop_2x.png" alt="journey"></img>
                    <p>With Indiegogo, you have the opportunity to support entrepreneurs and new technology from the earliest stages of development. Be sure to evaluate every campaign closely and contribute at a level you can afford in the event that the team is unable to complete the project as planned.
                        Browse campaigns, read the stories from the entrepreneurs themselves, evaluate the stage of development and any potential production risks — and then fund the projects that you want to help succeed.</p>
                    <button >EXPLORE PROJECTS</button>
                </div>
            </div>

            <div className="wwd-div4">
                <h2 className="wwd-div4-h2">Great finds, delivered daily</h2>
            <div className="wwd-p-div"><p>We surface the best and brightest of Indiegogo in our newsletter. Sign up to find out about great technology, design, film, and much more — all before it hits the mainstream.</p></div>
                <div className="input-wwd">
                    <input type="text" placeholder="Your Email Address"></input>
                    <button>SUBSCRIBE</button>
                </div>
                
            </div>
            <div className="wwd-div5">
                <div>
                    <h1>Ready ? Explore</h1>
                    <button>DISCOVER PROJECTS</button>
                </div>
                <div className="wwd-div5-div2"></div>
                <div style={{marginLeft:"300px"}}>
                    <h1>Felling Inspired ?</h1>
                    <Link to="/body">
                        <button>BECOME AN ENTERPRENEUR</button>
                    </Link>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export { Whatwedo}