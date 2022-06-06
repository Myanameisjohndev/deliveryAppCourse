import React, { useState } from 'react';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { Background } from '../../globalstyles';

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [visible, setVisible] = useState(true);

  return (
    <Background >
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
      <Button title="Login" type="secondary"/>
    </Background>
  );
}


export default Login;