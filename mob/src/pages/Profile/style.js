import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingVertical: Constants.statusBarHeight + 20,
    },
    button : {
        backgroundColor: "#000",
        width: 100,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        marginStart: 20,
        marginTop: 10,
    },

    Text: {
        fontSize: 20,
        marginBottom: 3
    },

    box: {
        flex: 1,
        backgroundColor: '#ededed',
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        marginStart: 20,
        padding: 10
    },

    TextBox: {
        fontSize: 20,
        lineHeight: 50,
        borderWidth: 0.2,
        marginBottom: 10,
        padding: 10
    }
});