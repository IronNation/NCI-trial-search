import React,{ Component, List } from 'react';
import axios from 'axios';

export default class ResultsList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      address:''
    }
  }

  ComponentDidMount(){
    getAddress()
  }

    // get address
  getAddress(){
    axios.get("https://clinicaltrialsapi.cancer.gov/v1/clinical-trial/NCT02194738/").then((response) => {
      let newAddress = response.data.sites[0].org_address_line_1;
      console.log(newAddress);
      this.setState({
        address: newAddress
      })
    })
    .catch(function (error) {
      console.log(error);
    })
  }
  //
  // //get city
  // axios.get('https://clinicaltrialsapi.cancer.gov/v1/clinical-trial/NCT02194738/').then((response) => {
  //   let newCity = response.data.sites[0].org_city;
  //   console.log(newCity);
  // })
  //
  // //get phone
  // axios.get('https://clinicaltrialsapi.cancer.gov/v1/clinical-trial/NCT02194738/').then((response) => {
  //   let newPhone = response.data.sites[0].contact_phone;
  //   console.log(newPhone);
  // })

  render() {
    return (
      <div>Hello

      {/* <List
          address={this.state.address}
        /> */}

      </div>
    );
  }
}
