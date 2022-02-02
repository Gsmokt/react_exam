import React from 'react';
import { useState } from 'react/cjs/react.development';
import styles from '../../common/styles/Headers.module.scss';

function ProductsFilters(props) {
    const [onlyProduct, setOnlyProduct] = useState(false);
    const handleChange = (e) => {
      props.filtetList(e.target.value);
    }
    const handleSelect = (e) => {
      props.filterList(e.target.value);
    }
    const handleValueChange = e => {
        setOnlyProduct(e.target.checked);
        props.fil(onlyProduct);
    }
    const getUniqueCategory = (() => {
      const products = props.products.map(item => item.kategoria);
      const uniqueProducts = [...new Set(products)];
      return uniqueProducts;
    })()
    return (
        <div className={styles.Wrapper}>
            <input type="text"  onChange={handleChange}/>
            
            <select onChange={handleSelect}>
                    <option key={'all'} value={''}>All types</option>
                    {getUniqueCategory.map((item) => <option key={item} value={item}>{item}</option>)}
            </select>
            <input value={onlyProduct} onChange={handleValueChange} type="checkbox"/>Tylko produkty spożywcze
         
        </div>
      );
  };

  export default ProductsFilters;