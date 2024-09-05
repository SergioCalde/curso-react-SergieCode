/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import React from "react";

export const Incrementar = React.memo(({ incrementar }) => {

        console.log("Me estoy redibujando");

    return (
        <>
            <button className="btn btn-primary" onClick={ () => incrementar(10) }>
                +
            </button>
        </>
    )
    }
)