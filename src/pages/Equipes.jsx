import './../Css/Equipes.css';
import Header from '../Header';
import axios from "axios";
import { useState } from 'react';
import react from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import Modal from 'react-modal/lib/components/Modal';


function Equipes() {
    const [equipes, setEquipes] = useState([])
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
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
        axios.get("https://api.pandascore.co/" + jeu + "/teams?per_page=150&token=fgMRHcZ7cSjqE1ykSqh0RCsdIa7ZSdyZxDgj9WYIENSDsZT2qlA").then(response => {
            setEquipes(response.data);
            console.log(response.data);
        });
    }, [jeu])
    return (
        <body>
            <div className="Equipes">
                <Header></Header>
                <h1>Equipes</h1>
                <select onInput={e => envoyer(e.target.value)}>{options.map(option => (
                    <option value={option.value}> {option.label}</option>
                ))}</select>
                <div className="listeEquipes">
                    {
                        equipes.map(equipe => (
                            <div className="afficheEquipes" key={equipe.id} id={equipe.id}>
                                <div className='cadreImage'>
                                    <img src={equipe.image_url !== null ? equipe.image_url : "https://i.pinimg.com/originals/80/2f/6b/802f6b55de54cec2eeacc6df2d7cb464.gif"}></img>
                                </div>
                                <p>{equipe.name}</p>
                                <p>Membres :</p>
                                <p>{equipe.players.length == 0 ? "Aucun" : ""}</p>
                                <ul className='listeMembres'>
                                    {
                                        equipe.players.map(joueur => (
                                            <li className='nomMembre' key={joueur.id}>
                                                <Link to={'/Joueurs#' + joueur.id} >{joueur.name}</Link>
                                            </li>
                                        ))
                                    }
                                </ul>
                                {console.log(equipe.players)}
                            </div>

                        ))
                    }
                </div>
                {/* test modal */}
                {/* {
                    equipes.map(equipe => (
                        <Modal key={equipe.id} id={"equipe" + equipe.id} show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title> {equipe.name} </Modal.Title>
                            </Modal.Header>
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
                        </Modal> */}
                ))


            </div>
        </body >

    );
}

export default Equipes;