import React from "react";

// import external css

// import css
import "./SearchConnections.css"

function SearchConnections() {
    return (
        <div className="SearchConnectionsContainer">
            <div className="search">
                <i className="fa fa-search"></i>
                <input type="text" className="form-control" placeholder="Have a question? Ask Now" />
            </div>

            <div className="search">
                <i className="fa fa-search"></i>
                <input type="text" className="form-control" placeholder="Country name" />
            </div>


            <div className="search">
                <i className="fa fa-search"></i>
                <select className="form-control" defaultValue="Option 1">
                    <option defaultValue="Option 1">School Type</option>
                    <option defaultValue="Option 2">School Type</option>
                    <option defaultValue="Option 3">School Type</option>
                    <option defaultValue="Option 4">School Type</option>
                </select>
            </div>

            <div className="search">
                <i className="fa fa-search"></i>
                <input type="date" className="form-control" />
            </div>

            <div className="">
                <input type="button" className="form-control" id="buttonApply" defaultValue="Apply" />
            </div>

            
        </div>
    );
}

export default SearchConnections;