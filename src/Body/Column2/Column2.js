import React from "react";
import "./Column2.css";

function Column2(props) {
    return(
        <div className="col2">
            <h3>{props.text1}</h3>
            <div className="line2"></div>
            <p>{props.text2}</p>
        </div>
    ) 
}

export default Column2;