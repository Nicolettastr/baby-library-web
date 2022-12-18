import React from "react";
import Boton from "./boton.jsx";

const FarmImages = (props) => {

    const farmItem = props.dataFarm.map((item, index) => {
        return (
            <figure key={index} className={item.name}>
                <img src={item.img} alt={`imagen del ${item.name}`} />
            </figure>
        )
    })

    return (
        <>
            {farmItem}
            <Boton boton={props.boton} girasolBtn={props.girasolBtn}/>
            <figure className="vaca">
                <img src={props.vaca} alt="" />
            </figure>
        </>
    )
};

export default FarmImages;