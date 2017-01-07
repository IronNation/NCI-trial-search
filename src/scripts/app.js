import React from 'react'
import ReactDOM from 'react-dom'
// import MapPage from './MapContainer'
import ResultsList from './ResultsList'

const app = function() {

	const Header = React.createClass({
		render: () => {

		}
	})

	ReactDOM.render(<ResultsList />,document.querySelector('.container'))
}

app()
