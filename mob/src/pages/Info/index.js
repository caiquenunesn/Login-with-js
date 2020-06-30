import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation , useRoute } from '@react-navigation/native'
import style from './style';

export default function Info(){
    const Navi = useNavigation();
    const route = useRoute();
    const lista = route.params.list;

    function goBack(){
        Navi.goBack();
    }
    return(
        <View style={style.container}>
            <Text style={style.TextPadrao}>UUID: <Text style={style.TextDATA}>{lista.uuid}</Text></Text>
            <Text style={style.TextPadrao}>NAME: <Text style={style.TextDATA}>{lista.name}</Text></Text>
            <Text style={style.TextPadrao}>EMAIL: <Text style={style.TextDATA}>{lista.email}</Text></Text>
            <Text style={style.TextPadrao}>PASSWORD: <Text style={style.TextDATA}>{lista.password}</Text></Text>
            <Text style={style.TextPadrao}>SALT: <Text style={style.TextDATA}>{lista.salt}</Text></Text>
            <Text style={style.TextPadrao}>WHATSAPP: <Text style={style.TextDATA}>{lista.whatsapp}</Text></Text>
            <Text style={style.TextPadrao}>CIDADE: <Text style={style.TextDATA}>{lista.city}</Text></Text>
            <Text style={style.TextPadrao}>UF: <Text style={style.TextDATA}>{lista.uf}</Text></Text>
            
            <View style={style.voltar}>
                <TouchableOpacity onPress={goBack}>
                    <Text style={{fontWeight: 'bold', fontSize: 18}}>Voltar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}