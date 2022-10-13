import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../contexts/auth.context';

function ProfilePage(){

    const navigate=useNavigate()
    const { logOutUser } = useContext(AuthContext);
    const [pastOrdersArr, setPastOrdersArr] = useState([])

    useEffect(()=>{

        const authToken = localStorage.getItem('authToken');

        axios.get('http://localhost:3001/past-orders', {
            headers: {
                authorization: `Bearer ${authToken}`
            }
        })
        .then(res=> {
            setPastOrdersArr(res.data.orders)
        })
        .catch(err=>console.log)
    },[])

    const deleteUser = () => {

        const authToken = localStorage.getItem('authToken')

        axios.delete('http://localhost:3001/delete-user', {
            headers: {
                authorization: `Bearer ${authToken}`
            }
        })
        .then(()=>{
            logOutUser()
            navigate('/') 
        })
        .catch(err=>console.log(err))
    }

    if(pastOrdersArr.length === 0) {
        return (
            <div>
            <h3>You have no previous orders</h3>
            <div>
            <Link to="/product-list"><button className='btn btn-secondary bt-lg my-3'>Start Shopping Now</button></Link>
            </div>
            <img src="https://res.cloudinary.com/dfyitssyo/image/upload/v1665675486/Project3/payment-backdrop_nmpsy6.png" alt="profile-page" height={500}/>
            </div>
        )
    }

    return (
        <div className="container-lg mt-5">
            <div className="row justify-content-center align-items-center">
            <div className="col-md-5 text-center text-md-start">

           <div>
           <h3 className="mb-5">Placed orders & history</h3>
           {pastOrdersArr.map(element => {
            return (
                <div>
                    <h5 className="mt-4">Order number: {element._id.slice(-6)}</h5>
                    {element.products.map(p => {
                        return (
                            <div className="mb-2">{p.productId.title} - quantity: {p.purchaseQuantity}</div>
                        )
                    })}
                </div>
            )
           })}
           </div>

            <button className="btn btn-secondary bt-lg mt-5"  onClick={deleteUser}>Delete User</button>
            </div>
            <div className="col-md-5 text-center d-none d-md-block">
                <img src="https://res.cloudinary.com/dfyitssyo/image/upload/v1665675486/Project3/payment-backdrop_nmpsy6.png" alt="profile-page" height={500}/>
            </div>
        </div>
        </div>
    )


}

export default ProfilePage;