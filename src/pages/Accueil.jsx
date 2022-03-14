import './../Css/Accueil.css';
import Header from '../Header';
import { Link } from 'react-router-dom';

function Accueil() {
  return (

    <body>
      <div className="accueil">
        <Header></Header>
        <h1>Esport-React</h1>
        <div className='liste'>
          <Link to='/Matchs'>
            <div className="affiche">Voir les matchs</div>
          </Link>
          <Link to='/Joueurs'>
            <div className="affiche">Voir les joueurs</div>
          </Link>
          <Link to='/Equipes'>
            <div className="affiche">Voir les équipes</div>
          </Link>
          <Link to='/Ligues'>
            <div className="affiche">Voir les ligues</div>
          </Link>
        </div>

      </div>

    </body >
  )
}

export default Accueil;
