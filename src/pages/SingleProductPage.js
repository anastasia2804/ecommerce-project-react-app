import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { CartContext } from '../contexts/cart.context';
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function SingleProductPage(){

    const { productId } = useParams();

    const [singleProduct, setSingleProduct] = useState(null)

    const { cartArray, setCartArray } = useContext(CartContext);

    const [quantity, setQuantity] = useState(1)

    useEffect(()=> {

        const authToken = localStorage.getItem('authToken');

        axios.get(`${process.env.REACT_APP_BACKEND_URL}/products/${productId}`, {
            headers: {
                authorization: `Bearer ${authToken}`
            }
        })
        .then(res => setSingleProduct(res.data.product))
        .catch(err=> console.log(err))
    }, [productId])

    const updateCart = () => {
        const productIndex = cartArray.findIndex(element=>{
            return productId === element.product._id
        })

        if (productIndex === -1) {
            setCartArray([...cartArray, {product: singleProduct, quantity}])
        } else {
            let updatedCartArray = [...cartArray]
            updatedCartArray[productIndex].quantity += quantity
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

    const addToCart = () => {
        updateCart()
        notify()
    }

 return (
    <div className='container-lg mt-4'>
        {singleProduct && (
            <div className="row justify-content-center align-items-center">
                <div className="col-md-5 text-center">
                    <img  className="img-fluid" src={singleProduct.imageUrl} alt={singleProduct.title} height={400}/>
                </div>
                <div className="col-md-5 text-center">
                    <h2>{singleProduct.title}</h2>
                    <p className='lh-lg mx-4 mt-5'>{singleProduct.description}</p>
                    <h3 className='my-4'>${singleProduct.price}</h3>
                    <p>Quantity: {quantity}</p>

                    <button className='btn btn-light mb-4'  onClick={()=> {
                    setQuantity(quantity + 1)}}>+</button>
                    <button className='btn btn-light mb-4' onClick={()=> {
                        if (quantity <= 1) { return 0 }
                    setQuantity(quantity - 1)}}>-</button>
                    <div>
                    <button className='btn btn-secondary btn-lg' onClick={addToCart}>
                        Add to cart
                        </button>
                    </div>
                    
                </div>
                
            </div>
        )}
    </div>
 );
}

export default SingleProductPage;