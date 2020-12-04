import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Menu } from "./components/menu";
import { Header } from "./components/header";
import { Placas } from "./components/placas";
import { Filtro } from "./components/filtrotempo";
import { Cobranca } from "./components/cobra";
import { CriarCobra } from "./components/criarCobra";
import { Login } from "./components/login";
import { Cadastro } from "./components/cadastro";
import { Clientes } from "./components/clientes";
import { CriarCliente } from "./components/criarCliente";
export const TokenContext = React.createContext();

function App() {
  const [token, setToken] = React.useState(() => localStorage.getItem("token"));

  React.useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
    }
  }, [token]);

  return (
    <Router>

      <TokenContext.Provider value={{ token, setToken }}>
        <div className="body">
          <div className="subBody">
            <Switch>
              <Route exact path="/"><Login /></Route>
              <Route exact path="/cadastro"><Cadastro /></Route>
              <Route exact path="/home"><Menu /></Route>
              <Route exact path="/cobrancas"><Menu /></Route>
              <Route exact path="/clientes"><Menu /></Route>
              <Route exact path="/criarcobranca"><Menu /></Route>
              <Route exact path="/criarcliente"><Menu /></Route>
            </Switch>
            <div>
              <Switch>
                <Route exact path="/home">
                  <Header />
                  <Filtro />
                  <Placas />
                </Route>
                <Route exact path="/cobrancas"><Header /> <Cobranca /></Route>
                <Route exact path="/clientes"><Header /> <Clientes /></Route>
                <Route exact path="/criarcobranca"><CriarCobra /></Route>
                <Route exact path="/criarcliente"><CriarCliente /></Route>
              </Switch>
            </div>
          </div>
        </div>
      </TokenContext.Provider>

    </Router>



  );
}

export default App;
