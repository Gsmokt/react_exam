import React from "react";
import commonColumnsStyles from "../../common/styles/Columns.module.scss";

function ShopingList(props) {
  const {shopList} = props;
  const setShopping = (event,i) => {
    event.preventDefault();
    if(event.target.style.textDecoration === ""){
       event.target.style.textDecoration = "line-through";
    }else if(event.target.style.textDecoration === "line-through"){
      event.target.style.textDecoration = "";
    }
  }
  const handleClick = (i) => {
    const list = [...shopList];
    const setList = list.filter((item,index) => {
      if(index !== i) return item;
    } );
    props.setNewProductList(setList);
  }
  return (
    <div className={commonColumnsStyles.App}>
      <header className={commonColumnsStyles.AppHeader}>
        {shopList.map((e,i) => <li key={i} onClick={()=>handleClick(i)} onContextMenu={(event)=>setShopping(event,i)}>{e.nazwa}</li>)}
      </header>
    </div>
  );
}

export default ShopingList;
