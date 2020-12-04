import React from 'react';
import deslogarIconUrl from "./assets/deslogar.png"
import {
    useHistory
} from "react-router-dom";
import { TokenContext } from "../App"

const Deslogar = () => {

    const { token, setToken } = React.useContext(TokenContext);

    const history = useHistory();
    const goToLogin = () => {history.push("/")}
    const inlogar = () => { setToken("");
        goToLogin()}

    return (
        <div className="deslogar" onClick={inlogar}>
            <div>
                <img src ={deslogarIconUrl}></img>
            </div>
            <div>
                Deslogar
            </div>
        </div>
    )
};

export { Deslogar };