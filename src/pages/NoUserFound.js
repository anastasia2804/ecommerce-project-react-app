import { Link } from 'react-router-dom';

function NoUserFound(){
    return (
        <div className="mt-4">
             <h5 className='mb-5'>User Not Found</h5>
             <p>Please try again.</p>
             <Link to="/login"><p>Log In here</p></Link>
             <p>Don't have an account?</p>
             <Link to="/signup"><p>Sign Up here</p></Link>
        </div>
    )
}

export default NoUserFound;