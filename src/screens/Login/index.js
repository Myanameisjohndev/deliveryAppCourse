import React, { useState} from 'react';
import { View, StyleSheet } from 'react-native';
import Input from '../../components/Input';
import { OnChangeText } from '../../components/Input/styles';
import { Background } from '../../globalstyles';

const Login = () => {

  const [senha, setSenha] = useState("oi");
  const [number, onChangeNumber] = React.useState(null);

  return (
    <Background >
      <Input 
      iconName="Eye" 
      placeholder="Senha" 
      visible={false} 
      textInput={senha}
      setTextInput={setSenha}
      />

    </Background>
  );
}


export default Login;