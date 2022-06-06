import styled from "styled-components/native";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');

export const Background = styled.SafeAreaView`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${({theme})=> theme.COLORS.BACKGROUND};
`;

