import styled from "styled-components/native";

export const Card = styled.View`
    width: 100px;
    height: 100px;
    background-color: ${({theme})=> theme.COLORS.INPUT};
    border-radius: 10px;
`;