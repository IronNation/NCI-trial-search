import Header from './header'
import React from 'react'

class MyTrialsView extends React.Component {

    render() {
        return (
            <div className = 'myTrialsView'>
                <Header />
                <MyTrials />
            </div>
        )
    }
}

class MyTrials extends React.Component {

    render() {
        return (
            <div className = 'myTrials'>
                <a href  = ''>"brief_title"</a>
                <p>Description: "brief_description"</p>
                <p>Principal Investigator: "principal_investigator"</p>
                <p>Lead Organization: "lead_org"</p>
                <p>Start Date: "start_date"</p>
            </div>
        )
    }
}

export default MyTrialsView