import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
    width: 85%;
    height: 80px;
    background-color: ${({theme})=> theme.COLORS.TEXT};
    border-radius: 12px;
    padding: 6px;
    margin-bottom: 12px;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    align-self: center;
`;

export const Column = styled.View`
    width: 65%;
    flex-direction: column;
`;

export const Row = styled.View`
    flex-direction: row;
`;

export const Img = styled.Image`
    width: 80px;
    height: 80px;
`;

export const Title = styled.Text`
   font-size: 18px;
   font-weight: bold;
   color: ${({theme})=>theme.COLORS.BACKGROUND}
`;

export const Price = styled.Text`
   font-size: 10px;
   margin-left: 10px;
   font-weight: bold;
   color: ${({theme})=>theme.COLORS.BUTTON}
`;

export const Description = styled.Text`
   font-size: 10px;
   color: ${({theme})=>theme.COLORS.BACKGROUND}
`;
