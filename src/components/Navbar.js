import React from "react";

export default function Navbar() {
    return(
        <header className="header">
            <img src={require("../images/Troll Face.png")} alt="troll face" className="header--image"/>
            <h2 className="header--title">Meme Generator</h2>
            
        </header>

    )
}