import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        marginBottom: 50,
        flex: 1,
        alignItems: 'center',
        paddingVertical: Constants.statusBarHeight + 24,
        justifyContent: 'center'
    },
    
    Field: {
        borderBottomWidth: 1,
        marginTop: 20,
        width: 300,
        height: 44,
        fontSize: 26,
        padding: 10,
    },

    Button: {
        backgroundColor: "#000",
        width: 150,
        height: 60,
        alignItems:'center',
        justifyContent: 'center',
        marginTop: 10,
        borderRadius: 9,
    }
});
