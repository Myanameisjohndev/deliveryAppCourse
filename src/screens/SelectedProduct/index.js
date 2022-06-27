import React, { useState, useEffect } from 'react';
import { useRoute } from '@react-navigation/native';
import { Background, Content, Header, PressButton } from '../../globalstyles';
import {
    ContainerImage,
    Image,
    ScrollDescription,
    ContentAlign,
    Title,
    Text,
    ColumButtons,
    QuantityContainer,
    Value,
    Row,
} from './styles';
import Button from '../../components/Button';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useAppContext } from '../../context';
import Add from '../../assets/add.svg';
import Less from '../../assets/less.svg';

const SelectedProduct = () => {
    const { addres } = useAppContext();
    const { item } = useRoute().params;
    const [value, setValue] = useState(1);
    const [finalValue, setFinalValue] = useState();
    const navigation = useNavigation();

    const addQuantity = () => {
        setValue(value + 1);
    }

    const lessQuantity = () => {
        if (value > 1) {
            setValue(value - 1);
        }
    }
    
    useEffect(() => {
        setFinalValue(
            (Number(item.price) * value).toFixed(2).replace(".", ",")
        )
    }, [value])

    const SelectPrice = () => {
        return (
            <QuantityContainer>
                <PressButton onPress={lessQuantity}>
                    <Less />
                </PressButton>
                <Value>{value}</Value>
                <PressButton onPress={addQuantity}>
                    <Add />
                </PressButton>
            </QuantityContainer>
        )
    }
    

    const FinalPrice = () => {
        return (
            <QuantityContainer>
                <Value>R$ {finalValue}</Value>
            </QuantityContainer>
        )
    }

    const cancelOrder = () => {
        Alert.alert('Você deseja cancelar seu pedido?',
            'Você possui um pedido pendente',
            [
                { text: 'Não', style: 'cancel' },
                { text: 'Sim', style: 'default', onPress: () => navigation.goBack() },
            ]
        )
    }
    const validateOrder = () => {
        if (addres.length === 0) {
            navigation.navigate("CreateAddres");
        } else {
            navigation.navigate("SelectAddress");
        }
    }

    return (
        <Background>
            <Header>
            </Header>
            <Content>
                <ContainerImage>
                    <Image source={{ uri: item.url }} />
                </ContainerImage>
                <ScrollDescription>
                    <ContentAlign>
                        <Title>{item.name}</Title>
                        <Text>{item.description}</Text>
                    </ContentAlign>
                </ScrollDescription>
                <ColumButtons>
                    <Row>
                        <SelectPrice/>
                        <FinalPrice/>
                    </Row>
                    <Button title="Cancelar" type="primary" onPress={() => cancelOrder()} />
                    <Button title="Confirmar" onPress={() => validateOrder()} />
                </ColumButtons>
            </Content>
        </Background>
    )
}

export default SelectedProduct;