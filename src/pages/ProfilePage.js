import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../contexts/auth.context';

function ProfilePage(){

    const navigate=useNavigate()
    const { user, logOutUser } = useContext(AuthContext);
    const [pastOrdersArr, setPastOrdersArr] = useState([])

    useEffect(()=>{

        const authToken = localStorage.getItem('authToken');

        axios.get('http://localhost:3001/past-orders', {
            headers: {
                authorization: `Bearer ${authToken}`
            }
        })
        .then(res=> {
            console.log(res.data)
            setPastOrdersArr(res.data)
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

    return (
        <div>
            <h2>Welcome, {user.email} </h2>
            <button onClick={deleteUser}>Delete User</button>
        </div>
    )


}

export default ProfilePage;