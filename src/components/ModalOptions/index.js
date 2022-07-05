import React from "react";
import { ContainerOptions, ContentOptions, Row, OptionText } from "./styles";
import { useNavigation } from "@react-navigation/native";
import Close from "../../assets/remove.svg"
import { useAppContext } from "../../context";
import { Alert } from "react-native";

const ModalOptions = ({ closeModal }) => {

  const { navigate } = useNavigation();
  const { signoutApliccation } = useAppContext();

  const navigateRoute = (route) => {
    closeModal();
    navigate(route)
  }

  const signout = () => {
    Alert.alert(
      "Sair da aplicação?",
      "Você realmente deseja sair da aplicação?",
      [
        {
          text: "Não",
          style: "cancel"
        },  
        {
          text: "Sim",
          style: "default",
          onPress: () => signoutApliccation()
        },
      ]
    )
  }

  return (
    <ContainerOptions>
      <ContentOptions onPress={() => closeModal()}>
        <Close />
      </ContentOptions>
      <ContentOptions onPress={() => navigateRoute("SelectAddress")}>
        <OptionText>Endereços</OptionText>
      </ContentOptions>
      <Row />
      <ContentOptions onPress={() => navigateRoute("Orders")}>
        <OptionText>Pedidos</OptionText>
      </ContentOptions>
      <Row />
      <ContentOptions onPress={() => signout()}>
        <OptionText>Sair</OptionText>
      </ContentOptions>
    </ContainerOptions>
  )
}

export default ModalOptions;