import React from "react";
import "../css/explore-modal.css";

function ExploreModal({ setexploreModal,exploreModal }) {
    return (
        <div className="modalBackground1">
            <div className="modalContainer1">
                <div className="explore-div1">
                    <div className="explore-div1-div1">
                        <div className="explore-div1-div1-div">
                            <p>EXPLORE ALL PROJECTS</p>
                            <img src="https://itchronicles.com/wp-content/uploads/2021/01/technology-impact-on-life-1024x566.jpg" alt="explore" className="explore-image"/>
                        </div>
                        <div className="explore-div1-div1-div">
                            <p>OUR TOP 10 FINDS</p>
                            <img src="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fill,f_auto,h_310,w_590/idd0vo6ff5youwoc0lpc.jpg" alt="explore" className="explore-image"/>
                        </div>
                        <div className="explore-div1-div1-div">
                            <p>TEAM FAVORITES</p>
                            <img src="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fill,f_auto,h_273,w_273/nf2ms1e4ttxdprkl4w37.jpg" alt="explore" className="explore-image"/>
                        </div>
                        <div className="explore-div1-div1-div">
                            <p>IN-DEMAND STARS</p>
                            <img src="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fill,f_auto,h_273,w_273/i8nhdjbp79ocpbnrhrjj.jpg" alt="explore" className="explore-image"/>
                        </div>
                        <div className="explore-div1-div1-div">
                            <p>JOIN THE CONVO</p>
                            <img src="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1597686817/hrrn0hvmsm3vsai9u8vs.jpg" alt="explore" className="explore-image"/>
                        </div>
                    </div>
                </div>
                <div className="explore-div2">
                    <div className="explore-div2-div">
                        <div className="explore-innerdiv">
                            <h4>Tech and innovation</h4>
                            <p>Audio</p>
                            <p>Camera Gear</p>
                            <p>Education</p>
                            <p>Energy and green tech</p>
                            <p>Fashion and Wearables</p>
                            <p>Food and Brevareges</p>
                        </div>
                        <div className="explore-innerdiv">
                            <h4>Tech and innovation</h4>
                            <p>Audio</p>
                            <p>Camera Gear</p>
                            <p>Education</p>
                            <p>Energy and green tech</p>
                            <p>Fashion and Wearables</p>
                            <p>Food and Brevareges</p>
                        </div>
                        <div className="explore-innerdiv">
                            <h4>Tech and innovation</h4>
                            <p>Audio</p>
                            <p>Camera Gear</p>
                            <p>Education</p>
                            <p>Energy and green tech</p>
                            <p>Fashion and Wearables</p>
                            <p>Food and Brevareges</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export { ExploreModal };