import './../Css/PageNonExistante.css';
import Header from '../Header';
import axios from "axios";
import { useState } from 'react';
import react from 'react';

function PageNonExistante() {
    return (
        <body>
            <Header></Header>
            <div class="error404">
                <span class="labelError404">erreur 404</span>
            </div>
        </body>
    );
}


export default PageNonExistante;