import Header from './header'
import React from 'react'

class SearchView extends React.Component {

    constructor(props) {
        super(props)
        console.log('props in SearchView', props)
    }

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

    constructor(props) {
        super(props)
        console.log('props in SearchBody', props)
    }

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

export default SearchView