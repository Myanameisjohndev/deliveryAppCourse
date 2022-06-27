import React from "react";
import { PressButton } from "../../globalstyles";
import Add from '../../assets/add.svg';
import Less from '../../assets/less.svg';
import { Value, QuantityContainer} from "./styles";


const SelectPrice = ({lessQuantity, addQuantity, value, ...rest}) => {
    return (
        <QuantityContainer {...rest}>
            <PressButton onPress={lessQuantity}>
                <Less />
            </PressButton>
            <Value>{value}</Value>
            <PressButton onPress={addQuantity}>
                <Add />
            </PressButton>
        </QuantityContainer>
    )
}

export default SelectPrice;