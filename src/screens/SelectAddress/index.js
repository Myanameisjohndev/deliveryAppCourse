import React, { useState } from "react";
import { Background, Content, Header } from "../../globalstyles";
import Title from '../../components/Title';
import Search from '../../components/Search';
import Theme from "../../Theme";
import {
    Column,
    Row,
    Align,
    ButtonDelete,
    Description,
    Complement,
    AddresList,
    ContainerAddress
} from "./styles";
import Home from '../../assets/secondHome.svg';
import Apartment from '../../assets/secondApartment.svg';
import Remove from '../../assets/remove.svg';
import { useAppContext } from "../../context";
const SelectAddress = () => {
    const { addres } = useAppContext()
    const [selected, setSelected] = useState(null);
    const [searchValue, setSearchValue] = useState('');
    // const [address] = useState([
    //     {
    //         surname: "teste",
    //         street: "teste",
    //         district: "teste",
    //         selected: "home",
    //         addresNumber: "45",
    //         complement: "teste",
    //         referencePoint: "teste"
    //     },
    //     {
    //         surname: "teste",
    //         street: "teste",
    //         district: "teste",
    //         selected: "home",
    //         addresNumber: "45",
    //         complement: "teste",
    //         referencePoint: "teste"
    //     },

    // ])

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
                </Row>
                <ButtonDelete>
                    <Remove />
                </ButtonDelete>
            </>
        )
    }

    const selectAddress = (item, index) => {
        setSelected({ item, index });
    }

    const renderAddressSelected = (item, index) => {
        if (selected && selected.index === index) {
            return (
                <ContainerAddress
                    onPress={() => selectAddress(item, index)}
                    style={{ borderColor: Theme.COLORS.BUTTON, borderWidth: 3 }}
                >
                    {renderAddress(item)}
                </ContainerAddress>
            )
        }
        return (
            <ContainerAddress
                onPress={() => selectAddress(item, index)}
                style={{ borderColor: Theme.COLORS.TEXT, borderWidth: 3 }}
            >
                {renderAddress(item)}
            </ContainerAddress>
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
                <AddresList
                    contentContainerStyle={{ paddingVertical: 20 }}
                    data={addres}
                    keyExtractor={(_, index) => index}
                    renderItem={({ item, index }) => renderAddressSelected(item, index)}
                />
            </Content>
        </Background>
    )
}

export default SelectAddress;