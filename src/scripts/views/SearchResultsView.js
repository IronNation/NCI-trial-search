import Header from './header'
import React from 'react'

class SearchResultsView extends React.Component {

    constructor(props) {
        super(props)
        console.log(props)
        this.state = {
            trials: props.searchTrialColl.models[0].get('trials')
        }
    }

    render() {
        return (
            <div className = 'searchView'>
                <Header />
                <SearchResultsBody />
                <SearchResults trial = {this.state.trials}/>
            </div>
        )
    }
}

class SearchResultsBody extends React.Component {

    _handleSearch(evt) {
        evt.preventDefault()
        location.hash = 'search/' + evt.target.cancerType.value.split(' ').join('%20')
        console.log(location.hash)
    }

    render() {
        return (
            <form className = 'searchBody' onSubmit = {this._handleSearch}>
                <input type = 'text' name = 'cancerType' placeholder = 'Cancer Type' />
                <input type = 'text' placeholder = 'Cancer Stage' />
                <input type = 'number' placeholder = 'Your age' />
                <p>Location:</p>
                <input type = 'text' placeholder = 'City'/>
                <input type = 'text' placeholder = 'State'/>
                <p>Gender:</p>
                <input type = 'radio' name = 'gender' value = 'female' />Female
                <input type = 'radio' name = 'gender' value = 'male' />Male
                <button type = 'submit'>Search</button>
            </form>
        )
    }
}

class SearchResults extends React.Component {

    constructor(props) {
        super(props)
        // console.log('searchResults props', props)

        this.state = {
            trialArray: props.trial
        }
    }

    _getJSXArray(trialArray) {
        let newArray = []

        trialArray.forEach( (trial) => {
            newArray.push(<Trial trialModel = {trial} />
            )
        })
        return newArray
    }

    render() {
        return (
            <div className  = 'searchResults'>

                {this._getJSXArray(this.state.trialArray)}

            </div>
        )
    }
}

class Trial extends React.Component {
    constructor(props) {
        super(props)
        // console.log('trial props', props)

        this.state = {
            trialModel: props.trialModel
        }
        // console.log(this.state)
    }

    _getDetails(evt){
        evt.preventDefault()
        location.hash = 'trialDetails/' + this.state.trialModel.nct_id
    }

    render() {
        return (
            <div className = 'trial'>
                <h3 className = 'titleDetails' onClick = {evt => this._getDetails(evt)}>{this.state.trialModel.brief_title}</h3>
                <p>Description: {this.state.trialModel.brief_summary}</p>
                <p>Principal Investigator: {this.state.trialModel.principal_investigator}</p>
                <p>Lead Organization: {this.state.trialModel.lead_org}</p>
                <p>Start Date: {this.state.trialModel.start_date}</p>
                <hr />
            </div>
        )
    }
}

export default SearchResultsView