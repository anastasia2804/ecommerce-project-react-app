import { useState, useEffect, createContext } from "react";
import axios from "axios";

const CartContext = createContext();

function CartProvider(props) {

    const [cartArray, setCartArray] = useState([])

    return (
        <CartContext.Provider value={{cartArray, setCartArray}}>
            {props.children}
        </CartContext.Provider>
    )
}

export { CartContext, CartProvider}