import React from 'react';
import { Redirect } from 'react-router-dom';
import API from '../Utilities/API';

export default class NewApplication extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            companyName: null,
            companySite: null,
            position: null,
            dateApplied: null,
            howApplied: null,
            howHeard: null,
            contactName: null,
            contactTitle: null,
            contactEmail: null,
            contactPhone: null
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.redirectPage(null);
    }

    handleChange(stateProperty, formValue) {
        console.log("Update form state", stateProperty, formValue.target.value);
        this.setState({
            [stateProperty]: formValue.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log("handleSubmit");
        API.createApplication({
            userId: this.props.userId,
            companyName: this.state.companyName,
            companySite: this.state.companySite,
            position: this.state.position,
            dateApplied: this.state.dateApplied,
            howApplied: this.state.howApplied,
            howHeard: this.state.howHeard,
            contactName: this.state.contactName,
            contactTitle: this.state.contactTitle,
            contactEmail: this.state.contactEmail,
            contactPhone: this.state.contactPhone
        })
            .then(response => {
                console.log("Post successful")
                this.props.redirectPage('/');
            })
    }

    render() {
        if (this.props.redirect) {
            return <Redirect to={{ pathname: this.props.redirect }} />

        } else {
            return (
                <div>
                    <form>
                        <input 
                            type="text" 
                            placeholder="Company Name" 
                            onChange={(event) => this.handleChange("companyName", event)}
                        />
                        <input 
                            type="url"
                            placeholder="Company Website"
                            onChange={(event) => this.handleChange("companySite", event)}
                        />
                        <input 
                            type="text" 
                            placeholder="Position" 
                            onChange={(event) => this.handleChange("position", event)}
                        />
                        <input 
                            type="date"
                            placeholder="Date Applied"
                            onChange={(event) => this.handleChange("dateApplied", event)}
                        />
                        <input 
                            type="text" 
                            placeholder="Position" 
                            onChange={(event) => this.handleChange("howApplied", event)}
                        />
                        <input 
                            type="text" 
                            placeholder="Position" 
                            onChange={(event) => this.handleChange("howHeard", event)}
                        />
                        <input 
                            type="text" 
                            placeholder="Position" 
                            onChange={(event) => this.handleChange("contactName", event)}
                        />
                        <input 
                            type="text" 
                            placeholder="Position" 
                            onChange={(event) => this.handleChange("contactTitle", event)}
                        />
                        <input 
                            type="text" 
                            placeholder="Position" 
                            onChange={(event) => this.handleChange("contactEmail", event)}
                        />
                        <input 
                            type="text" 
                            placeholder="Position" 
                            onChange={(event) => this.handleChange("contactPhone", event)}
                        />
                        <button type="submit" 
                            onClick={this.handleSubmit}>
                            Submit
                        </button>
                    </form>
                </div>
            )
        }
    }
}