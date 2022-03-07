import './Css/Equipes.css';
import Header from './Header';
import axios from "axios";
import { useState } from 'react';
import react from 'react';

function Equipes() {
    const [equipes, setEquipes] = useState([])
    react.useEffect(() => {
        axios.get("https://api.pandascore.co/csgo/teams?token=fgMRHcZ7cSjqE1ykSqh0RCsdIa7ZSdyZxDgj9WYIENSDsZT2qlA").then(response => {
            setEquipes(response.data);
            console.log(response.data);
        });
    }, [])
    return (
        <body>
            <div className="Equipes">
                <Header></Header>
                <h1>Equipes</h1>
                <div className="listeEquipes">
                    {
                        equipes.map(equipe => (
                            <button data-toggle="modal" data-target={"#equipe" + equipe.id}>
                                <div className="afficheEquipes" key={equipe.id}>
                                    <div className='cadreImage'>
                                        <img src={equipe.image_url !== null ? equipe.image_url : "https://i.pinimg.com/originals/80/2f/6b/802f6b55de54cec2eeacc6df2d7cb464.gif"}></img>
                                    </div>
                                    <p>{equipe.name}</p>
                                </div>
                            </button>
                        ))
                    }
                </div>
                {
                    equipes.map(equipe => (
                        <div className="modal" tabindex="-1" role="dialog" key={equipe.id} id={"equipe" + equipe.id}>
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title">{equipe.name}</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <p>joueurs</p>
                                        {
                                            equipe.players.map(joueur => (
                                                <div key={joueur.id}>
                                                    <img src={joueur.image_url !== null ? joueur.image_url : "https://i.pinimg.com/originals/80/2f/6b/802f6b55de54cec2eeacc6df2d7cb464.gif"}></img>
                                                    <div>
                                                        <p>Nom :{joueur.first_name} "{joueur.name}" {joueur.last_name}</p>
                                                    </div>
                                                </div>
                                            ))
                                        }

                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }


            </div>
        </body>

    );
}

export default Equipes;