import styled from "styled-components/native";

export const InputView = styled.View`
    width: 100%;
    height: 70px;
    border-radius: 12px;
    padding: 6px;
    margin-bottom: 14px;
    background-color: ${({theme})=>theme.COLORS.INPUT};
    flex-direction: row;
    justify-content: center;
    align-items: center;
    align-self: center;
`;
export const TextInput = styled.TextInput`
    width: 80%;
    height: 70px;
    font-weight: 500;
    color: ${({theme})=>theme.COLORS.TEXT};
`;

export const NoIconTextInput = styled.TextInput`
    width: 100%;
    height: 70px;
    font-weight: 500;
    color: ${({theme})=>theme.COLORS.TEXT};
    padding: 25px;
`;

export const Button = styled.TouchableOpacity`
    width: 25px;
    height: 25px;
`

