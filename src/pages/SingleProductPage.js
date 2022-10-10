import { useState, useEffect } from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom'


function SingleProductPage(){

    const { productId } = useParams();
 return (
    <p>1 product page</p>
 );
}

export default SingleProductPage;