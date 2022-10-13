import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../contexts/auth.context';

function Navbar(){

    const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

    return(
        <nav className="navbar navbar-expand-md navbar-light">
        <div className="container-xxl">
            <Link className="navbar-brand text-decoration-none" to='/'><span className="fw-bold text-secondary">
                Pura Vida - Bohemian Decor & Accesories
            </span></Link>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
        data-bs-target="#main-nav" aria-controls="main-nav" aria-expanded="false" 
        aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

            <div className="collapse navbar-collapse justify-content-end align-center" id="main-nav">
            <ul className="navbar-nav">
            <li ><Link className="nav-link" to='/'>Home</Link></li>
                { isLoggedIn && (
                    <>
                    <li className='nav-item'> <Link className="nav-link" to='/product-list'>Products</Link></li>
                    <li className='nav-item'> <Link className="nav-link" to='/my-cart'>My Cart</Link></li>
                    <li className='nav-item'> <Link className="nav-link" to='/profile'>Orders & Profile</Link></li>
                       
                        <button className="btn btn-light" onClick={logOutUser}>Log Out</button>
                    </>
                )}


                { !isLoggedIn && (
                    <>
                    <Link className="nav-item nav-link" to='/signup'>Sign Up</Link>
                    <Link className="nav-item nav-link" to='/login'>Log In</Link>
                    </>
                )}
                </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;