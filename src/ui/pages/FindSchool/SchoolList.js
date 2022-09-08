import React from "react";

// import css
import "./SchoolList.css";

import SpecificSchool  from "./SpecificSchool.js"


function SchoolList() {
    let data = [
        {
            image: "https://ichef.bbci.co.uk/news/976/cpsprodpb/13BEB/production/_120357808_gettyimages-1309052772.jpg",
            h4: "Kigali Junior Academy",
            p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque duis sapien dui dictum sed molestie quisque ipsum eu. Pulvinar varius lobortis mus eget rhoncus commodo. Dui elementum consectetur tellus et molestie malesuada ut a. Id in augue tempor at tincidunt ultrices ac ante justo. Dignissim integer ultrices malesuada facilisi."
        },
        {
            image: "https://ichef.bbci.co.uk/news/976/cpsprodpb/13BEB/production/_120357808_gettyimages-1309052772.jpg",
            h4: "Kigali Junior Academy",
            p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque duis sapien dui dictum sed molestie quisque ipsum eu. Pulvinar varius lobortis mus eget rhoncus commodo. Dui elementum consectetur tellus et molestie malesuada ut a. Id in augue tempor at tincidunt ultrices ac ante justo. Dignissim integer ultrices malesuada facilisi."
        },
        {
            image: "https://ichef.bbci.co.uk/news/976/cpsprodpb/13BEB/production/_120357808_gettyimages-1309052772.jpg",
            h4: "Kigali Junior Academy",
            p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque duis sapien dui dictum sed molestie quisque ipsum eu. Pulvinar varius lobortis mus eget rhoncus commodo. Dui elementum consectetur tellus et molestie malesuada ut a. Id in augue tempor at tincidunt ultrices ac ante justo. Dignissim integer ultrices malesuada facilisi."
        },
        {
            image: "https://ichef.bbci.co.uk/news/976/cpsprodpb/13BEB/production/_120357808_gettyimages-1309052772.jpg",
            h4: "Kigali Junior Academy",
            p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque duis sapien dui dictum sed molestie quisque ipsum eu. Pulvinar varius lobortis mus eget rhoncus commodo. Dui elementum consectetur tellus et molestie malesuada ut a. Id in augue tempor at tincidunt ultrices ac ante justo. Dignissim integer ultrices malesuada facilisi."
        }
    ]

    function showSpecificSchool() {
        document.querySelector(".SpecificSchoolContainer").style.display = "flex";
    }

    return (
        <div className="ResultsSuperContainer">
             <SpecificSchool />
             <div className="SchoolListContainer">         
            {
                data.map((d,i) => {
                    return(
                        <div key={i} className="SchoolIntroContainer">
                <div className="SchoolImageContainer">
                <img src={d.image} alt="school"/>
        
                </div>
                <div className="SchoolIntroContent">
                    <h4 className="hoverTitle">{d.h4}</h4>
                    <p className="hoverContent">
                    {d.p}
                    </p>
                </div>
                <div className="SchoolButton">
                    <button onClick={showSpecificSchool}>View more</button>
                </div>
            </div>
                    );
                })
            }
        </div>
        </div>
       
    );
}

export default SchoolList;
