
import React, {Component} from "react";

import commonColumnsStyles from "../../common/styles/Columns.module.scss";


class ProductsList extends Component{

  handleClick = (i) => {
    const b = this.props.products.slice(i,i+1);
    this.props.setProductList(b)
  
  }    

  render(){
    const productsList = this.props.products.map((e,i) => <li key={e.nazwa} onClick={()=>this.handleClick(i)} >{e.nazwa}</li>)
   
  return (
        <div className={commonColumnsStyles.App}>
      <header className={commonColumnsStyles.AppHeader}>
        {productsList}
      </header>
    </div>
  );
  }

}

export default ProductsList;
