import styled from "styled-components/native";

export const InputView = styled.View`
    width: 100%;
    height: 70px;
    border-radius: 12px;
    padding: 6px;
    margin: 7px;
    background-color: ${({theme})=>theme.COLORS.INPUT};
    flex-direction: row;
    justify-content: center;
    align-items: center;
    `;

export const Button = styled.TouchableOpacity`
    width: 25px;
    height: 25px;
    `;

export const TextInput = styled.TextInput`
    width: 80%;
    height: 70px;
    color: ${({theme})=>theme.COLORS.TEXT};
    font-weight: 500;
`;