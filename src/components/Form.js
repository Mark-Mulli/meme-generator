import React from "react";

export default function Form() {

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMeme, setAllMemes] = React.useState([])

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(obj => setAllMemes(obj.data.memes))
    }, [])

    function getMemeImage() {
        const randomArray = Math.floor(Math.random() * allMeme.length)
        const url = allMeme[randomArray].url
        
        setMeme(prevMeme => ({...prevMeme, randomImage: url}))
 
    }

    function handleChange(event) {
        const {name, value} = event.target
        setMeme(previousMeme => ({
            ...previousMeme,
            [name]: value
        }))

    }

    return (
        <>

            <div className="form">

                <div className="row">
                    <div className="form-column">
                        <label className="form--label">Top text</label>
                        <input type="text" className="form--input" placeholder="Top Text" name="topText" onChange={handleChange} value={meme.topText}/>
                    </div>

                    <div className="form-column">
                        <label className="form--label">Bottom text</label>
                        <input type="text" className="form--input" placeholder="Bottom text" name="bottomText" onChange={handleChange} value={meme.bottomText}/>
                    </div>               
                </div>

                <button className="btn" onClick={getMemeImage}>Get a new meme image  🖼</button>
            </div>

            <div className="meme">
                <img src={meme.randomImage} className="meme--image" alt="meme"/>
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>

                 
        </>
        

    )
}    