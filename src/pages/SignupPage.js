import { useState } from "react";
import { Link, useNavigate} from 'react-router-dom';
import axios from "axios";

function SignupPage(){
    
    const navigate = useNavigate()

    const [state, setState] = useState({
        email: '',
        password: ''
    });

    const updateState = event => setState({
        ...state,
        [event.target.name] : event.target.value
    })

    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post(`${process.env.REACT_APP_BACKEND_URL}/signup`, state)
            .then(res => {
                console.log(res.data);
                navigate('/login')
            })
            .catch(err => console.log(err))
    }


    return (
        <div className="container-lg">
        <div className="row justify-content-center align-items-center">
        <div className="col-md-6 text-center">
            <h2 className="mb-4 mt-4">Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input 
                        className="form-control"
                        name='email'
                        value={state.email}
                        onChange={updateState}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input 
                        className="form-control"
                        name='password'
                        value={state.password}
                        type="password"
                        onChange={updateState}
                    />
                </div>
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