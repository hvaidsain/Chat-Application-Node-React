import React, { useEffect, useState } from "react";
import "./Infobar.css"
import onlineIcon from "../../icons/online.png"
import closeIcon from "../../icons/close1.png"


const Infobar = ({room})=>{ 

    return(
        <div className="infoBar">
            <div className="leftInfo">
                <img className="onlineIcon" src={onlineIcon} alt="online" />
                <h3 style={{color:"#ffffff"}}>{room} </h3>

            </div>
            <div className="rightInfo">
            <a href="/" ><img className="closeIcon" src={closeIcon} alt="close" /></a>

            </div>
        </div>
    )

}

export default Infobar;