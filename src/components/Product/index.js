import React from 'react';
import { Column, Container, Title, Description, Img, Price, Row } from './styles';
import Arrow from '../../assets/ArrowRight.svg';

const Product = ({ data, ...rest }) => {
    return(
        <Container {...rest}>
            <Img source={{uri: data.url}} resizeMode="center"/>
            <Column>
                <Row>
                    <Title>{data.name}</Title>
                    <Price>{data.price}</Price>
                </Row>
                <Description>{data.description}</Description>
            </Column>
            <Arrow/>
        </Container>
    )   
}

export default Product;