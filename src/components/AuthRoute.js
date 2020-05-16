import React from 'react'
import {Route, Redirect} from 'react-router-dom'

export default function AuthRoute(props) {
    const Component = props.component;
    
    return props.user
    ? <Route {...props} render={()=><Component {...props}/>}/> 
    : <Redirect to="/login"/>
}
