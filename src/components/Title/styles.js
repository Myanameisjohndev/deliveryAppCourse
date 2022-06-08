import styled from "styled-components/native";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');

export const Container = styled.View`
    width: ${width * 1}px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const TitleText = styled.Text`
    font-size: 32px;
    color: ${({theme})=>theme.COLORS.TEXT};
    font-weight: bold;
    align-self: flex-start;
`;
export const SubTitleText = styled.Text`
    font-size: 24px;
    color: ${({theme})=>theme.COLORS.TEXT};
    font-weight: 200;
    align-self: flex-start;
`;
