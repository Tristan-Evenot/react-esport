import './../Css/Matchs.css';
import Header from '../Header';
import axios from "axios";
import { useState } from 'react';
import react from 'react';
import moment from 'moment';

function Matchs() {
    const [matchsFuturs, setMatchsFuturs] = useState([])
    const [matchsPresents, setMatchsPresents] = useState([])
    const [matchsPasses, setMatchsPasses] = useState([])
    var nbMatchsPasses = 6;
    var nbMatchsFuturs = 6;
    const options = [
        {
            label: "csgo",
            value: 'csgo',
        },
        {
            label: "league of legends",
            value: 'lol',
        },
        {
            label: "Dota 2",
            value: 'dota2',
        },
    ]
    const [jeu, setJeu] = useState('csgo')

    const envoyer = (valeur) => {
        setJeu(valeur);
    }

    function voirPlusDeMatchsPasses(nombre) {
        nombre += 6;
        axios.get("https://api.pandascore.co/" + jeu + "/matches/past?per_page=" + nombre + "&token=fgMRHcZ7cSjqE1ykSqh0RCsdIa7ZSdyZxDgj9WYIENSDsZT2qlA").then(response => {
            setMatchsPasses(response.data);
        });
    }
    function voirPlusDeMatchsFuturs(nombre) {
        nombre += 6;
        axios.get("https://api.pandascore.co/" + jeu + "/matches/upcoming?per_page=" + nombre + "&token=fgMRHcZ7cSjqE1ykSqh0RCsdIa7ZSdyZxDgj9WYIENSDsZT2qlA").then(response => {
            setMatchsFuturs(response.data);
        });
    }

    react.useEffect(() => {
        axios.get("https://api.pandascore.co/" + jeu + "/matches/past?per_page=6&token=fgMRHcZ7cSjqE1ykSqh0RCsdIa7ZSdyZxDgj9WYIENSDsZT2qlA").then(response => {
            setMatchsPasses(response.data);
        });
        axios.get("https://api.pandascore.co/" + jeu + "/matches/running?token=fgMRHcZ7cSjqE1ykSqh0RCsdIa7ZSdyZxDgj9WYIENSDsZT2qlA").then(response => {
            setMatchsPresents(response.data);
        });
        axios.get("https://api.pandascore.co/" + jeu + "/matches/upcoming?per_page=6&token=fgMRHcZ7cSjqE1ykSqh0RCsdIa7ZSdyZxDgj9WYIENSDsZT2qlA").then(response => {
            setMatchsFuturs(response.data);
            console.log(response.data)
        });
    }, [jeu])
    return (
        <div className="Matchs">
            <Header></Header>
            <h1>Matchs</h1>
            <select onInput={e => envoyer(e.target.value)}>{options.map(option => (
                <option value={option.value}> {option.label}</option>
            ))}</select>
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
            <div className="listeMatchsFinis" id='listeMatchsFinis'>
                {
                    matchsPasses.map(match => (
                        <div className="afficheMatchs" key={match.id}>
                            <div className='cadreImage'>
                                <img src={match.opponents[0].opponent.image_url !== null ? match.opponents[0].opponent.image_url : "https://thumbs.gfycat.com/ClosedFancyJoey-max-1mb.gif"}></img>
                                <img className="vsImage" src='https://upload.wikimedia.org/wikipedia/commons/7/70/Street_Fighter_VS_logo.png'></img>
                                <img src={match.opponents[1].opponent.image_url !== null ? match.opponents[1].opponent.image_url : "https://thumbs.gfycat.com/ClosedFancyJoey-max-1mb.gif"}></img>
                            </div>
                            <p className={match.results[0].score > match.results[1].score ? "victoire" : match.results[0].score == match.results[1].score ? "egalite" : "defaite"}>{match.results[0].score > match.results[1].score ? "Victoire" : match.results[0].score == match.results[1].score ? "Égalité" : "Defaite"}</p>
                            <p>-</p>
                            <p className={match.results[1].score > match.results[0].score ? "victoire" : match.results[1].score == match.results[0].score ? "egalite" : "defaite"}>{match.results[1].score > match.results[0].score ? "Victoire" : match.results[1].score == match.results[0].score ? "Égalité" : "Defaite"}</p>
                            <p>{match.name}</p>
                            <p className='score'>{match.results[0].score} - {match.results[1].score}</p>
                        </div>
                    ))
                }
            </div>
            <p className='boutonVoirPlus'>
                <a onClick={() => voirPlusDeMatchsPasses(nbMatchsPasses)} href='#listeMatchsFinis'>
                    <button className='boutonVoirPlus'>Afficher Plus</button>
                </a>
            </p>
            <h2>Matchs à venir</h2>
            <div className="listeMatchsFuturs" id='listeMatchsFuturs'>
                {
                    matchsFuturs.map(match => (
                        <div className="afficheMatchs" key={match.id}>
                            <div className='cadreImage'>
                                <img src={match.opponents.length <= 1 ? "https://thumbs.gfycat.com/ClosedFancyJoey-max-1mb.gif" : match.opponents[0].opponent.image_url == null ? "https://thumbs.gfycat.com/ClosedFancyJoey-max-1mb.gif" : match.opponents[0].opponent.image_url}></img>
                                <img className="vsImage" src='https://upload.wikimedia.org/wikipedia/commons/7/70/Street_Fighter_VS_logo.png'></img>
                                <img src={match.opponents.length <= 1 ? "https://thumbs.gfycat.com/ClosedFancyJoey-max-1mb.gif" : match.opponents[1].opponent.image_url == null ? "https://thumbs.gfycat.com/ClosedFancyJoey-max-1mb.gif" : match.opponents[1].opponent.image_url}></img>
                            </div>
                            <p>{match.name}</p>
                            <p>Début le : {moment(match.begin_at).format('DD/MM/YYYY') + " à " + moment(match.begin_at).format("hh:mm") + "h"}</p>
                        </div>
                    ))
                }
            </div>
            <p className='boutonVoirPlus'>
                <a onClick={() => voirPlusDeMatchsFuturs(nbMatchsFuturs)} href='#listeMatchsFuturs'>
                    <button>Afficher Plus</button>
                </a>
            </p>
        </div >
    );
}

export default Matchs;