import React from "react";
import { ButtonView, Text } from "./styles";

const Button = ({
    title,
    type,
    ...rest
}) =>{
    return(
        <ButtonView {...rest} type={type}>
            <Text>{title}</Text>
        </ButtonView>
    )
}

export default Button;
