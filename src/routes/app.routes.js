import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import SelectedProduct from '../screens/SelectedProduct';

const Stack = createNativeStackNavigator();

const AppRoutes = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name='Home' component={Home}/>
            <Stack.Screen name='SelectedProduct' component={SelectedProduct}/>
        </Stack.Navigator>
    )
}

export default AppRoutes;