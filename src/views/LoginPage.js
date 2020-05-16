import React from 'react'
import SignIn from '../components/SignIn'
import {Link} from 'react-router-dom'

export default function LoginPage(props) {
    
    
    return (
        <div className="d-flex justify-content-center">
            {/* <a href={`${process.env.REACT_APP_SERVER}/auth/login`}>Login with your account</a> */}
            <div className="containerLogin d-flex flex-column">
            
            <div className="mb-3"><SignIn setUser={props.setUser}/></div>

            <a href={`${process.env.REACT_APP_SERVER}/auth/google`}>
            <div className="loginBar py-2 mt-2 col d-flex">
            <img className="loginIcon float-left mr-4" src="https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Google-512.png"/>
            <div>Login with Google</div>
            </div>
            </a>

            <a href={`${process.env.REACT_APP_SERVER}/auth/facebook`}>
            <div className="loginBar py-2 mt-2 col d-flex">
            <img className="loginIcon float-left mr-4" src="https://cdn3.iconfinder.com/data/icons/capsocial-round/500/facebook-512.png"/>
            <div>Login with Facebook</div>
            </div>
            </a>

            <a href={`${process.env.REACT_APP_SERVER}/auth/github`}>
            <div className="loginBar py-2 mt-2 col d-flex">
            <img className="loginIcon float-left mr-4" src="https://image.flaticon.com/icons/svg/25/25231.svg"/>
            <div>Login with Github</div>
            </div>
            </a>

            <div className="mt-4">Don't have an account? <Link to="/users/">Sign up here</Link></div>
            <Link to='/users/recoverPassword'><div className="mt-2">Forgot password?</div></Link>
            </div>
            
        </div>
    )
}
