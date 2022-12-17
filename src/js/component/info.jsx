import React from "react";

const Info = (props) => {

    const infoParagraph = props.dataInfo.map((item, index) => {
        return (
            <div key={index} className="list-content">
                <div className={`paragraphs-container ${item.class}`}>
                    <p className="tittle-paragraph">
                        {item.name}
                    </p>
                    <p className="information-paragraph">
                        {item.paragraph}
                    </p>
                </div>
            </div>
        )
    })

    return (
        <>
            {infoParagraph}
        </>
    )
}

export default Info;