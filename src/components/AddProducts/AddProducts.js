import React from 'react';
import { useState } from 'react/cjs/react.development';
import styles from '../../common/styles/Headers.module.scss';

function AddProducts(props) {
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [product, setProduct] = useState(false);
    const handleName = (e) => {
        setName(e.target.value);
    }
    const handleCategory = (e) => {
        setCategory(e.target.value);
    }
    const handleProduct = (e) => {
        setProduct(e.target.checked);
    }
    const handleClick = () => {
        const products = props.products.map(item => item.nazwa);
        if(products.includes(name.toLowerCase())) return;
        else
            props.addProducts(
                   {nazwa: name.toLowerCase(),
                    kategoria: category.toLowerCase(),
                    produktSpozywczy: product}
            );
    }
    return (
        <div className={styles.Wrapper}>
             <label>Nazwa produktu <input value={name} type="text" onChange={handleName}/></label>   
            <label>Katagoria  <input value={category} onChange={handleCategory} type="text"/></label>   
               <input value={product} onChange={handleProduct} type="checkbox"/>Produkt spożywczy
            <button onClick={handleClick}>Dodaj nowy produkt</button>
        </div>
      );
  };

  export default AddProducts;