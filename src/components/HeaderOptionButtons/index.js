import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import Menu from '../../assets/Menu.svg';
import Back from '../../assets/Back.svg';
import { Container, Empty } from './styles';
import { PressButton } from '../../globalstyles';


const HeaderOptionButtons = () => {

  const route = useRoute();
  const navigation = useNavigation();

  return (
    <Container>
      {route.name === 'Home' ? (
        <>
          <Empty/>
          <PressButton>
            <Menu/>
          </PressButton>
        </>
        ) : route.name === 'Orders' ? (
          <PressButton onPress={()=>navigation.navigate("Home")}>
            <Back/>
          </PressButton>
        ) : (
          <PressButton onPress={()=>navigation.goBack()}>
            <Back/>
          </PressButton>
        )}
    </Container>
  )
}

export default HeaderOptionButtons;