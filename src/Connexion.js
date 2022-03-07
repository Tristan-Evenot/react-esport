class Connexion extends React.Component {
    state = {
        email: "",
        motDePasse: ""
    }
    handleForm = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Email</label>
                <input type="text" name="email" onChange={this.handleForm} />

                <label>Mot de passe</label>
                <input type="password" name="motDePasse" onChange={this.handleForm} />

                <input type="submit" value="envoyer" />
            </form>
        );
    }
}