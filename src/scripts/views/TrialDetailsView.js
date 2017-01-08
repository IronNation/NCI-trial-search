import Header from './header'
import React from 'react'

class TrialDetailsView extends React.Component {

    constructor(props) {
        super(props)
        console.log(props)
    }

    render() {
        return (
            <div className = 'trialDetailsView'>
                <Header />
                <TrialDetails />
            </div>
        )
    }
}

class TrialDetails extends React.Component {

    render() {
        return (
            <div className = 'trialDetails'>
                <p>"official_title"</p>
                <p>"detail_description"</p>
                <ContactInfo />
            </div>
        )
    }
}

class ContactInfo extends React.Component {

    render () {
        return (
            <div className = 'contactInfo'>
                <p>"contact_name"</p>
                <p>"contact_phone"</p>
                <p>"org_name"</p>
                <p>"org_address_line_1"</p>
                <p>"org_city"</p>
                <p>"org_state_or_province"</p>
                <p>"org_postal_code"</p>
                <p>"org_phone"</p>
            </div>
        )
    }
}

export default TrialDetailsView