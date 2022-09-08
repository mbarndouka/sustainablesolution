import React from "react";

// import css
import "./SearchBar.css";

function SearchBar() {
    return (
        <div className="searchBarContainer">
            <div className="searchBackArrowContainer">
                <i className="fa fa-arrow"></i>
                <h3>Back</h3>
            </div>
            <div className="searchBar">
                <i className="fa fa-search"></i>
                <input type="text" className="form-control" placeholder="Search" />
                <i className="fa"></i>
            </div>
        </div>
    );
}

export default SearchBar;