import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import SelectedProduct from '../screens/SelectedProduct';
import SelectAddress from '../screens/SelectAddress';
import CreateAddres from '../screens/CreateAddres';
import Payment from '../screens/Payment';

const Stack = createNativeStackNavigator();

const AppRoutes = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name='Home' component={Home}/>
            <Stack.Screen name='SelectedProduct' component={SelectedProduct}/>
            <Stack.Screen name='SelectAddress' component={SelectAddress}/>
            <Stack.Screen name='CreateAddres' component={CreateAddres}/>
            <Stack.Screen name='Payment' component={Payment}/>
        </Stack.Navigator>
    )
}

export default AppRoutes;