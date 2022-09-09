import React from "react";

// import css
import "./FindSchool.css";
// import components
import SearchBar from "./SearchBar"
import FilterSearch from "./FilterSearch";
import SchoolList from "./SchoolList";

function FindSchool() {
    return(
        <div>
            <SearchBar />

            <div className="resultBox">
                <FilterSearch />
                <SchoolList />
            </div>
            
        </div>
    );
}

export default FindSchool;
