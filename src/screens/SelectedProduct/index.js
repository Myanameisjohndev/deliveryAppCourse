import React from 'react';
import { useRoute } from '@react-navigation/native';
import { Background, Content, Header } from '../../globalstyles';
import { ContainerImage, Image, ScrollDescription, ContentAlign, Title, Text} from './styles';

const SelectedProduct = () => {
    const { item } = useRoute().params;

    return(
        <Background>
            <Header>
            </Header>
            <Content>
                <ContainerImage>
                    <Image source={{uri: item.url}}/>
                </ContainerImage>
                <ScrollDescription>
                    <ContentAlign>
                        <Title>{item.name}</Title>
                        <Text>{item.description}</Text>
                    </ContentAlign>
                </ScrollDescription>
            </Content>
        </Background>
    )
}

export default SelectedProduct;