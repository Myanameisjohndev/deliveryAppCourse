import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export default function App() {

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const login = async () => {
    const response = await auth().signInWithEmailAndPassword(email, password);
    if (response) {
      await firestore()
      .collection('itens')
      .doc(response.user.uid)
      .delete();
    } else {
      console.log('Não foi possivel realizar o login, tente novamente')
    }
  }
  
  const register = async() => {
    const response = await auth().createUserWithEmailAndPassword(email, password);
    if (response) {
      console.log('Usuário cadastrado com sucesso');
      await firestore()
      .collection('itens')
      .doc(response.user.uid)
      .set(
        {
          name: 'João',
          email: response.user.email,
          yearsold: 22
        }
      );
    } else {
      console.log('Não foi possivel realizar o login, tente novamente')
    }
  }

  const addItem = async() => {
    await firestore()
    .collection('itens')
    .doc()
    .set(
      {
        name: 'João 3',
        email: 'joao2@gmail45.com',
        yearsold: 2342
      }
    );
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder='Email: '
      />
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder='Password: '
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => login()}
      >
        <Text style={styles.text}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '85%',
    backgroundColor: 'white',
    height: 60,
    borderRadius: 10,
    elevation: 4,
    marginBottom: 10,
    paddingHorizontal: 10
  },
  button: {
    width: '85%',
    backgroundColor: 'grey',
    height: 60,
    borderRadius: 10,
    elevation: 4,
    marginBottom: 10,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16
  }
});
