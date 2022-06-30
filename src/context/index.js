import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import firebase from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const Context = createContext();

function ContextProvider({ children }) {

    const [user, setUser] = useState();
    const [addres, setAddres] = useState([]);
    const [selectedAddress, setSelectedAddress] = useState();
    const [selectedOrder, setSelectedOrder] = useState();
    const [selectedPaymentOption, setSelectedPaymentOption] = useState();
    const navigation = useNavigation();

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
                    .then(() => {
                        setUser(data);
                        AsyncStorage.setItem('user-data', JSON.stringify(data));
                        Alert.alert(
                            'Sucesso ao se registrar',
                            'Bem vindo ao nosso app, sinta-se a vontade para fazxer seu pedido');
                    })
            })
            .catch(() => {
                Alert.alert(
                    'Erro ao se registrar',
                    'Tente novamente dentro de instantes, ou contate o suporte')
            })
    };

    const login = async (email, password, visible) => {
        await firebase()
            .signInWithEmailAndPassword(email, password)
            .then(async (response) => {
                await firestore()
                    .collection('users')
                    .doc(response.user.uid)
                    .get()
                    .then(async (secondResponse) => {
                        let data = {
                            uid: response.user.uid,
                            name: secondResponse.data().name,
                            email: secondResponse.data().email
                        }
                        setUser(data);
                        if (visible) {
                            AsyncStorage.setItem('user-data', JSON.stringify(data));
                        }
                    })
            })
            .catch(() => {
                Alert.alert(
                    'Erro ao efetuar login',
                    'Tente novamente dentro de instantes, ou contate o suporte')
            })
    }

    useEffect(() => {
        const loadStorage = async () => {
            const response = await AsyncStorage.getItem('user-data');
            if (response) {
                setUser(JSON.parse(response));
            }
        }
        loadStorage();
    }, [])

    const loadUserAddress = async () => {
        await firestore()
            .collection('users_address')
            .doc(user.uid)
            .collection('address')
            .get()
            .then((response) => {
                response.docs.map((item) => {
                    setAddres([...addres, item.data()]);
                })
            })
    }

    useEffect(() => {
        if (user) {
            loadUserAddress();
        }
    }, [user]);

    const createNewAddress = async (
        surname,
        street,
        district,
        selected,
        addresNumber,
        complement,
        referencePoint
    ) => {
        const newAddress = {
            surname,
            street,
            district,
            selected,
            addresNumber,
            complement,
            referencePoint
        };
        await firestore()
            .collection('users_address')
            .doc(user.uid)
            .collection('address')
            .doc()
            .set(newAddress)
            .then(() => {
                Alert.alert('Enderço cadastrado com suceso!');
                setAddres([...addres, newAddress])
                navigation.navigate("SelectAddress");
            })
            .catch(() => {
                Alert.alert(
                    'Erro ao criar endereço',
                    'Tente novamente dentro de instantes, ou contate o suporte')
            })
    }

    const createNewOrder = async() => {
        if(selectedPaymentOption && selectedOrder && selectedAddress){
            const order = {
                selectedPaymentOption,
                selectedOrder,
                selectedAddress,
                status: "in preparation"
            };
            await firestore()
            .collection("users-orders")
            .doc(user.uid)
            .collection("orders")
            .doc()
            .set(order)
            .then(()=>{
                setOrders([...orders, order]);
                Alert.alert(
                    "Pedido feito com sucesso!",
                    "Seu pedido foi realizado com sucesso, acompanhe o status do seu pedido"
                )
            })
            .catch(()=>{
                Alert.alert(
                    "Erro ao criar pedido!",
                    "Tente novamente dentro de instantes ou entre em contato com o suporte"
                )  
            })
        }
    }
        
    return (
        <Context.Provider value={{
            user,
            register,
            login,
            addres,
            createNewAddress,
            setSelectedAddress,
            selectedAddress,
            setSelectedOrder,
            selectedOrder,
            setSelectedPaymentOption,
            selectedPaymentOption,
            createNewOrder
        }}>
            {children}
        </Context.Provider>
    )
}

function useAppContext() {
    const context = useContext(Context);
    return context;
}

export { ContextProvider, useAppContext };