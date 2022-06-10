import React, { useState } from 'react';
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
    Value
} from './styles';
import Add from '../../assets/add.svg';
import Less from '../../assets/less.svg';

const SelectedProduct = () => {
    const { item } = useRoute().params;
    const [value, setValue] = useState(1);

    const addQuantity = () => {
        setValue(value + 1);
    }
    const lessQuantity = () => {
        if(value > 1){
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
                    <Quantity />
                </ColumButtons>
            </Content>
        </Background>
    )
}

export default SelectedProduct;