import React, { useState } from "react";
import ReactDOM from "react-dom";
import Header from '../Header';

import "./../Css/Connexion.css";

function Connexion() {
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const database = [
        {
            username: "user1",
            password: "pass1"
        },
        {
            username: "user2",
            password: "pass2"
        }
    ];

    const errors = {
        uname: "invalid username",
        pass: "invalid password"
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        var { uname, pass } = document.forms[0];

        const userData = database.find((user) => user.username === uname.value);

        if (userData) {
            if (userData.password !== pass.value) {
                // Invalid password
                setErrorMessages({ name: "pass", message: errors.pass });
            } else {
                setIsSubmitted(true);
                window.localStorage.setItem('username')
            }
        } else {
            setErrorMessages({ name: "uname", message: errors.uname });
        }
    };
    const renderErrorMessage = (name) =>
        name === errorMessages.name && (
            <div className="erreur">{errorMessages.message}</div>
        );
    const renderForm = (
        <div className="formulaire">
            <form onSubmit={handleSubmit}>
                <div className="input">
                    <label>Username </label>
                    <input type="text" name="uname" required />
                    {renderErrorMessage("uname")}
                </div>
                <div className="input">
                    <label>Password </label>
                    <input type="password" name="pass" required />
                    {renderErrorMessage("pass")}
                </div>
                <div className="bouton">
                    <input type="submit" />
                </div>
            </form>
        </div>
    );

    return (
        <body>
            {/* <Header></Header> */}
            <Header></Header>
            <div className="connexion">
                <div className="formulaireConnexion">
                    <div className="titre">Sign In</div>
                    {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
                </div>
            </div>
        </body>
    );
}
export default Connexion;