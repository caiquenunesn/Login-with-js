import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: Constants.statusBarHeight + 20,
        
    },

    TextPadrao: {
        fontSize: 20,
        fontWeight: 'bold',
        lineHeight: 40,
        marginStart: 20,
        marginEnd: 20,
        marginTop: 30,
    },

    TextDATA: {
        fontSize: 18,
        fontWeight: '400',
    },

    voltar: {
        justifyContent: 'center',
        alignItems: 'center'
    }
});