import React from 'react';
import logoIconUrl from "./assets/logo2.png";
import { useHistory } from "react-router-dom"

const Cadastro = () => {

    const [email, setEmail] = React.useState("");
    const [senha, setSenha] = React.useState("");
    const [nome, setNome] = React.useState("");
    const history = useHistory()
    const goToHome = () => { history.push("/home") }
    
    const criarConta = () => {
    
        const options = {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                senha: senha,
                nome: nome,
            })
        }
        fetch('https://cubos-desafio-4.herokuapp.com/usuarios', options)
            .then((response) => {
                console.log(response);
                if (response.status === 200) {
                    alert("Conta criada com sucesso!");
                    goToHome();
                }
                else { alert("Não foi possivel criar a conta") }
            })
    }


    return (
        <div className="cadastroCont">
            <div className="cadastroSubCont">
                <div>
                    <img src={logoIconUrl}></img>
                </div>
                <div className="emailSenha">Nome</div>
                <div className="inputLogin">
                    <input type="text" placeholder="Fulano de tal" value={nome} onChange={(event) => { setNome(event.target.value) }}></input>
                </div>
                <div className="emailSenha">E-mail</div>
                <div className="inputLogin">
                    <input type="email" placeholder="exemplo@email.com" value={email} onChange={(event) => { setEmail(event.target.value) }}></input>
                </div>
                <div className="emailSenha">Senha</div>
                <div className="inputLogin">
                    <input type="password" placeholder="xxxxxxx" value={senha} onChange={(event) => { setSenha(event.target.value) }}></input>
                </div>
                <div className="botaoLogin">
                    <button onClick={criarConta}>Criar conta</button>
                </div>
            </div>
        </div>
    )
}

export { Cadastro }