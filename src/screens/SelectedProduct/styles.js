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
   margin-bottom: ${height * 0.37}px;
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
export const ColumButtons = styled.View`
   align-self: center;
   justify-content: center;
   width: 90%;
   margin-top: ${height * 0.28}px;
   position: absolute;
   /* background-color: blue; */
   min-height: 100px;
`;

export const QuantityContainer = styled.View`
   background-color: ${({theme})=>theme.COLORS.TEXT};
   width: 49.2%;
   height: 70px;
   border-radius: 12px;
   margin-bottom: 7px;
   flex-direction: row;
   justify-content: space-around;
   align-items: center;
   align-self: center;
`;

export const Value = styled.Text`
    font-size: 22px;
    font-weight: bold;
    color: ${({theme})=>theme.COLORS.BUTTON};
`;

export const Row = styled.View`
    flex-direction: row;
    justify-content: space-between;
    /* width:0%; */
`;

