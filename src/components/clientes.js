import React from 'react';
import searchIconUrl from "./assets/search.png";
import telIconUrl from "./assets/tel.png";
import emailIconUrl from "./assets/email.png";
import editIconUrl from "./assets/editar.png";
import { TokenContext } from "../App"
import { useHistory } from "react-router-dom"

const Clientes = () => {

    const { token, setToken } = React.useContext(TokenContext);
    const [dados, setDados] = React.useState(null);
    const [loading, setLoading] = React.useState(true);
    const [pesquisa, setPesquisa] = React.useState("");

    const optionsBuscar= {
        method: 'get',
        headers: {
            'Content-Type': 'application/json',
            Authorization: token && `Bearer ${token}`
        },
    }

    const pesquisar = () => {
        setLoading(true);
        fetch(`https://cubos-desafio-4.herokuapp.com/clientes?busca=${pesquisa}&clientesPorPagina=10&offset=0`, optionsBuscar)
        .then((response)=>{return response.json()})
        .then((result)=>{
            setDados(result)
            setLoading(false)})
    };

    const history = useHistory()
    const goToCriarCliente = () => { history.push("/criarcliente") }

    const options = {
        method: 'get',
        headers: {
            'Content-Type': 'application/json',
            Authorization: token && `Bearer ${token}`
        },
    }

    React.useEffect(() => {
        fetch("https://cubos-desafio-4.herokuapp.com/clientes?clientesPorPagina=10&offset=0", options)
            .then((response) => { return response.json() })
            .then((result) => {
                setDados(result);
                setLoading(false)
                console.log(result.dados);
            })
    }, [])


    return (
        <div>
            <div className="headerCliente">
                <div className="contClienteInter">
                    <div className="criarClienteBotao">
                        <button onClick={goToCriarCliente}>Adicionar cliente</button>
                    </div>
                    <div className="buscarClienteBotao">
                        <input type="text" placeholder="Procurar por Nome, E-mail ou CPF" value={pesquisa} onChange={(event) => { setPesquisa(event.target.value)}}></input>
                        <button onClick={pesquisar}><img src={searchIconUrl}></img>BUSCAR</button>
                    </div>
                </div>
            </div>


            <div className="headerCliente">
                <div className="gridContCliente">
                    <div></div>
                    <div>Cliente</div>
                    <div>Cobranças Feitas</div>
                    <div>Cobranças Recebidas</div>
                    <div>Status</div>
                    <div></div>
                </div>
            </div>
            <div className="containerPlacaCliente">
                {loading ? <span>Carregando...</span> : dados.dados.clientes.map((cliente) => {
                    return (
                        <div className="placaCliente">
                            <div></div>
                            <div>
                                <div className="nome">{cliente.nome}</div>
                                <div className="email"><img src={emailIconUrl}></img> {cliente.email}</div>
                                <div className="tele"><img src={telIconUrl}></img>(DDD) NNNN-NNNN</div>
                            </div>
                            <div className="cobrancasCliente">
                                <div>R$</div>
                                <div> {cliente.cobrancas_pago}</div>
                            </div>
                            <div className="cobrancasCliente">
                                <div>R$</div>
                                <div> {cliente.cobrancas_total}</div>
                            </div>
                            <div>
                                {cliente.estaInadimplente ? <div className="inadimplente">INADIMPLENTE</div> : <div className="emdia">EM DIA</div>}
                            </div>
                            <div>
                                <img src={editIconUrl}></img>
                            </div>
                        </div>
                    )
                })}
            </div>





        </div>
    )
}

export { Clientes }