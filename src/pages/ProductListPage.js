import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/cart.context';
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function ProductListPage(){

const [productsArray, setProductsArray] = useState([]);

const { cartArray, setCartArray } = useContext(CartContext);

useEffect(()=>{

    const authToken = localStorage.getItem('authToken');

    axios.get(`${process.env.REACT_APP_BACKEND_URL}/products`, {
        headers: {
            authorization: `Bearer ${authToken}`
        }
    })
    .then(res => {
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

function updateCart(index) {

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

const notify = () => toast.success("Added to Cart!", {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
});




    return (
        <div className="container-lg mt-4">
        <div className="row justify-content-center align-items-center">
            {productsArray.map(({product: singleProduct, quantity}, index) => {
                return(
                    
                        <div className="col-11 col-md-5 col-lg">
                            <div className="card h-100 mx-2 my-4" style={{width: "18rem"}} key={singleProduct._id}>
                                <Link className='text-start text-decoration-none' to={`/product-list/${singleProduct._id}`}>
                                        <img className="card-img-top" style={{height: "18rem"}} src={singleProduct.imageUrl} alt={singleProduct.title} />
                                    <div className="card-body" style={{height: "8rem"}}>
                                        <h4 className="card-title" style={{height: "4rem", color: 'black'}}>{singleProduct.title}</h4>
                                        <div>
                                        <h3 className="card-subtitle text-center" style={{color: 'black'}}>${singleProduct.price}</h3>
                                        </div>
                                    </div>
                                </Link>
                                <div className="card-footer">
                                    <p>Quantity: {quantity}</p>

                                    <button className='btn btn-outline-secondary m-1' onClick={increaseQuantity(index)}>+</button>

                                    <button className='btn btn-outline-secondary m-1' onClick={decreaseQuantity(index)}>-</button>
                                    <div>
                                    <button className="btn btn-secondary bt-lg mt-2" onClick={()=>{updateCart(index); notify()}}>
                                    Add to cart
                                    </button></div>
                                    
                                </div>
                            </div>
                        </div>
                  
                )
            })}
        </div>
        </div>
    )
}

export default ProductListPage;