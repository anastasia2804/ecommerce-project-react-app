import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../contexts/auth.context';

function Navbar(){

    const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

    return(
        <nav>
        <Link to='/'>Home</Link>
            { isLoggedIn && (
                <>
                    <Link to='product-list'>Products</Link>
                    <Link>My Cart</Link>
                    <button onClick={logOutUser}>Log Out</button>
                </>
            )}

                {/* {user && (
                    <p>Welcome, { user.username }!</p>
                )} */}

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