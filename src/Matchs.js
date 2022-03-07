import './Css/Matchs.css';
import Header from './Header';
import axios from "axios";
import { useState } from 'react';
import react from 'react';

function Matchs() {
    const [matchsFuturs, setMatchsFuturs] = useState([])
    const [matchsPresents, setMatchsPresents] = useState([])
    const [matchsPasses, setMatchsPasses] = useState([])
    react.useEffect(() => {
        axios.get("https://api.pandascore.co/csgo/matches/past?per_page=6&token=fgMRHcZ7cSjqE1ykSqh0RCsdIa7ZSdyZxDgj9WYIENSDsZT2qlA").then(response => {
            setMatchsPasses(response.data);
            console.log(response.data);
        });
        axios.get("https://api.pandascore.co/csgo/matches/running?token=fgMRHcZ7cSjqE1ykSqh0RCsdIa7ZSdyZxDgj9WYIENSDsZT2qlA").then(response => {
            setMatchsPresents(response.data);
            console.log(response.data);
        });
        axios.get("https://api.pandascore.co/csgo/matches/upcoming?per_page=6&token=fgMRHcZ7cSjqE1ykSqh0RCsdIa7ZSdyZxDgj9WYIENSDsZT2qlA").then(response => {
            setMatchsFuturs(response.data);
            console.log(response.data);
        });
    }, [])
    return (
        <div className="Matchs">
            <Header></Header>
            <body>
                <h1>Matchs</h1>
                <h2>Matchs en cours</h2>
                <div className="listeMatchsPresents">
                    {
                        matchsPresents.map(match => (
                            <div className="afficheMatchs" key={match.id}>
                                <div className='cadreImage'>
                                    <img src={match.opponents[0].opponent.image_url !== null ? match.opponents[0].opponent.image_url : "https://thumbs.gfycat.com/ClosedFancyJoey-max-1mb.gif"}></img>
                                    <img className="vsImage" src='https://upload.wikimedia.org/wikipedia/commons/7/70/Street_Fighter_VS_logo.png'></img>
                                    <img src={match.opponents[1].opponent.image_url !== null ? match.opponents[1].opponent.image_url : "https://thumbs.gfycat.com/ClosedFancyJoey-max-1mb.gif"}></img>
                                </div>
                                <p>{match.name}</p>
                                <p className='score'>{match.results[0].score} - {match.results[1].score}</p>
                                <a className='lienLive' href={match.official_stream_url} target="_blank">
                                    <button>Regarder en direct</button>
                                </a>
                            </div>
                        ))
                    }
                </div>
                <h2>Matchs finis</h2>
                <div className="listeMatchsFinis">
                    {
                        matchsPasses.map(match => (
                            <div className="afficheMatchs" key={match.id}>
                                <div className='cadreImage'>
                                    <img src={match.opponents[0].opponent.image_url !== null ? match.opponents[0].opponent.image_url : "https://thumbs.gfycat.com/ClosedFancyJoey-max-1mb.gif"}></img>
                                    <img className="vsImage" src='https://upload.wikimedia.org/wikipedia/commons/7/70/Street_Fighter_VS_logo.png'></img>
                                    <img src={match.opponents[1].opponent.image_url !== null ? match.opponents[1].opponent.image_url : "https://thumbs.gfycat.com/ClosedFancyJoey-max-1mb.gif"}></img>
                                </div>
                                <p className={match.winner_id == match.opponents[0].opponent.id ? "victoire" : "defaite"}>{match.winner_id == match.opponents[0].opponent.id ? "Victoire" : "Defaite"}</p>
                                <p>-</p>
                                <p className={match.winner_id == match.opponents[1].opponent.id ? "victoire" : "defaite"}>{match.winner_id == match.opponents[1].opponent.id ? "Victoire" : "Defaite"}</p>
                                <p>{match.name}</p>
                                <p className='score'>{match.results[0].score} - {match.results[1].score}</p>
                            </div>
                        ))
                    }
                </div>
                <h2>Matchs à venir</h2>
                <div className="listeMatchsFuturs">
                    {
                        matchsFuturs.map(match => (
                            <div className="afficheMatchs" key={match.id}>
                                <div className='cadreImage'>
                                    <img src={match.opponents[0].opponent.image_url !== null ? match.opponents[0].opponent.image_url : "https://thumbs.gfycat.com/ClosedFancyJoey-max-1mb.gif"}></img>
                                    <img className="vsImage" src='https://upload.wikimedia.org/wikipedia/commons/7/70/Street_Fighter_VS_logo.png'></img>
                                    <img src={match.opponents[1].opponent.image_url !== null ? match.opponents[1].opponent.image_url : "https://thumbs.gfycat.com/ClosedFancyJoey-max-1mb.gif"}></img>
                                </div>
                                <p></p>
                                <p>-</p>
                                <p></p>
                                <p>{match.name}</p>
                                <p className='score'></p>
                            </div>
                        ))
                    }
                </div>
            </body>
        </div>
    );
}

export default Matchs;