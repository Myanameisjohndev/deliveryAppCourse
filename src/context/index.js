import React, { createContext, useContext, useEffect, useState } from 'react';
import firebase from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Context = createContext();

function ContextProvider({ children }) {

    const [user, setUser] = useState();
    const [addres, setAddres] = useState([]);

    const register = async (email, password, name) => {
        await firebase()
            .createUserWithEmailAndPassword(email, password)
            .then(async (response) => {
                let uid = response.user.uid;
                let data = {
                    uid,
                    name,
                    email
                };
                await firestore().collection('users')
                .doc(uid)
                .set(data)
                .then(()=>{
                    setUser(data);
                    AsyncStorage.setItem('user-data', JSON.stringify(data));
                    Alert.alert(
                    'Sucesso ao se registrar',
                    'Bem vindo ao nosso app, sinta-se a vontade para fazxer seu pedido');
                })
            })
            .catch(()=>{
                Alert.alert(
                'Erro ao se registrar',
                'Tente novamente dentro de instantes, ou contate o suporte')
            })
    };

    const login = async(email, password, visible) => {
        await firebase()
        .signInWithEmailAndPassword(email, password)
        .then(async (response)=>{
            await firestore()
            .collection('users')
            .doc(response.user.uid)
            .get()
            .then(async (secondResponse)=>{
                let data = {
                    uid: response.user.uid,
                    name: secondResponse.data().name,
                    email: secondResponse.data().email
                }
                setUser(data);
                if(visible){
                    AsyncStorage.setItem('user-data', JSON.stringify(data));
                }
            })
        })
        .catch(()=>{
            Alert.alert(
            'Erro ao efetuar login',
            'Tente novamente dentro de instantes, ou contate o suporte')
        })
    }

    useEffect(()=>{
        const loadStorage = async() => {
            const response = await AsyncStorage.getItem('user-data');
            if(response){
                setUser(JSON.parse(response));
            }
        }
        loadStorage();
    })

    return (
        <Context.Provider value={{ user, register, login, addres }}>
            {children}
        </Context.Provider>
    )
}

function useAppContext() {
    const context = useContext(Context);
    return context;
}

export { ContextProvider, useAppContext };