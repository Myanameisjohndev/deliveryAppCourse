import React, { useState } from "react";
import { Background, Content, FooterButtonsSecondary, Header } from "../../globalstyles";
import Title from '../../components/Title';
import Theme from "../../Theme";
import { useNavigation } from "@react-navigation/native";
import { PaymentOptionList, ContainerAddress, PaymentOptionText, ContainerOptionPayment } from "./styles";
import Card from '../../assets/card.svg';
import Money from '../../assets/money.svg';
import { useAppContext } from "../../context";
import Button from "../../components/Button";
const Payment = () => {
    const { setSelectedPaymentOption, selectedOrder, createNewOrder } = useAppContext()
    const [selected, setSelected] = useState(null);
    const [options] = useState([
        {name: "Cartão de crédito", type: "credit"},
        {name: "Cartão de débito", type: "debit"},
        {name: "Dinheiro", type: "money"},
    ]);
    const { navigate } = useNavigation();

    console.log(selectedOrder);

    const renderOption = (item) => {
        return (
            <>
                {item.type === "money" ? <Money/> : <Card/>}
                <PaymentOptionText>{item.name}</PaymentOptionText>
            </>
        )
    }

    const selectAddress = (item, index) => {
        setSelected({ item, index });
    }

    const renderOptionSelected = (item, index) => {
        if (selected && selected.index === index) {
            return (
                <ContainerOptionPayment
                    onPress={() => selectAddress(item, index)}
                    style={{ borderColor: Theme.COLORS.BUTTON, borderWidth: 3 }}
                >
                    {renderOption(item)}
                </ContainerOptionPayment>
            )
        }
        return (
            <ContainerOptionPayment
                onPress={() => selectAddress(item, index)}
                style={{ borderColor: Theme.COLORS.TEXT, borderWidth: 3 }}
            >
                {renderOption(item)}
            </ContainerOptionPayment>
        )
    }

    const handleNavigationToOrders = () =>{
        if(selected){
            setSelectedPaymentOption(selected);
            createNewOrder();
        }
    }

    return (
        <Background>
            <Header>
                <Title
                    title="Pagamento,"
                    subtitle="Selecione o metódo de pagamento"
                />
            </Header>
            <Content>
                <PaymentOptionList
                    contentContainerStyle={{ paddingVertical: 20 }}
                    data={options}
                    keyExtractor={(_, index) => index}
                    renderItem={({ item, index }) => renderOptionSelected(item, index)}
                />
                <FooterButtonsSecondary>
                    <Button
                        type="secondary"
                        title="Continuar"
                        onPress={() => handleNavigationToOrders()}
                    />
                </FooterButtonsSecondary>
            </Content>
        </Background>
    )
}

export default Payment;