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

export const PressButton = styled.TouchableOpacity`
`;

export const Header = styled.View`
    padding: 45px 35px;
    width: 100%;
    height: 35%;
    justify-content: flex-end;
`;

export const Content = styled.View`
    background-color: ${({theme})=>theme.COLORS. SECOND_BACKGROUND};
    width: 100%;
    height: 65%;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    justify-content: space-between;
`;
export const ContentEmpty = styled.View`
    width: 100%;
    height: 65%;
    justify-content: space-between;
`;





