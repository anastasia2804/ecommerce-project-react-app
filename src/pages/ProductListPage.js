import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/cart.context'


function ProductListPage(){

const [productsArray, setProductsArray] = useState([]);

//console.log(productsArray[0]._id)

const { cartArray, setCartArray } = useContext(CartContext);

useEffect(()=>{

    const authToken = localStorage.getItem('authToken');

    axios.get('http://localhost:3001/products', {
        headers: {
            authorization: `Bearer ${authToken}`
        }
    })
    .then(res => {
        console.log(res.data)
        setProductsArray(res.data.products.map(p => ({ product: p, quantity: 1})))})
    .catch(err => console.log(err))
}, [])

const increaseQuantity = index => () => {
    const copyProductsArray = [...productsArray];
    copyProductsArray[index].quantity++;
    setProductsArray(copyProductsArray);
}

const decreaseQuantity = index => () => {
    const copyProductsArray = [...productsArray];
    if(copyProductsArray[index].quantity > 1){
        copyProductsArray[index].quantity--;
    };
    setProductsArray(copyProductsArray);
}

const updateCart = index => () => {

    const productIndex = cartArray.findIndex(element=>{
        return productsArray[index].product._id === element.product._id
    })

    if (productIndex === -1) {
        setCartArray([...cartArray, {product: productsArray[index].product, quantity:productsArray[index].quantity}])
    } else {
        let updatedCartArray = [...cartArray]
        updatedCartArray[productIndex].quantity +=  productsArray[index].quantity
        setCartArray(updatedCartArray)
    }
}

    return (
        <div class="row row-cols-1 row-cols-md-5 g-4 mt-3">
            {productsArray.map(({product: singleProduct, quantity}, index) => {
                return(
                    
                        <div class="col">
                            <div className="card h-100 m-2" style={{width: "18rem"}} key={singleProduct._id}>
                                <Link className='text-start text-decoration-none' to={`/product-list/${singleProduct._id}`}>
                                        <img className="card-img-top" style={{height: "18rem"}} src={singleProduct.imageUrl} alt={singleProduct.title} />
                                    <div className="card-body" style={{height: "8rem"}}>
                                        <h4 className="card-title" style={{height: "4rem", color: 'black'}}>{singleProduct.title}</h4>
                                        <div>
                                        <h3 className="card-subtitle text-center" style={{color: 'black'}}>${singleProduct.price}</h3>
                                        </div>
                                    </div>
                                </Link>
                                <div class="card-footer">
                                    <p>Quantity: {quantity}</p>

                                    <button className='btn btn-outline-secondary m-1' onClick={increaseQuantity(index)}>+</button>

                                    <button className='btn btn-outline-secondary m-1' onClick={decreaseQuantity(index)}>-</button>
                                    <div>
                                    <button className="btn btn-secondary bt-lg mt-2" onClick={updateCart(index)}>
                                    Add to cart
                                    </button></div>
                                    
                                </div>
                            </div>
                        </div>
                  
                )
            })}
        </div>
    )
}

export default ProductListPage;