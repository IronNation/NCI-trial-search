import React, { Component, List } from 'react';
import axios from 'axios';


export default class ResultsList extends Component {

  constructor(props) {
    super();

    this.state = {
      address:'12515 45th Ave N'
    }
  }

  ComponentDidMount(){
    getAddress()
  }
  // // get address
  getAddress(){
    axios.get("https://clinicaltrialsapi.cancer.gov/v1/clinical-trial/NCI-2014-01509").then((response) => {
      let newAddress = response.data.sites[0].org_address_line_1.slice(0);
      this.setState({
        address: newAddress
      })
      console.log(newAddress);
    })
    .catch(function (error) {
      console.log(error);
    })
  }

  render() {
    return (
      <div>Hello

      <List
          address={this.state.address}
        />

      </div>
    );
  }
}