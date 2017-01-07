import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'
import HomeView from './views/HomeView'
import LoginView from './views/LoginView'
import SearchView from './views/SearchView'
import SearchResultsView from './views/SearchResultsView'
import TrialDetailsView from './views/TrialDetailsView'
import MyTrialsView from './views/MyTrialsView'

const app = function() {

    const AppRouter = Backbone.Router.extend({

        routes: {
            'home': '_goHome',
            'login': '_goToLogin',
            'search': '_goToSearch',
            'searchResults': '_goToSearchResults',
            'trialDetails/:id' : '_goToTrialDetails',
            'myTrials': '_goToMyTrials',
            '*default': '_goToDefault'
        },

        _goHome: function() {
            ReactDOM.render(<HomeView />, document.querySelector('.container'))

        },

        _goToLogin: function() {
            ReactDOM.render(<LoginView />, document.querySelector('.container'))
        },

        _goToSearch: function() {
            ReactDOM.render(<SearchView />, document.querySelector('.container'))
        },

        _goToSearchResults: function() {
            ReactDOM.render(<SearchResultsView />, document.querySelector('.container'))
        },

        _goToTrialDetails: function() {
            ReactDOM.render(<TrialDetailsView />, document.querySelector('.container'))
        },

        _goToMyTrials: function() {
            ReactDOM.render(<MyTrialsView />, document.querySelector('.container'))
        },

        _goToDefault: function() {
            location.hash = 'home'
        },

        initialize: function() {
            Backbone.history.start()
        }
    })
    new AppRouter()
}

app()