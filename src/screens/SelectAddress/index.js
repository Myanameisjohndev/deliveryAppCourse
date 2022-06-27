import React, { useState } from "react";
import { Background, Content, Header } from "../../globalstyles";
import Title from '../../components/Title';
import Search from '../../components/Search';
import {
    Column,
    Row,
    Align,
    ButtonDelete,
    Description,
    Complement
} from "./styles";
import Home from '../../assets/secondHome.svg';
import Apartment from '../../assets/secondApartment.svg';
import Remove from '../../assets/remove.svg';
import { useAppContext } from "../../context";
const SelectAddress = () => {

    const [searchValue, setSearchValue] = useState('');
    const [address] = useState([{
        surname: "teste",
        street: "teste",
        district: "teste",
        selected: "home",
        addresNumber: "45",
        complement: "teste",
        referencePoint: "teste"
    }])

    const renderAddress = (item) => {

        return (
            <>
                <Row>
                    <Align>
                        {item.selected === "home" ? <Home /> : <Apartment />}
                    </Align>
                    <Column>
                        <Row>
                            <Complement>{item.surname}</Complement>
                            <Complement>-</Complement>
                            <Complement>{item.complement}</Complement>
                        </Row>
                        <Row>
                            <Description>{item.surname}</Description>
                        </Row>
                        <Row>
                            <Description>{item.addresNumber}</Description>
                            <Description>-</Description>
                            <Description>{item.district}</Description>
                        </Row>
                        <Row>
                            <Description>{item.referencePoint}</Description>
                        </Row>
                    </Column>
                <ButtonDelete>
                    <Remove/>
                </ButtonDelete>
                </Row>
            </>
        )
    }

    return (
        <Background>
            <Header>
                <Title
                    title="Seus endereços"
                    subtitle="selecione o melhor para você"
                />
            </Header>
            <Content>
                <Search
                    placeholder="Busque seu lanche"
                    onChangeText={setSearchValue}
                    value={searchValue}
                />
                {renderAddress(address[0])}
            </Content>
        </Background>
    )
}

export default SelectAddress;