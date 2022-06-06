import React, { useState } from 'react';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { useNavigation } from '@react-navigation/native';
import {
  Background,
  Form,
  FormOptions,
  AuthTitle,
  SmallText,
  PressButton,
} from '../../globalstyles';

const Register = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [visible, setVisible] = useState(true);
  const [repeatVisible, setRepeatVisible] = useState(true);
  const navigation = useNavigation();
  return (
    <Background >
      <Form>
        <AuthTitle>Registrar</AuthTitle>
        <Input
          placeholder="Name: "
          textInput={name}
          setTextInput={setName}
        />
        <Input
          placeholder="E-mail: "
          textInput={email}
          setTextInput={setEmail}
        />
        <Input
          hasIcon={true}
          placeholder="Password: "
          textInput={password}
          setTextInput={setPassword}
          visible={visible}
          setVisible={setVisible}
        />
        <Input
          hasIcon={true}
          placeholder="Repeat password: "
          textInput={repeatPassword}
          setTextInput={setRepeatPassword}
          visible={repeatVisible}
          setVisible={setRepeatVisible}
        />
        <Button title="Registrar" type="secondary" />
        <FormOptions style={{justifyContent: 'flex-end'}}>
          <PressButton onPress={()=>navigation.navigate('Login')}>
            <SmallText>Ainda não tem conta?</SmallText>
          </PressButton>
        </FormOptions>
      </Form>
    </Background>
  );
}


export default Register;