import React from 'react';
import Routes from './src/Routes';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './src/Context/authContext';

export default function App(){
  return(
    <NavigationContainer>
        <AuthProvider>
          <Routes />
        </AuthProvider>
    </NavigationContainer>
    
  );
}