import styled from "styled-components/native";

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
