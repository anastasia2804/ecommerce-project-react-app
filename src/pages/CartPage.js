import { CartContext } from '../contexts/cart.context';
import { useState, useContext } from 'react';

function CartPage(){

    const { cartArray, setCartArray } = useContext(CartContext);

    return (
        <div>
            {cartArray.map(element => {
                return (
                    <div key={element._id}>
                        <div>
                            <h5>{element.title}</h5>
                            <img src={element.imageUrl} alt={element.title} height={200}/>
                            <p>{element.price}</p>
                            <p>Quantity: </p>
                            <button>Delete</button>
                        </div>
                    </div>
                )
            })}
            <div>
                <h3>Subtotal:</h3>
                <button>Checkout</button>
            </div>
        </div>
    )

}

export default CartPage;