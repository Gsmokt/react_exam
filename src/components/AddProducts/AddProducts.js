import React from 'react';
import { useState } from 'react/cjs/react.development';
import styles from '../../common/styles/Headers.module.scss';

function AddProducts(props) {
 const [add, setAdd] = useState({
    name: '',
    category: '',
    product: false,
    invalidName: false,
    invalidCategory: false  
 })

    const handleChange = (e) => {
        setAdd( prevState => {
            if(e.target.type === 'checkbox') return {...prevState, [e.target.name]: e.target.checked};
            else return {...prevState, [e.target.name]: e.target.value};
            });
    };
    const handleClick = () => {
        const products = props.allProducts.map(item => item.nazwa);
        if(add.name === '') {setAdd({...add,invalidName:true}); return}
        if(add.category === '') {setAdd({...add, invalidCategory:true});return}
        if(products.includes(add.name.toLowerCase())) alert('Podany produkt już istnieje')
        else {
                props.addProducts(
                   {nazwa: add.name.toLowerCase(),
                    kategoria: add.category.toLowerCase(),  
                    produktSpozywczy: add.product}
                    );
                if(props.addProducts) setAdd({name: '', category: '', product: false, invalidName: false});
            };
        };
    return (
        <>
        <div className={styles.Wrapper}>
             <label className={styles.label}>Nazwa produktu <input name='name'
                                          style={{border: add.invalidName ? '3px solid red': null}}
                                          placeholder='Nazwa nowego produktu...' 
                                          autocomplete="off"  
                                          value={add.name} type="text" 
                                          onChange={handleChange}/></label>  
            <label>Katagoria  <input name='category'
                                     style={{border: add.invalidCategory ? '3px solid red': null}} 
                                     placeholder='Nazwa kategorii...'
                                     autocomplete="off" 
                                     value={add.category} 
                                     onChange={handleChange} type="text"/></label>   
               <input name='product' 
                      value={add.product} 
                      onChange={handleChange} 
                      type="checkbox"/>Produkt spożywczy
            <button onClick={handleClick}>Dodaj nowy produkt</button>
            <div className={styles.add}>{add.invalidName || add.invalidCategory ?  'Sprawdź, czy wypełniłeś wszystkie pola!' : null}
            </div>
           </div>
           </>
      );
  };

  export default AddProducts;