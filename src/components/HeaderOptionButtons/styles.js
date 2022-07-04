import styled from "styled-components/native";
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const Container = styled.View`
   width: ${width * 0.85}px;
   flex-direction: row;
   justify-content: space-between;
   align-self: center;
   position: relative;
   margin-bottom: ${height * 0.08}px;
`;

export const Empty = styled.View`
   width: 26px;
`;