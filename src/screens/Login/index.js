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

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [visible, setVisible] = useState(true);
  const [visibleCheck, setVisibleCheck] = useState(false);
  const navigation = useNavigation();
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
        <Button title="Login" type="secondary" />
        <FormOptions>
          <CheckBox value={visibleCheck} onValueChange={setVisibleCheck} />
          <PressButton onPress={()=>navigation.navigate('Register')}>
            <SmallText>Ainda não tem conta?</SmallText>
          </PressButton>
        </FormOptions>
      </Form>
    </Background>
  );
}


export default Login;