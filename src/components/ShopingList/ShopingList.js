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
    const setList = shopList.filter((item,index) => index !== i);
    props.setNewProductList([...setList]);
  }
  return (
    <div className={commonColumnsStyles.App}>
      <header className={commonColumnsStyles.AppHeader}>                
        {shopList.map((e,i) => <li key={i} onClick={()=>handleClick(i)} onContextMenu={(event)=>setShopping(event,i)}>{e.nazwa}</li>)}
      </header>                                     {/* Zadanie 1 - funkcja handleClick  zamiast setShopping na onContextMenu*/}
    </div>
  );
}

export default ShopingList;
