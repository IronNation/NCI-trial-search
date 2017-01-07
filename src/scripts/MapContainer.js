import React from 'react';
import { Gmaps, Marker, InfoWindow, Circle } from 'react-gmaps';
import axios from 'axios';

export default class MapPage extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      lat: 44.9778,
      lng: -93.273079
    }
  }

  //get latitude
    axios.get("https://clinicaltrialsapi.cancer.gov/v1/clinical-trial/NCT02194738/").then((response) => {
      let newLat = response.data.sites[0].org_coordinates.lat;
      this.setState({
        lat: newLat,
      })
      console.log(newLat);
    })
  //get longitude
    axios.get("https://clinicaltrialsapi.cancer.gov/v1/clinical-trial/NCT02194738/").then((response) => {
      let newLong = response.data.sites[0].org_coordinates.lon;
      this.setState({
        lng: newLong,
      })
      console.log(newLong);
    })

    //get address
    axios.get("https://clinicaltrialsapi.cancer.gov/v1/clinical-trial/NCT02194738/").then((response) => {
      let newAddress = response.data.sites[0].org_address_line_1;
      console.log(newAddress);
    })

    //get city
    axios.get("https://clinicaltrialsapi.cancer.gov/v1/clinical-trial/NCT02194738/").then((response) => {
      let newCity = response.data.sites[0].org_city;
      console.log(newCity);
    })

    //get phone
    axios.get("https://clinicaltrialsapi.cancer.gov/v1/clinical-trial/NCT02194738/").then((response) => {
      let newPhone = response.data.sites[0].contact_phone;
      console.log(newPhone);
    })

  onMapCreated(map) {
    map.setOptions({
      disableDefaultUI: true
    });
  },

  onDragEnd(e) {
    console.log('onDragEnd', e);
  },

  onCloseClick() {
    console.log('onCloseClick');
  },

  onClick(e) {
    console.log('onClick', e);
  },

  render() {
    return (
      <Gmaps
        width={'100vw'}
        height={'100vh'}
        lat={this.state.lat}
        lng={this.state.lng}
        zoom={12}
        loadingMessage={'Be happy'} //Add gif here
        params={{v: '3.exp', key: 'AIzaSyBkCDVgikdzJV_b4grde_7d2l-QyzKZhIs'}}
        onMapCreated={this.onMapCreated}>
        <Marker
          lat={coords.lat}
          lng={coords.lng}
          draggable={true}
          onDragEnd={this.onDragEnd} />
        <InfoWindow
          lat={coords.lat}
          lng={coords.lng}
          content={'Hello, React'}
          onCloseClick={this.onCloseClick} />
        {/* <Circle
          lat={coords.lat}
          lng={coords.lng}
          radius={500}
          onClick={this.onClick} /> */}
      </Gmaps>
    )
  }

});
