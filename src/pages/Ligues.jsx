import './../Css/Ligues.css';
import Header from '../Header';
import axios from "axios";
import { useState } from 'react';
import react from 'react';

function Ligues() {
    const [ligues, setLigues] = useState([])
    react.useEffect(() => {
        axios.get("https://api.pandascore.co/csgo/leagues?token=fgMRHcZ7cSjqE1ykSqh0RCsdIa7ZSdyZxDgj9WYIENSDsZT2qlA").then(response => {
            setLigues(response.data);
            console.log(response.data);
        });
    }, [])
    return (
        <div className="Ligues">
            <Header></Header>
            <body>
                <h1>Ligues</h1>
                <div className="listeLigues">
                    {
                        ligues.map(ligue => (
                            <div className="afficheLigues" key={ligue.id}>
                                <div className='cadreImage'>
                                    <img src={ligue.image_url !== null ? ligue.image_url : "https://thumbs.gfycat.com/ClosedFancyJoey-max-1mb.gif"}></img>
                                </div>
                                <p>{ligue.name}</p>
                            </div>
                        ))
                    }
                </div>
            </body>
        </div>
    );
}

export default Ligues;