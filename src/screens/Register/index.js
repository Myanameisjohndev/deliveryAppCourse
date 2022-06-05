import React from 'react';
import { View, Text } from 'react-native';
import { useAppContext } from '../../context';

const Register = () => {
  const { user } = useAppContext();

  console.log(user.name);

  return (
    <View >
      <Text>Register</Text>
    </View>
  );
}

export default Register;