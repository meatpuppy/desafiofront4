import React from 'react';
import { TokenContext } from "../App"
import { useHistory } from "react-router-dom"


const CriarCliente = () => {
    const { token, setToken } = React.useContext(TokenContext);
    const [ nome, setNome ] = React.useState("");
    const [ email, setEmail ] = React.useState("");
    const [ cpf, setCpf ] = React.useState("12345678900");
    const [ tele, setTele ] = React.useState("12345678");

    const history = useHistory()
    const goToClientes = () => { history.push("/clientes") }

    const criarCliente = () => {
    
        const variavel = {
            nome: nome,
            cpf: cpf,
            email: email,
            tel: tele
        };
console.log(variavel);
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: token && `Bearer ${token}`
            },
            body: JSON.stringify(variavel)
        }
        fetch('https://cubos-desafio-4.herokuapp.com/clientes', options)
            .then((response) => {
                console.log(response);
                if (response.status === 201) {
                    alert("Cliente adicionado com sucesso!");
                }
                else {
                    console.log(response); 
                    alert("Não foi possivel adicionar o cliente") }
            })
    }


    return (
        <div className="criarCobraCont">
            <div className="tituloCriarCobra">// ADICIONAR CLIENTE</div>
            <div className="formularioCriarCobra">
                <div className="inputSelect">
                    <div className="tituloFormCriarCobra">Nome</div>
                    <input type="select" value={nome} onChange={(event) => { setNome(event.target.value) }}></input>
                </div>
                <div className="inputSelect">
                    <div className="tituloFormCriarCobra">Email</div>
                    <input type="email" value={email} onChange={(event) => { setEmail(event.target.value) }}></input>
                </div>
                <div className="valorEVencimento">
                    <div className="formValor">
                        <div className="tituloFormCriarCobra">CPF</div>
                        <input type="number" value={cpf} onChange={(event) => { setCpf(event.target.value) }}></input>
                    </div>
                    <div className="formData">
                        <div className="tituloFormCriarCobra">Telefone</div>
                        <input type="tel" value={tele} onChange={(event) => { setTele(event.target.value) }}></input>
                    </div>
                </div>
                <div className="botoesCriarCobra">
                    <div className="botaoCancelar">
                        <button onClick={goToClientes}>Cancelar</button>
                    </div>
                    <div className="botaoCriar">
                        <button onClick={criarCliente}>Adicionar cliente</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { CriarCliente }