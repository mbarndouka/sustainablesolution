import React from "react";

// import css
import "./FilterSearch.css";

function FilterSearch() {
    let data = ["All","Primary School","Secondary School","University"]
    return (
        <div className="FilterSearchContainer">
            {
                data.map((d,i)=> {
                    return(
                        <div key={i} className="FilterOne">
                <div className="FilterOneSubContainer">
                <input type="checkbox" className='checkbox' />
                <span className='indicator'></span>
                </div>
                <div className="FilterOneSubContainer2">
                <h4>{d}</h4>
                    </div>
            </div>
                    );
                })
            }
        </div>
    );
}

export default FilterSearch;
