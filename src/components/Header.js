import React from 'react';
import { Link } from 'react-router-dom';

export default function Header(props) {

    async function logout(){
        const res = await fetch(process.env.REACT_APP_SERVER+"/auth/logout", {
            headers: {authorization: `Bearer ${localStorage.getItem('token')}`},
            method: 'POST'
        });
        console.log('res====', res)
        if(res.status===204) {
            props.setUser(null)
            localStorage.removeItem("token")
        } else {
            alert("cannot logout atm")
        }
    }

    return (
        <div style={{display: "flex", justifyContent: "space-around"}}>
            <Link to="/"> {props.user? props.user.name : "Guest"} </Link>
            <Link to="/member"> Member </Link>
            {!props.user? <span><Link className="mr-4" to="/login"> Login</Link>
            <Link to="/users/">Signup</Link></span>
            : <span onClick={logout}> Logout </span>}
        </div>
    )
}
