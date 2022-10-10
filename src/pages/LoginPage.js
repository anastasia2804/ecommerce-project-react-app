import { useState, useContext } from "react";
import { Link, useNavigate} from 'react-router-dom';
import axios from "axios";
import { AuthContext } from '../contexts/auth.context'

function LoginPage(){

    const { storeToken, authenticateUser } = useContext(AuthContext)
    
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

        axios.post('http://localhost:3001/login', state)
        .then(res => {
            console.log(res.data);
            storeToken(res.data.authToken);
            authenticateUser();
            navigate('/');
            })
        .catch(err => console.log(err))
    }


    return (
        <div>
            <h2>Log In</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email</label>
                    <input 
                        name='email'
                        value={state.email}
                        onChange={updateState}
                    />
                </div>
                <div>
                    <label>Password</label>
                    <input 
                        name='password'
                        value={state.password}
                        type="password"
                        onChange={updateState}
                    />
                </div>
                <div>
                   <button>Log In</button>
                </div>
            </form>
        </div>
    )
}

export default LoginPage;