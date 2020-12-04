import React from 'react';
import cobraIconUrl from "./assets/carbon_money.png";
import clientIconUrl from "./assets/users.png";

const Placas = () => {
    return (
        <div className="contPlacas">
            <div className="subContPlacas">
                <div className="placa">
                    <div className="headerPlaca">
                        <div className="contHeaderPlaca">
                            <div>
                                <img src={clientIconUrl}></img>
                            </div>
                            <div>Clientes</div>
                        </div>
                    </div>
                    <div className="contPlacaInterna">
                        <div className="placaInternaVerde">
                            <div className="emDia">Em dia</div>
                            <div className="emDiaNumero">0</div>
                        </div>
                        <div className="placaInternaVermelha">
                            <div className="emDia">Inadimplentes</div>
                            <div className="emDiaNumero">0</div>
                        </div>
                    </div>
                </div>

                <div className="placa">
                    <div className="headerPlaca">
                        <div className="contHeaderPlaca">
                            <div><img src={cobraIconUrl}></img></div>
                            <div>Cobranças</div>
                        </div>
                    </div>
                    <div className="contPlacaInterna">
                        <div className="placaInternaAzul">
                            <div className="emDia">Vencidas</div>
                            <div className="emDiaNumero">0</div>
                        </div>
                        <div className="placaInternaVermelha">
                            <div className="emDia">Vencidas</div>
                            <div className="emDiaNumero">0</div>
                        </div>
                        <div className="placaInternaVerde">
                            <div className="emDia">Pagas</div>
                            <div className="emDiaNumero">0</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { Placas };