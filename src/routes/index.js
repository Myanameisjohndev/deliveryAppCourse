import React from 'react';
import { useAppContext } from '../context';
import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';


const Route = () => {
    const { user } = useAppContext();
    return !!user ? <AppRoutes/> : <AuthRoutes/>
}

export default Route;