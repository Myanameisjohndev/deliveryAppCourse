import styled from "styled-components/native";
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window'); 

export const ContainerOrder = styled.View`
    background-color:  ${({theme})=> theme.COLORS.TEXT};
    width: 85%;
    padding: 5px;
    padding-left: 20px;
    align-self: center;
    margin-bottom: 10px;
    border-radius: 15px;
    flex-direction: row;
    min-height: 70px;
    align-items: center;
    justify-content: space-between;
`;

export const ContentOrder = styled.View`
    justify-content: center;
    align-items: center;
    flex-direction: row;
    margin-left: 16px;
`;

export const OrdersList = styled.FlatList`
`;

export const OrderImage = styled.Image`
    width: 40px;
    height: 40px;
    border-radius: 20px;
`;

export const OrderTitle = styled.Text`
    margin-left: 16px;
    font-size: 16px;
    font-weight: bold;
    color: ${({theme})=> theme.COLORS.BACKGROUND};
`;

export const OrderStatus = styled.View`
    margin-right: 16px;
    border-radius: 16px;
    padding: 5px;
    justify-content: center;
    align-items: center;
    background-color:  ${({ theme, type }) => 
        type === "in preparation" ? theme.COLORS.PREPARATION
        : type === "ready" ? theme.COLORS.BUTTON : theme.COLORS.DELIVERIED
    };;
`;

export const OrderStatusText = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: ${({theme})=> theme.COLORS.TEXT};
`;
