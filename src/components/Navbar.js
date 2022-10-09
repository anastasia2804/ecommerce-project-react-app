import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../contexts/auth.context';

function Navbar(){

    const { isLoggedIn, user } = useContext(AuthContext);


//fill up isLogged in with relevant Links, and logout button; Homepage is visible to anyone
    return(
        <nav>
        <Link to='/'>Home</Link>
            { isLoggedIn && (
                <>
                    
                </>
            )}
            { !isLoggedIn && (
                <>
                <Link to='/signup'>Sign Up</Link>
                <Link to='/login'>Log In</Link>
                </>
            )}
        </nav>
    )
}

export default Navbar;