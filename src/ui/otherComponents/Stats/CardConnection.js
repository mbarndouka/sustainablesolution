import React from "react";

// css
import "./CardConnection.css"


function CardConnection(props) {
    return (
        <div style={{background: `${props.backColor}`}} className="CardConnectionContainer">
            <h1 className="CardConnectionContainerH1">{props.title}</h1>
            <h1 className="numberCss">{props.numbers}</h1>
        </div>
    );
}

export default CardConnection;