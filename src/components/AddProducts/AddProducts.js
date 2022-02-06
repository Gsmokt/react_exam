import React from 'react';
import { useState } from 'react/cjs/react.development';
import styles from '../../common/styles/Headers.module.scss';

function AddProducts(props) {
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [product, setProduct] = useState(false);
    const [invalidName, setInvalidName] = useState(false);
    const [invalidCategory, setInvalidCategory] = useState(false);

    const handleName = (e) => {
        setName(e.target.value);
    };
    const handleCategory = (e) => {
        setCategory(e.target.value);
    };
    const handleProduct = (e) => {
        setProduct(e.target.checked);
    };
    const resetState = () => {
        setName('');
        setCategory('');
        setProduct(false);
        setInvalidName(false);
        setInvalidCategory(false);
    };
    const handleClick = () => {
        const products = props.allProducts.map(item => item.nazwa);
        if(products.includes(name.toLowerCase()) || name === '') {setInvalidName(true); return}
        else if(category === '') {setInvalidCategory(true); return}
        else {
                props.addProducts(
                   {nazwa: name.toLowerCase(),
                    kategoria: category.toLowerCase(),  
                    produktSpozywczy: product}
                    );
                if(props.addProducts) resetState();
            };
        };
    return (
        <div className={styles.Wrapper}>
             <label>Nazwa produktu <input autocomplete="off" style={{border: invalidName ? '3px solid red': null}} value={name} type="text" onChange={handleName}/></label>  
            <label>Katagoria  <input autocomplete="off" style={{border: invalidCategory ? '3px solid red': null}} value={category} onChange={handleCategory} type="text"/></label>   
               <input value={product} onChange={handleProduct} type="checkbox"/>Produkt spożywczy
            <button onClick={handleClick}>Dodaj nowy produkt</button>
        </div>
      );
  };

  export default AddProducts;