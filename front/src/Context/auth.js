import React , { createContext, useContext, useEffect, useState } from 'react';
import api from '../services/api';
import { useHistory } from 'react-router-dom';

const Context = createContext({
    user: Object,
    signed: Boolean,
    handleLogon: Function,
    handleLogout: Function,
    handleSubmit: Function,
    load: Boolean,
});


export const AuthProvider = ({children}) => {
    const history = useHistory();
    const [user, setUser] = useState(Object | null);
    const [load, setLoad] = useState(true);
    async function handleLogon(values){
        try{
        const res = await api.post('login',values);
         localStorage.setItem('@USER:TOKEN', res.data.token);
         localStorage.setItem('@USER:EMAIL', res.data.email);
        setUser(res.data.email);
    }catch(err){
        alert('Login Incorreto')
    }

}

    async function handleSubmit(values) {
    const { name, email, passwordn, whatsapp, city, uf} = values;
    const value = {
        name: name,
        email: email,
        passwordn: passwordn,
        whatsapp: whatsapp,
        city: city,
        uf: uf
    }
    try {
    await api.post('register', value)
    history.push('/');
    }catch(err){
        alert('Check o Formulario')
    }
}

useEffect(() => {
    async function fan(){
    try{
        const StorageToken = localStorage.getItem('@USER:TOKEN');
        const StorageEmail =  localStorage.getItem('@USER:EMAIL');

        await new Promise((resolve => setTimeout(resolve, 1000)));

        if(StorageToken && StorageEmail){
            setUser(StorageEmail);
        }

        setLoad(false)
    }catch(err){
        console.log('error')
    }}
    fan();
});

const handleLogout = () => {
    localStorage.clear();
    setUser(null);
}    
    
    return(
        <Context.Provider value={{signed: !!user, user, load , handleSubmit , handleLogon, handleLogout}}>
            {children}
        </Context.Provider>
    );

};



export function AuthC(){
    const context = useContext(Context);
    return context;
}