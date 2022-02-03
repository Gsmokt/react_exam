
import React from "react";

import commonColumnsStyles from "../../common/styles/Columns.module.scss";


function ProductsList(props){

  const handleClick = (i) => {
    const b = props.products.slice(i,i+1);
    props.setProductList(b)
  
  }  
  const productsList = props.products.map((e,i) => <li key={e.nazwa} onClick={()=>handleClick(i)} >{e.nazwa}</li>)
   
  return (
        <div className={commonColumnsStyles.App}>
      <header className={commonColumnsStyles.AppHeader}>
        {productsList}
      </header>
    </div>
  );

}

export default ProductsList;
