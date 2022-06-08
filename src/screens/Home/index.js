import React, { useState } from 'react';
import Title from '../../components/Title';
import Search from '../../components/Search';
import { useAppContext } from '../../context';
import { Background, Content, Header } from '../../globalstyles';
import Product from '../../components/Product';

const Home = () => {

  const { user } = useAppContext();
  const [searchValue, setSearchValue] = useState('');

  const [ products, setProducts ] = useState([
    {
      url: "https://www.manollopizzaria.com.br/wp-content/uploads/2021/02/X_TUDO_DE_HAMBURGUER1-1-500x320.jpg",
      id: 1,
      name: "X-tudo",
      price: "17.90",
      description: "Pão, bife, salada, ovo, bacon, mussarela, presunto, milho e batata."
    },
  ]);

  return (
    <Background >
      <Header>
        <Title
          title={`Bem vindo ${user.name},`}
          subtitle="que bom ter você aqui"
        />
      </Header>
      <Content>
        <Search
          placeholder="Busque seu lanche"
          onChangeText={setSearchValue}
          value={searchValue}
        />
        <Product data={products[0]}/>
      </Content>
    </Background>
  );
}

export default Home;