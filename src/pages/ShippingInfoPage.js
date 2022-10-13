import { useState, useContext} from "react";
import axios from "axios";
import { CartContext } from '../contexts/cart.context';
import { useNavigate } from 'react-router-dom';

function ShippingInfoPage(){

    const navigate = useNavigate()
    const { cartArray, setCartArray } = useContext(CartContext);

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [address1, setAddress1] = useState('');
    const [address2, setAddress2] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipcode, setZipcode] = useState('');

    const updateFirstName = e => setFirstName(e.target.value)
    const updateLastName = e => setLastName(e.target.value)
    const updateAddress1 = e => setAddress1(e.target.value)
    const updateAddress2 = e => setAddress2(e.target.value)
    const updateCity = e => setCity(e.target.value)
    const updateState = e => setState(e.target.value)
    const updateZipcode = e => setZipcode(e.target.value)

const submitForm= e => {
    e.preventDefault();

    const addressObject =  {
        firstName, 
        lastName,
        addressLine1: address1,
        addressLine2: address2,
        city,
        state,
        zipCode: zipcode
    };

    const authToken = localStorage.getItem('authToken');

    axios.post('http://localhost:3001/new-order', {cartArray, addressObject}, {
        headers: {
            authorization: `Bearer ${authToken}`
        }
    })
        .then(res => {
            console.log(res.data);
            navigate('/order/confirm')
            })
        .catch(err => console.log(err))

    console.log(addressObject)
    setCartArray([])


}


return(
    <form onSubmit={submitForm}>
    <div className="container-lg mt-5">
    <h3 className="mb-5"> Shipping details</h3>
    <div className="row">
        <div className="column">
        <label className="form-label">First Name</label>
            <input className="form-control" type="text" value={firstName} onChange={updateFirstName} />
        </div>
        <div className="column">
            <label className="form-label">Last Name</label>
            <input className="form-control"  type="text" value={lastName} onChange={updateLastName} />
        </div>
    </div>
        <div>
            <label className="form-label">Address Line 1</label>
            <input className="form-control" type="text" value={address1} onChange={updateAddress1} />
        </div>
        <div>
            <label className="form-label">Address Line 2</label>
            <input className="form-control" type="text" value={address2} onChange={updateAddress2} />
        </div>
        <div>
            <label className="form-label">City</label>
            <input className="form-control" type="text" value={city} onChange={updateCity} />
        </div>
        <div>
            <label className="form-label">State</label>
            <input className="form-control" type="text" value={state} onChange={updateState} />
        </div>
        <div>
            <label className="form-label">Zip Code</label>
            <input className="form-control" type="number" value={zipcode} onChange={updateZipcode} />
        </div>
        <div>
            <button className='btn btn-secondary bt-lg mt-3' type="submit">Continue to payment info</button>
        </div>
    </div>
    </form>
    )
}

export default ShippingInfoPage;