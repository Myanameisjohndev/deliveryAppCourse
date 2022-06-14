import styled from "styled-components/native";
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const PositionButton = styled.View`
  top: ${height * 0.86}px;
  align-self: center;
  width: 90%;
  position: absolute;
`;

export const FormScroll = styled.ScrollView.attrs({
    showsVerticalScrollIndicator: false,
})`
    flex-grow: 0;
    height: ${height * 0.51}px; 
`;


export const FormRow = styled.View`
    justify-content: space-between;
    flex-direction: row;
    width: 100%;
`
export const Form = styled.View`
    flex-direction: column;
    width: 90%;
    align-self: center;
`

export const SelectOption = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    width: 48%;
    height: 70px;
    border: 3px solid ${({ theme }) => theme.COLORS.TEXT}
`