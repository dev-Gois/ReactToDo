import React from "react";
import loadingSquare from "../assets/loadingSquare.gif"

export default function Loading({isLoading}) {

    var loadingClass = "";
    const styles = {
        position: 'relative',
        top: '50%',
        marginTop: '-100px' 
    }

    if(!isLoading) loadingClass = "out"
    return (
        <img src={loadingSquare} className={loadingClass} style={styles}/>
    );
}