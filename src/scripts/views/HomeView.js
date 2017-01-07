import Header from './header'
import React from 'react'

class HomeView extends React.Component {

    render() {
        return (
            <div className = 'homeView'>
                <Header />
                <HomeBody />
            </div>
        )
    }
}

class HomeBody extends React.Component {

    render() {
        return (
            <div className = 'homeBody'>
                <h1>Search for clinical drug trials near you!</h1>
            </div>
        )
    }
}

export default HomeView