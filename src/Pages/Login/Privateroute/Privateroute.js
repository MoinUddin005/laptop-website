import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../Hooks/UseAuth/UseAuth';

const Privateroute = ({ children, ...rest }) => {
    const {user, isLoading} = useAuth();
    if(isLoading){
        return (
            <div className="spinner-grow text-success" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        )
    }
    console.log(user);
    return (
        <Route 
        {...rest}
        render={({location}) => user.email ? children : <Redirect
            to={{
                pathname: "/login",
                state: { from: location }
            }}
        ></Redirect>

        }
        >

        </Route>
    );
};

export default Privateroute;