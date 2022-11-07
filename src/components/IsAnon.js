import { AuthContext } from '../contexts/auth.context';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

function IsAnon({ children }){
    const navigate = useNavigate()

    const { isLoggedIn, isLoading } = useContext(AuthContext);

if(isLoading) {
    return <p>loading...</p>
}

if(isLoggedIn){
    navigate("/")
    return 
} else {
    return children;
}


}

export default IsAnon;