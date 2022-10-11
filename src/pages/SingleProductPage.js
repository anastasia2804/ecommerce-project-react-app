import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { CartContext } from '../contexts/cart.context';


function SingleProductPage(){

    const { productId } = useParams();

    const [singleProduct, setSingleProduct] = useState(null)

    const { cartArray, setCartArray } = useContext(CartContext);

    useEffect(()=> {
        axios.get(`http://localhost:3001/products/${productId}`)
        .then(res => setSingleProduct(res.data.product))
        .catch(err=> console.log(err))
    }, [productId])

 return (
    <div>
        {singleProduct && (
            <div>
                <div>
                    <img src={singleProduct.imageUrl} alt={singleProduct.title} height={400}/>
                </div>
                <div>
                    <h2>{singleProduct.title}</h2>
                    <p>{singleProduct.description}</p>
                    <p>{singleProduct.price}</p>
                    <p>Quantity</p>
                    <button onClick={()=> {
                            setCartArray([...cartArray, singleProduct])
                        }}>
                        Add to cart
                        </button>
                </div>
                
            </div>
        )}
    </div>
 );
}

export default SingleProductPage;