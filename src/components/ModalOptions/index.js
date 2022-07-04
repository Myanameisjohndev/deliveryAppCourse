import React from "react";
import { ContainerOptions, ContentOptions, Row, OptionText } from "./styles";
import { useNavigation } from "@react-navigation/native";
import Close from "../../assets/remove.svg"

const ModalOptions = ({ closeModal }) => {

  const { navigate } = useNavigation();

  const navigateRoute = (route) => {
    closeModal();
    navigate(route)
  }

  return (
    <ContainerOptions>
      <ContentOptions onPress={()=>closeModal()}>
        <Close />
      </ContentOptions>
      <ContentOptions onPress={()=>navigateRoute("SelectAddress")}>
        <OptionText>Endereços</OptionText>
      </ContentOptions>
      <Row/>
      <ContentOptions onPress={()=>navigateRoute("Orders")}>
        <OptionText>Pedidos</OptionText>
      </ContentOptions>
      <Row/>
      <ContentOptions onPress={()=>null}>
        <OptionText>Sair</OptionText>
      </ContentOptions>
    </ContainerOptions>
  )
}

export default ModalOptions;