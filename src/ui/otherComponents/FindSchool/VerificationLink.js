import React from "react";

import "./VerificationLink.css"

// import icons

import Xmark from "../assets/Xmark.svg";

function VerificationLink() {

    function hideSpecificSchoolTwo() {
        document.querySelector(".VerificationLinkContainer").style.display = "none";
    }

   

    function stopPropTwo(event) {
        event.stopPropagation();
    }
    return(
        <div onClick={hideSpecificSchoolTwo} className="VerificationLinkContainer">
            <div onClick={stopPropTwo} className="VerificationLinkContent">
                <img className="closeImgTwo" onClick={hideSpecificSchoolTwo} src={Xmark} alt="close" />

            </div>
        </div>
    );
}

export default VerificationLink;