import React from "react";

import "./SpecificSchool.css"

// import components
import VerificationLink from "./VerificationLink.js";

// import icons

import Xmark from "../assets/Xmark.svg";
import Locationdot from "../assets/Locationdot.svg";
import schoolImage from "../assets/Frame351.png";

function SpecificSchool() {

    function showVerification() {
        document.querySelector(".VerificationLinkContainer").style.display = "block";
    }

    function hideSpecificSchool() {
        document.querySelector(".SpecificSchoolContainer").style.display = "none";
    }

   

    function stopProp(event) {
        event.stopPropagation();
    }

    let galleryImages = [schoolImage,schoolImage,schoolImage,schoolImage,schoolImage];

    return(
        <div>
            <VerificationLink />
            <div onClick={hideSpecificSchool} className="SpecificSchoolContainer">

    
            <div onClick={stopProp} className="SpecificSchoolContent">
                <div className="Gallery">
                    {
                        galleryImages.map((d,i) => {
                            return(
                                <img src={d} key={i} alt="schoolimage" />
                            )    
                        })
                    }
                </div>

                <div className="SchoolInfo">
                    <img className="closeImg" onClick={hideSpecificSchool} src={Xmark} alt="close" />

                    <div>
                        <h3 className="figmaH3">Kigali Junior Academy</h3>
                        <p className="figmaP">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque duis sapien dui dictum sed molestie quisque ipsum eu. Pulvinar varius lobortis mus eget rhoncus commodo. Dui elementum consectetur tellus et molestie malesuada ut a. Id in augue tempor at tincidunt ultrices ac ante justo. Dignissim integer ultrices malesuada facilisi.</p>
                        <div className="schoolLocation">
                            <img className="iconsClass" src={Locationdot} alt="location-dot" />
                            <h5>Kigali, Rwanda</h5>
                        </div>
                        <button onClick={showVerification} className="connectButton">Connect</button>
                    </div>
                    <div className="schoolInfoSeparator"></div>
                    <div>
                        <div className="figmaButtonContainer">
                            <button className="figmaButton">Student to sponsor</button>
                            <button className="figmaButton">Need for</button>
                            <button className="figmaButton">About</button>
                            <button className="figmaButton">Contact</button>
                        </div>
                        <div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        
    );
}

export default SpecificSchool;