
import React, {useState} from 'react';
import ProductsList from './components/ProductsList/ProductsList';
import ShopingList from './components/ShopingList/ShopingList';
import AddProducts from './components/AddProducts/AddProducts';
import ProductsFilters from './components/ProductsFilters/ProductsFilters';
import styles from './App.module.scss';
import produkty from './common/consts/produkty';

function App() {
  const [addList, setAddList] = useState(produkty);
  const [product, setProduct] = useState(produkty);
  const [products, setProducts] = useState([]);
  
  const setList = (value) => {
    setProducts([...products, ...value]);
  }
  const setNewList = (value) => {
    setProducts([...value]);
  }
  const filtetList = (value) => {
    setProduct([...value]);
  }
  const addProducts = (value) => {
      setProduct(oldProduct => [...oldProduct,value]);
      setAddList(oldProduct => [...oldProduct,value]);  
  }
  return (
    <div className={styles.appWrapper}>
      <AddProducts products={product} addProducts={addProducts}/>
      <ProductsFilters products={addList} filtetList={filtetList}/>
      <div className={styles.columnsWrapper}>
        <ProductsList products={product} setProductList={setList}/>
        <ShopingList setNewProductList={setNewList} shopList={products}/>
      </div>
    </ div>
  );
}

export default App;
