import React from "react";

const Boton = (props) => {

    console.log(props.boton)

    const btn = props.boton.map((item, index) => {
        return (
            <button key={index} className={`btns ${item.name}`}><a href="#" >{item.go}</a></button>
        )
    })

    return (
        <>
            {btn}
        </>
    )
}

export default Boton;