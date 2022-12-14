import { useState } from "react";
import { useNavigate, Link} from 'react-router-dom';
import axios from "axios";

function SignupPage(props){
    
    const navigate = useNavigate()

    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    const [error, setError] = useState("");

    const updateUser = event => setUser({
        ...user,
        [event.target.name] : event.target.value
    })

    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post(`${process.env.REACT_APP_BACKEND_URL}/signup`, user)
            .then(res => {
                console.log(res.data);
                navigate('/login')
            })
            .catch(err => {
                console.log(err.response)
                setError(err?.response)
            })
    }


    return (
        <div className="container-lg">
        <div className="row justify-content-center align-items-center">
        <div className="col-md-6 text-center">
            <h2 className="mb-4 mt-4">Sign Up</h2>
            <h5 style={{color: "red"}}>{error.data?.message}</h5>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input 
                        className="form-control"
                        name='email'
                        value={user.email}
                        onChange={e => setUser({...user, email: e.target.value})}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input 
                        className="form-control"
                        name='password'
                        value={user.password}
                        type="password"
                        onChange={updateUser}
                    />
                </div>
                <p>Already have an account? <Link to='/login'>Log In here</Link></p>
                <div>
                   <button className='btn btn-secondary bt-lg'>Sign Up</button>
                </div>
            </form>
            </div>
            </div>
        </div>
    )
}


export default SignupPage;