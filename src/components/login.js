import React from 'react';
import {
    Link,
    useHistory
} from "react-router-dom";
import logoIconUrl from "./assets/logo2.png";
import { TokenContext } from "../App"



const Login = () => {
        const history = useHistory();
        const goToHome = () => {history.push("/home")} 

        const { token, setToken } = React.useContext(TokenContext);
        const [email, setEmail] = React.useState("");
        const [senha, setSenha] = React.useState("");
        const logar = () => {
            const options = {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    senha: senha,
                })
            }

            fetch('https://cubos-desafio-4.herokuapp.com/auth', options)
                .then((response) => { return response.json() })
                .then((result) => {
                    setToken(result.dados.token);
                    if (token !== null) {
                        alert ("Login bem sucedido");
                        goToHome();

                    } 
                })
        };


        return (
            <div className="loginCont">
                <div className="loginSubCont">
                    <div>
                        <img src={logoIconUrl}></img>
                    </div>
                    <div className="emailSenha">E-mail</div>
                    <div className="inputLogin">
                        <input type="email" placeholder="exemplo@email.com" value={email} onChange={(event) => { setEmail(event.target.value) }}></input>
                    </div>
                    <div className="emailSenha">Senha</div>
                    <div className="inputLogin">
                        <input type="password" placeholder="xxxxxxx" value={senha} onChange={(event) => { setSenha(event.target.value) }}></input>
                    </div>
                    <div className="esqueci">Esqueci minha senha</div>
                    <div className="botaoLogin">
                        <button onClick={logar}>Entrar</button>
                    </div>
                </div>
                <div className="cadastreSe">

                    <div>Não tem uma conta?</div>
                    <div className="cadastro">
                        <Link to="/cadastro">Cadastre-se!</Link>
                </div>
                </div>
            </div>
        )
    }

    export { Login }