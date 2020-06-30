import React from 'react';
import { View, ActivityIndicator} from 'react-native';

import AuthRoutes from './authRoutes';
import AppRoutes from './appRoutes';
import { AuthC } from '../Context/authContext';

export default function Routes(){ 
    const { loading ,signed } = AuthC();

    if (loading){
        return(
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <ActivityIndicator size="large" color="#999" />
            </View>
        )
    }

    return signed ? <AppRoutes /> : <AuthRoutes />
    
    
}