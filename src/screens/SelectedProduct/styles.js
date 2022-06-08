import styled from "styled-components/native";
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window'); 

export const ContainerImage = styled.View`
    width: 150px;
    height: 150px;
    background-color: ${({theme})=> theme.COLORS.TEXT};
    border-radius: 75px;
    align-items: center;
    justify-content: center;
    align-self: center;
    margin-top: -75px;
`;

export const Image = styled.Image`
    width: 100%;
    height: 100%;
    border-radius: 75px;
`;

export const ScrollDescription = styled.ScrollView.attrs({
    showsVerticalScrollIndicator: false,
})`
   margin-bottom: ${height * 0.25}px;
`;

export const Title = styled.Text`
    align-self: center;
    font-size: 24px;
    font-weight: bold;
    color: ${({theme})=>theme.COLORS.BACKGROUND};
`;
export const Text = styled.Text`
    font-size: 16px;
    font-weight: 400;
    color: ${({theme})=>theme.COLORS.BACKGROUND};
`;

export const ContentAlign = styled.View`
   align-self: center;
   width: 90%;
`;
