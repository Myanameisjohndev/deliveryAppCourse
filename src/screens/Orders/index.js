import React, { useState, useEffect } from "react";
import firestore from '@react-native-firebase/firestore';

import { Background, Content, Header } from "../../globalstyles";
import Title from '../../components/Title';
import Theme from "../../Theme";
import {
    OrderImage,
    OrderStatus,
    OrderStatusText,
    OrderTitle,
    OrdersList,
    ContainerOrder,
    ContentOrder,
    OrderPrice,

} from "./styles";
import { useAppContext } from "../../context";
import HeaderOptionButtons from "../../components/HeaderOptionButtons";

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const { user } = useAppContext();



    const renderOrder = (receive) => {
        const {status} = receive;
        const {item, quantity, price} = receive.selectedOrder;
        const {url, name} = item;
        return (
            <ContainerOrder>
                <ContentOrder>
                    <OrderImage source={{ uri:url }} />
                    <OrderTitle>{quantity} x {name}</OrderTitle>
                    <OrderPrice>{price}</OrderPrice>
                </ContentOrder>
                <OrderStatus type={status}>
                    <OrderStatusText>
                        {status === "in preparation"
                            ? 'Em preparo' : status === "reday"
                                ? 'Pronto' : 'Entregue'}
                    </OrderStatusText>
                </OrderStatus>
            </ContainerOrder>
        )
    }

    useEffect(() => {
        const loadOrders = firestore()
            .collection("users-orders")
            .doc(user.uid)
            .collection("orders")
            .onSnapshot((response) => {
                const data = response.docs.map((doc) => {
                    return {
                        id: doc.id,
                        ...doc.data(),
                    };

                });
                setOrders(data);
            })
        return () => loadOrders();
    }, [])

    return (
        <Background>
            <Header>
                <HeaderOptionButtons />
                <Title
                    title="Seus pedidos,"
                    subtitle="Acompanhe em tempo real"
                />
            </Header>
            <Content>
                <OrdersList
                    contentContainerStyle={{ paddingVertical: 20 }}
                    data={orders}
                    keyExtractor={(_, index) => index}
                    renderItem={({ item, index }) => renderOrder(item, index)}
                />
            </Content>
        </Background>
    )
}

export default Orders;