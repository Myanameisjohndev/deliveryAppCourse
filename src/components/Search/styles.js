import styled from "styled-components/native";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');

export const Container = styled.View`
    width: ${width * 0.85}px;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    background-color: ${({theme})=>theme.COLORS.TEXT};
    height: 60px;
    border-radius: 15px;
    align-self: center;
    margin-top: -30px;
    padding: 5px;
`;

export const Input = styled.TextInput`
    width: 80%;
    margin-left: 15px;
    margin-right: 15px;
`;
