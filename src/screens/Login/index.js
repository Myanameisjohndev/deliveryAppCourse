import React, { useState } from 'react';
import Button from '../../components/Button';
import Input from '../../components/Input';
import CheckBox from '../../components/CheckBox';
import { useNavigation } from '@react-navigation/native';
import {
  Background,
  Form,
  FormOptions,
  AuthTitle,
  SmallText,
  PressButton,
} from '../../globalstyles';
import { Alert } from 'react-native';
import { useAppContext } from '../../context';

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [visible, setVisible] = useState(true);
  const [visibleCheck, setVisibleCheck] = useState(false);
  const navigation = useNavigation();
  const { login } = useAppContext();

  const validUser = () => {
    if (email === '') {
      Alert.alert(
        'Erro ao efetuar o login',
        'Por favor preencha o campo de e-mail',
      )
    } else if (password === '') {
      Alert.alert(
        'Erro ao efetuar o login',
        'Por favor preencha o campo de senha',
      )
    } else {
      login(email, password, visible);
    }
  }

  return (
    <Background >
      <Form>
        <AuthTitle>Login</AuthTitle>
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
        <Button onPress={() => validUser()} title="Login" type="secondary" />
        <FormOptions>
          <CheckBox value={visibleCheck} onValueChange={setVisibleCheck} />
          <PressButton onPress={() => navigation.navigate('Register')}>
            <SmallText>Ainda não tem conta?</SmallText>
          </PressButton>
        </FormOptions>
      </Form>
    </Background>
  );
}


export default Login;