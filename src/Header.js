import { Link } from 'react-router-dom';
import "./Css/Header.css";

function Header() {
    return (
        <header className="menu">
            <nav>
                <ul>
                    <li>
                        <Link to="/">Accueil</Link>
                    </li>
                    <li>
                        <Link to="/Ligues">Ligues</Link>
                    </li>
                    <li>
                        <Link to="/Equipes">Equipes</Link>
                    </li>
                    <li>
                        <Link to="/Matchs">Matchs</Link>
                    </li>
                </ul>
            </nav>

        </header>
    );

}

export default Header;