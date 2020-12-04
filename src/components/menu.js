import homeIconUrl from "./assets/home.png";
import React from 'react';
import cobraIconUrl from "./assets/carbon_money.png";
import clientIconUrl from "./assets/users.png";
import logoIconUrl from "./assets/logo.png";
import {
  Link,
  useHistory
} from "react-router-dom";

const Menu = () => {

  const history = useHistory()
  const goToCriarCobra = () => { history.push("/criarcobranca") }

  return (
    <div className="menuColumn">
      <div className="menu">
        <div className="titulo">
          <img src={logoIconUrl}></img>
        </div>
        <div className="menuBotoes">
          <div className="botao">
            <Link to="/home">
              <img src={homeIconUrl}></img>
              <div>HOME</div>
            </Link>

          </div>
          <div className="botao">
            <Link to="/cobrancas">
              <img src={cobraIconUrl}></img>
              <div>COBRANÇAS</div>
            </Link>

          </div>
          <div className="botao">
            <Link to="/clientes">
              <img src={clientIconUrl}></img>
              <div>CLIENTES</div>
            </Link>

          </div>
        </div>
      </div>


      <button onClick={goToCriarCobra}>Criar cobrança</button>
    </div>
  );
};

export { Menu };
