import React, { createContext, useState, useEffect, useContext } from 'react';
import api from '../services/api';
import AsyncStorage from '@react-native-community/async-storage';


const Context = createContext({
    user: Object,
    signed: Boolean,
    Login: Function,
    loading: Boolean,
    handleLogout: Function,
    handRegister: Function,
});

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(Object | null);
    const [loading, setLoading] = useState(true);
    async function Login(data){
        try{
            const res = await api.post('login', data)
            const { email, token, name } = res.data;    
            api.defaults.headers.common["authorization"] = `Bearer ${token}`;
            setUser(name)
            await AsyncStorage.setItem('@EMAIL:user', JSON.stringify(email));
            await AsyncStorage.setItem('@NAME:user', JSON.stringify(name));
            await AsyncStorage.setItem('@TOKEN:user', JSON.stringify(token));
        }catch(err){
            setTimeout(() => {
                setLoading(false);
            }, 900)
            setLoading(true);
            
        }
    }

    async function handRegister(data) {
        try{
        const { name, email, password, whatsapp, city, uf } = data;
        const values = {
            name: name,
            email: email,
            passwordn: password,
            whatsapp: whatsapp,
            city: city,
            uf: uf,
        }
        const res = await api.post('register', values);

        const { token } = res.data;
        await AsyncStorage.setItem('@TOKEN:user', JSON.stringify(token));
        api.defaults.headers.common["authorization"] = `Bearer ${token}`;
        setUser(name)
        
    }catch(errors){
        setTimeout(() => {
            setLoading(false)
        }, 900)
        setLoading(true)
    }
        
        
    }

    useEffect(() => {
        async function loadStorage() {
            const StorageUser = await AsyncStorage.getItem('@NAME:user');
            const StorageToken = await AsyncStorage.getItem('@TOKEN:user');

            await new Promise((resolve => setTimeout(resolve, 1000)));

            if(StorageUser && StorageToken){
                api.defaults.headers.common = {'Authorization': `Bearer ${JSON.parse(StorageToken)}`}       
                setUser(JSON.parse(StorageUser))
            }
            setLoading(false);
        }

        loadStorage();
        
    }, [])

    

     function handleLogout(){
         AsyncStorage.clear().then(() => {
            setUser(false);
        })
    }

    return(
        <Context.Provider value={{signed: !!user, user, loading ,Login, handleLogout, handRegister}}>
            { children }
        </Context.Provider>
    );
}

export default Context;

export function AuthC(){
    const context = useContext(Context);

    return context;
}