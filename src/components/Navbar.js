import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../contexts/auth.context';

function Navbar(){

    const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

    return(
        <nav className="navbar navbar-expand-md navbar-light">
        <div className="container-xxl">
            <div className="navbar-brand">
            <span class="fw-bold text-secondary">
                Bohemian Decor & Accesories
            </span>
            </div>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
        data-bs-target="#main-nav" aria-controls="main-nav" aria-expanded="false" 
        aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

            <div class="collapse navbar-collapse justify-content-end align-center" id="main-nav">
            <ul class="navbar-nav">
            <Link class="nav-item nav-link" to='/'>Home</Link>
                { isLoggedIn && (
                    <>
                        <Link class="nav-item nav-link" to='/product-list'>Products</Link>
                        <Link class="nav-item nav-link" to='/my-cart'>My Cart</Link>
                        <Link class="nav-item nav-link" to='/profile'>Orders & Profile</Link>
                        <button className="btn btn-light" onClick={logOutUser}>Log Out</button>
                    </>
                )}


                { !isLoggedIn && (
                    <>
                    <Link class="nav-item nav-link" to='/signup'>Sign Up</Link>
                    <Link class="nav-item nav-link" to='/login'>Log In</Link>
                    </>
                )}
                </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;