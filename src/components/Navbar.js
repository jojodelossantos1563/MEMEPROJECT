import React from "react";
import'./Style.css'

export default function Navbar(){
    return(
        <>
        <header className="header">
            <img className="header--img" src={'./images/troll-image.png'} alt="meme image"/>
            <h2 className="header--title">Meme Generator</h2>
            <div className="header--project">React Project</div>
        </header>
        </>
    )
}