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
    
    return (
        <div className={styles.Wrapper}>
            <input type="text"  onChange={handleChange}/>
            
            <select onChange={handleSelect}>
                    <option key={'all'} value={''}>All types</option>
                    {props.products.map((item) => <option key={item.nazwa} value={item.kategoria}>{item.kategoria}</option>)}
            </select>
            <input value={onlyProduct} onChange={handleValueChange} type="checkbox"/>Tylko produkty spożywcze
         
        </div>
      );
  };

  export default ProductsFilters;