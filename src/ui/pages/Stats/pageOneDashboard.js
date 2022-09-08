import React from "react";

import "./pageOneD.css"

import ConnectionSponsors from "./ConnectionSponsors"
import CardConnection from "./CardConnection";

function PageOneDashboard() {
    return(
        <div>
            <div className="statsContainer">
            <CardConnection backColor="linear-gradient(90deg, rgba(121,44,9,1) 29%, rgba(255,147,0,1) 100%)" title="Connected Schools" numbers="1" />
            <CardConnection backColor="linear-gradient(90deg, rgba(75,0,205,1) 29%, rgba(166,5,210,1) 100%)" title="Connected Schools" numbers="0" />
            <CardConnection backColor="linear-gradient(90deg, rgba(255,0,68,1) 29%, rgba(254,0,249,1) 100%)" title="Connected Schools" numbers="0" />
            </div>
            <ConnectionSponsors />
        </div>
    );
}

export default PageOneDashboard;