import Header from './header'
import React from 'react'

class TrialDetailsView extends React.Component {

    constructor(props) {
        super(props)
        console.log('trial details view', props)

        this.state = {
            trialModel: props.trialModel
        }
    }

    render() {
        return (
            <div className = 'trialDetailsView'>
                <Header />
                <TrialDetails trialModel = {this.state.trialModel}/>
            </div>
        )
    }
}

class TrialDetails extends React.Component {

    constructor(props) {
        super(props)

        console.log('trial details', props)

        this.state = {
            trialModel: props.trialModel
        }
        console.log('state', this.state)
    }

    _getJSXArray(contactArray) {
        let newArray = []

        contactArray.forEach( (contact) => {
            newArray.push(<ContactInfo contactModel = {contact} />
            )
        })
        return newArray
    }

    render() {
        return (
            <div className = 'trialDetails'>
                <p><b>Title: </b>{this.state.trialModel.get("official_title")}</p>
                <p><b>Description: </b>{this.state.trialModel.get("detail_description")}</p>
                {this._getJSXArray(this.state.trialModel.get('sites'))}
            </div>
        )
    }
}

class ContactInfo extends React.Component {

    constructor(props) {
        super(props)
        console.log('contactinfo', props)

        this.state = {
            contactModel: props.contactModel
        }
        console.log('state2', this.state.contactModel)
    }

    render () {
        return (
            <div className = 'contactInfo'>
                <p><b>Contact Name: </b>{this.state.contactModel.contact_name}</p>
                <p><b>Contact Phone: </b>{this.state.contactModel.contact_phone}</p>
                <p><b> Organization Name: </b>{this.state.contactModel.org_name}</p>
                <p><b>Organization Address: </b>{this.state.contactModel.org_address_line_1}</p>
                <p>{this.state.contactModel.org_city}</p>
                <p>{this.state.contactModel.org_state_or_province}</p>
                <p>{this.state.contactModel.org_postal_code}</p>
                <p>{this.state.contactModel.org_phone}</p>
                <hr/>
            </div>
        )
    }
}

export default TrialDetailsView