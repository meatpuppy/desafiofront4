import React from 'react';
import cifraoIconUrl from "./assets/Cifrão.png"
import userIconUrl from "./assets/loginicon.png"
import { Deslogar } from "./deslogar"

const Header = () => {

  const [showDeslogar, setShowDeslogar]= React.useState(false);

  return (
    <div className="header">
      <div className="saldo">
        <div className="iconSaldo">
          <img src={cifraoIconUrl}></img>
        </div>
        <div className="textoSaldo">
          Saldo em conta
        </div>
        <div className="saldoValor">
          <div>R$</div>
          <div>0,00</div>
        </div>
      </div>
      <div className="iconUser">
        <div onClick = {() => setShowDeslogar(!showDeslogar)}>
          <img src={userIconUrl}></img>
        </div>
        {showDeslogar && (<Deslogar />)}
        
      </div>
    </div>
  );
};

export { Header };
