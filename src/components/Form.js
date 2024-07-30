import React from "react";

import memesObj from "../memesData";

export default function Form() {

    

    const [memeImg, setMemeImg] = React.useState("")

    function getMemeImage() {
        const memesArray = memesObj.data.memes;
        const randomArray = Math.floor(Math.random() * memesArray.length)
        const randomImage = memesArray[randomArray].url

       setMemeImg(randomImage)
 
    }

    return (
        <>

            <div className="form">

                <div className="row">
                    <div className="form-column">
                        <label className="form--label">Top text</label>
                        <input type="text" className="form--input" placeholder="Top Text"></input>
                    </div>

                    <div className="form-column">
                        <label className="form--label">Bottom text</label>
                        <input type="text" className="form--input" placeholder="Bottom text"></input>
                    </div>               
                </div>

                <button className="btn" onClick={getMemeImage}>Get a new meme image  🖼</button>

                <img src={memeImg} alt="Meme" className="meme--image"/>   

            </div>

                 
        </>
        

    )
}    