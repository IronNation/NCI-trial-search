import Header from './header'
import React from 'react'

class SearchResultsView extends React.Component {

    render() {
        return (
            <div className = 'searchResultsView'>
                <Header />
                <SearchResults />
            </div>
        )
    }
}

class SearchResults extends React.Component {

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

export default SearchResultsView