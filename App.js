import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ContextProvider } from './src/context';
import Route from './src/routes';
import { NavigationContainer } from '@react-navigation/native';
import theme from './src/Theme';
import { ThemeProvider } from 'styled-components';

const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style='light' translucent/>
      <NavigationContainer>
        <ContextProvider>
          <Route />
        </ContextProvider>
      </NavigationContainer>
    </ThemeProvider>
  )
}

export default App;