import React, { useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import Menu from '../../assets/Menu.svg';
import Back from '../../assets/Back.svg';
import { Container, Empty } from './styles';
import { PressButton } from '../../globalstyles';
import ModalOptions from '../ModalOptions';


const HeaderOptionButtons = () => {

  const route = useRoute();
  const navigation = useNavigation();
  const [openModal, setOpenModal] = useState(false);

  const hadleOpenAndCloseModal = () => {
    setOpenModal(!openModal);
  }

  const renderModal = () => {
    if(openModal) return <ModalOptions closeModal={hadleOpenAndCloseModal} />
  }

  return (
    <Container>
      {route.name === 'Home' ? (
        <>
          <Empty/>
          <PressButton onPress={()=>hadleOpenAndCloseModal()}>
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
        {renderModal()}
    </Container>
  )
}

export default HeaderOptionButtons;