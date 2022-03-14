import './../Css/Joueurs.css';
import Header from '../Header';
import axios from "axios";
import { useState } from 'react';
import react from 'react';

function Joueurs() {
    const [joueurs, setJoueurs] = useState([])

    react.useEffect(() => {
        axios.get("https://api.pandascore.co/csgo/players?per_page=150&token=fgMRHcZ7cSjqE1ykSqh0RCsdIa7ZSdyZxDgj9WYIENSDsZT2qlA").then(response => {
            setJoueurs(response.data);
            console.log(response.data);
        });
    }, [])
    return (
        <body>
            <div className="Joueurs">
                <Header></Header>
                <h1>Joueurs</h1>
                <div className="listeJoueurs">
                    {
                        joueurs.map(joueur => (
                            <div className="afficheJoueurs" key={joueur.id} id={joueur.id}>
                                <div className='cadreImage'>
                                    <img src={joueur.image_url !== null ? joueur.image_url : "https://i.pinimg.com/originals/80/2f/6b/802f6b55de54cec2eeacc6df2d7cb464.gif"}></img>
                                </div>
                                <div className='info'>
                                    <p className='pseudo'>{joueur.name}</p>
                                    <p className='identite'>
                                        Identitée :{joueur.first_name == null && joueur.last_name == null ? " inconnue" : ""}
                                        {joueur.first_name !== null ? " " + joueur.first_name : ""}
                                        {joueur.last_name !== null ? " " + joueur.last_name : ""}
                                    </p>
                                    <p className='nationalite'>Nationalité : {joueur.nationality !== null ? joueur.nationality : "inconnue"}</p>
                                    <p className='role'>Role : {joueur.role !== null ? joueur.role : "inconnu"} </p>
                                    <p className='equipe'>Team : {joueur.current_team !== null ? joueur.current_team.name : "aucune"}</p>

                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </body >

    );
}

export default Joueurs;