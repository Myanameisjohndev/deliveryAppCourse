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

const CreateAddres = () => {

    const [surname, setSurname] = useState('');
    const [district, setDistrict] = useState('');
    const [referencePoint, setReferencePoint] = useState('');
    const [complement, setComplement] = useState('');
    const [addresNumber, setAddresNumber] = useState('');
    const [selected, setSelected] = useState('');

    return (
        <Background>
            <Header>
                <Title title="Novo endereço" subtitle="Insira seus dados" />
            </Header>
            <ContentEmpty>
                <FormScroll contentContainerStyle={{paddingBottom: 20}}>
                    <Form>
                        <Input placeholder='Rua:'
                            textInput={surname} setTextInput={setSurname} />
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
                <Button title='Cadastrar' onPress={()=>null}/>
            </PositionButton>
        </Background>
    )
}

export default CreateAddres;