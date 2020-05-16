import React, {useState, useEffect} from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import HomePage from './views/HomePage';
import LoginPage from './views/LoginPage';
import MemberPage from './views/MemberPage';
import SignUpPage from './views/SignUpPage'
import PasswordRecoverPage from './views/PasswordRecoverPage'
import SetNewPasswordPage from './views/SetNewPasswordPage'
import AuthRoute from './components/AuthRoute'
import NoMoreLogin from './components/NoMoreLogin'

function App() {
  const [user, setUser] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(()=> {
    checkUser()
  }, [])

  async function checkUser() {

    const urlToken = window.location.href.split("?token=")[1]
    ? window.location.href.split("?token=")[1].split("#")[0] : null


    const localToken = localStorage.getItem("token");
    const token = localToken || urlToken

    if(!token) return
    console.log("======REACT_APP_SERVER",process.env.REACT_APP_SERVER + "/users/me")
    const res = await fetch(process.env.REACT_APP_SERVER + "/users/me", {
      headers: {authorization: `Bearer ${token}`}
    })

    const body = await res.json()

    if(body.status === "success"){
      setUser(body.data);
      localStorage.setItem("token", token)
    } else {
      setUser(null)
      localStorage.removeItem("token")
    }
  }

  return (
    <div className="App">
      <Header user={user} setUser={setUser}/>
      ================================================================
      <Switch>
        <Route path="/" exact component={HomePage} />
        <AuthRoute path="/member" user={user} exact component={MemberPage} />
        <NoMoreLogin path="/login" user={user} setUser={setUser} exact component={LoginPage} />
        <NoMoreLogin path="/users/" exact component={SignUpPage} />
        <Route path="/users/recoverPassword" exact component={PasswordRecoverPage}/>
        <Route path="/email/:token" exact component={SetNewPasswordPage}/>
      </Switch>
    </div>
  );
}

export default App;
