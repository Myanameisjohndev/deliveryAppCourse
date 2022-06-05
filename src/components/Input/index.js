import React from 'react';
import ClosedEye from '../../assets/ClosedEye.svg';
import OpenEye from '../../assets/OpenEye.svg';
import { Button, InputView, TextInput } from './styles';

const Input = ({
    placeholder,
    iconName,
    setTextInput,
    textInput,
    setVisible,
    visible,
    ...rest
}) => {
    return (
        <InputView >
            {iconName === 'Eye' ? (
                <>
                    <TextInput
                        value={textInput}
                        onChangeText={setTextInput}
                        placeholder={placeholder}
                        secureTextEntry={visible}
                    />
                    <Button onPress={setVisible}>
                        {visible === true ? (
                            <ClosedEye width={25} height={25} />
                        ) : (
                            <OpenEye width={25} height={25} />
                        )}
                    </Button>
                </>
            ) : (
                <></>
            )}
        </InputView>
    );
};

export default Input;