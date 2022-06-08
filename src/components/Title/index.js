import React from 'react';
import { Container, TitleText, SubTitleText } from './styles';

const Title = ({title, subtitle}) => {
    return(
        <Container>
            <TitleText>{title}</TitleText>
            <SubTitleText>{subtitle}</SubTitleText>
        </Container>
    )
}

export default Title;