import React from 'react'

const Header = React.createClass ({

    render: function() {
        return (
            <div className = 'header'>
                <h1>Welcome to DTST!</h1>
                    <p>Search for a clinical drug trial near you!</p>
                <Navigation />
            </div>
        )
    }
})

const Navigation = React.createClass({

    render: function() {
        return (
            <div className = 'navBar'>
                <a href = '#home'>Home</a>
                <a href = '#search'>Search</a>
                <a href = '#login'>Login</a>
            </div>
        )
    }
})

export default Header