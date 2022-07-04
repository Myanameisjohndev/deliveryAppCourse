import styled from "styled-components/native";
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const ContainerOptions = styled.View`
  flex-direction: column;
  left: ${width * 0.43}px;
  width: ${width * 0.4}px;
  background-color: ${({theme})=>theme.COLORS.TEXT};
  position: absolute;
  border-radius: 10px;
  padding: 5px;
  z-index: 1;
`;

export const ContentOptions = styled.TouchableOpacity`
  align-items: flex-end;
`;

export const OptionText = styled.Text`
  font-size: 16px;
  color: ${({theme})=>theme.COLORS.BACKGROUND};
`;

export const Row = styled.View`
  height: 1.3px;
  background-color: ${({theme})=>theme.COLORS.ROW_COLOR};
`;



