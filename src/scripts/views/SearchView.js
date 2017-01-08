import Header from './header'
import React from 'react'

class SearchView extends React.Component {

    constructor(props) {
        super(props)
        console.log('props in SearchView', props)

        this.state = {
            trials: props.trialColl.models[0].get('trials')
        }

        console.log(this.state.trials)
    }

    render() {
        return (
            <div className = 'searchView'>
                <Header />
                <SearchBody />
                <SearchResults trial = {this.state.trials}/>
            </div>
        )
    }
}

class SearchBody extends React.Component {

    render() {
        return (
            <div className = 'searchBody'>
                <input type = 'text' placeholder = 'Cancer Type' />
                <input type = 'text' placeholder = 'Cancer Stage' />
                <input type = 'number' placeholder = 'Your age' />
                <p>Location:</p>
                <input type = 'text' placeholder = 'City'/>
                <input type = 'text' placeholder = 'State'/>
                <p>Gender:</p>
                <input type = 'radio' name = 'gender' value = 'female' />Female
                <input type = 'radio' name = 'gender' value = 'male' />Male
                <button type = 'submit'>Search</button>
            </div>
        )
    }
}

class SearchResults extends React.Component {

    constructor(props) {
        super(props)
        console.log('searchResults props', props)
    }

    render() {
        return (
            <div className  = 'searchResults'>
                <a href  = ''>"brief_title"</a>
                <p>Description: "brief_description"</p>
                <p>Principal Investigator: "principal_investigator"</p>
                <p>Lead Organization: "lead_org"</p>
                <p>Start Date: "start_date"</p>
            </div>
        )
    }
}

export default SearchView