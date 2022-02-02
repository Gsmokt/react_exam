
import React, {useEffect, useState} from 'react';
import ProductsList from './components/ProductsList/ProductsList';
import ShopingList from './components/ShopingList/ShopingList';
import AddProducts from './components/AddProducts/AddProducts';
import ProductsFilters from './components/ProductsFilters/ProductsFilters';
import styles from './App.module.scss';
import produkty from './common/consts/produkty';

function App() {
  const [addList, setAddList] = useState(produkty)
  const [product, setProduct] = useState(produkty);
  const [products, setProducts] = useState([]);
  const [prod, setProd] = useState(null);
  const setList = (value) => {
    setProducts([...products, ...value])
  }
  const setNewList = (index) => {
    const productsList = [...addList];
    const removeFromProductsList = productsList.splice(index,1);
    setProduct(productsList);
  }
  const filtetList = (value) => {
    const productsList = [...addList];
    const filterProduct = productsList.filter(item => item.nazwa.includes(value));
    setProduct(filterProduct);
  }
  const filterList = (value) => {
    const productsList = [...addList];
    const filterProduct = productsList.filter(item => item.kategoria.includes(value));
    setProduct(filterProduct);
  }
  const fil = (value) => {
    const productsList = [...addList];
    let filterProduct;
    if(value === false){
      filterProduct = productsList.filter(item => item.produktSpozywczy === true);
    }
    if(value === true){
      filterProduct = productsList.filter(item => item === item);
    }
    
    setProduct(filterProduct);
  }
  const addProducts = (value) => {
      setProduct([...product, value])
      setAddList([...produkty, value])
      
      
  }
  return (
    <div className={styles.appWrapper}>
      <AddProducts addProducts={addProducts}/>
      <ProductsFilters products={addList} fil={fil} filterList={filterList} filtetList={filtetList}/>
      <div className={styles.columnsWrapper}>
        <ProductsList products={product} setProductList={setList}/>
        <ShopingList setNewProductList={setNewList} shopList={products}/>
      </div>
    </ div>
  );
}

export default App;
