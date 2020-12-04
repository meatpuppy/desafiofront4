import React from 'react';
import { TokenContext } from "../App"
import { useHistory } from "react-router-dom"


const CriarCobra = () => {
    const { token, setToken } = React.useContext(TokenContext);
    const [cliente, setCliente] = React.useState(null);
    const [descri, setDescri] = React.useState("");
    const [valor, setValor] = React.useState(0);
    const [data, setData] = React.useState(Date);
    const [id , setId] = React.useState("");

    const history = useHistory()
    const goToCobrancas = () => { history.push("/cobrancas") }

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
                setCliente(result);
                console.log(result);
            })
    }, [])

    const criarCobranca = () => {

        const variavel = {
            idDoCliente: id,
            descricao: descri,
            valor: valor,
            vencimento: data,
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
        fetch('https://cubos-desafio-4.herokuapp.com/cobrancas', options)
            .then((response) => {
                console.log(response);
                if (response.status === 201) {
                    alert("Cobrança criada com sucesso!");
                }
                else {
                    console.log(response);
                    alert("Não foi possivel criar a cobrança")
                }
            })
    }


    return (
        <div className="criarCobraCont">
            <div className="tituloCriarCobra">// CRIAR COBRANÇA</div>
            <div className="formularioCriarCobra">
                <div className="inputSelect">
                    <div className="tituloFormCriarCobra">Cliente</div>
                    <select value={id} onChange={(event) => { setId(event.target.value) }}>
                        <option></option>
                        {cliente && cliente.dados.clientes.map((cliente)=>{
                            return(
                                <option value={cliente.id}>{cliente.nome}</option>
                            )
                        })}
                        
                    </select>
                </div>
                <div className="inputDescri">
                    <div className="tituloFormCriarCobra">Descrição</div>
                    <input type="text" value={descri} onChange={(event) => { setDescri(event.target.value) }}></input>
                    <div className="descriçãoFormCriarCobra">A descrição informada será impressa no boleto.</div>
                </div>
                <div className="valorEVencimento">
                    <div className="formValor">
                        <div className="tituloFormCriarCobra">Valor</div>
                        <input type="number" value={valor} onChange={(event) => { setValor(event.target.value) }}></input>
                    </div>
                    <div className="formData">
                        <div className="tituloFormCriarCobra">Vencimento</div>
                        <input type="date" value={data} onChange={(event) => { setData(event.target.value) }}></input>
                    </div>
                </div>
                <div className="botoesCriarCobra">
                    <div className="botaoCancelar">
                        <button onClick={goToCobrancas}>Cancelar</button>
                    </div>
                    <div className="botaoCriar">
                        <button onClick={criarCobranca}>Criar Cobrança</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { CriarCobra }