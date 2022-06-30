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

} from "./styles";
import { useAppContext } from "../../context";

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const { user } = useAppContext();

    const renderOrder = (item) => {
        return (
            <ContainerOrder>
                <ContentOrder>
                    <OrderImage source={{uri: item.selectedOrder.item.url}}/>
                    <OrderTitle>{item.selectedOrder.quantity} x { item.selectedOrder.item.name}</OrderTitle>
                </ContentOrder>
                <OrderStatus type={item.status}>
                    <OrderStatusText>

                    {item.status === "in preparation" 
                    ? 'Em preparo' : item.status === "reday"
                    ? 'Pronto' : 'Entregue'}
                    </OrderStatusText>
                </OrderStatus>
            </ContainerOrder>
        )
    }

    useEffect(()=>{
        const loadOrders = firestore()
        .collection("users-orders")
        .doc(user.uid)
        .collection("orders")
        .onSnapshot((response)=>{
            const data = response.docs.map((doc)=>{
                return{
                    id: doc.id,
                    ...doc.data(),
                };

            });
            setOrders(data);
            // console.log()
        })
        return () => loadOrders();
    },[])

    return (
        <Background>
            <Header>
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