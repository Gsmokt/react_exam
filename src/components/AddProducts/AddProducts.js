import React from 'react';
import { useState } from 'react/cjs/react.development';
import styles from '../../common/styles/Headers.module.scss';
import logo from '../../thumbs-up (1).png'
import {useSelector, useDispatch} from 'react-redux';
import {addProduct} from '../../redux/store';

function AddProducts() {
  const state = useSelector(state => state.products);
  const dispatch = useDispatch();
 const [add, setAdd] = useState({
    name: '',
    category: '',
    product: false,
    invalidName: false,
    invalidCategory: false,
    img: false  
 })

    const handleChange = (e) => {
        setAdd( prevState => {
            if(e.target.type === 'checkbox') return {...prevState, [e.target.name]: e.target.checked};
            else return {...prevState, [e.target.name]: e.target.value.trim()};
            });
    };
    const handleClick = () => {
        const products = state.map(item => item.nazwa);
        if(add.name === '') {setAdd({...add,invalidName:true, img: false}); return}
        if(add.category === '') {setAdd({...add, invalidCategory:true, img:false});return}
        if(products.includes(add.name.toLowerCase())) {setAdd({...add, img:false}); alert('Podany produkt już istnieje')}
        else {
                dispatch(addProduct({nazwa: add.name, kategoria: add.category, produktSpozywczy: add.product}));
                setAdd({name: '', category: '',product: false, invalidName: false, invalidCategory:false, img: true});
            };
        };
    return (
        
        <div className={styles.Wrapper}>
             <label className={styles.label}>Nazwa produktu <input name='name'
                                          className={add.invalidName ? styles.invalid : null}
                                        //   style={{border: add.invalidName ? '3px solid red': null}}
                                          placeholder='Nazwa nowego produktu...' 
                                          autoComplete="off"  
                                          value={add.name} type="text" 
                                          onChange={handleChange}/></label>  
            <label className={styles.label} >Katagoria  <input name='category'
                                     className={add.invalidCategory ? styles.invalid : null}
                                    //  style={{border: add.invalidCategory ? '3px solid red': null}} 
                                     placeholder='Nazwa kategorii...'
                                     autoComplete="off" 
                                     value={add.category} 
                                     onChange={handleChange} type="text"/></label>   
               <input name='product' 
                      checked={add.product} 
                      onChange={handleChange} 
                      type="checkbox"/>Produkt spożywczy
            <button onClick={handleClick}>Dodaj nowy produkt</button>
            <div className={styles.add}>{add.invalidName || add.invalidCategory ?  <p className={styles.er}>Sprawdź, czy wypełniłeś wszystkie pola!</p> : null}
                                        {add.img ? <img className={styles.im} alt='Brak obrazka' src={logo} /> :null}   
            </div>
           </div>
           
      );
  };

  export default AddProducts;