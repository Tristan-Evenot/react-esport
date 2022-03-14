import './../Css/Ligues.css';
import Header from '../Header';
import axios from "axios";
import { useState } from 'react';
import react from 'react';

function Ligues() {
    const [ligues, setLigues] = useState([])
    const options = [
        {
            label: "csgo",
            value: 'csgo',
        },
        {
            label: "league of legends",
            value: 'lol',
        }
    ]
    const [jeu, setJeu] = useState('csgo')

    const envoyer = (valeur) => {
        setJeu(valeur);
    }
    react.useEffect(() => {
        axios.get("https://api.pandascore.co/" + jeu + "/leagues?token=fgMRHcZ7cSjqE1ykSqh0RCsdIa7ZSdyZxDgj9WYIENSDsZT2qlA").then(response => {
            setLigues(response.data);
            console.log(response.data);
        });
    }, [jeu])
    return (
        <div className="Ligues">
            <Header></Header>
            <body>
                <h1>Ligues</h1>
                <select onInput={e => envoyer(e.target.value)}>{options.map(option => (
                    <option value={option.value}> {option.label}</option>
                ))}</select>
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