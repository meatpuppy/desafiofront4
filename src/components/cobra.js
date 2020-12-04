import React from 'react';
import printerIconUrl from "./assets/printer.png";
import { TokenContext } from "../App"
import searchIconUrl from "./assets/search.png";

const Cobranca = () => {

    const { token, setToken } = React.useContext(TokenContext);
    const [dados, setDados] = React.useState(null);
    const [loading, setLoading] = React.useState(true);
    const [pesquisa, setPesquisa] = React.useState("");

    const options = {
        method: 'get',
        headers: {
            'Content-Type': 'application/json',
            Authorization: token && `Bearer ${token}`
        },
    }

    const pesquisar = () => {
        setLoading(true);
        fetch(`https://cubos-desafio-4.herokuapp.com/cobrancas?busca=${pesquisa}&clientesPorPagina=10&offset=0`, options)
            .then((response) => { return response.json() })
            .then((result) => {
                setDados(result)
                setLoading(false)
            })
    };

    React.useEffect(() => {
        fetch("https://cubos-desafio-4.herokuapp.com/cobrancas?cobrancasPorPagina=10&offset=0", options)
            .then((response) => { return response.json() })
            .then((result) => {
                setDados(result);
                setLoading(false)
                console.log(result.dados)
            })
    }, [])

    return (
        <div>

            <div className="headerCliente">
                <div className="contClienteInter">
                    <div></div>
                    <div className="buscarClienteBotao">
                        <input type="text" placeholder="Procurar por Nome, E-mail ou CPF" value={pesquisa} onChange={(event) => { setPesquisa(event.target.value) }}></input>
                        <button onClick={pesquisar}><img src={searchIconUrl}></img>BUSCAR</button>
                    </div>
                </div>
            </div>

            <div className="headerCliente">
                <div className="gridCont">
                    <div>Cliente</div>
                    <div>Descrição</div>
                    <div>Valor</div>
                    <div>Status</div>
                    <div>Vencimento</div>
                    <div>Boleto</div>
                </div>
            </div>

            <div className="bodyCobra">
                {loading ? <span>Carregando...</span> :
                    dados.dados.cobrancas.map((cobranca) => {
                        return (
                            <div className="itemCobra">
                                <div>{cobranca.nome}</div>
                                <div>{cobranca.descricao}.</div>
                                <div>
                                    <div>R$</div>
                                    <div>{cobranca.valor}</div>
                                </div>
                                <div>
                                    <div></div>
                                    <div>{cobranca.status}</div>
                                </div>
                                <div>{cobranca.vencimento}</div>
                                <div>
                                    <img src={printerIconUrl}></img>
                                </div>
                            </div>
                        )

                    }

                    )}

            </div>
        </div>
    )
}

export { Cobranca };

