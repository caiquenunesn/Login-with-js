import React from 'react';
import { useHistory } from 'react-router-dom';

import './view.css';
export default function Visualizar(){
    const history = useHistory();
    const data = history.location.state;
    
    function goBack(){
        history.push('/');
    }
    return (
        <div className="dv-container">
        <button onClick={goBack} className="buttonR">Voltar</button>
            <div className="o" >
                <strong>UUID : </strong>
                <p>{data.uuid}</p>

            </div>
            <div className="o">
                <strong >NAME : </strong>
                <p>{data.name}</p>

            </div>
            <div className="o">
                <strong className="teste">EMAIL : </strong>
                <p>{data.email}</p>

            </div>
            <div className="o">
                <strong className="teste">PASSWORD : </strong>
                <p>{data.password}</p>

            </div>
            <div className="o">
                <strong className="teste">SALT : </strong>
                <p>{data.salt}</p>
                
            </div>

            <div className="o">
                <strong className="teste">WHATSAPP : </strong>
                <p>{data.whatsapp}</p>
                
            </div>

            <div className="o">
                <strong className="teste">CIDADE : </strong>
                <p>{data.city}</p>
                
            </div>

            <div className="o">
                <strong className="teste">UF : </strong>
                <p>{data.uf}</p>
                
            </div>

        </div>
    );
}