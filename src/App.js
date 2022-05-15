
import React, {useState} from 'react';
import ProductsList from './components/ProductsList/ProductsList';
import ShopingList from './components/ShopingList/ShopingList';
import AddProducts from './components/AddProducts/AddProducts';
import ProductsFilters from './components/ProductsFilters/ProductsFilters';
import styles from './App.module.scss';


function App() {
  const [filters, setFilters] = useState({
    name:'',
    category:'',
    onlyProduct: false
  });
  return (
    <div className={styles.appWrapper}>
      <AddProducts/>
      <ProductsFilters setFilters={setFilters}/>
      <div className={styles.columnsWrapper}>
        <ProductsList filters={filters} />
        <ShopingList/>
      </div>
    </ div>
  );
}

export default App;
