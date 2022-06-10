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
    Row
} from './styles';
import Add from '../../assets/add.svg';
import Less from '../../assets/less.svg';

const SelectedProduct = () => {
    const { item } = useRoute().params;
    const [value, setValue] = useState(1);
    const [finalValue, setFinalValue] = useState();

    const addQuantity = () => {
        setValue(value + 1);
    }

    const lessQuantity = () => {
        if (value > 1) {
            setValue(value - 1);
        }
    }

    const Quantity = () => {
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

    useEffect(() => {
        setFinalValue(
            (Number(item.price) * value).toFixed(2).replace(".", ",")
        )
    }, [value])

    const FinalPrice = () => {
        return (
            <QuantityContainer>
                <Value>R$ {finalValue}</Value>
            </QuantityContainer>
        )
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
                        <Quantity />
                        <FinalPrice />
                    </Row>
                </ColumButtons>
            </Content>
        </Background>
    )
}

export default SelectedProduct;