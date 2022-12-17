import React from "react";

const LittleCloud = (props) =>{

    const littleCloud = props.dataLittleCloud.map((item, index) => {
        return (
            <div key={index} className={`cloudAnimation ${item.section}`}>
                <div className={`littlecloud ${props.class} ${item.classOne}`} ></div>
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