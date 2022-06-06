import styled from "styled-components/native";
import Checkbox from "expo-checkbox";

export const CheckboxComponent = styled(Checkbox).attrs({
    color: '#FC6F27',
})`
    width: 15px;
    height: 15px;
    border-radius: 2px;
`;

export const Row = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const CheckBoxText = styled.Text`
    color: ${({theme})=>theme.COLORS.TEXT};
    font-size: 12px;
    font-weight: bold;
    margin-left: 10px;
`;

