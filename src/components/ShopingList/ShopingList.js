import React from "react";
import commonColumnsStyles from "../../common/styles/Columns.module.scss";
import {useSelector, useDispatch} from 'react-redux';
import {removeFromShoppingCart} from '../../redux/shoppingListStore';

function ShopingList() {
    const state = useSelector(state => state.shoppingList);
    const dispatch = useDispatch();
    const setShopping = (event, i) => {
        event.preventDefault();
        if (event.target.style.textDecoration === "") {
            event.target.style.textDecoration = "line-through";
        } else if (event.target.style.textDecoration === "line-through") {
            event.target.style.textDecoration = "";
        };
    };
    return (
        <div className={commonColumnsStyles.App}>
            <header className={commonColumnsStyles.AppHeader}>
                <p>Lista zakupów: </p>
                {state.map((e, i) => <li
                    className={commonColumnsStyles.list1}
                    key={i}
                    onClick={() => dispatch(removeFromShoppingCart(i))}
                    onContextMenu={(event) => setShopping(event)}>{e.nazwa}</li>)}
            </header>                                    
        </div>
    );
}

export default ShopingList;
