import React, { Component } from 'react';

export default class ResultsList extends Component {
  //get address
  // axios.get('https://clinicaltrialsapi.cancer.gov/v1/clinical-trial/NCT02194738/').then((response) => {
  //   let newAddress = response.data.sites[0].org_address_line_1;
  //   console.log(newAddress);
  // })
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
      <div>
        MyComponent
      </div>
    );
  }
}
