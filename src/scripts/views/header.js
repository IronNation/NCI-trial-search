import React from 'react'

class Header extends React.Component {

    render() {
        return (
            <div className = 'header'>
                <h1>Welcome to DTST!</h1>
                    <p>Search for a clinical drug trial near you!</p>
                <Navigation />
            </div>
        )
    }
}

class Navigation extends React.Component {

    render() {
        return (
            <div className = 'navBar'>
                <a href = '#home'>Home</a>
                <a href = '#search'>Search</a>
                <a href = '#login'>Login</a>
            </div>
        )
    }
}

export default Header