import React, { useState } from "react";
import { Background, ContentEmpty, Header } from "../../globalstyles";
import Title from '../../components/Title';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { FormScroll, Form, FormRow, SelectOption, PositionButton } from "./styles";
import Home from '../../assets/home.svg';
import Apartment from '../../assets/apartment.svg';
import SecondHome from '../../assets/secondHome.svg';
import SecondApartment from '../../assets/secondApartment.svg';
import Theme from '../../Theme'
import { useAppContext } from "../../context";
import { Alert } from 'react-native';

const CreateAddres = () => {

    const { createNewAddress } = useAppContext();
    const [surname, setSurname] = useState('');
    const [street, setStreet] = useState('');
    const [district, setDistrict] = useState('');
    const [referencePoint, setReferencePoint] = useState('');
    const [complement, setComplement] = useState('');
    const [addresNumber, setAddresNumber] = useState('');
    const [selected, setSelected] = useState('');

    const createAddress = () => {
        if(surname === ""){
            Alert.alert(
                "Erro ao criar endereço",
                "Por favor preencha o campo de apelido"
            )
        } else if(street === ""){
            Alert.alert(
                "Erro ao criar endereço",
                "Por favor preencha o campo de rua"
            )
        }else if(district === ""){
            Alert.alert(
                "Erro ao criar endereço",
                "Por favor preencha o campo de bairro"
            )
        }else if(referencePoint === ""){
            Alert.alert(
                "Erro ao criar endereço",
                "Por favor preencha o campo de ponto de referência"
            )
        }else if(complement === ""){
            Alert.alert(
                "Erro ao criar endereço",
                "Por favor preencha o campo de complemento"
            )
        }else if(addresNumber === ""){
            Alert.alert(
                "Erro ao criar endereço",
                "Por favor preencha o campo de número"
            )
        }else if(selected === ""){
            Alert.alert(
                "Erro ao criar endereço",
                "Por favor preencha o campo de selecionar o tipo de endereço"
            )
        }else{
            createNewAddress(
                surname,
                street,
                district,
                selected,
                addresNumber,
                complement,
                referencePoint,
            );
        }
    }

    return (
        <Background>
            <Header>
                <Title title="Novo endereço" subtitle="Insira seus dados" />
            </Header>
            <ContentEmpty>
                <FormScroll contentContainerStyle={{paddingBottom: 20}}>
                    <Form>
                        <Input placeholder='Apelido:'
                            textInput={surname} setTextInput={setSurname} />
                        <Input placeholder='Rua:'
                            textInput={street} setTextInput={setStreet} />
                        <Input placeholder='Bairro: '
                            textInput={district} setTextInput={setDistrict} />
                        <Input placeholder='Ponto de referência: '
                            textInput={referencePoint} setTextInput={setReferencePoint} />
                        <FormRow>
                            <Input style={{ width: '65%' }}
                                placeholder='Complemento: '
                                textInput={complement} setTextInput={setComplement} />
                            <Input style={{ width: '30%' }} placeholder='N°'
                                textInput={addresNumber} setTextInput={setAddresNumber} />
                        </FormRow>
                        <FormRow>
                            <SelectOption 
                            onPress={() => setSelected('home')}
                            style={{
                                borderColor: `${
                                    selected === 'home'
                                    ? Theme.COLORS.BUTTON
                                    : Theme.COLORS.TEXT
                                }`,
                              }}
                            >
                               {selected === 'home' ? <SecondHome/> :  <Home/>}
                            </SelectOption>
                            <SelectOption  
                            onPress={() => setSelected('apartment')}
                            style={{
                                borderColor: `${
                                    selected === 'apartment'
                                    ? Theme.COLORS.BUTTON
                                    : Theme.COLORS.TEXT
                                }`,
                              }}
                            >
                                {selected === 'apartment' ? <SecondApartment/> :  <Apartment/>}
                            </SelectOption>
                        </FormRow>
                    </Form>
                </FormScroll>
            </ContentEmpty>
            <PositionButton >
                <Button title='Cadastrar' onPress={()=>createAddress()}/>
            </PositionButton>
        </Background>
    )
}

export default CreateAddres;