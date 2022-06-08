import React from 'react';
import { Container, Input } from './styles';
import SearchIcon from '../../assets/SearchIcon.svg';

const Search = ({ value, onChangeText, placeholder }) => {
    return(
        <Container>
            <Input value={value} onChangeText={onChangeText} placeholder={placeholder}/>
            <SearchIcon/>
        </Container>
    )
}

export default Search;