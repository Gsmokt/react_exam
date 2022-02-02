
import React, {Component} from "react";

import commonColumnsStyles from "../../common/styles/Columns.module.scss";


class ProductsList extends Component{

  handleClick = (i) => {
    const item = this.props.products.slice(i,i+1);
    this.props.setProductList(item);
  }
  render(){
    const getUniqueProduct = (() => {
      const products = this.props.products.map(item => item.nazwa);
      const uniqueProducts = [...new Set(products)];
      return uniqueProducts;
    })();
    const productsList = getUniqueProduct.map((e,i) => <li key={i} onClick={()=>this.handleClick(i)} >{e}</li>)
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
