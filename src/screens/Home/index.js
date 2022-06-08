import React, { useState } from 'react';
import Title from '../../components/Title';
import Search from '../../components/Search';
import { useAppContext } from '../../context';
import { Background, Content, Header } from '../../globalstyles';
import Product from '../../components/Product';
import { FlatList } from 'react-native';

const Home = () => {

  const { user } = useAppContext();
  const [searchValue, setSearchValue] = useState('');

  const [products, setProducts] = useState([
    {
      url: "https://www.manollopizzaria.com.br/wp-content/uploads/2021/02/X_TUDO_DE_HAMBURGUER1-1-500x320.jpg",
      id: 1,
      name: "X-tudo",
      price: "17.90",
      description: "Pão, bife, salada, ovo, bacon, mussarela, presunto, milho e batata."
    },
    {
      url: "https://www.manollopizzaria.com.br/wp-content/uploads/2021/02/X_TUDO_DE_HAMBURGUER1-1-500x320.jpg",
      id: 2,
      name: "X-tudo",
      price: "17.90",
      description: "Pão, bife, salada, ovo, bacon, mussarela, presunto, milho e batata."
    },
    {
      url: "https://www.manollopizzaria.com.br/wp-content/uploads/2021/02/X_TUDO_DE_HAMBURGUER1-1-500x320.jpg",
      id: 3,
      name: "X-tudo",
      price: "17.90",
      description: "Pão, bife, salada, ovo, bacon, mussarela, presunto, milho e batata."
    },
    {
      url: "https://www.manollopizzaria.com.br/wp-content/uploads/2021/02/X_TUDO_DE_HAMBURGUER1-1-500x320.jpg",
      id: 4,
      name: "X-tudo",
      price: "17.90",
      description: "Pão, bife, salada, ovo, bacon, mussarela, presunto, milho e batata."
    },
    {
      url: "https://www.manollopizzaria.com.br/wp-content/uploads/2021/02/X_TUDO_DE_HAMBURGUER1-1-500x320.jpg",
      id: 5,
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
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingVertical: 20 }}
          data={products}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Product data={item} />}
        />
      </Content>
    </Background>
  );
}

export default Home;