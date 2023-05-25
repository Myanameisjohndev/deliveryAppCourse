import styled from "styled-components/native";

export const ButtonView = styled.TouchableOpacity`
    width: 100%;
    height: 70px;
    border-radius: 12px;
    padding: 6px;
    margin-bottom: 7px;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme, type }) =>
        type === 'primary' ?
            theme.COLORS.BACKGROUND :
            theme.COLORS.BUTTON
    };
`

export const Text = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: ${({ theme }) => theme.COLORS.TEXT};
`