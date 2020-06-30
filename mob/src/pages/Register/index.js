import React, { Fragment, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { Feather } from '@expo/vector-icons/'
import { Formik } from 'formik';
import { useNavigation } from '@react-navigation/native';
import { AuthC } from '../../Context/authContext';

import * as yup from 'yup';

import style from './style';

export default function Register(){
    const navigator = useNavigation();
    const { handRegister } = AuthC();

    function Back(){
        navigator.goBack();
    }
    return(
        <KeyboardAvoidingView 
        behavior='height'
        style={style.container}>
            <View style={style.ViewContainer}>

            <Text style={{fontSize: 28, fontWeight: 'bold', marginBottom: 20}}>Faça seu Cadastro</Text>
            
            

            <Formik initialValues={{}} onSubmit={{}} validationSchema={yup.object().shape({
                name: yup.string().required('*'),
                email: yup.string().typeError('Insira um email Válido').required('*').email(),
                password: yup.string().required('*').min(5).max(22),
                passwordC: yup.string().equals([yup.ref('password'), null], 'Confirma a senha').required('*'),
                whatsapp: yup.number().typeError('Apenas Numeros').integer().min(10).required('*'),
                city: yup.string().required('*'),
                uf: yup.string().required('*').min(1).max(2),

            })}>
                    {({values , handleChange, errors }) => (

                <Fragment>
                    {errors.name && <Text style={{fontSize: 10, color: 'red'}}>{errors.name}</Text>}
                    <TextInput style={style.input}
                    value={values.name}
                    onChangeText={handleChange('name')}
                    placeholder="Nome"
                    autoCorrect={false}/>
                    
                    
                    {errors.email && <Text style={{ fontSize: 10, color: 'red' }}>{errors.email}</Text>}
                    <TextInput style={style.input}
                    value={values.email}
                    onChangeText={handleChange('email')}
                    placeholder="Email"
                    autoCorrect={false}
                    />

                    {errors.password && <Text style={{fontSize: 10, color: 'red'}}>{errors.password}</Text>}
                    <TextInput style={style.input}
                    value={values.password}
                    onChangeText={handleChange('password')}
                    placeholder="Senha"
                    autoCorrect={false}
                    />
                    
                    {errors.passwordC && <Text style={{fontSize: 10, color: 'red'}}>{errors.passwordC}</Text>}
                    <TextInput style={style.input}
                    value={values.passwordC}
                    onChangeText={handleChange('passwordC')}
                    placeholder="Confirma Senha" 
                    autoCorrect={false}/>
                    
                    {errors.whatsapp && <Text style={{fontSize: 10, color: 'red'}}>{errors.whatsapp}</Text>}
                    <TextInput style={style.input}
                    value={values.whatsapp}
                    onChangeText={handleChange('whatsapp')}
                    placeholder="Telefone" 
                    autoCorrect={false}/>
                    
                    
                    <View style={{flexDirection: 'row', height: 40}}>
                        {errors.city && <Text style={{fontSize: 10, color: 'red'}}>{errors.city}</Text>}
                        <TextInput style={{borderBottomWidth: 1, width: 240, marginEnd: 10,  padding: 10, fontSize: 22}}
                        value={values.city}
                        onChangeText={handleChange('city')}
                        placeholder="Cidade"
                        />

                        {errors.uf && <Text style={{fontSize: 10, color: 'red'}}>{errors.uf}</Text>}
                        <TextInput style={{borderBottomWidth: 1, width: 50,  padding: 10, fontSize: 22}}
                        value={values.uf}
                        onChangeText={handleChange('uf')}
                        placeholder="UF"
                        />

                    </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>

                <TouchableOpacity style={{marginEnd: 50}} onPress={Back}>
                    <Text style={{fontSize: 16}}>Já tenho Cadastro <Feather name="arrow-right" size={18} color="#f00" /></Text>
                </TouchableOpacity>

                <TouchableOpacity style={style.button} onPress={() => handRegister(values)}>
                    <Text style={{color: '#fff', fontSize: 25}}>Cadastrar</Text>
                </TouchableOpacity>
                </View>
                </Fragment>
                )}



            </Formik>
            </View>
        </KeyboardAvoidingView>
    );
}