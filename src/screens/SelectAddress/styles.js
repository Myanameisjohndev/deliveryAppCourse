import styled from "styled-components/native";
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window'); 

export const ContainerAddress = styled.TouchableOpacity`
    background-color:  ${({theme})=> theme.COLORS.TEXT};
    width: 85%;
    padding-left: 20px;
    align-self: center;
    margin-bottom: 10px;
    border-radius: 15px;
    flex-direction: row;
    justify-content: space-between;
    min-height: 90px;
    align-items: center;
`;

export const AddresList = styled.FlatList`
`;

export const Complement = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: ${({theme})=> theme.COLORS.BACKGROUND};
`;

export const Align = styled.View`
    align-items: center;
    margin-right: 15px;
`;

export const ButtonDelete = styled.TouchableOpacity`
    align-items: center;
    margin-right: 15px;
`;

export const Row = styled.View`
    align-items: center;
    flex-direction: row;
`;

export const Column = styled.View`
    display: flex;
    flex-direction: column;
`;

export const Description = styled.Text`
    font-size: 16px;
    color: ${({theme})=> theme.COLORS.BACKGROUND};
`;

