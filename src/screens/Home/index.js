import React, { useState, useCallback, useEffect } from 'react';
import Title from '../../components/Title';
import Search from '../../components/Search';
import { useAppContext } from '../../context';
import { Background, Content, Header } from '../../globalstyles';
import Product from '../../components/Product';
import { FlatList, Text, View, ActivityIndicator } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import HeaderOptionButtons from '../../components/HeaderOptionButtons';
import firestore from '@react-native-firebase/firestore';

const Home = () => {

  const { user, setSelectedOrder } = useAppContext();
  const [searchValue, setSearchValue] = useState('');
  const navigation = useNavigation();
  const [products, setProducts] = useState([]);
  const [productsFiltered, setProductsFiltered] = useState([])
  const [loading, setLoading] = useState(true);

  const selectItem = (item) => {
    navigation.navigate('SelectedProduct', { item });
  }

  const loadProducts = () => {
    firestore()
      .collection("products")
      .get()
      .then((res) => {
        let receiveProducts = [];
        res.forEach((item)=>{
          receiveProducts.push(item.data());
        })
        setProducts(receiveProducts)
        setProductsFiltered(receiveProducts)
        setLoading(false)
      }).catch((err) => {
        setLoading(false)
      })
  }

  useEffect(()=>{
    loadProducts();
  },[])

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
        {loading ? (
          <>
            <ActivityIndicator color="white" size="large" />
            <View />
          </>
        ) : (
          <FlatList
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingVertical: 20 }}
            data={productsFiltered}
            keyExtractor={(_, index) => index}
            renderItem={({ item }) => <Product data={item} onPress={() => selectItem(item)} />}
          />
        )}
      </Content>
    </Background>
  );
}

export default Home;