import Header from './header'
import React from 'react'

class LoginView extends React.Component {

    render() {
        return (
            <div className = 'loginView'>
                <Header />
                <Login />
                <SignUp />
            </div>
        )
    }
}

class Login extends React.Component {

    render() {
        return (
            <div className = 'login'>
                <h3>Login</h3>
                <input type = 'email' placeholder = 'Login Email'/>
                <input type = 'password' placeholder = 'Login password' />
            </div>
        )
    }
}

class SignUp extends React.Component {

    render() {
        return (
            <div className = 'signUp'>
                <h3>Sign Up</h3>
                <input type = 'email' placeholder = 'SignUp email' />
                <input type = 'password' placeholder = 'Create password' />
                <input type = 'password' placeholder = 'Confirm password' />
            </div>
        )
    }
}

export default LoginView