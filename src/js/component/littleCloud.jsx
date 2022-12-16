import React from "react";

const LittleCloud = (props) =>{

    const littleCloud = props.dataLittleCloud.map((item, index) => {
        return (
            <div className={`cloudAnimation ${item.section}`}>
                <div key={index} className={`littlecloud ${props.class} ${item.classOne}`} ></div>
            </div>
        )
    });

    return (
        <>
            {littleCloud}
        </>
    )
};

export default LittleCloud;