import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { LoopCircleLoading } from 'react-loadingg';
import api from '../../services/api';
import { AuthC } from '../../Context/auth';

import './style.css'
export default function Dex(){
    const { handleLogout } = AuthC();
    const history = useHistory();
    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(Boolean);
    const token = localStorage.getItem('@USER:TOKEN');

    useEffect(() => {
        function handleHome(){

            try{
            
                api.get('users', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                }).then(res => setList(res.data));
                
                setTimeout(()=>{setLoading(true)}, 2000)
               
            }catch(e){
                alert(e)
            }
    
        }

        handleHome();
    })

    function handleView(content){
        history.push('/view', content)
    }


    return(
        <div className="dv-container">
            <section>
                <div>
                    <button onClick={handleLogout} className="buttonR">Sair</button>
                    
                </div>
            </section>
             <ul className="ul-container">
                 {loading ? list.map(lists => (
                <li className="li-container">
                    <div className="i">                    
                    <strong>Email</strong>
                    <p>{lists.email}</p>
                    </div>
                    <div className="i">

                    <strong>Nome</strong>
                    <p>{lists.name}</p>
                    </div>
                    <div className="i">

                    <strong>Whatsapp</strong>
                    <p>{lists.whatsapp}</p>
                    </div>
                    <div className="i">

                    <strong>Cidade</strong>
                    <p>{lists.city} / {lists.uf}</p>
                    </div>
                    <div className="btu">
                <button onClick={() => handleView(lists)} className="buttonE">Visualizar</button>
                </div>
                </li>
                
                    )) : <LoopCircleLoading color="#000" />}
            </ul>
        </div>
        
        
    );
}