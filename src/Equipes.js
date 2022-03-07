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
        <div className="Equipes">
            <Header></Header>
            <body>
                <h1>Equipes</h1>
                <div className="listeEquipes">
                    {
                        equipes.map(equipe => (
                            <div className="afficheEquipes" key={equipe.id}>
                                <div className='cadreImage'>
                                    <img src={equipe.image_url !== null ? equipe.image_url : "https://i.pinimg.com/originals/80/2f/6b/802f6b55de54cec2eeacc6df2d7cb464.gif"}></img>
                                </div>
                                <p>{equipe.name}</p>
                            </div>
                        ))
                    }
                </div>
            </body>
        </div>
    );
}

export default Equipes;