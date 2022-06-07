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
import { useAppContext } from '../../context';
import { Alert } from 'react-native';

const Register = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [visible, setVisible] = useState(true);
  const [repeatVisible, setRepeatVisible] = useState(true);
  const navigation = useNavigation();
  const { register } = useAppContext();

  const validUser = () => {
    if (name === '') {
      Alert.alert(
        'Erro ao se registrar',
        'Por favor preencha o campo de nome',
      )
    } else if (email === '') {
      Alert.alert(
        'Erro ao se registrar',
        'Por favor preencha o campo de e-mail',
      )
    } else if (password === '') {
      Alert.alert(
        'Erro ao se registrar',
        'Por favor preencha o campo de senha',
      )
    } else if (repeatPassword === '') {
      Alert.alert(
        'Erro ao se registrar',
        'Por favor preencha o campo de repetir a senha',
      )
    } else if (password.length < 6) {
      Alert.alert(
        'Erro ao se registrar',
        'O campo de senha precisa ter no mínimo seis caracteres',
      )
    } else if (repeatPassword.length < 6) {
      Alert.alert(
        'Erro ao se registrar',
        'O campo de repetir a senha precisa ter no mínimo seis caracteres',
      )
    } else if (password !== repeatPassword) {
      Alert.alert(
        'Erro ao se registrar',
        'O campo de senha precia ser igual ao de repetir a senha',
      )
    } else {
      register(email, password, name);
    }
  }

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
        <Button onPress={() => validUser()} title="Registrar" type="secondary" />
        <FormOptions style={{ justifyContent: 'flex-end' }}>
          <PressButton onPress={() => navigation.navigate('Login')}>
            <SmallText>Ainda não tem conta?</SmallText>
          </PressButton>
        </FormOptions>
      </Form>
    </Background>
  );
}


export default Register;