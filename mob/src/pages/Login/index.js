import React, { Fragment, useState, useContext} from 'react';
import { Text, TextInput, TouchableOpacity, KeyboardAvoidingView, AsyncStorage } from 'react-native';
import { Feather } from '@expo/vector-icons/';
import { Formik } from 'formik';
import { useNavigation } from '@react-navigation/native';
import { AuthC } from '../../Context/authContext';

import style from './style';
export default function Login(){
    const { Login } = AuthC();
    const [Email, setEmail] = useState('');
    const [Pass, setPass] = useState('');

    const data = {
        'email': Email,
        'pass': Pass
    }
    const navigator = useNavigation();

    const handleNavi = () => {
        navigator.navigate('Register')
    }

    async function handleLogin(){
        Login(data);
    }

    return (
        <KeyboardAvoidingView behavior='height' style={style.container}>
            <Text style={{fontWeight: "bold", fontSize: 35 , paddingVertical: 20}}>Faça Seu Login</Text>
            <Feather name="user" size={80} color="#000" style={{paddingBottom: 20}} />
            <Formik initialValues={{}} onSubmit={handleLogin} validationSchema={{}}>
                <Fragment  >
                <TextInput style={style.Field} 
                textContentType="emailAddress" 
                placeholder="Email"
                onChangeText={setEmail}
                autoCorrect={false}
                autoCapitalize="none"
                 />
                <TextInput style={style.Field} 
                secureTextEntry={true} 
                textContentType="password" 
                placeholder="Password" 
                onChangeText={setPass}
                autoCorrect={false}
                autoCapitalize="none"
                />

                <TouchableOpacity style={style.Button} onPress={handleLogin}>
                    <Text style={{fontSize: 26, color: "#fff"}}>
                        Entrar
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={{paddingTop: 20}} onPress={handleNavi} >
                    <Text style={{fontSize: 16}}>Não tenho cadastro <Feather name="arrow-left" size={20} color="#f00"></Feather></Text>
                </TouchableOpacity>    
                </Fragment>
            
            </Formik>
            
        </KeyboardAvoidingView>
    );
}