import React from 'react'
import ReactDOM from 'react-dom'
import MapPage from './MapContainer'
const app = function() {

	const Header = React.createClass({
		render: () => {
			console.log('hello world')
			return <h1>YOLO</h1>

		}
	})

	ReactDOM.render(<MapPage/>,document.querySelector('.container'))
}

app()
