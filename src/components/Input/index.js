import React from 'react';
import Close from '../../assets/ClosedEye.svg';
import Open from '../../assets/OpenEye.svg';
import { InputView, TextInput, Button, NoIconTextInput } from './styles';

const Input = ({
    placeholder,
    hasIcon,
    setTextInput,
    textInput,
    setVisible,
    visible,
    ...rest
}) => {
    return (
        <InputView {...rest} >
            {hasIcon === true ? (
                <>
                    <TextInput
                        placeholder={placeholder}
                        value={textInput}
                        onChangeText={setTextInput}
                        secureTextEntry={visible}
                    />
                    <Button onPress={() => setVisible(!visible)}>
                        {visible === true ? <Close /> : <Open />}
                    </Button>
                </>
            ) : (
                <NoIconTextInput
                    placeholder={placeholder}
                    value={textInput}
                    onChangeText={setTextInput}
                />
            )}
        </InputView>
    )
}

export default Input;