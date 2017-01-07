import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'
import HomeView from './views/HomeView'
import LoginView from './views/LoginView'

const app = function() {

    const AppRouter = Backbone.Router.extend({

        routes: {
            'home': '_goHome',
            'login': '_goToLogin',
            'search': '_goToSearch',
            'searchResults': '_goToSearchResults',
            'trialDetails' : '_goToTrialDetails',
            '*default': '_goToDefault'
        },

        _goHome: function() {
            ReactDOM.render(<HomeView />, document.querySelector('.container'))

        },

        _goToLogin: function() {
            ReactDOM.render(<LoginView />, document.querySelector('.container'))
        },

        _goToSearchResults: function() {
            ReactDOM.render(<SearchResultsView />, document.querySelector('.container'))
        },

        _goToTrialDetails: function() {
            ReactDOM.render(<TrialDetailsView />, document.querySelector('.container'))
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