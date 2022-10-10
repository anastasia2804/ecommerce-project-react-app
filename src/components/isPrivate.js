import { AuthContext } from '../contexts/auth.context';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';

function IsPrivate({ children }){

    const { isLoggedIn, isLoading } = useContext(AuthContext);

if(isLoading) {
    return <p>loading...</p>
}

if(!isLoggedIn){
    return <Navigate to='/login'/>
} else {
    return children;
}


}

export default IsPrivate;