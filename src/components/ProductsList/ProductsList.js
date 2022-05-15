
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToShoppingCart } from "../../redux/shoppingListStore";
import {getProductByUniqueSelector} from '../../redux/selectors';
import commonColumnsStyles from "../../common/styles/Columns.module.scss";


function ProductsList(props){
  const {name,category,onlyProduct} = props.filters;
  const dispatch = useDispatch();
  const state = useSelector(state => getProductByUniqueSelector(state,name,category,onlyProduct));
  const productsList = state.map((e,i) => <li className={commonColumnsStyles.list} key={i} 
  onClick={()=> dispatch(addToShoppingCart(state.slice(i,i+1)))} >{e.nazwa}</li>)
   
  return (
        <div className={commonColumnsStyles.App}>
      <header className={commonColumnsStyles.AppHeader}>
        <p>Lista produktów: </p>
        {productsList}
      </header>
    </div>
  );

}

export default ProductsList;
