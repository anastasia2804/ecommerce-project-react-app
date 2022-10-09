import { useState, useEffect, createContext } from "react";
import axios from "axios";

const AuthContext = createContext();

function AuthProvider(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState(null);

    const storeToken = token => {
        localStorage.setItem('authToken', token)
    }

    const authenticateUser = () => {
        const storedToken = localStorage.getItem('authToken');

        if(storedToken) {

            axios.get('http://localhost:3001/verify', {
                 headers: {
                    authorization: `Bearer ${storedToken}`
                 }
            })
            .then(res => {
                console.log(res);
                const user = res.data;

                setIsLoading(false);
                setIsLoggedIn(true);
                setUser(user);
            })
            .catch(err => {
                console.log(err)
                setIsLoading(false)
                setIsLoggedIn(false)
                setUser(null)
            })

        } else {
            setIsLoading(false)
            setIsLoggedIn(false)
            setUser(null)
        }
    }
   
    useEffect(()=>{
        authenticateUser();
    }, [])

    return (
      <AuthContext.Provider value={{ isLoggedIn, isLoading, user, storeToken, authenticateUser }}>
        {props.children}
      </AuthContext.Provider>
    )
  }
   
  export { AuthProvider, AuthContext };