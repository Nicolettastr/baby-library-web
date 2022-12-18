import React from "react";

const Sun = (props)=> {
    return (
        <figure className="sun sunMove">
            <img src={props.sun} alt="sun" />
        </figure>
    )
};

export default Sun;