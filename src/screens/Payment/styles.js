import styled from "styled-components/native";
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window'); 

export const ContainerOptionPayment = styled.TouchableOpacity`
    background-color:  ${({theme})=> theme.COLORS.TEXT};
    width: 85%;
    padding-left: 20px;
    align-self: center;
    margin-bottom: 10px;
    border-radius: 15px;
    flex-direction: row;
    min-height: 90px;
    align-items: center;
`;

export const PaymentOptionList = styled.FlatList`
`;

export const PaymentOptionText = styled.Text`
    margin-left: 15px;
    font-size: 16px;
    font-weight: bold;
    color: ${({theme})=> theme.COLORS.BACKGROUND};
`;


