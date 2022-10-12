import { CartContext } from '../contexts/cart.context';
import { useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom'

function CartPage(){

    const { cartArray, setCartArray } = useContext(CartContext);
    const navigate = useNavigate()

    console.log(cartArray)

    function deleteItem (itemId) {
        const filteredProducts = cartArray.filter(item => {
            return item.product._id !== itemId
        })
        setCartArray(filteredProducts)
    }

    const handleSubmit = () => {
            navigate('/shipping-info')
    }
    
    if(cartArray.length === 0) {
        return (
            <div>
                <h3 className='mt-4 mb-4'>Your cart is currently empty</h3>
                <Link to="/product-list" className="btn btn-secondary bt-lg"> See All Products</Link>
                <div>
                <img className='mt-4' src="https://res.cloudinary.com/dfyitssyo/image/upload/v1665585045/Project3/BB_Boho_eythri.jpg" alt="dining" />
                </div>
            </div>
        )
    }

    return (
        <div className="container-lg">
            {cartArray.map(element => {
                return (
                        <div class="card mb-3" style={{maxWidth: "540px"}} key={element.product._id}>
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src={element.product.imageUrl} alt={element.product.title} height={200}/>
                            </div>
                            <div class="col-md-8">
                                <h5>{element.product.title}</h5>
                                <p>{element.product.price}</p>
                                <p>Quantity: {element.quantity} </p>
                                <p>Subtotal: {element.quantity*element.product.price}</p>
                                <button className='btn btn-light' onClick={()=> deleteItem(element.product._id)}>Delete</button>
                            </div>
                            </div>
                        </div>
                  
                )
            })}
            <div>
                <h3>Total:  
                    {cartArray.reduce((accumulator, currentValue) => {
                        return accumulator+currentValue.quantity*currentValue.product.price
                    },0)}
                </h3>
                <button className='btn btn-secondary bt-lg' onClick={handleSubmit}>Continue to shipping</button>
            </div>
            
        </div>
    )

}

export default CartPage;