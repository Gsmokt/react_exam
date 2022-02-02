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
        const prod =  
            {nazwa: name.toLowerCase(),
            kategoria: category.toLowerCase(),
            produktSpozywczy: product};
            props.addProducts(prod);
    }
    return (
        <div className={styles.Wrapper}>
               <input value={name} type="text" onChange={handleName}/>Nazwa produktu 
               <input value={category} onChange={handleCategory} type="text"/>Nowa kategoria 
               <input value={product} onChange={handleProduct} type="checkbox"/>Produkt spożywczy
            <button onClick={handleClick}>Dodaj</button>
        </div>
      );
  };

  export default AddProducts;