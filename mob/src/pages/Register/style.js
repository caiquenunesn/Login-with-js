import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: Constants.statusBarHeight + 24,
    },
    
    ViewContainer: {
        justifyContent: "center",
        alignItems: 'center',
        
    },
    input: {
        borderBottomWidth: 1,
        width: 300,
        height: 40,
        padding: 10,
        marginBottom: 10,
        fontSize: 20,
    },
    

    button: {
        backgroundColor: '#000',
        width: 190,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30,
        marginTop: 30,
        borderRadius: 8
    }
});