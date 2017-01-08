import Header from './header'
import React from 'react'

class SearchView extends React.Component {

    constructor(props) {
        super(props)
        // console.log('props in SearchView', props)

        this.state = {
            trials: props.trialColl.models[0].get('trials')
        }
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
            <form className = 'searchBody'>
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

export default SearchView