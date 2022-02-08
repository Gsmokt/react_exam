
import React from "react";

import commonColumnsStyles from "../../common/styles/Columns.module.scss";


function ProductsList(props){

  const productsList = props.products.map((e,i) => <li className={commonColumnsStyles.list} key={e.nazwa} 
  onClick={()=> props.setProductList(prevState => [...prevState, ...props.products.slice(i,i+1)])} >{e.nazwa}</li>)
   
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
