import Header from './header'
import React from 'react'
import {ResultsList} from './map'

class HomeView extends React.Component {

    render() {
        return (
            <div className = 'homeView'>
                <Header />
                <Home />
                <ResultsList />
            </div>
        )
    }
}

class Home extends React.Component {

    render() {
        return (
            <div className = 'home'>
                <h1>Search for clinical drug trials near you!</h1>
            </div>
        )
    }
}

export default HomeView