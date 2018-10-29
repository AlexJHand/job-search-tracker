import React from 'react';
import API from '../Utilities/API';

export default class NewApplication extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            companyName: null,
            position: null
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
            companyName: this.state.companyName,
            position: this.state.position
        })
            .then(() => console.log("Post successful"))
    }

    render() {
        return (
            <div>
                <form>
                    <input 
                        type="text" 
                        placeholder="Company Name" 
                        onChange={(event) => this.handleChange("companyName", event)}
                    />
                    <input 
                        type="text" 
                        placeholder="Position" 
                        onChange={(event) => this.handleChange("position", event)}
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