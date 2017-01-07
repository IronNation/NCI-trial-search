import Header from './header'
import React from 'react'

class SearchView extends React.Component {

    render() {
        return (
            <div className = 'searchView'>
                <Header />
                <SearchBody />
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
                <p>Gender:</p>
                <input type = 'radio' name = 'gender' value = 'female' />Female
                <input type = 'radio' name = 'gender' value = 'male' />Male
                <button type = 'submit'>Search</button>
            </div>
        )
    }
}

export default SearchView