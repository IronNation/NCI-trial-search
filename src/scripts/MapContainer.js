import React, { Component } from 'react';
import { Gmaps, Marker, InfoWindow, Circle } from 'react-gmaps';
import axios from 'axios';

export default class MapPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      coords:{
        lat: 51.5258541,
        lng: -0.08040660000006028
      }
    }
  }

  ComponentDidMount(){
    getCoords()
  }

  getCoords(){
    axios.get("https://clinicaltrialsapi.cancer.gov/v1/clinical-trial/NCT02194738/").then((response) => {
      let newCoords = response.data.sites[0];
      console.log(newCoords);
      // this.setState({
      //   coords: newCoords
      // })
    })
  }

  render() {
    return (
      <div>
        {/* <Gmaps
        width={'800px'}
        height={'600px'}
        lat={coords.lat}
        lng={coords.lng}
        zoom={12}
        loadingMessage={'Be happy'}
        params={{v: '3.exp', key: 'AIzaSyDNXz8v1hT7wB1iJko-cyHe7zb7dD5iX38'}}
        onMapCreated={this.onMapCreated}>
        <Marker
          lat={this.state.coords.lat}
          lng={this.state.coords.lng}
          draggable={true}
          onDragEnd={this.onDragEnd} />
        <InfoWindow
          lat={this.state.coords.lat}
          lng={this.state.coords.lng}
          content={'Hello, React :)'}
          onCloseClick={this.onCloseClick} />
        <Circle
          lat={coords.lat}
          lng={coords.lng}
          radius={500}
          onClick={this.onClick} />
      </Gmaps> */}
      </div>
    );
  }
}
