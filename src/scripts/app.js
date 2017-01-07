import React from 'react'
import ReactDOM from 'react-dom'
// import MapPage from './MapContainer'
import ResultsList from './ResultsList'

const app = function() {

	const Header = React.createClass({
		render: () => {
			console.log('hello world')
			return <h1>YOLO</h1>

		}
	})

	ReactDOM.render(<ResultsList />,document.querySelector('.container'))
}

app()
