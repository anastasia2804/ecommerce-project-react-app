import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


function ProductListPage(){

const [productsArray, setProductsArray] = useState([])

useEffect(()=>{
    axios.get('http://localhost:3001/products')
    .then(res => {
        console.log(res.data)
        setProductsArray(res.data.products)})
    .catch(err => console.log(err))
}, [])

    return (
        <div>
            {productsArray.map(singleProduct => {
                return(
                    <div key={singleProduct._id}>
                    <Link to={`product-list/${singleProduct._id}`}>
                        <div>
                            <img src={singleProduct.imageUrl} alt={singleProduct.title} height={200}/>
                        </div>
                        <div>
                            <h3>{singleProduct.title}</h3>
                            <p>{singleProduct.price}</p>
                        </div>
                    </Link>
                    </div>
                )
            })}
        </div>
    )
}

export default ProductListPage;