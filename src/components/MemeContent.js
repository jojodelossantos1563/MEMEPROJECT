import React from "react";
import './Style.css';
import MemeData from "../MemeData.js";

export default function MemeContent(){
    //This project is not yet done.
    const [meme,setMeme] = React.useState({
        topText: "",
        bottomText:"",
        randomImage:"https://i.imgflip.com/1g8my4.jpg"
    })
    const [allNewMeme,setAllNewMeme] = React.useState(MemeData)

    function getMemeImage(){
        const arrayMeme = allNewMeme.data.meme
        const newMeme = Math.floor(Math.random() * arrayMeme.length)
        let url = arrayMeme[newMeme].url
        setMeme(prevMeme=>({...prevMeme,randomImage:url}))
    }

    return(
        <>
        <main>
            <div className="form">
                <input className="form--input" type="text" placeholder="Top Box"/>
                <input className="form--input" type="text" placeholder="Bottom Box"/><br/>
                <button className="form--button" onClick={getMemeImage}>Get a new meme</button>
            </div>
            <div>
                <img src={meme.randomImage} className="meme--image"/>
            </div>
        </main>
        </>
    )
}