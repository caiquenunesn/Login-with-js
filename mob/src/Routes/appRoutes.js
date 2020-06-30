import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import Profile from '../pages/Profile';
import Info from '../pages/Info';

const AppStack = createStackNavigator();

export default function AppRoutes(){
    return (
        <AppStack.Navigator screenOptions={{headerShown: false}}>
            <AppStack.Screen name="Profile" component={Profile} />
            <AppStack.Screen name="Info" component={Info} />
        </AppStack.Navigator>
    );
}