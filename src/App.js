
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
  
  const addProducts = (value) => {
      setProduct(oldProduct => [value, ...oldProduct]);
      setAddList(oldProduct => [value, ...oldProduct]);  
  }
  return (
    <div className={styles.appWrapper}>
      <AddProducts allProducts={addList} products={product} addProducts={addProducts}/>
      <ProductsFilters products={addList} filtetList={setProduct}/>
      <div className={styles.columnsWrapper}>
        <ProductsList products={product} setProductList={setProducts}/>
        <ShopingList setNewProductList={setProducts} shopList={products}/>
      </div>
    </ div>
  );
}

export default App;
