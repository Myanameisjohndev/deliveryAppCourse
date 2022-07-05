import React, { useState, useCallback, useEffect } from 'react';
import Title from '../../components/Title';
import Search from '../../components/Search';
import { useAppContext } from '../../context';
import { Background, Content, Header } from '../../globalstyles';
import Product from '../../components/Product';
import { FlatList } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import HeaderOptionButtons from '../../components/HeaderOptionButtons';

const Home = () => {

  const { user, setSelectedOrder } = useAppContext();
  const [searchValue, setSearchValue] = useState('');
  const navigation = useNavigation();
  const [products, setProducts] = useState([
    {
      url: "https://www.manollopizzaria.com.br/wp-content/uploads/2021/02/X_TUDO_DE_HAMBURGUER1-1-500x320.jpg",
      id: 1,
      name: "X-tudo 1 ",
      price: "17.90",
      description: "Pão, bife, salada, ovo, bacon, mussarela, presunto, milho e batata."
    },
    {
      url: "https://www.manollopizzaria.com.br/wp-content/uploads/2021/02/X_TUDO_DE_HAMBURGUER1-1-500x320.jpg",
      id: 2,
      name: "X-tudo 2",
      price: "17.90",
      description: "Pão, bife, salada, ovo, bacon, mussarela, presunto, milho e batata."
    },
    {
      url: "https://www.manollopizzaria.com.br/wp-content/uploads/2021/02/X_TUDO_DE_HAMBURGUER1-1-500x320.jpg",
      id: 3,
      name: "X-tudo 3",
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
  const [productsFiltered, setProductsFiltered] = useState([])

  const selectItem = (item) => {
    navigation.navigate('SelectedProduct', { item });
  }

  useFocusEffect(
    useCallback(() => {
      setSelectedOrder();
    })
  );

  useEffect(() => {
    if (searchValue === '') {
      setProductsFiltered(products);
    } else {
      const filter = products.filter((item) => {
        if (item.name.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase()
          .includes(searchValue.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase()) === true) {
          if (item.name.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase()
            .indexOf(searchValue.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase()) > -1) {
            return true;
          } else {
            return false;
          }
        }
      });
      setProductsFiltered(filter);
    }
  }, [searchValue]);

  return (
    <Background >
      <Header>
        <HeaderOptionButtons />
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
          data={productsFiltered}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Product data={item} onPress={() => selectItem(item)} />}
        />
      </Content>
    </Background>
  );
}

export default Home;