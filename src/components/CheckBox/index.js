import React from 'react';
import { CheckboxComponent, CheckBoxText, Row } from './styles';

const CheckBox = ({ value, onValueChange, ...rest }) => {
    return(
        <Row {...rest}>
            <CheckboxComponent
                onValueChange={()=>onValueChange(!value)}
                value={value}
            />
            <CheckBoxText>Manter-me conectado!</CheckBoxText>
        </Row> 
    )
}

export default CheckBox;