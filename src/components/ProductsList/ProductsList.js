
import React, {Component} from "react";

import commonColumnsStyles from "../../common/styles/Columns.module.scss";


class ProductsList extends Component{

  handleClick = (i) => {
    const b = this.props.products.slice(i,i+1);
    this.props.setProductList(b)
  }
  render(){
    const c = [...this.props.products];
    const a = c.map((e,i) => <li key={i} onClick={()=>this.handleClick(i)} >{e.nazwa}</li>)
  return (
        <div className={commonColumnsStyles.App}>
      <header className={commonColumnsStyles.AppHeader}>
        {a}
      </header>
    </div>
  );
  }

}

export default ProductsList;
