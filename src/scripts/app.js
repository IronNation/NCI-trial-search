import React from 'react'
import ReactDOM from 'react-dom'
import MapPage from './MapContainer'
const app = function() {

	const Header = React.createClass({
		render: () => {

		}
	})

	ReactDOM.render(<MapPage/>,document.querySelector('.container'))
}

app()
