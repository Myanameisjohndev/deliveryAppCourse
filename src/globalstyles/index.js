import styled from "styled-components/native";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');

export const Background = styled.SafeAreaView`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
`;
export const Form = styled.View`
    width: 90%;
    justify-content: center;
    align-items: center;
`;

export const FormOptions = styled.View`
    margin:7px;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
`;

export const AuthTitle = styled.Text`
    font-size: 32px;
    margin-bottom: 25px;
    font-weight: bold;
    align-self: flex-start;
    color: ${({ theme }) => theme.COLORS.TEXT}
`;

export const SmallText = styled.Text`
    font-size: 12px;
    font-weight: bold;
    margin-left: 10px;
    color: ${({ theme }) => theme.COLORS.TEXT};
`;
export const PressButton = styled.TouchableOpacity``;




